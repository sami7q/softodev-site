// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

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
  // لما تجهز الدومين الحقيقي غيّره هنا
  metadataBase: new URL("https://softodev.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
