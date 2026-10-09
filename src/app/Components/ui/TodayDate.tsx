"use client";

import { useSyncExternalStore } from "react";
import { bnDate } from "@/lib/format";

const subscribe = () => () => {};

export default function TodayDate({ className }: { className?: string }) {
  // server e "" dey (new Date() call hoy na), browser e ajker date dey
  const text = useSyncExternalStore(subscribe, () => bnDate(), () => "");

  return <span className={className}>{text || "\u00A0"}</span>;
}