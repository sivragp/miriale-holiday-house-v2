import type { Metadata } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import { LangProvider } from "@/components/site/LangProvider";
import JsonLd from "@/components/site/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  graph,
  organizationNode,
  webSiteNode,
} from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MiriAle Holiday House",
    template: "%s — MiriAle Holiday House",
  },
  description:
    "Casa vacanze vicino all'aeroporto di Fiumicino, pensata per soggiorni comodi, contatto diretto e massima semplicità.",
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Casa vacanze vicino all'aeroporto di Fiumicino, pensata per soggiorni comodi, contatto diretto e massima semplicità.",
    url: "/",
    siteName: SITE_NAME,
    locale: "it_IT",
    alternateLocale: "en_GB",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Casa vacanze vicino all'aeroporto di Fiumicino, pensata per soggiorni comodi, contatto diretto e massima semplicità.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      <body className="min-h-full flex flex-col overflow-x-clip bg-ivory text-deep-brown font-sans">
        <JsonLd data={graph(organizationNode(), webSiteNode())} />
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
