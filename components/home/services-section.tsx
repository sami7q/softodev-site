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

  return (
    <section className="py-16">
      <Container className="space-y-10">
        <div className="space-y-3 text-center md:text-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-softo-muted">
            {isArabic ? "الخدمات" : "Services"}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {isArabic
              ? "حلول برمجية تناسب مشروعك في الخليج والعراق"
              : "Software solutions tailored to your business in the GCC & Iraq"}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-softo-muted md:mx-0">
            {isArabic
              ? "SoftoDev تقدم حزمة خدمات تغطي صفحات الهبوط، المتاجر الإلكترونية وأنظمة الإدارة، مع تركيز كامل على الأداء وتجربة المستخدم."
              : "SoftoDev offers landing pages, e-commerce stores, and management systems with a strong focus on performance and user experience."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((service) => (
            <div
              key={service.slug}
              className="group flex h-full flex-col rounded-2xl border border-softo-border bg-softo-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-softo-card"
            >
              <div className="mb-4 inline-flex rounded-full bg-softo-primary-soft px-3 py-1 text-xs font-semibold text-softo-primary">
                {isArabic ? "خدمة" : "Service"}
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-softo-muted">
                {service.description}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="inline-flex text-sm font-semibold text-softo-primary hover:underline"
                >
                  {isArabic ? "تفاصيل الخدمة" : "View details"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
