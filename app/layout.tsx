// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { siteUrl } from "@/lib/seo";
import Script from "next/script";

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SoftoDev | Software & Web Development Agency",
    template: "%s | SoftoDev",
  },
  description:
    "SoftoDev builds fast, modern websites, e-commerce stores, and management systems tailored for the GCC and Iraq market.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SoftoDev",
    title: "SoftoDev | Software & Web Development Agency",
    description:
      "SoftoDev builds fast, modern websites, e-commerce stores, and management systems tailored for the GCC and Iraq market.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftoDev | Software & Web Development Agency",
    description:
      "SoftoDev builds fast, modern websites, e-commerce stores, and management systems tailored for the GCC and Iraq market.",
  },
  // 👇 مهم عشان اللوجو يظهر كـ favicon في المتصفح وبالنهاية جوجل
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // (اختياري) تعريف اسم التطبيق
  applicationName: "SoftoDev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body
        className={`${ibmPlex.className} text-softodev-text antialiased`}
      >
        {/* 👇 سكيمـا للـ Organization عشان جوجل يفهم اللوجو كـ براند (اختياري بس لطيف) */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SoftoDev",
              url: "https://softodev.net",
              logo: "https://softodev.net/apple-touch-icon.png",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
