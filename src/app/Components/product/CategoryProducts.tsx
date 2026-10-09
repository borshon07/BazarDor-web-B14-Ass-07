"use client";

import { useMemo, useState } from "react";
import { toBn } from "@/lib/format";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

type Sort = "default" | "asc" | "desc";

export default function CategoryProducts({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<Sort>("default");

  const sorted = useMemo(() => {
    if (sort === "default") return products;
    return [...products].sort((a, b) =>
      sort === "asc" ? a.today - b.today : b.today - a.today,
    );
  }, [products, sort]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-end gap-2 rounded-2xl border border-base-300 bg-base-100 p-[17px] text-base-content">
        <label htmlFor="sort" className="text-sm leading-5">
          সাজান
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="h-8 rounded-lg border border-base-300 bg-base-100 px-3 text-sm text-base-content outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <option value="default">ডিফল্ট</option>
          <option value="asc">দাম: কম থেকে বেশি</option>
          <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="text-sm leading-5 text-base-content">
        মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}