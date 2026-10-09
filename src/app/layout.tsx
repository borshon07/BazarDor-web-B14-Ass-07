import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/layout/Header";
import Footer from "@/app/Components/layout/Footer";
import Ticker from "./Components/layout/Ticker";
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
   <html lang="bn" className={noto.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <Toaster />
        <Header />  
        <Ticker />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}