// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  // Next.js 16: params is a Promise
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      data-locale={locale}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f3f4f6",
        color: "#0f172a",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <SiteHeader locale={locale} />
      <main style={{ flex: 1 }}>{children}</main>
      <SiteFooter locale={locale} />

      {/* Floating WhatsApp + Call */}
      <FloatingActions
        locale={locale}
        whatsappLink="https://wa.me/905015954826"
        phone="+905015954826"
      />
    </div>
  );
}
