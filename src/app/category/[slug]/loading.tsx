import ProductCardSkeleton from "@/app/Components/product/ProductCardSkeleton";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="লোড হচ্ছে…"
      className="mx-auto flex max-w-[1152px] flex-col gap-6 px-4 pb-12 pt-6"
    >
      <div className="h-[94px] animate-pulse rounded-2xl border border-base-300 bg-base-200" />
      <div className="h-[66px] animate-pulse rounded-2xl border border-base-300 bg-base-200" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}