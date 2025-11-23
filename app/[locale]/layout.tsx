// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  // 🔥 في Next.js 16 params صار Promise
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params; // ✅ نفك الـ Promise

  if (!locales.includes(locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      data-locale={locale}
      className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased"
    >
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
