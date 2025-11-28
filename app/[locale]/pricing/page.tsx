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
  price: { ar: string; en: string };
  short: { ar: string; en: string };
  bullets: { ar: string[]; en: string[] };
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    id: "starter",
    badge: "01",
    title: { ar: "باقة البداية", en: "Starter" },
    price: { ar: "من 199$", en: "From $199" },
    short: {
      ar: "مثالية لصفحة هبوط واحدة أو موقع تعريفي بسيط.",
      en: "Perfect for a single landing page or simple intro website.",
    },
    bullets: {
      ar: [
        "صفحة واحدة متجاوبة مهيأة للإعلانات.",
        "تعديل الألوان والخط بما يناسب هويتك.",
        "زر واتساب + نموذج تواصل بسيط.",
        "تهيئة فنية أساسية للـ SEO.",
      ],
      en: [
        "One responsive page optimized for ads.",
        "Colors and typography adapted to your brand.",
        "WhatsApp CTA + simple contact form.",
        "Basic technical SEO setup.",
      ],
    },
    highlight: false,
  },
  {
    id: "growth",
    badge: "02",
    title: { ar: "باقة النمو", en: "Growth" },
    price: { ar: "من 499$", en: "From $499" },
    short: {
      ar: "مناسبة لمواقع الشركات والمتاجر الصغيرة بعدة صفحات.",
      en: "Best for multi-page sites and small online stores.",
    },
    bullets: {
      ar: [
        "حتى 5 صفحات (الرئيسية، الخدمات، من نحن، تواصل، صفحة إضافية).",
        "بنية نظيفة وسريعة التحميل.",
        "ربط بسيط مع نماذج واتساب أو البريد.",
        "تهيئة SEO أساسية للعناوين والوصف.",
      ],
      en: [
        "Up to 5 pages (home, services, about, contact, extra).",
        "Clean, fast-loading architecture.",
        "Basic integration with WhatsApp or email forms.",
        "Essential on-page SEO (titles & descriptions).",
      ],
    },
    highlight: true,
  },
  {
    id: "pro",
    badge: "03",
    title: { ar: "باقة الاحتراف", en: "Pro" },
    price: { ar: "من 699$+", en: "From $699+" },
    short: {
      ar: "للمتاجر المتقدمة أو الأنظمة البرمجية المخصصة.",
      en: "For advanced stores or fully custom systems.",
    },
    bullets: {
      ar: [
        "متجر إلكتروني كامل أو نظام إدارة مخصص.",
        "تصميم واجهات رئيسية + لوحة تحكم أولية.",
        "إمكانية ربط مع أنظمة وخدمات خارجية.",
        "تركيز على الأداء وتجربة المستخدم.",
      ],
      en: [
        "Full e-commerce store or custom management system.",
        "Main UI screens + initial dashboard design.",
        "Integrations with external systems when needed.",
        "Strong focus on performance and UX.",
      ],
    },
    highlight: false,
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
      ? "باقات أسعار مرنة تبدأ من صفحات هبوط بسيطة وصولاً إلى أنظمة إدارة مخصصة بالكامل."
      : "Flexible pricing plans from simple landing pages up to fully custom management systems.";

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
      {/* خلفية خفيفة متناسقة مع الهوم / الخدمات */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-softodev-primarySoft/40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div className={`max-w-3xl ${align} space-y-3`}>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            <span className="inline-block h-[1px] w-6 bg-softodev-primary/70" />
            <span>{isArabic ? "الأسعار" : "PRICING"}</span>
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic ? (
              <>
                <span>باقات أسعار </span>
                <span className="text-softodev-primary">واضحة ومرنة</span>
                <span> تناسب حجم مشروعك ومرحلة نموّه.</span>
              </>
            ) : (
              <>
                <span>Clear, flexible pricing </span>
                <span className="text-softodev-primary">
                  that matches your stage
                </span>
                <span> and project size.</span>
              </>
            )}
          </h1>

          <p className="text-sm md:text[15px] leading-relaxed text-softodev-muted">
            {isArabic ? (
              <>
                الهدف أن تعرف من البداية إطار الاستثمار التقريبي، مع إمكانية
                تعديل التفاصيل حسب{" "}
                <span className="text-softodev-primary font-medium">
                  سوقك، نوع خدمتك، وسرعة التنفيذ المطلوبة.
                </span>
              </>
            ) : (
              <>
                Our goal is to give you a realistic investment range upfront,
                with room to adapt based on{" "}
                <span className="text-softodev-primary font-medium">
                  your market, product type, and timeline.
                </span>
              </>
            )}
          </p>
        </div>

        {/* Plans grid – نفس نمط كروت الخدمات */}
        <div
          className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={[
                "group relative h-full overflow-hidden rounded-[26px] border",
                "border-softodev-border/70 bg-softodev-surface/95",
                "p-5 md:p-6 shadow-soft transition-all duration-300",
                "hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)] hover:border-softodev-primary/45",
                plan.highlight ? "ring-1 ring-softodev-primary/40" : "",
              ].join(" ")}
            >
              {/* glow overlay عند الهوفر / وللباقة المميزة تحسها بريميوم */}
              <div
                className={[
                  "pointer-events-none absolute inset-0 -z-10",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  "bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/85 to-softodev-bg/90",
                  plan.highlight ? "opacity-100 group-hover:opacity-100" : "",
                ].join(" ")}
              />

              {/* Header داخل الكرت */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-softodev-muted">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-softodev-primarySoft text-[10px] text-softodev-primary">
                      {plan.badge}
                    </span>
                    <span>{isArabic ? "باقة" : "Plan"}</span>
                  </div>
                  <h2 className="text-base md:text-lg font-extrabold text-softodev-text">
                    {plan.title[locale]}
                  </h2>
                  <p className="text-sm font-semibold text-softodev-primary">
                    {plan.price[locale]}
                  </p>
                  <p className="text-xs md:text-sm text-softodev-muted leading-relaxed">
                    {plan.short[locale]}
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-1.5 text-xs md:text-[13px] text-softodev-muted">
                {plan.bullets[locale].map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-softodev-primary/85" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="mt-5 border-t border-softodev-border/70" />

              {/* CTA row – زر أصغر وبسيط فقط */}
              <div className="mt-3 flex justify-start">
                <Link
                  href={`/${locale}/contact`}
                  className="
                    inline-flex items-center justify-center
                    rounded-full bg-softodev-primary
                    px-3 py-1.5
                    text-[11px] md:text-xs font-semibold text-white
                    shadow-soft
                    hover:bg-softodev-primaryDark
                    transition
                  "
                >
                  {isArabic ? "اطلب عرض سعر" : "Get a quote"}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* قسم الخدمات + نقطة البداية لكل خدمة بنفس النمط */}
        <div className="space-y-6">
          <div className={`max-w-3xl ${align} space-y-2`}>
            <h2 className="text-lg sm:text-xl font-semibold text-softodev-text">
              {isArabic
                ? "كيف تنعكس هذه الباقات على كل خدمة؟"
                : "How do these plans map to each service?"}
            </h2>
            <p className="text-sm md:text[15px] text-softodev-muted">
              {isArabic ? (
                <>
                  هنا توضيح سريع{" "}
                  <span className="text-softodev-primary font-medium">
                    لكل خدمة
                  </span>{" "}
                  نقدّمها، من أي سعر تقريبًا تبدأ، وأي باقة تكون عادةً الأنسب
                  كبداية.
                </>
              ) : (
                <>
                  Here’s a quick overview of{" "}
                  <span className="text-softodev-primary font-medium">
                    each service
                  </span>
                  , the usual starting price, and the plan that typically fits
                  best.
                </>
              )}
            </p>
          </div>

          <div
            className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3"
            dir={isArabic ? "rtl" : "ltr"}
          >
            {servicesForPricing.map((service) => {
              const plan = plans.find((p) => p.id === service.recommendedPlan)!;

              return (
                <article
                  key={service.id}
                  className="
                    group relative h-full
                    overflow-hidden rounded-[26px]
                    border border-softodev-border/70
                    bg-softodev-surface/95
                    p-4 md:p-5
                    shadow-soft
                    transition-all duration-300
                    hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
                    hover:border-softodev-primary/45
                  "
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-softodev-muted">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-softodev-primarySoft text-[10px] text-softodev-primary">
                          {service.badge}
                        </span>
                        <span>{isArabic ? "خدمة" : "Service"}</span>
                      </div>
                      <h3 className="text-base md:text-[15px] font-semibold text-softodev-text">
                        {service.title[locale]}
                      </h3>
                      <p className="text-xs md:text-sm text-softodev-muted leading-relaxed line-clamp-3">
                        {service.short[locale]}
                      </p>
                    </div>

                    <span className="inline-flex min-w-max items-center rounded-full border border-softodev-border bg-softodev-primarySoft/60 px-2.5 py-1 text-[10px] font-semibold text-softodev-primary">
                      {isArabic ? "أنسب مع" : "Best with"}{" "}
                      <span className="mx-1">•</span>
                      {plan.title[locale]}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
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
        </div>

        <p className={`text-xs text-softodev-muted ${align}`}>
          {isArabic
            ? "كل الأرقام تقريبية لبداية الحديث، والتسعير النهائي يتم بعد فهم فكرة مشروعك، سوقك، والنتيجة التي تريد الوصول لها."
            : "All numbers here are starting points. Final pricing is agreed after we understand your idea, market, and desired outcome."}
        </p>
      </Container>
    </section>
  );
}
