import type { ChangeDir } from "./format";

// true  = Figma: dam barle laal ▲, komle sobuj ▼
// false = requirement text: dam barle sobuj ▲, komle laal ▼
const UP_IS_RED = true;

export function changeColor(dir: ChangeDir): string {
  if (dir === "flat") return "text-base-content/60";
  const isRed = (dir === "up") === UP_IS_RED;
  return isRed ? "text-error" : "text-success";
}

export function changeSymbol(dir: ChangeDir): string {
  if (dir === "up") return "▲";
  if (dir === "down") return "▼";
  return "—";
}