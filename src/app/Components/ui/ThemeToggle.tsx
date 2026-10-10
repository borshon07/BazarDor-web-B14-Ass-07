"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // server e false, browser e true (hydration mismatch na hoyar jonno)
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="size-9 sm:size-10" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "লাইট মোডে যান" : "ডার্ক মোডে যান"}
      title={isDark ? "লাইট মোড" : "ডার্ক মোড"}
      className="flex size-9 items-center justify-center rounded-lg border border-base-300 text-base transition-colors hover:bg-base-200 sm:size-10"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}