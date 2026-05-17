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
  metadataBase: new URL("https://mirialeholidayhouse.it"),
  title: "MiriAle Holiday House",
  description:
    "Casa vacanze vicino all'aeroporto di Fiumicino, pensata per soggiorni comodi, contatto diretto e massima semplicità.",
  alternates: {
    canonical: "https://mirialeholidayhouse.it",
  },
  openGraph: {
    title: "MiriAle Holiday House",
    description:
      "Casa vacanze vicino all'aeroporto di Fiumicino, pensata per soggiorni comodi, contatto diretto e massima semplicità.",
    url: "https://mirialeholidayhouse.it",
    siteName: "MiriAle Holiday House",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MiriAle Holiday House",
    description:
      "Casa vacanze vicino all'aeroporto di Fiumicino, pensata per soggiorni comodi, contatto diretto e massima semplicità.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
