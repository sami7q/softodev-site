// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import FloatingActions from "@/components/layout/floating-actions";
import { ChatWidgetShell } from "@/components/chat/chat-widget-shell";

import { locales, type Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ✅ SEO + OG Image (الصورة الخارجية)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const typedLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "ar";

  const isArabic = typedLocale === "ar";

  // ✅ ضع دومينك هنا أو عبر .env.local
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://softodev.net";

  const title = isArabic
    ? "SoftoDev | شركة برمجة مواقع ومتاجر وأنظمة إدارة"
    : "SoftoDev | Websites, Stores & Management Systems";

  const description = isArabic
    ? "نطوّر صفحات هبوط، مواقع شركات، متاجر إلكترونية، وأنظمة إدارة باحترافية وتركيز على السرعة وتحويل الزوار إلى عملاء."
    : "We build landing pages, business websites, e-commerce stores, and management systems with speed and strong UX.";

  // ✅ صورة OG حسب اللغة (لازم تكون موجودة داخل /public/og/)
  const ogPath = isArabic ? "/og/og-ar.png" : "/og/og-en.png";
  const ogUrl = new URL(ogPath, siteUrl).toString();

  const canonical = getCanonicalUrl(typedLocale, "/");

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "SoftoDev",
      locale: isArabic ? "ar_IQ" : "en_US",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: "SoftoDev",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
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

      <ChatWidgetShell mode="hardcoded" />

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
