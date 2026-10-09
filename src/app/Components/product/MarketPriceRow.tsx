import { averagePrice, bnNumber } from "@/lib/format";
import type { MarketPrice } from "@/types/product";

export default function MarketPriceRow({ market }: { market: MarketPrice }) {
  return (
    <tr className="border-b border-base-300 last:border-b-0">
      <td className="px-4 py-3 font-medium">{market.market}</td>
      <td className="px-4 py-3">{market.division}</td>
      <td className="px-4 py-3 text-right">{bnNumber(market.min)} টাকা</td>
      <td className="px-4 py-3 text-right">{bnNumber(market.max)} টাকা</td>
      <td className="px-4 py-3 text-right font-semibold">
        {bnNumber(averagePrice(market.min, market.max))} টাকা
      </td>
    </tr>
  );
}