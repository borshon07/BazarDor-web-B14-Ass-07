import type { Product } from "@/types/product";

const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// 148 -> "১৪৮"
export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => bnDigits[Number(d)]);
}

// ajker date, Bangla te
export function bnDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(date);
}

// dam barse naki komse, koto %
export function getChange(product: Product): {
  dir: "up" | "down";
  pct: number;
} {
  if (product.change) return product.change;

  const diff = product.today - product.yesterday;
  const pct = product.yesterday
    ? Math.round(Math.abs((diff / product.yesterday) * 100) * 10) / 10
    : 0;

  return { dir: diff >= 0 ? "up" : "down", pct };
}

const units: Record<string, string> = {
  kg: "কেজি",
  dozen: "ডজন",
  piece: "পিস",
  litre: "লিটার",
  liter: "লিটার",
  gram: "গ্রাম",
};

export function unitBn(unit: string): string {
  return units[unit.toLowerCase()] ?? unit;
}

export function averagePrice(min: number, max: number): number {
  return Math.round((min + max) / 2);
}