import MarketPriceRow from "./MarketPriceRow";
import type { MarketPrice } from "@/types/product";

export default function PriceTable({ markets }: { markets: MarketPrice[] }) {
  if (markets.length === 0) {
    return (
      <p className="text-sm text-base-content">
        এই পণ্যের বাজারভিত্তিক দাম এখনো পাওয়া যায়নি।
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-base-300">
      <table className="w-full min-w-[640px] border-collapse text-sm leading-[21px] text-base-content">
        <thead className="bg-base-200">
          <tr className="border-b border-base-300">
            <th className="px-4 py-3 text-left font-semibold">বাজার</th>
            <th className="px-4 py-3 text-left font-semibold">বিভাগ</th>
            <th className="px-4 py-3 text-right font-semibold">সর্বনিম্ন</th>
            <th className="px-4 py-3 text-right font-semibold">সর্বাধিক</th>
            <th className="px-4 py-3 text-right font-semibold">গড়</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((market) => (
            <MarketPriceRow
              key={`${market.market}-${market.division}`}
              market={market}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}