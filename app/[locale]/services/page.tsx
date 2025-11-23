// app/[locale]/services/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

const serviceSlugs = ["landing-pages", "ecommerce-stores", "management-systems"] as const;
type ServiceSlug = (typeof serviceSlugs)[number];

type ServiceContent = {
  slug: ServiceSlug;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  badge: { ar: string; en: string };
  highlight: { ar: string; en: string };
};

const services: ServiceContent[] = [
  {
    slug: "landing-pages",
    title: {
      ar: "صفحات هبوط جاهزة للإعلانات والتحويل",
      en: "High-converting landing pages",
    },
    subtitle: {
      ar: "صفحات مخصصة لحملات سناب، تيك توك، إنستغرام وغيرها مع تركيز كامل على تحويل الزوار إلى عملاء.",
      en: "Landing pages engineered for Snapchat, TikTok, Instagram and paid campaigns, focused on turning clicks into customers.",
    },
    badge: { ar: "مناسب للمنتجات والخدمات الفردية", en: "Perfect for single offers" },
    highlight: {
      ar: "تسليم سريع خلال أيام مع تصميم متجاوب ورسائل واضحة.",
      en: "Delivered in days with responsive design and clear messaging.",
    },
  },
  {
    slug: "ecommerce-stores",
    title: {
      ar: "متاجر إلكترونية سريعة وسهلة الاستخدام",
      en: "Fast, user-friendly online stores",
    },
    subtitle: {
      ar: "متاجر إلكترونية مخصصة لسوق الخليج مع تجربة شراء بسيطة وربط بوابات الدفع لاحقاً.",
      en: "E-commerce stores tailored for GCC customers with smooth checkout and future-ready payment integrations.",
    },
    badge: { ar: "متاجر مخصصة لسوق الخليج", en: "Built for GCC markets" },
    highlight: {
      ar: "بنية نظيفة وسلسة تساعدك على التطوير والإضافة مستقبلاً بدون فوضى.",
      en: "Clean structure that makes future growth and features easy.",
    },
  },
  {
    slug: "management-systems",
    title: {
      ar: "أنظمة إدارة للشركات والعيادات",
      en: "Custom management systems",
    },
    subtitle: {
      ar: "أنظمة مخصصة لإدارة العيادات والشركات (مواعيد، فواتير، تقارير) مبنية على احتياجك الفعلي.",
      en: "Custom management systems for clinics and businesses (appointments, invoices, reports) built around your workflow.",
    },
    badge: { ar: "حلول مخصصة بالكامل", en: "Fully tailored solutions" },
    highlight: {
      ar: "نظام منظم، آمن، وقابل للتطوير مع بنية برمجية قوية.",
      en: "Structured, secure and scalable systems with solid backend foundations.",
    },
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
      ? "خدمات SoftoDev | برمجة صفحات هبوط، متاجر إلكترونية، وأنظمة إدارة"
      : "SoftoDev Services | Landing Pages, E-commerce & Management Systems";

  const description =
    locale === "ar"
      ? "خدمات برمجة مواقع وصفحات هبوط، متاجر إلكترونية، وأنظمة إدارة مخصصة لسوق الخليج والعراق، مع تركيز على السرعة وتجربة المستخدم."
      : "Web development services for landing pages, e-commerce stores and custom management systems for the GCC and Iraq, focused on speed and UX.";

  const keywords =
    locale === "ar"
      ? [
          "خدمات برمجة مواقع",
          "برمجة صفحة هبوط",
          "برمجة متجر إلكتروني",
          "نظام إدارة عيادات",
          "تطوير مواقع في الخليج",
          "تطوير مواقع في العراق",
        ]
      : [
          "web development GCC",
          "landing page development",
          "ecommerce store development",
          "custom management systems",
        ];

  const url = getCanonicalUrl(locale, "/services");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";
  const dirRow = isArabic ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section className="py-10 md:py-14">
      <Container className="space-y-8">
        {/* Header */}
        <div className={`space-y-3 ${align}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            {isArabic ? "الخدمات" : "Services"}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-softodev-text md:text-3xl">
            {isArabic
              ? "حلول برمجية عملية تغطي موقعك، متجرك، ونظام الإدارة الخاص بك"
              : "Practical software solutions for your website, store, and internal systems."}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-softodev-muted md:text-[15px]">
            {isArabic
              ? "نركز على بناء حلول بسيطة، سريعة، ومخصصة لسوق الخليج والعراق بدون تعقيد زائد أو أكواد عشوائية."
              : "We focus on building simple, fast, and tailored solutions for the GCC and Iraq market without extra complexity or messy code."}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-5 md:gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className={`flex flex-col gap-4 rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 shadow-soft md:flex-row md:items-center ${dirRow}`}
            >
              {/* Text */}
              <div className={`flex-1 space-y-2 ${align}`}>
                <div className="inline-flex items-center rounded-full bg-softodev-primarySoft/70 px-3 py-1 text-[11px] font-medium text-softodev-primary">
                  {service.badge[locale]}
                </div>
                <h2 className="text-lg font-semibold text-softodev-text md:text-xl">
                  {service.title[locale]}
                </h2>
                <p className="text-sm leading-relaxed text-softodev-muted md:text-[15px]">
                  {service.subtitle[locale]}
                </p>
                <p className="text-xs text-softodev-muted">
                  {service.highlight[locale]}
                </p>
                <div className={`mt-3 flex gap-3 text-xs ${isArabic ? "justify-end" : "justify-start"}`}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="inline-flex items-center rounded-full bg-softodev-primary px-4 py-1.5 font-semibold text-white hover:bg-blue-700"
                  >
                    {isArabic ? "عرض تفاصيل الخدمة" : "View service details"}
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center rounded-full border border-softodev-border px-4 py-1.5 font-semibold text-softodev-text hover:bg-softodev-primarySoft/70"
                  >
                    {isArabic ? "طلب عرض سعر" : "Request a quote"}
                  </Link>
                </div>
              </div>

              {/* Tag / Meta block */}
              <div className="flex w-full flex-col justify-between gap-3 rounded-2xl border border-softodev-border/70 bg-gray-50/80 p-3 text-[11px] text-softodev-muted md:w-64">
                <div className="space-y-1">
                  <div className="font-semibold text-softodev-text">
                    {isArabic ? "مناسب لـ" : "Best for"}
                  </div>
                  <p>
                    {service.slug === "landing-pages"
                      ? isArabic
                        ? "المنتجات الفردية، الخدمات، الدورات، العروض التسويقية."
                        : "Single products, services, courses, marketing offers."
                      : service.slug === "ecommerce-stores"
                      ? isArabic
                        ? "المتاجر، البراندات، المشاريع التي تبيع أكثر من منتج."
                        : "Brands, online stores, and projects with multiple products."
                      : isArabic
                      ? "العيادات، الشركات، المشاريع التي تحتاج لوحة تحكم ونظام داخلي."
                      : "Clinics, businesses, and internal tools that need a proper dashboard."}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-softodev-text">
                    {isArabic ? "التركيز" : "Focus"}
                  </div>
                  <p>
                    {service.slug === "landing-pages"
                      ? isArabic
                        ? "رفع نسبة التحويل من الإعلانات."
                        : "Boosting conversion from paid ads."
                      : service.slug === "ecommerce-stores"
                      ? isArabic
                        ? "سهولة الشراء وسرعة التصفح."
                        : "Smooth checkout and fast browsing."
                      : isArabic
                      ? "تنظيم الشغل اليومي وتسهيل الإدارة."
                      : "Organizing daily work and simplifying operations."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
