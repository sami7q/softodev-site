// app/[locale]/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";

import { HomeHero } from "@/components/home/hero";
import { HomeBrandStrip } from "@/components/home/brand-strip";
import { HomeServicesSection } from "@/components/home/services-section";
import { HomeImpactSection } from "@/components/home/impact-section";
import { HomePortfolioPreview } from "@/components/home/portfolio-preview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "SoftoDev | شركة برمجة مواقع ومتاجر وأنظمة إدارة"
      : "SoftoDev | Web Development, E-commerce & Management Systems";

  const description =
    locale === "ar"
      ? "SoftoDev متخصصة في تطوير صفحات هبوط، متاجر إلكترونية، وأنظمة إدارة مخصصة لسوق الخليج والعراق مع تركيز على السرعة وتحويل الزوار إلى عملاء."
      : "SoftoDev builds landing pages, e-commerce stores, and custom management systems for the GCC and Iraq market, focused on speed and conversions.";

  const url = getCanonicalUrl(locale, "/");

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="relative">
      {/* خلفية ناعمة مع Glows عامة للصفحة */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-sky-100/80 blur-3xl" />
      </div>

      {/* HERO */}
      <HomeHero locale={locale} />

      {/* شريط البراندات */}
      <HomeBrandStrip locale={locale} />

      {/* الخدمات (6 بطاقات) */}
      <HomeServicesSection locale={locale} />

      {/* قسم تأثير البزنس / Stop losing customers */}
      <HomeImpactSection locale={locale} />



      {/* الأعمال */}
      <HomePortfolioPreview locale={locale} />
    </div>
  );
}
