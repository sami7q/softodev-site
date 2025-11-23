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
    locale === "ar"
      ? "باقات الأسعار | SoftoDev"
      : "Pricing Plans | SoftoDev";

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
    <section className="py-10 md:py-14">
      <Container className="space-y-8">
        {/* Header */}
        <div className={`space-y-3 ${align}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            {isArabic ? "الأسعار" : "Pricing"}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-softodev-text md:text-3xl">
            {isArabic
              ? "باقات مرنة تبدأ من 199$ وتصل إلى أنظمة مخصصة بالكامل"
              : "Flexible plans from $199 up to fully custom systems."}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-softodev-muted md:text-[15px]">
            {isArabic
              ? "الهدف هو تقديم عرض سعر واضح قدر الإمكان من البداية، مع ترك مساحة للتعديلات بناءً على تفاصيل مشروعك."
              : "We aim to give you a clear starting price while leaving room for adjustments based on your project details."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {plans.map((plan) => {
            const isHighlight = plan.highlight;
            return (
              <div
                key={plan.id}
                className={`flex flex-col rounded-3xl border bg-softodev-surface/95 p-4 text-sm shadow-soft ${
                  isHighlight
                    ? "border-softodev-primary/70 ring-2 ring-softodev-primary/20"
                    : "border-softodev-border/70"
                }`}
              >
                <div className={align}>
                  {plan.badge && (
                    <div className="mb-2 inline-flex rounded-full bg-softodev-primarySoft/80 px-3 py-1 text-[11px] font-semibold text-softodev-primary">
                      {plan.badge[locale]}
                    </div>
                  )}
                  <div className="text-base font-semibold text-softodev-text">
                    {plan.name[locale]}
                  </div>
                  <div className="mt-1 text-lg font-bold text-softodev-text">
                    {plan.price[locale]}
                  </div>
                  <p className="mt-1 text-xs text-softodev-muted">
                    {plan.description[locale]}
                  </p>
                </div>

                <div className={`mt-3 flex-1 space-y-1.5 ${align}`}>
                  {plan.features[locale].map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-softodev-primary" />
                      <p className="text-xs text-softodev-muted leading-relaxed">
                        {f}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`mt-4 flex gap-3 text-xs ${justify}`}>
                  <Link
                    href={isArabic ? "/ar/contact" : "/en/contact"}
                    className={`inline-flex items-center rounded-full px-4 py-1.5 font-semibold ${
                      isHighlight
                        ? "bg-softodev-primary text-white hover:bg-blue-700"
                        : "border border-softodev-border bg-softodev-surface hover:bg-softodev-primarySoft/70 text-softodev-text"
                    }`}
                  >
                    {isArabic ? "احصل على عرض سعر" : "Get a quote"}
                  </Link>
                  <Link
                    href={isArabic ? "/ar/services" : "/en/services"}
                    className="inline-flex items-center rounded-full border border-dashed border-softodev-border px-4 py-1.5 font-semibold text-softodev-muted hover:bg-softodev-primarySoft/40"
                  >
                    {isArabic ? "قارن مع الخدمات" : "Compare with services"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className={`text-[11px] text-softodev-muted ${align}`}>
          {isArabic
            ? "الأسعار المذكورة تقريبية وتعتمد على تفاصيل مشروعك النهائي، لكنّها تعطيك تصورًا واضحًا عن مستوى الاستثمار المطلوب."
            : "Prices are starting points and depend on your final scope, but they give you a realistic idea of the required investment."}
        </p>
      </Container>
    </section>
  );
}
