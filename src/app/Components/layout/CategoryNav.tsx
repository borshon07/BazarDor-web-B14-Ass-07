"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types/product";

export default function CategoryNav({
  categories,
}: {
  categories: Category[];
}) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="পণ্যের ক্যাটাগরি"
      className="mx-auto max-w-[1152px] px-4"
    >
      <ul className="flex items-center gap-1 overflow-x-auto py-2">
        {categories.map((cat) => {
          const href = `/category/${cat.slug}`;
          const active = pathname === href;

          return (
            <li key={cat.id} className="shrink-0">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex h-8 items-center justify-center gap-1.5 rounded-lg border px-[13px] text-xs font-semibold leading-[17px] transition-colors ${
                  active
                    ? "border-primary-stronger bg-primary-strong text-primary-content"
                    : "border-transparent text-base-content hover:bg-base-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.nameBn}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}