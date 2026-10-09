import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

type Props = {
  title: string;
  dir: "up" | "down";
  products: Product[];
};

export default function PriceMoverSection({ title, dir, products }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span
          className={`text-base leading-6 ${
            dir === "up" ? "text-error" : "text-success"
          }`}
        >
          {dir === "up" ? "▲" : "▼"}
        </span>
        <h2 className="text-xl font-bold leading-7 text-base-content">
          {title}
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}