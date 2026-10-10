import Link from "next/link";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getProductBySlug } from "@/lib/api";
import { changeColor, changeSymbol } from "@/lib/change";
import { bnNumber, getChange, toBn, unitBn } from "@/lib/format";
import PriceSummaryStat from "@/app/Components/product/PriceSummaryStat";
import PriceTable from "@/app/Components/product/PriceTable";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin");

  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const markets = product.markets ?? [];
  const { dir, pct } = getChange(product);
  const diff = Math.abs(product.today - product.yesterday);
  const unit = unitBn(product.unit);

  const minPrice = markets.length
    ? Math.min(...markets.map((m) => m.min))
    : product.today;
  const maxPrice = markets.length
    ? Math.max(...markets.map((m) => m.max))
    : product.today;
  const avgPrice = markets.length
    ? Math.round(
        markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) /
          markets.length,
      )
    : product.today;

  return (
    <div className="mx-auto flex max-w-[1152px] flex-col gap-6 px-4 pb-12 pt-6">
      
      <nav aria-label="breadcrumb" className="text-sm text-base-content">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">হোম</Link>
          </li>
          <li aria-hidden>›</li>
          <li>
            <Link href={`/category/${product.category}`} className="hover:underline">
              {product.categoryNameBn}
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="font-medium">{product.nameBn}</li>
        </ol>
      </nav>

      <section className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-[21px] md:flex-row md:items-center">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-4xl leading-10">
          {product.image}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 text-base-content">
          <h1 className="text-3xl font-bold leading-9">{product.nameBn}</h1>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span>প্রতি {unit}</span>
            <span aria-hidden>·</span>
            <Link
              href={`/category/${product.category}`}
              className="rounded-xl bg-base-200 px-3 py-1 text-xs font-medium hover:bg-base-300"
            >
              {product.categoryIcon} {product.categoryNameBn}
            </Link>
          </div>

          <p className="text-sm leading-5">
            {dir === "flat" ? (
              "গতকালের তুলনায় আজ দাম অপরিবর্তিত"
            ) : (
              <>
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-semibold">
                  {dir === "up" ? "বেড়েছে" : "কমেছে"}
                </span>{" "}
                · {toBn(diff)} টাকা
              </>
            )}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center rounded-2xl bg-base-200 px-5 py-4 text-center text-base-content md:min-w-[118px]">
          <span className="text-sm leading-5">আজকের দাম</span>
          <span className="text-3xl font-bold leading-9">
            {bnNumber(product.today)}
          </span>
          <span className="text-sm leading-5">টাকা / {unit}</span>
          <span
            className={`mt-1 flex items-center gap-1 text-sm font-semibold leading-5 ${changeColor(dir)}`}
          >
            <span>{changeSymbol(dir)}</span>
            <span>{toBn(pct.toFixed(1))}%</span>
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-6 rounded-2xl border border-base-300 bg-base-100 p-[21px] text-base-content">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold leading-7">দামের সারসংক্ষেপ</h2>
          <div className="grid gap-3 md:grid-cols-3">
            <PriceSummaryStat
              label="সর্বনিম্ন দাম"
              value={minPrice}
              caption="সবচেয়ে কম দামের বাজার"
              tone="success"
            />
            <PriceSummaryStat
              label="সর্বাধিক দাম"
              value={maxPrice}
              caption="সবচেয়ে বেশি দামের বাজার"
              tone="error"
            />
            <PriceSummaryStat
              label="গড় দাম"
              value={avgPrice}
              caption={`প্রতি ${unit}-এর হিসাবে`}
              tone="primary"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold leading-7">বাজারভিত্তিক আজকের দাম</h2>
          <PriceTable markets={markets} />
        </div>
      </section>
    </div>
  );
}