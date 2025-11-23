// app/[locale]/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

const serviceSlugs = ["landing-pages", "ecommerce-stores", "management-systems"] as const;
type ServiceSlug = (typeof serviceSlugs)[number];

type FAQItem = {
  q: string;
  a: string;
};

type LocalizedService = {
  slug: ServiceSlug;
  name: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  audience: { ar: string; en: string };
  benefits: { ar: string[]; en: string[] };
  process: { ar: string[]; en: string[] };
  faq: { ar: FAQItem[]; en: FAQItem[] };
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
        "تصميم صفحة هبوط مخصص لهويتك البصرية، مع تعديل الألوان والخطوط واللوغو.",
        "هيكل صفحة مدروس (Hero، فوائد، إثبات اجتماعي، أسئلة شائعة، CTA واضح).",
        "تهيئة فنية لـ SEO وسرعة التحميل لنتائج أفضل في الإعلانات.",
        "إمكانية الربط مع نماذج واتساب أو فورم تواصل أو أدوات تتبع التحويل.",
      ],
      en: [
        "Custom landing page design aligned with your brand (colors, typography, logo).",
        "Thoughtful page structure (hero, benefits, social proof, FAQ, clear CTA).",
        "Technical SEO and performance optimization for better ad results.",
        "Ability to connect with WhatsApp, contact forms, or conversion tracking tools.",
      ],
    },
    process: {
      ar: [
        "مكالمة تعريفية لفهم هدف الحملة والجمهور المستهدف في الخليج أو العراق.",
        "كتابة هيكل المحتوى وترتيب الأقسام بناءً على هدف التحويل.",
        "تصميم وتجربة صفحة الهبوط على الموبايل والكمبيوتر.",
        "تعديلات نهائية بسيطة ثم إطلاق صفحة الهبوط وربطها مع الإعلانات.",
      ],
      en: [
        "Kickoff call to understand your campaign goal and target audience in the GCC or Iraq.",
        "Content structure and section planning focused on conversions.",
        "Design and implementation optimized for mobile and desktop.",
        "Final tweaks, launch, and connection with your ad campaigns.",
      ],
    },
    faq: {
      ar: [
        {
          q: "كم يستغرق تنفيذ صفحة الهبوط؟",
          a: "غالباً من 2 إلى 5 أيام عمل حسب جاهزية المحتوى (الصور، النصوص، الهوية البصرية).",
        },
        {
          q: "هل صفحة الهبوط مناسبة لحملات سناب وتيك توك؟",
          a: "نعم، نجهز صفحة الهبوط لتكون سريعة ومباشرة ومتوافقة مع زوار الجوال، مع زر واتساب واضح.",
        },
        {
          q: "هل يمكن تعديل الصفحة لاحقاً؟",
          a: "نعم، نستخدم هيكلة نظيفة تسمح بتطوير وتعديل صفحة الهبوط مستقبلاً دون إعادة البناء من الصفر.",
        },
      ],
      en: [
        {
          q: "How long does a landing page take?",
          a: "Typically 2–5 business days depending on how ready your content is (copy, images, brand assets).",
        },
        {
          q: "Is this landing page good for Snapchat and TikTok ads?",
          a: "Yes, we design it to be fast, mobile-first and focused on one clear CTA (often WhatsApp or a lead form).",
        },
        {
          q: "Can we update the landing page later?",
          a: "Yes, we keep the structure clean so you can iterate and improve the page without rebuilding everything.",
        },
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
      ar: "البراندات، المتاجر الناشئة، والمشاريع التي تبيع منتجات متعددة في الخليج والعراق.",
      en: "Brands, new stores, and businesses selling multiple products in the GCC and Iraq.",
    },
    benefits: {
      ar: [
        "تصميم متجر إلكتروني احترافي ومتجاوب يلائم الهوية البصرية للبراند.",
        "تركيب هيكل منظم للمنتجات والأقسام لسهولة التصفح.",
        "بناء متجر جاهز للربط مع بوابات الدفع وأنظمة إدارة الطلبات لاحقاً.",
        "تركيز على سرعة المتجر وسهولة إكمال الطلب من الموبايل.",
      ],
      en: [
        "Professional, responsive online store tailored to your brand.",
        "Organized category and product structure for easy browsing.",
        "Store prepared for payment gateways and order management integrations.",
        "Focus on store speed and a smooth mobile checkout experience.",
      ],
    },
    process: {
      ar: [
        "فهم طبيعة المنتجات وطريقة البيع الحالية (إنستغرام، واتساب، إلخ).",
        "تحديد بنية الأقسام والمنتجات الرئيسية في المتجر الإلكتروني.",
        "تصميم واجهة المتجر وصفحة المنتج وسلة الشراء.",
        "تسليم المتجر مع شرح مبسط لكيفية إضافة المنتجات وإدارة الطلبات.",
      ],
      en: [
        "Understand your products and current sales process (Instagram, WhatsApp, etc.).",
        "Define the online store’s category and product structure.",
        "Design storefront, product page, and cart flow.",
        "Deliver the store and walk you through adding products and managing orders.",
      ],
    },
    faq: {
      ar: [
        {
          q: "هل يمكن ربط المتجر ببوابة دفع لاحقاً؟",
          a: "نعم، نبني المتجر ببنية تسمح بربط بوابات دفع لاحقاً حسب بلدك وخدمتك المفضلة.",
        },
        {
          q: "كم عدد المنتجات التي يمكن إضافتها؟",
          a: "لا يوجد رقم ثابت، لكن ننصح في البداية بعدد منطقي يسهل إدارته، ويمكن التوسع مع الوقت.",
        },
        {
          q: "هل المتجر مناسب للسعودية والخليج؟",
          a: "نعم، نراعي أسلوب المستخدم في الخليج من ناحية اللغة، طريقة العرض، وتجربة الشراء.",
        },
      ],
      en: [
        {
          q: "Can we integrate a payment gateway later?",
          a: "Yes, we prepare the store so it can be connected to popular payment gateways in your region.",
        },
        {
          q: "How many products can we add?",
          a: "There’s no hard limit, but we recommend starting with a manageable catalog and growing from there.",
        },
        {
          q: "Is the store optimized for GCC customers?",
          a: "Yes, we design with Arabic content, mobile behavior, and GCC expectations in mind.",
        },
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
      ar: "العيادات، المراكز الطبية، والشركات التي تحتاج نظامًا منظمًا بدل الإكسل والورق.",
      en: "Clinics, medical centers, and businesses that need a proper system instead of spreadsheets and paper.",
    },
    benefits: {
      ar: [
        "نظام إدارة مخصص لعملك، ليس قالبًا عامًا.",
        "صلاحيات للمستخدمين (مدير، موظف استقبال، طبيب، محاسب...).",
        "تقارير تساعدك في فهم الأرقام واتخاذ القرار اليومي.",
        "بنية قابلة للتطوير لميزات إضافية في المستقبل (ربط مع أنظمة أخرى، تقارير متقدمة...).",
      ],
      en: [
        "A management system tailored to your operations, not a generic template.",
        "Role-based access for users (admin, receptionist, doctor, accountant, etc.).",
        "Reports that help you understand numbers and make daily decisions.",
        "Architecture ready for future add-ons (integrations, advanced reporting, etc.).",
      ],
    },
    process: {
      ar: [
        "جلسة تحليل لعملية العمل الحالية (How you work now) وتحديد المشاكل.",
        "رسم تدفق البيانات والشاشات المطلوبة في نظام الإدارة.",
        "تطوير النسخة الأولى (MVP) وتجربتها داخلياً مع فريقك.",
        "إضافة التحسينات والتعديلات بناءً على الاستخدام الفعلي والـ feedback.",
      ],
      en: [
        "Analysis session to understand how you work today and what’s blocking you.",
        "Map data flows and required screens for the management system.",
        "Develop the first MVP version and test it internally with your team.",
        "Add improvements and features based on real-world feedback.",
      ],
    },
    faq: {
      ar: [
        {
          q: "هل النظام يكون مخصصاً بالكامل؟",
          a: "نعم، نركز على بناء نظام إدارة يناسب طريقة عملك، وليس نسخة عامة من برنامج جاهز.",
        },
        {
          q: "هل يمكن إضافة ميزات لاحقاً؟",
          a: "نعم، يتم تصميم النظام ببنية قابلة للتوسع، بحيث يمكن إضافة ميزات مع نمو مشروعك.",
        },
        {
          q: "هل مناسب لإدارة عيادة أو أكثر؟",
          a: "يمكن من البداية بناء النظام لعيادة واحدة أو عدة عيادات حسب احتياجك.",
        },
      ],
      en: [
        {
          q: "Is the management system fully custom?",
          a: "Yes, we design it around your workflow instead of forcing you into a generic off-the-shelf product.",
        },
        {
          q: "Can we add features over time?",
          a: "Yes, the system is built with a scalable architecture so you can grow and evolve it with your business.",
        },
        {
          q: "Is it suitable for multiple clinics or branches?",
          a: "We can design it for a single clinic or multiple locations depending on your needs.",
        },
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
      ? `${service.name.ar} | خدمات برمجة SoftoDev`
      : `${service.name.en} | SoftoDev Services`;

  const description = service.shortDescription[locale];

  // كلمات مفتاحية بسيطة لكل خدمة (ليست عامل رئيسي في Google لكن لا تضر)
  const keywords =
    locale === "ar"
      ? [
          "برمجة مواقع",
          "برمجة صفحة هبوط",
          "برمجة متجر إلكتروني",
          "نظام إدارة عيادات",
          "نظام إدارة شركات",
          "تطوير مواقع في الخليج",
          "تطوير مواقع في العراق",
        ]
      : [
          "web development GCC",
          "landing page development",
          "ecommerce store development",
          "clinic management system",
          "custom management system",
        ];

  const url = getCanonicalUrl(locale, `/services/${slug}`);

  return {
    title,
    description,
    keywords,
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

  const faqEntities = service.faq[locale].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities,
      },
    ],
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
                ? "خدمة موجهة لسوق الخليج والعراق من ناحية اللغة، الهيكل، وتجربة المستخدم."
                : "A service designed specifically for GCC and Iraqi markets in language, structure, and UX."}
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

          {/* Layout: benefits + process + FAQ */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]">
            {/* Benefits + FAQ */}
            <div className={`space-y-4 ${align}`}>
              {/* Benefits */}
              <div>
                <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                  {isArabic
                    ? "ماذا ستحصل من هذه الخدمة؟"
                    : "What you get with this service"}
                </h2>
                <div className="mt-2 space-y-2 text-sm text-softodev-muted">
                  {service.benefits[locale].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 rounded-2xl border border-softodev-border/70 bg-softodev-surface/90 px-3 py-2"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-softodev-primary" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience */}
              <div className="rounded-2xl bg-softodev-primarySoft/80 px-3 py-3 text-xs text-softodev-text">
                <div className="font-semibold">
                  {isArabic ? "لمن هذه الخدمة؟" : "Who is this for?"}
                </div>
                <p className="mt-1 leading-relaxed">{service.audience[locale]}</p>
              </div>

              {/* FAQ */}
              <div className="mt-4">
                <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                  {isArabic ? "أسئلة شائعة عن هذه الخدمة" : "FAQ about this service"}
                </h2>
                <div className="mt-2 space-y-2 text-sm text-softodev-muted">
                  {service.faq[locale].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-softodev-border/70 bg-gray-50 px-3 py-2"
                    >
                      <p className="text-xs font-semibold text-softodev-text md:text-sm">
                        {item.q}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed md:text-[13px]">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
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
                  : "We keep the codebase clean and scalable, so your service isn't just a UI but a solid foundation for future projects."}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* JSON-LD: Service + FAQPage */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
