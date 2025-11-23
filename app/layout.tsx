// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
