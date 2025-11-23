// app/[locale]/about/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "عن SoftoDev | شركة برمجة مواقع ومتاجر وأنظمة"
      : "About SoftoDev | Web, Store & System Development";

  const description =
    locale === "ar"
      ? "SoftoDev شركة برمجيات تركز على بناء مواقع، متاجر، وأنظمة إدارة موجهة لسوق الخليج والعراق مع اهتمام خاص بالأداء وتجربة المستخدم."
      : "SoftoDev is a software agency focused on building websites, stores and management systems for the GCC and Iraq market with strong attention to performance and UX.";

  const url = getCanonicalUrl(locale, "/about");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";

  return (
    <section className="py-10 md:py-14">
      <Container className="space-y-8">
        {/* Header */}
        <div className={`space-y-3 ${align}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            {isArabic ? "عن الشركة" : "About"}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-softodev-text md:text-3xl">
            {isArabic
              ? "SoftoDev – شركة برمجيات تركز على الجودة، السرعة، والواقعية"
              : "SoftoDev – A software agency focused on quality, speed and real-world results."}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-softodev-muted md:text-[15px]">
            {isArabic
              ? "نحن نعمل على بناء حلول عملية لأصحاب الأعمال في الخليج والعراق، من صفحات هبوط تسويقية إلى متاجر إلكترونية وأنظمة إدارة مخصصة."
              : "We build practical solutions for clients in the GCC and Iraq, from marketing landing pages to online stores and custom management systems."}
          </p>
        </div>

        {/* Values + focus */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 text-sm text-softodev-muted">
            <h2 className="text-sm font-semibold text-softodev-text md:text-base">
              {isArabic ? "طريقة التفكير" : "How we think"}
            </h2>
            <p className="mt-2 leading-relaxed">
              {isArabic
                ? "نركز على بناء مشاريع يمكن تطويرها مستقبلاً، لا مجرد موقع مؤقت. نهتم بالهيكلة، الأداء، وتجربة المستخدم."
                : "We focus on building projects that can grow over time, not just temporary websites. Structure, performance, and UX matter a lot to us."}
            </p>
          </div>
          <div className="rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 text-sm text-softodev-muted">
            <h2 className="text-sm font-semibold text-softodev-text md:text-base">
              {isArabic ? "من نخدم؟" : "Who we serve"}
            </h2>
            <p className="mt-2 leading-relaxed">
              {isArabic
                ? "أصحاب المشاريع، البراندات، العيادات، والشركات الصغيرة والمتوسطة في الخليج والعراق."
                : "Founders, brands, clinics, and small to mid-sized businesses across the GCC and Iraq."}
            </p>
          </div>
          <div className="rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 text-sm text-softodev-muted">
            <h2 className="text-sm font-semibold text-softodev-text md:text-base">
              {isArabic ? "ما الذي يميزنا؟" : "What makes us different?"}
            </h2>
            <p className="mt-2 leading-relaxed">
              {isArabic
                ? "فهم حقيقي لاحتياجات السوق العربي، مع خبرة تقنية قوية في بناء أنظمة حقيقية وليست مجرد قوالب."
                : "A real understanding of the Arabic market, plus strong technical experience in building real systems, not just templates."}
            </p>
          </div>
        </div>

        {/* Regions / focus */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
          <div className={`rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 text-sm text-softodev-muted ${align}`}>
            <h2 className="text-sm font-semibold text-softodev-text md:text-base">
              {isArabic ? "الأسواق التي نستهدفها" : "Target markets"}
            </h2>
            <p className="mt-2 leading-relaxed">
              {isArabic
                ? "السعودية، الإمارات، قطر، الكويت، البحرين، عمان، والعراق – مع مراعاة اللغة العربية، طريقة العرض، وسلوك المستخدم."
                : "Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman and Iraq — while respecting Arabic language, presentation styles and user behavior."}
            </p>
            <p className="mt-2 leading-relaxed">
              {isArabic
                ? "نراعي أسلوب الإعلان الشائع في المنطقة (سناب، تيك توك، إنستغرام) ونربط ذلك بتجربة موقع أو متجر واضح ومقنع."
                : "We align with the advertising style common in the region (Snapchat, TikTok, Instagram) and connect it to a clear, persuasive website or store experience."}
            </p>
          </div>
          <div className="rounded-3xl border border-dashed border-softodev-border/80 bg-softodev-surface/95 p-4 text-xs text-softodev-muted">
            {isArabic
              ? "إذا كنت صاحب مشروع أو عيادة وتبحث عن جهة تقنية تفهم احتياجاتك وتبني لك حلاً عملياً وقابلاً للنمو، فـ SoftoDev خيار مناسب لك."
              : "If you are a founder or clinic owner looking for a technical partner who understands your needs and builds practical, scalable solutions, SoftoDev is a good fit."}
          </div>
        </div>
      </Container>
    </section>
  );
}
