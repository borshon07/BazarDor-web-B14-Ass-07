"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export default function Toaster() {
  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "var(--base-100)",
          color: "var(--base-content)",
          border: "1px solid var(--base-300)",
          fontSize: "14px",
        },
        success: { iconTheme: { primary: "#05893e", secondary: "#f3fbf4" } },
        error: { iconTheme: { primary: "#d03739", secondary: "#fafcfa" } },
      }}
    />
  );
}