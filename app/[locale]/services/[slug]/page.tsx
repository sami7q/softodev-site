// app/[locale]/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

const serviceSlugs = ["landing-pages", "ecommerce-stores", "management-systems"] as const;
type ServiceSlug = (typeof serviceSlugs)[number];

type LocalizedService = {
  slug: ServiceSlug;
  name: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  audience: { ar: string; en: string };
  benefits: { ar: string[]; en: string[] };
  process: { ar: string[]; en: string[] };
};

const services: Record<ServiceSlug, LocalizedService> = {
  "landing-pages": {
    slug: "landing-pages",
    name: {
      ar: "صفحات الهبوط والإعلانات",
      en: "High-converting landing pages",
    },
    shortDescription: {
      ar: "نصمّم صفحات هبوط سريعة وجاهزة لحملات سناب، تيك توك، وإنستغرام مع تركيز على تحويل الزوار إلى عملاء.",
      en: "We design fast, conversion-focused landing pages tuned for Snapchat, TikTok and Instagram campaigns.",
    },
    audience: {
      ar: "أصحاب المنتجات، الخدمات، الدورات، أو أي عرض يحتاج صفحة واحدة قوية.",
      en: "Product owners, service providers, course creators, and anyone selling with a single focused offer.",
    },
    benefits: {
      ar: [
        "تصميم مخصص لهويتك البصرية، مع تعديل الألوان والخطوط واللوغو.",
        "هيكل صفحة مدروس (Hero، فوائد، إثبات اجتماعي، أسئلة شائعة، CTA واضح).",
        "تهيئة فنية لـ SEO وسرعة التحميل.",
        "إمكانية الربط مع نماذج واتساب أو فورم تواصل.",
      ],
      en: [
        "Custom design aligned with your brand (colors, typography, logo).",
        "Thoughtful page structure (hero, benefits, social proof, FAQ, clear CTA).",
        "Technical SEO and performance optimization.",
        "Ability to connect with WhatsApp or contact forms.",
      ],
    },
    process: {
      ar: [
        "مكالمة تعريفية لفهم هدف الحملة والجمهور.",
        "كتابة هيكل المحتوى وترتيب الأقسام بناءً على هدف التحويل.",
        "تصميم وتجربة الصفحة على الموبايل والكمبيوتر.",
        "تعديلات نهائية بسيطة ثم إطلاق الصفحة.",
      ],
      en: [
        "Kickoff call to understand your campaign and audience.",
        "Content structure and section planning focused on conversions.",
        "Design and implementation optimized for mobile and desktop.",
        "Final tweaks and launch.",
      ],
    },
  },
  "ecommerce-stores": {
    slug: "ecommerce-stores",
    name: {
      ar: "المتاجر الإلكترونية",
      en: "E-commerce stores",
    },
    shortDescription: {
      ar: "نبني متاجر إلكترونية سريعة وسهلة الاستخدام تركز على تجربة العميل وسهولة الإدارة.",
      en: "We build fast, easy-to-use online stores optimized for customer experience and simple management.",
    },
    audience: {
      ar: "البراندات، المتاجر الناشئة، المشاريع التي تبيع منتجات متعددة في الخليج والعراق.",
      en: "Brands, new stores, and businesses selling multiple products in GCC and Iraq.",
    },
    benefits: {
      ar: [
        "تصميم واجهة متجر احترافية ومتجاوبة.",
        "تركيب هيكل منظم للمنتجات والأقسام.",
        "بناء متجر جاهز للربط مع بوابات الدفع لاحقاً.",
        "تركيز على سرعة المتجر وسهولة إكمال الطلب.",
      ],
      en: [
        "Professional, responsive storefront design.",
        "Organized product and category structure.",
        "Store prepared for payment gateway integration later.",
        "Focus on store speed and easy checkout.",
      ],
    },
    process: {
      ar: [
        "فهم طبيعة المنتجات وطريقة البيع الحالية.",
        "تحديد بنية الأقسام والمنتجات الرئيسية.",
        "تصميم واجهة المتجر وصفحة المنتج وسلة الشراء.",
        "تسليم المتجر مع شرح مبسط لكيفية الإدارة.",
      ],
      en: [
        "Understand your products and current sales process.",
        "Define category and product structure.",
        "Design storefront, product page, and cart flow.",
        "Deliver store with a simple admin walkthrough.",
      ],
    },
  },
  "management-systems": {
    slug: "management-systems",
    name: {
      ar: "أنظمة إدارة الشركات والعيادات",
      en: "Management systems for businesses & clinics",
    },
    shortDescription: {
      ar: "نطوّر أنظمة إدارة مخصصة (مواعيد، فواتير، تقارير، صلاحيات) مبنية على سير العمل الفعلي لديك.",
      en: "We build custom management systems (appointments, invoices, reports, permissions) around your real workflow.",
    },
    audience: {
      ar: "العيادات، المراكز الطبية، الشركات التي تحتاج نظامًا منظمًا بدل الإكسل والورق.",
      en: "Clinics, medical centers, and businesses that need a structured system instead of spreadsheets and paper.",
    },
    benefits: {
      ar: [
        "نظام مخصص لعملك، ليس قالبًا عامًا.",
        "صلاحيات للمستخدمين (مدير، موظف استقبال، طبيب...).",
        "تقارير تساعدك في فهم الأرقام واتخاذ القرار.",
        "بنية قابلة للتطوير لميزات إضافية في المستقبل.",
      ],
      en: [
        "System tailored to your operations, not a generic template.",
        "Role-based access (admin, receptionist, doctor, etc.).",
        "Reports that help you understand numbers and make decisions.",
        "Architecture ready for future features and integrations.",
      ],
    },
    process: {
      ar: [
        "جلسة تحليل لعملية العمل الحالية (How you work now).",
        "رسم تدفق البيانات والشاشات المطلوبة.",
        "تطوير النسخة الأولى (MVP) وتجربتها داخلياً.",
        "إضافة التحسينات والتعديلات بناءً على الاستخدام.",
      ],
      en: [
        "Analysis session to understand how you work today.",
        "Map data flows and required screens.",
        "Develop the first MVP version and test internally.",
        "Add improvements based on real usage.",
      ],
    },
  },
};

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ServiceSlug }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services[slug];

  if (!service) {
    return {};
  }

  const title =
    locale === "ar"
      ? `${service.name.ar} | خدمات SoftoDev`
      : `${service.name.en} | SoftoDev Services`;

  const description = service.shortDescription[locale];
  const url = getCanonicalUrl(locale, `/services/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ServiceSlug }>;
}) {
  const { locale, slug } = await params;
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";
  const justify = isArabic ? "justify-end" : "justify-start";

  const service = services[slug];

  if (!service) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name[locale],
    description: service.shortDescription[locale],
    serviceType: service.name.en,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "GCC, Iraq",
    },
    provider: {
      "@type": "Organization",
      name: "SoftoDev",
    },
  };

  return (
    <>
      <section className="py-10 md:py-14">
        <Container className="space-y-8">
          {/* Hero */}
          <div className={`space-y-4 ${align}`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
              {isArabic ? "خدمة SoftoDev" : "SoftoDev Service"}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-softodev-text md:text-3xl">
              {service.name[locale]}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-softodev-muted md:text-[15px]">
              {service.shortDescription[locale]}
            </p>
            <p className="text-xs text-softodev-muted">
              {isArabic
                ? "مثالية للسوق الخليجي والعراقي من ناحية اللغة، الهيكل، وتجربة المستخدم."
                : "Designed specifically for GCC and Iraqi markets in language, structure, and UX."}
            </p>
            <div className={`flex flex-wrap gap-3 ${justify}`}>
              <a
                href="https://wa.me/905015954826"
                className="inline-flex items-center rounded-full bg-softodev-primary px-5 py-2 text-xs font-semibold text-white shadow-soft hover:bg-blue-700 md:text-sm"
              >
                {isArabic ? "ناقشنا فكرتك عبر الواتساب" : "Discuss your idea on WhatsApp"}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-5 py-2 text-xs font-semibold text-softodev-text hover:bg-softodev-primarySoft/70 md:text-sm"
              >
                {isArabic ? "اطلب عرض سعر تفصيلي" : "Request a detailed quote"}
              </Link>
            </div>
          </div>

          {/* Layout: benefits + process */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]">
            {/* Benefits */}
            <div className={`space-y-3 ${align}`}>
              <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                {isArabic ? "ماذا ستحصل من هذه الخدمة؟" : "What you get with this service"}
              </h2>
              <div className="space-y-2 text-sm text-softodev-muted">
                {service.benefits[locale].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 rounded-2xl border border-softodev-border/70 bg-softodev-surface/90 px-3 py-2"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-softodev-primary" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl bg-softodev-primarySoft/80 px-3 py-3 text-xs text-softodev-text">
                <div className="font-semibold">
                  {isArabic ? "لمن هذه الخدمة؟" : "Who is this for?"}
                </div>
                <p className="mt-1 leading-relaxed">{service.audience[locale]}</p>
              </div>
            </div>

            {/* Process */}
            <div className={`space-y-3 ${align}`}>
              <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                {isArabic ? "كيف يتم تنفيذ العمل؟" : "How the process works"}
              </h2>
              <ol className="space-y-2 text-sm text-softodev-muted">
                {service.process[locale].map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-2xl border border-softodev-border/70 bg-gray-50 px-3 py-2"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-softodev-primarySoft text-[11px] font-semibold text-softodev-text">
                      {idx + 1}
                    </span>
                    <p className="leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-3 rounded-2xl border border-dashed border-softodev-border px-3 py-3 text-xs text-softodev-muted">
                {isArabic
                  ? "نحافظ على كود منظم وقابل للتطوير، بحيث لا تكون الخدمة مجرد واجهة، بل أساس لمشاريعك القادمة."
                  : "We keep the codebase clean and scalable, so your service isn't just a UI but a foundation for future projects."}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
