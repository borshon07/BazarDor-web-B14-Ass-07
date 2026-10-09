import Image from "next/image";
import { buttonVariants } from "@heroui/react";
import { bnDate } from "@/lib/format";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-base-300 bg-base-100">
      <div className="flex items-center justify-between gap-6 px-4 py-10">
        <div className="flex max-w-xl flex-col items-start gap-2">
          <span className="rounded-[14px] bg-primary/10 px-3 py-1 text-sm font-medium leading-5 text-primary">
            {bnDate()}
          </span>

          <h1 className="text-3xl font-bold leading-tight text-base-content md:text-4xl md:leading-[45px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-1 text-base leading-6 text-base-content">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন
            এক জায়গায়।
          </p>

          <a
            href="#products"
            className={buttonVariants({
              className:
                "mt-3 h-10 rounded-lg border border-[#047f39] bg-primary px-[17px] text-sm font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)]",
            })}
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <Image
          src="/bazar-hero.svg"
          alt=""
          width={315}
          height={263}
          priority
          className="hidden shrink-0 md:block"
        />
      </div>
    </section>
  );
}