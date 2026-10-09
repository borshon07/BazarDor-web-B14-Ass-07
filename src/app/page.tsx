import Hero from "@/app/Components/home/home";
import PriceMoverSection from "@/app/Components/product/PriceMoverSection";
import ProductCard from "@/app/Components/product/ProductCard";
import { getProducts } from "@/lib/api";
import { getChange, toBn } from "@/lib/format";

export default async function Home() {
  const products = await getProducts();

  const movers = (dir: "up" | "down") =>
    products
      .filter((p) => getChange(p).dir === dir)
      .sort((a, b) => getChange(b).pct - getChange(a).pct)
      .slice(0, 6);

  return (
    <div className="mx-auto flex max-w-[1152px] flex-col gap-10 px-4 pb-12 pt-6">
      <Hero />

      <PriceMoverSection title="আজ দাম বেড়েছে" dir="up" products={movers("up")} />
      <PriceMoverSection title="আজ দাম কমেছে" dir="down" products={movers("down")} />

      <section id="products" className="scroll-mt-6">
        <h2 className="text-xl font-bold leading-7 text-base-content">
          সব পণ্য
        </h2>

        <div className="mt-3 flex flex-col gap-4">
          <p className="text-sm leading-5 text-base-content">
            মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}