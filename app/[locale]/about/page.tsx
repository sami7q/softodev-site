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
    <section className="relative isolate py-12 md:py-16 bg-softodev-bg/70 overflow-hidden">
      {/* خلفية بنفس نمط الخدمات / الأسعار / الأعمال */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-softodev-primarySoft/40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div
          className={`max-w-3xl ${align} space-y-3`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            <span className="inline-block h-[1px] w-6 bg-softodev-primary/70" />
            <span>{isArabic ? "عن الشركة" : "ABOUT"}</span>
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic ? (
              <>
                <span>SoftoDev – شركة برمجيات تركز على </span>
                <span className="text-softodev-primary">الجودة والسرعة</span>
                <span> والواقعية في النتائج.</span>
              </>
            ) : (
              <>
                <span>SoftoDev – A software agency focused on </span>
                <span className="text-softodev-primary">
                  quality, speed,
                </span>{" "}
                <span>and real-world results.</span>
              </>
            )}
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic ? (
              <>
                نعمل على بناء حلول{" "}
                <span className="text-softodev-primary font-medium">
                  عملية وقابلة للنمو
                </span>{" "}
                لأصحاب الأعمال في الخليج والعراق، من صفحات هبوط تسويقية إلى
                متاجر إلكترونية وأنظمة إدارة مخصصة.
              </>
            ) : (
              <>
                We build{" "}
                <span className="text-softodev-primary font-medium">
                  practical, scalable solutions
                </span>{" "}
                for clients in the GCC and Iraq – from marketing landing pages
                to online stores and custom management systems.
              </>
            )}
          </p>
        </div>

        {/* Values + focus */}
        <div
          className="grid gap-5 md:gap-6 md:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <article
            className={`
              group relative h-full
              overflow-hidden rounded-[26px]
              border border-softodev-border/70
              bg-softodev-surface/95
              p-5 md:p-6
              shadow-soft
              transition-all duration-300
              hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
              hover:border-softodev-primary/45
              ${align}
            `}
          >
            {/* شريط علوي + glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-softodev-primary via-softodev-primaryDark to-softodev-primary/80" />
            <div
              className="
                pointer-events-none absolute inset-0 -z-10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/80 to-softodev-bg/90
              "
            />

            <h2 className="text-base md:text-[15px] font-extrabold text-softodev-text">
              {isArabic ? "طريقة التفكير" : "How we think"}
            </h2>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
              {isArabic
                ? "نركز على بناء مشاريع يمكن تطويرها مستقبلاً، لا مجرد موقع مؤقت. نهتم بالهيكلة، الأداء، وتجربة المستخدم منذ البداية."
                : "We focus on projects that can evolve over time, not one-off websites. We care about structure, performance and UX from day one."}
            </p>
          </article>

          <article
            className={`
              group relative h-full
              overflow-hidden rounded-[26px]
              border border-softodev-border/70
              bg-softodev-surface/95
              p-5 md:p-6
              shadow-soft
              transition-all duration-300
              hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
              hover:border-softodev-primary/45
              ${align}
            `}
          >
            {/* شريط علوي + glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-softodev-primary via-softodev-primaryDark to-softodev-primary/80" />
            <div
              className="
                pointer-events-none absolute inset-0 -z-10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/80 to-softodev-bg/90
              "
            />

            <h2 className="text-base md:text-[15px] font-extrabold text-softodev-text">
              {isArabic ? "من نخدم؟" : "Who we serve"}
            </h2>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
              {isArabic
                ? "أصحاب المشاريع، البراندات، العيادات، والمتاجر والشركات الصغيرة والمتوسطة في الخليج والعراق."
                : "Founders, brands, clinics, stores and small-to-mid sized businesses across the GCC and Iraq."}
            </p>
          </article>

          <article
            className={`
              group relative h-full
              overflow-hidden rounded-[26px]
              border border-softodev-border/70
              bg-softodev-surface/95
              p-5 md:p-6
              shadow-soft
              transition-all duration-300
              hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
              hover:border-softodev-primary/45
              ${align}
            `}
          >
            {/* شريط علوي + glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-softodev-primary via-softodev-primaryDark to-softodev-primary/80" />
            <div
              className="
                pointer-events-none absolute inset-0 -z-10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/80 to-softodev-bg/90
              "
            />

            <h2 className="text-base md:text-[15px] font-extrabold text-softodev-text">
              {isArabic ? "ما الذي يميزنا؟" : "What makes us different?"}
            </h2>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
              {isArabic
                ? "فهم حقيقي لاحتياجات السوق العربي وسلوك المستخدم، مع خبرة تقنية في بناء أنظمة حقيقية وليست مجرد قوالب جاهزة."
                : "Real understanding of the Arabic market and user behavior, plus strong technical experience in building real systems, not just generic templates."}
            </p>
          </article>
        </div>

        {/* Regions / focus */}
        <div
          className="grid gap-5 md:gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <article
            className={`
              group relative h-full
              overflow-hidden rounded-[26px]
              border border-softodev-border/70
              bg-softodev-surface/95
              p-5 md:p-6
              shadow-soft
              transition-all duration-300
              hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
              hover:border-softodev-primary/45
              ${align}
            `}
          >
            {/* شريط علوي + glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-softodev-primary via-softodev-primaryDark to-softodev-primary/80" />
            <div
              className="
                pointer-events-none absolute inset-0 -z-10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/80 to-softodev-bg/90
              "
            />

            <h2 className="text-base md:text-[15px] font-extrabold text-softodev-text">
              {isArabic ? "الأسواق التي نستهدفها" : "Target markets"}
            </h2>

            <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
              {isArabic
                ? "السعودية، الإمارات، قطر، الكويت، البحرين، عمان، والعراق – مع مراعاة اللغة العربية، طريقة العرض، وسلوك المستخدم في كل سوق."
                : "Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman and Iraq — with attention to Arabic language, presentation style and user behavior in each market."}
            </p>

            <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
              {isArabic
                ? "نراعي أسلوب الإعلان الشائع في المنطقة (سناب، تيك توك، إنستغرام) ونربط ذلك بتجربة موقع أو متجر واضح ومقنع."
                : "We align with common ad channels in the region (Snapchat, TikTok, Instagram) and connect them to a clear, persuasive website or store experience."}
            </p>
          </article>

          <div
            className={`
              rounded-[26px] border border-dashed border-softodev-border
              bg-softodev-surface/80
              p-5 md:p-6 text-xs md:text-sm text-softodev-muted shadow-soft
              ${align}
            `}
          >
            {isArabic ? (
              <>
                إذا كنت صاحب{" "}
                <span className="text-softodev-primary font-medium">
                  مشروع، عيادة، أو براند
                </span>{" "}
                وتبحث عن جهة تقنية تفهم احتياجاتك وتبني لك حلاً عملياً وقابلاً
                للنمو، فـ <span className="font-semibold">SoftoDev</span> خيار
                مناسب لك على المدى الطويل.
              </>
            ) : (
              <>
                If you’re a{" "}
                <span className="text-softodev-primary font-medium">
                  founder, clinic owner or brand
                </span>{" "}
                looking for a technical partner who understands your market and
                builds practical, scalable solutions,{" "}
                <span className="font-semibold">SoftoDev</span> is a strong
                long-term fit.
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
