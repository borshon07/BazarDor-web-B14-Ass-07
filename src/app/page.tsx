import Hero from "@/app/Components/home/home";
import PriceMoverSection from "@/app/Components/product/PriceMoverSection";
import ProductGrid from "@/app/Components/product/ProductGrid";
import { getProducts } from "@/lib/api";
import { getChange,} from "@/lib/format";

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

      <PriceMoverSection
        title="আজ দাম বেড়েছে"
        dir="up"
        products={movers("up")}
      />
      <PriceMoverSection
        title="আজ দাম কমেছে"
        dir="down"
        products={movers("down")}
      />

      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-xl font-bold leading-7 text-base-content">
          সব পণ্য
        </h2>
        <div className="mt-3">
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}
