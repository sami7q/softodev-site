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
    <section className="relative isolate py-12 md:py-16 bg-softodev-bg/60 backdrop-blur-sm overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-400/12 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div className={`space-y-3 ${align}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            {isArabic ? "عن الشركة" : "About"}
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic
              ? "SoftoDev – شركة برمجيات تركز على الجودة، السرعة، والواقعية"
              : "SoftoDev – A software agency focused on quality, speed and real-world results."}
          </h1>

          <p className="max-w-2xl text-base md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic
              ? "نحن نعمل على بناء حلول عملية لأصحاب الأعمال في الخليج والعراق، من صفحات هبوط تسويقية إلى متاجر إلكترونية وأنظمة إدارة مخصصة."
              : "We build practical solutions for clients in the GCC and Iraq, from marketing landing pages to online stores and custom management systems."}
          </p>
        </div>

        {/* Values + focus */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 text-sm text-softodev-muted shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:border-softodev-primary/30">
            <h2 className="text-base font-bold text-softodev-text">
              {isArabic ? "طريقة التفكير" : "How we think"}
            </h2>
            <p className="mt-2 leading-relaxed">
              {isArabic
                ? "نركز على بناء مشاريع يمكن تطويرها مستقبلاً، لا مجرد موقع مؤقت. نهتم بالهيكلة، الأداء، وتجربة المستخدم."
                : "We focus on building projects that can grow over time, not just temporary websites. Structure, performance, and UX matter a lot to us."}
            </p>
          </div>

          <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 text-sm text-softodev-muted shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:border-softodev-primary/30">
            <h2 className="text-base font-bold text-softodev-text">
              {isArabic ? "من نخدم؟" : "Who we serve"}
            </h2>
            <p className="mt-2 leading-relaxed">
              {isArabic
                ? "أصحاب المشاريع، البراندات، العيادات، والشركات الصغيرة والمتوسطة في الخليج والعراق."
                : "Founders, brands, clinics, and small to mid-sized businesses across the GCC and Iraq."}
            </p>
          </div>

          <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 text-sm text-softodev-muted shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:border-softodev-primary/30">
            <h2 className="text-base font-bold text-softodev-text">
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
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
          <div
            className={`rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 text-sm text-softodev-muted shadow-soft ${align}`}
          >
            <h2 className="text-base font-bold text-softodev-text">
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

          <div className="rounded-3xl border border-dashed border-softodev-border bg-softodev-surface/80 p-6 text-sm text-softodev-muted shadow-soft">
            {isArabic
              ? "إذا كنت صاحب مشروع أو عيادة وتبحث عن جهة تقنية تفهم احتياجاتك وتبني لك حلاً عملياً وقابلاً للنمو، فـ SoftoDev خيار مناسب لك."
              : "If you are a founder or clinic owner looking for a technical partner who understands your needs and builds practical, scalable solutions, SoftoDev is a good fit."}
          </div>
        </div>
      </Container>
    </section>
  );
}
