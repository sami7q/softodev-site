// app/[locale]/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { HomePortfolioPreview } from "@/components/home/portfolio-preview";
import { HomePricingTeaser } from "@/components/home/pricing-teaser";

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
  const isArabic = locale === "ar";

  const align = isArabic ? "text-right" : "text-left";
  const justify = isArabic ? "justify-end" : "justify-start";

  return (
    <div className="relative">
      {/* خلفية ناعمة مع Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-sky-100/80 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="pt-10 pb-12 md:pt-12 md:pb-16">
        <Container className="grid items-center gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
          {/* النص */}
          <div className={`space-y-5 ${align}`}>
            {/* شريحة أعلى */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-softodev-border/70 bg-softodev-surface/80 px-3 py-1 text-[11px] text-softodev-muted shadow-sm ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>
                {isArabic
                  ? "جاهزون لبناء موقعك أو متجرك خلال أيام"
                  : "Launch your website or store in days, not months"}
              </span>
            </div>

            <h1 className="text-3xl font-semibold leading-snug tracking-tight text-softodev-text md:text-4xl">
              {isArabic
                ? "نطوّر مواقع ومتاجر وأنظمة إدارة مصممة لسوق الخليج والعراق"
                : "We craft websites, stores & management systems for the GCC & Iraq market."}
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-softodev-muted md:text-base">
              {isArabic
                ? "من صفحة هبوط بسيطة إلى متجر إلكتروني كامل أو نظام إدارة للعيادات والشركات – SoftoDev تبني حلولاً سريعة، منظمة، وسهلة التطوير مستقبلاً."
                : "From simple landing pages to full e-commerce stores and management systems for clinics and companies — SoftoDev builds fast, clean, and scalable solutions tailored to your market."}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap items-center gap-3 ${justify}`}>
              <a
                href="https://wa.me/905015954826"
                className="inline-flex items-center rounded-full bg-softodev-primary px-5 py-2 text-xs font-semibold text-white shadow-soft hover:bg-blue-700 md:text-sm"
              >
                {isArabic ? "ابدأ عبر الواتساب" : "Start on WhatsApp"}
              </a>
              <a
                href={isArabic ? "/ar/pricing" : "/en/pricing"}
                className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-5 py-2 text-xs font-semibold text-softodev-text hover:bg-softodev-primarySoft/70 md:text-sm"
              >
                {isArabic ? "اطلع على الباقات" : "View pricing plans"}
              </a>
            </div>

            {/* نقاط قوة مختصرة */}
            <div
              className={`mt-3 grid gap-3 text-xs text-softodev-muted md:grid-cols-3 ${
                isArabic ? "md:text-right" : "md:text-left"
              }`}
            >
              <div className="rounded-2xl border border-softodev-border/70 bg-softodev-surface/80 px-3 py-3">
                <div className="mb-1 text-[11px] font-semibold text-softodev-text">
                  {isArabic ? "جاهز للإعلانات" : "Ads-ready landing pages"}
                </div>
                <p className="leading-relaxed">
                  {isArabic
                    ? "صفحات هبوط محسنة للتحويل لحملات سناب، تيك توك، وإنستغرام."
                    : "Conversion-focused pages ready for Snapchat, TikTok, and Instagram ads."}
                </p>
              </div>
              <div className="rounded-2xl border border-softodev-border/70 bg-softodev-surface/80 px-3 py-3">
                <div className="mb-1 text-[11px] font-semibold text-softodev-text">
                  {isArabic ? "متاجر إلكترونية سريعة" : "Fast online stores"}
                </div>
                <p className="leading-relaxed">
                  {isArabic
                    ? "تجربة شراء بسيطة وسريعة لعملائك، مع قابلية ربط بوابات الدفع."
                    : "Smooth shopping experience with the ability to integrate payment gateways."}
                </p>
              </div>
              <div className="rounded-2xl border border-softodev-border/70 bg-softodev-surface/80 px-3 py-3">
                <div className="mb-1 text-[11px] font-semibold text-softodev-text">
                  {isArabic ? "أنظمة إدارة مخصصة" : "Custom management systems"}
                </div>
                <p className="leading-relaxed">
                  {isArabic
                    ? "أنظمة إدارة للعيادات والشركات مصممة حسب احتياجك الفعلي."
                    : "Management systems for clinics and businesses tailored to your workflow."}
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-softodev-muted">
              {isArabic
                ? "نخدم المشاريع في السعودية، الإمارات، قطر، الكويت، البحرين، عمان، والعراق."
                : "Serving clients across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, and Iraq."}
            </p>
          </div>

          {/* بلوك بصري يشبه واجهة Dashboard/Website */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-200/50 via-indigo-200/50 to-sky-100/40 blur-2xl" />
            <div className="rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 shadow-soft">
              {/* نافذة رئيسية */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="h-2.5 w-24 rounded-full bg-softodev-primarySoft" />
              </div>
              {/* محتوى تخيلي */}
              <div className="space-y-3">
                <div className="h-7 w-3/4 rounded-lg bg-softodev-primarySoft" />
                <div className="h-3 w-full rounded-lg bg-gray-100" />
                <div className="h-3 w-5/6 rounded-lg bg-gray-100" />
                <div className="grid gap-2 pt-3 sm:grid-cols-[2fr,1.5fr]">
                  <div className="space-y-2">
                    <div className="h-20 rounded-xl bg-gray-100" />
                    <div className="h-20 rounded-xl bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-10 rounded-xl bg-softodev-primarySoft/70" />
                    <div className="h-10 rounded-xl bg-gray-100" />
                    <div className="h-10 rounded-xl bg-gray-100" />
                  </div>
                </div>
              </div>
              {/* شريط صغير تحت يمثل إحصائيات أو KPI */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-softodev-muted">
                <div className="rounded-lg bg-gray-50 px-2 py-1.5">
                  <div className="text-[10px] uppercase tracking-wide text-softodev-muted">
                    {isArabic ? "سرعة" : "Speed"}
                  </div>
                  <div className="text-xs font-semibold text-softodev-text">
                    95+ Lighthouse
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 px-2 py-1.5">
                  <div className="text-[10px] uppercase tracking-wide text-softodev-muted">
                    SEO
                  </div>
                  <div className="text-xs font-semibold text-softodev-text">
                    90+ Score
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 px-2 py-1.5">
                  <div className="text-[10px] uppercase tracking-wide text-softodev-muted">
                    {isArabic ? "جاهز للإعلانات" : "Ad-ready"}
                  </div>
                  <div className="text-xs font-semibold text-softodev-text">
                    Landing pages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Teaser للأسعار */}
      <HomePricingTeaser locale={locale} />

      {/* Teaser للأعمال */}
      <HomePortfolioPreview locale={locale} />
    </div>
  );
}
