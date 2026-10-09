import type { Product } from "@/types/product";

const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// 148 -> "১৪৮" (comma chara, pct er jonno)
export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => bnDigits[Number(d)]);
}

// 1850 -> "১,৮৫০" (dam er jonno)
export function bnNumber(value: number): string {
  return new Intl.NumberFormat("bn-BD").format(value);
}

export function bnDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(date);
}

export type ChangeDir = "up" | "down" | "flat";

// dam barse / komse / ager moto, ar koto %
export function getChange(product: Product): { dir: ChangeDir; pct: number } {
  if (product.change) {
    const { dir, pct } = product.change;
    return pct === 0 ? { dir: "flat", pct: 0 } : { dir, pct };
  }

  const diff = product.today - product.yesterday;
  if (diff === 0 || !product.yesterday) return { dir: "flat", pct: 0 };

  const pct =
    Math.round(Math.abs((diff / product.yesterday) * 100) * 10) / 10;
  return { dir: diff > 0 ? "up" : "down", pct };
}

const units: Record<string, string> = {
  kg: "কেজি",
  gram: "গ্রাম",
  g: "গ্রাম",
  litre: "লিটার",
  liter: "লিটার",
  ltr: "লিটার",
  l: "লিটার",
  dozen: "ডজন",
  dzn: "ডজন",
  doz: "ডজন",
  piece: "পিস",
  pcs: "পিস",
  pc: "পিস",
  hali: "হালি",
};

export function unitBn(unit: string): string {
  return units[unit.toLowerCase()] ?? unit;
}

export function averagePrice(min: number, max: number): number {
  return Math.round((min + max) / 2);
}