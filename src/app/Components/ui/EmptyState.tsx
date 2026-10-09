import Link from "next/link";
import { buttonVariants } from "@heroui/react";

type Props = {
  icon?: string;
  title: string;
  description: string;
};

export default function EmptyState({ icon = "🔍", title, description }: Props) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-6 py-12 text-center text-base-content">
      <span className="text-5xl leading-none">{icon}</span>
      <h2 className="text-xl font-bold leading-7">{title}</h2>
      <p className="text-sm leading-5">{description}</p>
      <Link
        href="/"
        className={buttonVariants({
          className:
            "mt-2 h-10 rounded-lg border border-[#047f39] bg-primary px-[17px] text-sm font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)]",
        })}
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}