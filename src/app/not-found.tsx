import Link from "next/link";
import { buttonVariants } from "@heroui/react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center text-base-content sm:py-24">
      <div className="relative">
        <span className="text-[96px] font-extrabold leading-none tracking-tight text-primary/15 sm:text-[140px]">
          ৪০৪
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl"
          aria-hidden
        >
          🧺
        </span>
      </div>

      <h1 className="text-2xl font-bold leading-8">
        এই পাতাটি বাজারে নেই
      </h1>
      <p className="max-w-md text-sm leading-5">
        আপনি যে পাতাটি খুঁজছেন সেটি নেই বা সরিয়ে ফেলা হয়েছে। চলুন, আজকের
        বাজারদরে ফিরে যাই।
      </p>

      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <Link
          href="/"
          className={buttonVariants({
            className:
              "h-9 rounded-lg border border-[#047f39] bg-primary px-4 text-xs font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)] sm:h-10 sm:px-[17px] sm:text-sm",
          })}
        >
          হোম পেজে ফিরে যান
        </Link>

        <Link
          href="/#সব-পণ্য"
          className={buttonVariants({
            variant: "outline",
            className:
              "h-9 rounded-lg border-base-300 px-4 text-xs font-semibold text-base-content sm:h-10 sm:px-[17px] sm:text-sm",
          })}
        >
          সব পণ্য দেখুন
        </Link>
      </div>
    </section>
  );
}