import Link from "next/link";
import { getCategories } from "@/lib/api";
import type { Category } from "@/types/product";
import TodayDate from "@/app/Components/ui/TodayDate";
import CategoryNav from "./CategoryNav";
import UserMenu from "./UserMenu";

export default async function Header() {
  let categories: Category[] = [];
  try {
    categories = await getCategories();
  } catch {
    // API fail korle o header jeno bhenge na pore
  }

  return (
    <header className="border-b border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-[1152px] items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-[18px] text-primary-content">
            🛒
          </span>
          <span className="flex flex-col">
            <span className="text-[20px] font-bold leading-7 tracking-[-0.5px] text-base-content">
              বাজার দর
            </span>
            <TodayDate className="text-xs leading-4 text-base-content" />
          </span>
        </Link>

        <UserMenu />
      </div>

      <div className="border-t border-base-200">
        <CategoryNav categories={categories} />
      </div>
    </header>
  );
}