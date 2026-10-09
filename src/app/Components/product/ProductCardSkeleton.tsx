export default function ProductCardSkeleton() {
  return (
    <div
      aria-hidden
      className="flex animate-pulse flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 p-4"
    >
      <div className="flex items-start gap-3">
        <div className="size-12 rounded-xl bg-base-200" />
        <div className="flex flex-1 flex-col gap-2 pt-1">
          <div className="h-4 w-2/3 rounded bg-base-200" />
          <div className="h-3 w-1/3 rounded bg-base-200" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <div className="h-3 w-16 rounded bg-base-200" />
          <div className="h-5 w-24 rounded bg-base-200" />
        </div>
        <div className="h-6 w-14 rounded-xl bg-base-200" />
      </div>
    </div>
  );
}