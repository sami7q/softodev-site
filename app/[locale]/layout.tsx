// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { locales, type Locale } from "@/lib/i18n/config";
import { ChatWidgetShell } from "@/components/chat/chat-widget-shell";
import Script from "next/script";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const dir = typedLocale === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      data-locale={typedLocale}
      className="min-h-screen text-softodev-text relative overflow-x-hidden"
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

      {/* floating chatbot (client) */}
      <ChatWidgetShell mode="hardcoded" />

      {/* Cal.com embed for Shahm meeting popup */}
      <Script id="cal-embed" strategy="lazyOnload">
        {`
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                p(cal, ar);
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");

          Cal("init", { origin: "https://cal.com" });
          Cal("ui", {
            styles: { branding: { brandColor: "#1d4ed8" } }
          });
        `}
      </Script>
    </div>
  );
}
