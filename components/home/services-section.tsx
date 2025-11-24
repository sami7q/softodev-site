// components/home/services-section.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";

type HomeServicesSectionProps = {
  locale: Locale;
};

const services = {
  ar: [
    {
      slug: "landing-pages",
      title: "صفحات هبوط احترافية",
      description: "صفحات تسويقية سريعة ومصممة لزيادة التحويلات لحملة معينة أو منتج واحد.",
    },
    {
      slug: "ecommerce-stores",
      title: "متاجر إلكترونية متكاملة",
      description: "متاجر مهيّأة للدفع الإلكتروني، سريعة ومتوافقة مع محركات البحث وسوق الخليج.",
    },
    {
      slug: "management-systems",
      title: "أنظمة إدارة مخصصة",
      description: "أنظمة إدارة للشركات والعيادات مبنية خصيصًا لاحتياجك، مع واجهة سهلة الاستخدام.",
    },
  ],
  en: [
    {
      slug: "landing-pages",
      title: "Conversion-Focused Landing Pages",
      description:
        "Fast, modern landing pages designed to convert traffic from your ads and campaigns.",
    },
    {
      slug: "ecommerce-stores",
      title: "Full E-commerce Stores",
      description:
        "SEO-ready, high-performing online stores tailored for the GCC market.",
    },
    {
      slug: "management-systems",
      title: "Custom Management Systems",
      description:
        "Tailor-made management systems for businesses and clinics with user-friendly interfaces.",
    },
  ],
} as const;

export function HomeServicesSection({ locale }: HomeServicesSectionProps) {
  const items = services[locale];
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";

  return (
    <section className="relative isolate py-16 sm:py-20 bg-softodev-bg/60 overflow-hidden">
      {/* Premium background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-softodev-surface via-softodev-bg to-softodev-surface" />
        {/* glows */}
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-400/12 blur-3xl" />
        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />
        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10">
        {/* Header */}
        <div
          className={[
            "space-y-3",
            isArabic ? "text-center md:text-right" : "text-center md:text-left",
          ].join(" ")}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-softodev-muted">
            {isArabic ? "الخدمات" : "Services"}
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight text-softodev-text sm:text-3xl">
            {isArabic
              ? "حلول برمجية تناسب مشروعك في الخليج والعراق"
              : "Software solutions tailored to your business in the GCC & Iraq"}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-softodev-muted md:mx-0">
            {isArabic
              ? "SoftoDev تقدم حزمة خدمات تغطي صفحات الهبوط، المتاجر الإلكترونية وأنظمة الإدارة، مع تركيز كامل على الأداء وتجربة المستخدم."
              : "SoftoDev offers landing pages, e-commerce stores, and management systems with a strong focus on performance and user experience."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((service) => (
            <div
              key={service.slug}
              className={`group relative flex h-full flex-col rounded-2xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg hover:border-softodev-primary/30 ${align}`}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-softodev-primarySoft via-white/60 to-sky-100/60 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

              <div className="mb-4 inline-flex w-fit rounded-full bg-softodev-primarySoft/90 px-3 py-1 text-xs font-bold text-softodev-primary border border-softodev-border">
                {isArabic ? "خدمة" : "Service"}
              </div>

              <h3 className="mb-2 text-lg font-extrabold tracking-tight text-softodev-text">
                {service.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-softodev-muted">
                {service.description}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-softodev-primary hover:opacity-80"
                >
                  {isArabic ? "تفاصيل الخدمة" : "View details"}
                  <span className="ms-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
