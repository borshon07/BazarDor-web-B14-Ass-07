import { getProducts } from "@/lib/api";
import type { Product } from "@/types/product";
import { changeColor, changeSymbol } from "@/lib/change";
import { bnNumber, getChange, toBn, unitBn } from "@/lib/format";

function TickerItem({ product }: { product: Product }) {
  const { dir, pct } = getChange(product);

  return (
    <li className="flex shrink-0 items-center gap-1.5 border-r border-base-200 py-2 pl-4 pr-[17px]">
      <span>{product.image}</span>
      <span className="font-medium">{product.nameBn}</span>
      <span>
        {bnNumber(product.today)} টাকা/{unitBn(product.unit)}
      </span>
      <span className={`font-semibold ${changeColor(dir)}`}>
        {changeSymbol(dir)} {toBn(pct.toFixed(1))}%
      </span>
    </li>
  );
}

export default async function Ticker() {
  let products: Product[] = [];
  try {
    products = await getProducts();
  } catch {
    // API fail korle ticker lukiye thakbe, page bhangbe na
  }

  if (products.length === 0) return null;

  return (
    <div
      role="marquee"
      aria-label="আজকের পণ্যের দাম"
      className="overflow-hidden border-b border-base-300 bg-base-100"
    >
      <div className="ticker-track flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center whitespace-nowrap text-sm leading-5 text-base-content"
          >
            {products.map((product) => (
              <TickerItem key={product.id} product={product} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}