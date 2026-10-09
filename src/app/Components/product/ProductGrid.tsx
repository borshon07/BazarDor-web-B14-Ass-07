"use client";

import { useMemo, useState } from "react";
import SortSelect from "@/app/Components/ui/SortSelect";
import { toBn } from "@/lib/format";
import { sortProducts, type SortKey } from "@/lib/sort";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortKey>("default");
  const sorted = useMemo(() => sortProducts(products, sort), [products, sort]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-end rounded-2xl border border-base-300 bg-base-100 p-[17px]">
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <p className="text-sm leading-5 text-base-content">
        মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}