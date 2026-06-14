import type { Metadata } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import { LangProvider } from "@/components/site/LangProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirialeholidayhouse.it"),
  title: {
    default: "MiriAle Holiday House",
    template: "%s — MiriAle Holiday House",
  },
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
      className={`${inter.variable} ${poppins.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-deep-brown font-sans">
        <LangProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <WhatsAppFab />
        </LangProvider>
      </body>
    </html>
  );
}
