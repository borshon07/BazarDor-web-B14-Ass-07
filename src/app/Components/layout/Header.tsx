import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/api";
import type { Category } from "@/types/product";
import TodayDate from "@/app/Components/ui/TodayDate";
import CategoryNav from "./CategoryNav";
import UserMenu from "./UserMenu";

// CategoryNav load howar age ei skeleton dekhabe
function CategoryNavSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4" aria-hidden>
      <div className="flex gap-1 overflow-hidden py-2">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="h-8 w-[72px] shrink-0 animate-pulse rounded-lg bg-base-200"
          />
        ))}
      </div>
    </div>
  );
}

export default async function Header() {
  let categories: Category[] = [];
  try {
    categories = await getCategories();
  } catch {
  }

  return (
    <header className="border-b border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/assite/logo-icon.png"
            alt="বাজার দর লোগো"
            width={40}
            height={40}
            priority
            className="size-9 shrink-0 rounded-xl object-contain sm:size-10"
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-lg font-bold leading-7 tracking-[-0.5px] text-base-content sm:text-[20px]">
              বাজার দর
            </span>
            <TodayDate className="block truncate text-xs leading-4 text-base-content" />
          </span>
        </Link>

        <div className="shrink-0">
          <UserMenu />
        </div>
      </div>

      <div className="border-t border-base-200">
        <Suspense fallback={<CategoryNavSkeleton />}>
          <CategoryNav categories={categories} />
        </Suspense>
      </div>
    </header>
  );
}
