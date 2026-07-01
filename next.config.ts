import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // Host esterni ancora referenziati (foto borghi e avatar recensioni placeholder).
    // Da rimuovere quando saranno sostituiti con asset locali.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
  // Header di sicurezza applicati a tutte le route. HSTS è già gestito da Vercel
  // (non duplicato qui). SAMEORIGIN non blocca l'iframe della mappa (Miriale è il
  // parent che incorpora Google, non il contrario).
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
