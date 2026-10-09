import Image from "next/image";
import Assite from "@/app/Assite/bazar-hero.png";
import { buttonVariants } from "@heroui/react";
import TodayDate from "@/app/Components/ui/TodayDate";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-base-300 bg-base-100">
      <div className="flex flex-col items-center gap-8 px-4 py-8 md:flex-row md:justify-between md:py-10">
        <div className="flex max-w-xl flex-col items-start gap-2">
          <TodayDate className="rounded-[14px] bg-primary/10 px-3 py-1 text-sm font-medium leading-5 text-primary" />

          <h1 className="text-3xl font-bold leading-tight text-base-content md:text-4xl md:leading-[45px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-1 text-base leading-6 text-base-content">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#সব-পণ্য"
            className={buttonVariants({
              className:
                "mt-3 h-9 rounded-lg border border-[#047f39] bg-primary px-4 text-xs font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)] sm:h-10 sm:px-[17px] sm:text-sm",
            })}
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <Image
          src={Assite}
          alt="আজকের বাজারের পণ্য"
          width={315}
          height={263}
          priority
          className="h-auto w-56 shrink-0 sm:w-64 md:w-[315px]"
        />
      </div>
    </section>
  );
}
