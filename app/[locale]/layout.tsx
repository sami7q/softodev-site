// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { locales, type Locale } from "@/lib/i18n/config";
import { ChatWidgetShell } from "@/components/chat/chat-widget-shell";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  // 👇 هنا نخليها string عشان ترضي Next.js types
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // نحولها لـ Locale مع فحص
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  const typedLocale = locale as Locale;

  const dir = typedLocale === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      data-locale={typedLocale}
      className="min-h-screen bg-softodev-bg text-softodev-text"
    >
      <div className="flex min-h-screen flex-col">
        <SiteHeader locale={typedLocale} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={typedLocale} />
        <FloatingActions
          locale={typedLocale}
          whatsappNumber="+905015954826"
          phoneNumber="+905015954826"
        />
      </div>

      {/* ✅ Chatbot client-only لكل لغة */}
      <ChatWidgetShell mode="hardcoded" />
    </div>
  );
}
