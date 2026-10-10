import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import AuthNotice from "@/app/Components/auth/AuthNotice";
import Footer from "@/app/Components/layout/Footer";
import Header from "@/app/Components/layout/Header";
import Ticker from "@/app/Components/layout/Ticker";
import ThemeProvider from "@/app/Components/ui/ThemeProvider";
import Toaster from "@/app/Components/ui/Toaster";

const noto = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "আজকের বাজারের দাম এক নজরে",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={noto.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <Toaster />
          <Suspense fallback={null}>
            <AuthNotice />
          </Suspense>

          <Header />
          <Ticker />

          <main className="flex-1">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}