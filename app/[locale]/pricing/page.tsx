// app/[locale]/pricing/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

type PlanId = "starter" | "growth" | "pro";

type Plan = {
  id: PlanId;
  badge: string;
  title: { ar: string; en: string };
};

const plans: Plan[] = [
  {
    id: "starter",
    badge: "01",
    title: { ar: "باقة البداية", en: "Starter" },
  },
  {
    id: "growth",
    badge: "02",
    title: { ar: "باقة النمو", en: "Growth" },
  },
  {
    id: "pro",
    badge: "03",
    title: { ar: "باقة الاحتراف", en: "Pro" },
  },
];

type PricingService = {
  id: string;
  badge: string;
  title: { ar: string; en: string };
  short: { ar: string; en: string };
  startsFrom: { ar: string; en: string };
  recommendedPlan: PlanId;
};

const servicesForPricing: PricingService[] = [
  {
    id: "landing-pages",
    badge: "01",
    title: { ar: "صفحات الهبوط", en: "Landing Pages" },
    short: {
      ar: "صفحات تسويقية جاهزة للحملات الإعلانية والتحويل.",
      en: "Marketing-focused pages tailored for paid campaigns.",
    },
    startsFrom: { ar: "من 199$", en: "From $199" },
    recommendedPlan: "starter",
  },
  {
    id: "ecommerce",
    badge: "02",
    title: { ar: "متاجر إلكترونية", en: "Online Stores" },
    short: {
      ar: "متاجر متكاملة مع بوابات دفع وشحن وإدارة منتجات.",
      en: "Full e-commerce setups with payments and product management.",
    },
    startsFrom: { ar: "من 699$", en: "From $699" },
    recommendedPlan: "pro",
  },
  {
    id: "websites",
    badge: "03",
    title: { ar: "مواقع تعريفية كاملة", en: "Full Website Design" },
    short: {
      ar: "مواقع للشركات والعيادات والمشاريع الناشئة بعدة صفحات.",
      en: "Multi-page sites for companies, clinics and startups.",
    },
    startsFrom: { ar: "من 499$", en: "From $499" },
    recommendedPlan: "growth",
  },
  {
    id: "systems",
    badge: "04",
    title: { ar: "أنظمة برمجية للشركات", en: "Custom Business Systems" },
    short: {
      ar: "أنظمة إدارة داخلية مخصصة لسير عملك الفعلي.",
      en: "Internal tools and management systems tailored to your workflow.",
    },
    startsFrom: { ar: "من 1500$", en: "From $1500" },
    recommendedPlan: "pro",
  },
  {
    id: "marketing",
    badge: "05",
    title: { ar: "خدمات التسويق الرقمي", en: "Digital Marketing" },
    short: {
      ar: "حملات وإعداد صفحات مهيأة لرفع نسبة التحويل.",
      en: "Campaigns plus landing pages optimized for conversions.",
    },
    startsFrom: { ar: "من 299$", en: "From $299" },
    recommendedPlan: "growth",
  },
  {
    id: "branding",
    badge: "06",
    title: { ar: "هوية بصرية وشعارات", en: "Visual Identity & Branding" },
    short: {
      ar: "شعار، ألوان، خطوط، ومواد رقمية متناسقة مع مشروعك.",
      en: "Logo, color system, typography and digital assets.",
    },
    startsFrom: { ar: "من 249$", en: "From $249" },
    recommendedPlan: "starter",
  },
  {
    id: "ai-bots",
    badge: "07",
    title: { ar: "بوتات ذكاء اصطناعي", en: "AI Bots for Your Website" },
    short: {
      ar: "بوتات AI ترد على عملائك اعتماداً على بيانات مشروعك.",
      en: "AI assistants answering your visitors based on your content.",
    },
    startsFrom: { ar: "من 699$", en: "From $699" },
    recommendedPlan: "pro",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "باقات الأسعار | SoftoDev"
      : "Pricing Plans | SoftoDev";

  const description =
    locale === "ar"
      ? "باقات أسعار مرنة موضحة لكل خدمة، من صفحات الهبوط والمتاجر حتى الأنظمة المخصصة."
      : "Flexible, transparent starting prices for each service, from landing pages and stores to custom systems.";

  const url = getCanonicalUrl(locale, "/pricing");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const align = isArabic ? "text-right" : "text-left";

  return (
    <section className="relative isolate py-12 md:py-16 bg-softodev-bg/70 overflow-hidden">
      {/* خلفية ناعمة متناسقة مع الخدمات */}
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
            <span>{isArabic ? "الأسعار حسب الخدمة" : "SERVICE PRICING"}</span>
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic ? (
              <>
                <span>كل خدمة لها </span>
                <span className="text-softodev-primary">نقطة بداية واضحة</span>
                <span> يمكنك البناء عليها والتوسع لاحقاً.</span>
              </>
            ) : (
              <>
                <span>Each service comes with a </span>
                <span className="text-softodev-primary">
                  clear starting price
                </span>
                <span> you can grow from.</span>
              </>
            )}
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic ? (
              <>
                الهدف هنا أن تفهم{" "}
                <span className="text-softodev-primary font-medium">
                  حدود البداية لكل نوع خدمة
                </span>{" "}
                (صفحة هبوط، متجر، نظام، تسويق...) مع توضيح الباقة الأنسب عادةً
                لها.
              </>
            ) : (
              <>
                This page gives you{" "}
                <span className="text-softodev-primary font-medium">
                  realistic starting points for each service
                </span>{" "}
                (landing pages, stores, systems, marketing…) plus the plan that
                usually fits best.
              </>
            )}
          </p>
        </div>

        {/* Services grid – نفس ستايل كروت الخدمات / الباقات */}
        <div
          className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {servicesForPricing.map((service) => {
            const plan = plans.find(
              (p) => p.id === service.recommendedPlan,
            )!;

            return (
              <article
                key={service.id}
                className="
                  group relative h-full
                  overflow-hidden rounded-[26px]
                  border border-softodev-border/70
                  bg-softodev-surface/95
                  p-5 md:p-6
                  shadow-soft
                  transition-all duration-300
                  hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
                  hover:border-softodev-primary/45
                "
              >
                {/* شريط علوي ملون مثل الباقات */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-softodev-primary via-softodev-primaryDark to-softodev-primary/80" />

                {/* glow overlay */}
                <div
                  className="
                    pointer-events-none absolute inset-0 -z-10
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/80 to-softodev-bg/90
                  "
                />

                {/* Header داخل الكرت */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-softodev-muted">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-softodev-primarySoft text-[10px] text-softodev-primary">
                        {service.badge}
                      </span>
                      <span>{isArabic ? "خدمة" : "Service"}</span>
                    </div>
                    <h2 className="text-base md:text-lg font-extrabold text-softodev-text">
                      {service.title[locale]}
                    </h2>
                    <p className="text-xs md:text-sm text-softodev-muted leading-relaxed">
                      {service.short[locale]}
                    </p>
                  </div>

                  <span className="inline-flex min-w-max items-center rounded-full border border-softodev-border bg-softodev-primarySoft/60 px-2.5 py-1 text-[10px] font-semibold text-softodev-primary">
                    {isArabic ? "أنسب مع" : "Best with"}{" "}
                    <span className="mx-1">•</span>
                    {plan.title[locale]}
                  </span>
                </div>

                {/* Info row: price + link */}
                <div className="mt-5 border-t border-softodev-border/70" />

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="text-xs md:text-sm text-softodev-muted">
                    {isArabic ? "يبدأ من" : "Starts from"}{" "}
                    <span className="font-semibold text-softodev-text">
                      {service.startsFrom[locale]}
                    </span>
                  </div>

                  <Link
                    href={`/${locale}/services/${service.id}`}
                    className="text-xs md:text-sm font-semibold text-softodev-primary hover:underline"
                  >
                    {isArabic ? "تفاصيل الخدمة" : "View service"}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className={`text-xs text-softodev-muted ${align}`}>
          {isArabic
            ? "كل الأسعار هنا نقاط بداية تقريبية. التسعير النهائي يتم بعد جلسة فهم سريعة لفكرتك، سوقك، والنتيجة التي تريد الوصول لها."
            : "All prices shown are starting points. Final pricing is agreed after a short call to understand your idea, market, and desired outcome."}
        </p>
      </Container>
    </section>
  );
}
