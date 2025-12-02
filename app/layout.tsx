// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Readex_Pro } from "next/font/google";
import { siteUrl } from "@/lib/seo";
import Script from "next/script";

const readex = Readex_Pro({
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  applicationName: "SoftoDev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body className={`${readex.className} text-softodev-text antialiased`}>
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
