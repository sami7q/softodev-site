// app/[locale]/portfolio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";

const projectSlugs = ["clinic-system", "landing-campaign", "store-launch"] as const;
type ProjectSlug = (typeof projectSlugs)[number];

type ProjectCard = {
  slug: ProjectSlug;
  tag: { ar: string; en: string };
  title: { ar: string; en: string };
  summary: { ar: string; en: string };
  industry: { ar: string; en: string };
  region: { ar: string; en: string };
};

const projects: ProjectCard[] = [
  {
    slug: "clinic-system",
    tag: { ar: "نظام إدارة عيادة", en: "Clinic Management System" },
    title: {
      ar: "نظام إدارة عيادة يربط الاستقبال مع الطبيب والفواتير",
      en: "Clinic system connecting reception, doctor, and billing",
    },
    summary: {
      ar: "نظام متكامل لإدارة المرضى، المواعيد، والفواتير مع واجهة سهلة وسريعة.",
      en: "A complete system to manage patients, appointments, and invoices with a fast, clean UI.",
    },
    industry: { ar: "القطاع الطبي", en: "Healthcare" },
    region: { ar: "العراق", en: "Iraq" },
  },
  {
    slug: "landing-campaign",
    tag: { ar: "صفحة هبوط", en: "Landing Page" },
    title: {
      ar: "صفحة هبوط لحملة إعلانات في الخليج",
      en: "Landing page for GCC ad campaign",
    },
    summary: {
      ar: "صفحة هبوط مخصصة لحملة مدفوعة على سناب وإنستغرام مع تركيز على التحويل.",
      en: "Custom landing page for a paid campaign on Snapchat and Instagram, optimized for conversions.",
    },
    industry: { ar: "تسويق رقمي", en: "Digital marketing" },
    region: { ar: "السعودية", en: "KSA" },
  },
  {
    slug: "store-launch",
    tag: { ar: "متجر إلكتروني", en: "Online Store" },
    title: {
      ar: "إطلاق متجر إلكتروني لبراند ناشئ",
      en: "Launching an online store for a new brand",
    },
    summary: {
      ar: "متجر بسيط وعملي مع تجربة شراء سلسة وربط بسيط مع نموذج الطلب.",
      en: "Simple, practical store with a smooth checkout and basic order flow.",
    },
    industry: { ar: "تجارة إلكترونية", en: "E-commerce" },
    region: { ar: "الإمارات", en: "UAE" },
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
      ? "أعمال SoftoDev | مشاريع حقيقية في المواقع والمتاجر والأنظمة"
      : "SoftoDev Portfolio | Real projects in websites, stores & systems";

  const description =
    locale === "ar"
      ? "استعرض بعض النماذج من أعمال SoftoDev في تطوير صفحات الهبوط، المتاجر الإلكترونية، وأنظمة الإدارة."
      : "Browse sample work from SoftoDev including landing pages, online stores, and management systems.";

  const url = getCanonicalUrl(locale, "/portfolio");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function PortfolioPage({
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
            {isArabic ? "الأعمال" : "Portfolio"}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-softodev-text md:text-3xl">
            {isArabic
              ? "نماذج من مشاريع تم تنفيذها لسوق الخليج والعراق"
              : "Sample projects delivered for the GCC & Iraq market."}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-softodev-muted md:text-[15px]">
            {isArabic
              ? "هذه أمثلة توضح طريقة التفكير، الهيكلة، والتركيز على تجربة المستخدم. يمكن بناء مشروعك بأسلوب مشابه ومخصص لهويتك."
              : "These examples show how we think about structure, UX, and performance. Your project can be built with the same care, tailored to your brand."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/portfolio/${project.slug}`}
              className="group flex flex-col rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Mockup block */}
              <div className="relative mb-4">
                <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br from-blue-200/40 via-indigo-100/40 to-sky-100/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="rounded-2xl border border-softodev-border/70 bg-gray-50 p-2">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-300" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <div className="h-2 w-16 rounded-full bg-softodev-primarySoft" />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-[minmax(0,1.8fr)_minmax(0,1.1fr)]">
                    <div className="space-y-2">
                      <div className="h-6 w-3/4 rounded-lg bg-softodev-primarySoft" />
                      <div className="h-3 w-full rounded-lg bg-gray-100" />
                      <div className="h-3 w-5/6 rounded-lg bg-gray-100" />
                      <div className="h-12 rounded-lg bg-gray-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-10 rounded-lg bg-gray-100" />
                      <div className="h-10 rounded-lg bg-gray-100" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={align}>
                <div className="mb-2 inline-flex rounded-full bg-softodev-primarySoft/80 px-3 py-1 text-[11px] font-semibold text-softodev-primary">
                  {project.tag[locale]}
                </div>
                <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                  {project.title[locale]}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-softodev-muted">
                  {project.summary[locale]}
                </p>
              </div>

              {/* Meta */}
              <div
                className={`mt-3 flex items-center justify-between text-[11px] text-softodev-muted ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span>{project.industry[locale]}</span>
                <span>{project.region[locale]}</span>
              </div>

              <div
                className={`mt-3 text-[11px] font-semibold text-softodev-primary ${align}`}
              >
                {isArabic ? "عرض تفاصيل المشروع →" : "View case study →"}
              </div>
            </Link>
          ))}
        </div>

        <p className={`text-[11px] text-softodev-muted ${align}`}>
          {isArabic
            ? "هذه أمثلة مبسطة توضح نوعية العمل. يمكن تكييف نفس الأفكار لتناسب مشروعك سواء كان متجرًا، نظام إدارة، أو صفحة هبوط."
            : "These are simplified examples to illustrate our work. We can adapt the same ideas for your store, system, or landing page."}
        </p>
      </Container>
    </section>
  );
}
