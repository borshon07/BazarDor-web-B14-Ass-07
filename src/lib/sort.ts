import type { Product } from "@/types/product";

export type SortKey = "default" | "asc" | "desc";

export const sortOptions: { id: SortKey; label: string }[] = [
  { id: "default", label: "ডিফল্ট" },
  { id: "asc", label: "দাম: কম থেকে বেশি" },
  { id: "desc", label: "দাম: বেশি থেকে কম" },
];

// "১,৮৫০" ba 1850 duto-i number e convert kore (string compare kore na)
function toNumber(value: number | string): number {
  const digits = "০১২৩৪৫৬৭৮৯";
  const text = String(value)
    .replace(/[০-৯]/g, (d) => String(digits.indexOf(d)))
    .replace(/,/g, "");
  return Number(text);
}

export function sortProducts(products: Product[], sort: SortKey): Product[] {
  if (sort === "default") return products;

  return [...products].sort((a, b) =>
    sort === "asc"
      ? toNumber(a.today) - toNumber(b.today)
      : toNumber(b.today) - toNumber(a.today),
  );
}