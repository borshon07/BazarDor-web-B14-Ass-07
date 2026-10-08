const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => bnDigits[Number(d)]);
}

export function changeAmount(today: number, yesterday: number): number {
  return Math.abs(today - yesterday);
}

export function averagePrice(min: number, max: number): number {
  return Math.round((min + max) / 2);
}