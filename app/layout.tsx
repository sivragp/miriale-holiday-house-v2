import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Antica Loggia · Casa Vacanze a Trevi, Umbria",
  description:
    "Antica Loggia, ampio appartamento in caseggiato del XVII secolo nel borgo medievale di Trevi (PG). Vista panoramica sulla Valle Umbra dalla Loggia con sette finestroni, fino a 8 ospiti, 3 camere da letto, 2 bagni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-deep-brown font-sans">
        {children}
      </body>
    </html>
  );
}
