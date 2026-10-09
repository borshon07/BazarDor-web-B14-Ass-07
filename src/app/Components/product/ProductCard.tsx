import Link from "next/link";
import { Card } from "@heroui/react";
import { getChange, toBn, unitBn } from "@/lib/format";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const { dir, pct } = getChange(product);
  const isUp = dir === "up";

  return (
    <Link href={`/product/${product.id}`} className="block rounded-2xl">
      <Card className="gap-0 rounded-2xl border border-base-300 bg-base-100 p-0 shadow-none transition-colors hover:bg-base-200/50">
        <Card.Content className="flex flex-col gap-3 p-4">
          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl leading-8">
              {product.image}
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-base font-semibold leading-6 text-base-content">
                {product.nameBn}
              </span>
              <span className="text-xs leading-4 text-base-content">
                প্রতি {unitBn(product.unit)}
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col text-base-content">
              <span className="text-xs leading-4">আজকের দাম</span>
              <span className="leading-7">
                <span className="text-xl font-bold">
                  {toBn(product.today)}{" "}
                </span>
                <span className="text-sm font-medium">টাকা</span>
              </span>
            </div>

            <span
              className={`flex items-center gap-1 rounded-xl bg-base-200 px-2 py-1 text-xs font-semibold leading-4 ${
                isUp ? "text-error" : "text-success"
              }`}
            >
              <span>{isUp ? "▲" : "▼"}</span>
              <span>{toBn(pct.toFixed(1))}%</span>
            </span>
          </div>
        </Card.Content>
      </Card>
    </Link>
  );
}