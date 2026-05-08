import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Antica Loggia · Casa Vacanze di Charme a Trevi, Umbria",
  description:
    "Antica Loggia, casa vacanze di lusso nel cuore di Trevi, Umbria. Vista panoramica sulla valle, atmosfera autentica e comfort moderni a pochi passi dalle colline dell'Umbria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-deep-brown font-sans">
        {children}
      </body>
    </html>
  );
}
