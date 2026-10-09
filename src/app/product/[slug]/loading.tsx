export default function Loading() {
  return (
    <div
      role="status"
      aria-label="লোড হচ্ছে…"
      className="mx-auto flex max-w-[1152px] flex-col gap-6 px-4 pb-12 pt-6"
    >
      <div className="h-5 w-48 animate-pulse rounded bg-base-200" />
      <div className="h-[174px] animate-pulse rounded-2xl border border-base-300 bg-base-200" />
      <div className="h-[560px] animate-pulse rounded-2xl border border-base-300 bg-base-200" />
    </div>
  );
}