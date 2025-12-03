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

const baseTitle = "SoftoDev | IT Solutions, Software & Web Development";
const baseDescription =
  "SoftoDev is an IT solutions studio that builds fast, modern websites, e-commerce stores, management systems, and AI-powered tools for businesses. SoftoDev شركة حلول برمجية متخصصة في برمجة المواقع والمتاجر الإلكترونية وأنظمة الإدارة المخصصة لمساعدة الشركات على النمو والتحول الرقمي.";

export const metadata: Metadata = {
  title: {
    default: baseTitle,
    template: "%s | SoftoDev",
  },
  description: baseDescription,
  metadataBase: new URL(siteUrl),
  applicationName: "SoftoDev",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SoftoDev",
    title: baseTitle,
    description: baseDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: baseDescription,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
