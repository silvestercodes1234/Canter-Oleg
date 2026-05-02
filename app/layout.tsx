import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avocat Canțer Oleg | EuroLex – Chișinău",
  description:
    "Avocat cu 16+ ani experiență în Drept Penal & Civil la Chișinău. Consultații în română, rusă, spaniolă și engleză. Rating 5.0 ★ pe Google. Sună: +373 600 21 878.",
  keywords: ["avocat chisinau", "avocat penal moldova", "avocat civil chisinau", "EuroLex", "Canțer Oleg"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
