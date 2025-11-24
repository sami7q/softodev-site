// app/[locale]/pricing/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

type PlanId = "starter" | "growth" | "pro";

type Plan = {
  id: PlanId;
  badge?: { ar: string; en: string };
  name: { ar: string; en: string };
  price: { ar: string; en: string };
  description: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  highlight: boolean;
};

const plans: Plan[] = [
  {
    id: "starter",
    badge: { ar: "الأفضل للبدايات", en: "Best to start" },
    name: { ar: "باقة البداية", en: "Starter" },
    price: { ar: "من 199$", en: "From $199" },
    description: {
      ar: "صفحة هبوط أو موقع تعريفي بسيط لمنتج أو خدمة واحدة.",
      en: "A landing page or simple website for a single product or service.",
    },
    features: {
      ar: [
        "تصميم صفحة واحدة متجاوبة.",
        "تعديل الألوان والخط والخلفية حسب الهوية.",
        "زر واتساب + نموذج تواصل بسيط.",
        "تهيئة فنية بسيطة للـ SEO.",
      ],
      en: [
        "One responsive page design.",
        "Colors, typography, and background customized to your brand.",
        "WhatsApp button + simple contact form.",
        "Basic technical SEO setup.",
      ],
    },
    highlight: false,
  },
  {
    id: "growth",
    badge: { ar: "الأكثر طلباً", en: "Most popular" },
    name: { ar: "باقة النمو", en: "Growth" },
    price: { ar: "من 499$", en: "From $499" },
    description: {
      ar: "موقع أو متجر صغير بعدة صفحات مناسب للشركات الصغيرة والمتوسطة.",
      en: "A small website or store with multiple pages for growing businesses.",
    },
    features: {
      ar: [
        "حتى 5 صفحات (الرئيسية، الخدمات، من نحن، تواصل، صفحة إضافية).",
        "بنية نظيفة وسريعة التحميل.",
        "ربط بسيط مع نماذج واتساب أو البريد.",
        "تحسين SEO أساسي للعناوين والوصف.",
      ],
      en: [
        "Up to 5 pages (home, services, about, contact, extra).",
        "Clean structure and fast loading.",
        "Basic integration with WhatsApp or email forms.",
        "Essential on-page SEO (titles and descriptions).",
      ],
    },
    highlight: true,
  },
  {
    id: "pro",
    badge: { ar: "للشركات والعيادات", en: "For serious teams" },
    name: { ar: "باقة الاحتراف", en: "Pro" },
    price: { ar: "من 699$+", en: "From $699+" },
    description: {
      ar: "متجر إلكتروني أو نظام إدارة مخصص مع بنية قابلة للتوسع.",
      en: "An e-commerce store or custom management system with a scalable architecture.",
    },
    features: {
      ar: [
        "بنية مخصصة لمشروعك (متجر أو نظام إدارة).",
        "تصميم واجهات رئيسية + لوحة تحكم أولية.",
        "ربط مع خدمات خارجية عند الحاجة (حسب الاتفاق).",
        "تركيز على الأداء وتجربة المستخدم.",
      ],
      en: [
        "Custom architecture for your project (store or management system).",
        "Design of main UI screens + initial dashboard.",
        "Integrations with external services when needed (by agreement).",
        "Strong focus on performance and UX.",
      ],
    },
    highlight: false,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar" ? "باقات الأسعار | SoftoDev" : "Pricing Plans | SoftoDev";

  const description =
    locale === "ar"
      ? "اختر الباقة المناسبة لمشروعك، من صفحة هبوط بسيطة إلى متجر إلكتروني كامل أو نظام إدارة مخصص."
      : "Choose the right plan for your project, from a simple landing page to a full store or custom management system.";

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
  const justify = isArabic ? "justify-end" : "justify-start";

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
            {isArabic ? "الأسعار" : "Pricing"}
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic
              ? "باقات مرنة تبدأ من 199$ وتصل إلى أنظمة مخصصة بالكامل"
              : "Flexible plans from $199 up to fully custom systems."}
          </h1>

          <p className="max-w-2xl text-base md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic
              ? "الهدف هو تقديم عرض سعر واضح قدر الإمكان من البداية، مع ترك مساحة للتعديلات بناءً على تفاصيل مشروعك."
              : "We aim to give you a clear starting price while leaving room for adjustments based on your project details."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6 items-stretch">
          {plans.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <div
                key={plan.id}
                className={[
                  "relative flex flex-col rounded-3xl border p-5 md:p-6 text-sm shadow-soft transition",
                  "bg-softodev-surface/90",
                  isHighlight
                    ? "border-softodev-primary/70 ring-2 ring-softodev-primary/20 scale-[1.02] md:scale-105"
                    : "border-softodev-border hover:-translate-y-0.5 hover:shadow-lg hover:border-softodev-primary/30",
                ].join(" ")}
              >
                {/* Highlight glow */}
                {isHighlight && (
                  <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-softodev-primarySoft via-white/60 to-sky-100/60 blur-xl" />
                )}

                <div className={align}>
                  {plan.badge && (
                    <div
                      className={[
                        "mb-3 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold border",
                        isHighlight
                          ? "bg-softodev-primarySoft/90 text-softodev-primary border-softodev-primary/20"
                          : "bg-softodev-primarySoft/70 text-softodev-primary border-softodev-border",
                      ].join(" ")}
                    >
                      {plan.badge[locale]}
                    </div>
                  )}

                  <div className="text-lg font-extrabold text-softodev-text">
                    {plan.name[locale]}
                  </div>

                  <div className="mt-1 text-2xl font-extrabold tracking-tight text-softodev-text">
                    {plan.price[locale]}
                  </div>

                  <p className="mt-2 text-sm text-softodev-muted leading-relaxed">
                    {plan.description[locale]}
                  </p>
                </div>

                {/* Features */}
                <div className={`mt-5 flex-1 space-y-2.5 ${align}`}>
                  {plan.features[locale].map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-softodev-primary" />
                      <p className="text-sm text-softodev-muted leading-relaxed">
                        {f}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className={`mt-6 flex flex-wrap gap-3 text-sm ${justify}`}>
                  <Link
                    href={isArabic ? "/ar/contact" : "/en/contact"}
                    className={[
                      "inline-flex items-center rounded-full px-5 py-2 font-bold shadow-soft transition active:scale-[0.98]",
                      isHighlight
                        ? "bg-gradient-to-r from-softodev-primary to-blue-700 text-white hover:opacity-95"
                        : "border border-softodev-border bg-softodev-surface text-softodev-text hover:border-softodev-primary/40",
                    ].join(" ")}
                  >
                    {isArabic ? "احصل على عرض سعر" : "Get a quote"}
                  </Link>

                  <Link
                    href={isArabic ? "/ar/services" : "/en/services"}
                    className="inline-flex items-center rounded-full border border-dashed border-softodev-border px-5 py-2 font-bold text-softodev-muted hover:bg-softodev-primarySoft/40 transition"
                  >
                    {isArabic ? "قارن مع الخدمات" : "Compare with services"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className={`text-xs text-softodev-muted ${align}`}>
          {isArabic
            ? "الأسعار المذكورة تقريبية وتعتمد على تفاصيل مشروعك النهائي، لكنّها تعطيك تصورًا واضحًا عن مستوى الاستثمار المطلوب."
            : "Prices are starting points and depend on your final scope, but they give you a realistic idea of the required investment."}
        </p>
      </Container>
    </section>
  );
}
