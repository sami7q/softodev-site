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
            {isArabic ? "الأعمال" : "Portfolio"}
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic
              ? "نماذج من مشاريع تم تنفيذها لسوق الخليج والعراق"
              : "Sample projects delivered for the GCC & Iraq market."}
          </h1>

          <p className="max-w-2xl text-base md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic
              ? "هذه أمثلة توضح طريقة التفكير، الهيكلة، والتركيز على تجربة المستخدم. يمكن بناء مشروعك بأسلوب مشابه ومخصص لهويتك."
              : "These examples show how we think about structure, UX, and performance. Your project can be built with the same care, tailored to your brand."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/portfolio/${project.slug}`}
              className="group flex flex-col rounded-3xl border border-softodev-border bg-softodev-surface/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:border-softodev-primary/30"
            >
              {/* Mockup block */}
              <div className="relative mb-4">
                <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-blue-200/50 via-indigo-100/50 to-sky-100/50 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="rounded-2xl border border-softodev-border bg-softodev-bg/70 p-3">
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
                      <div className="h-3 w-full rounded-lg bg-softodev-surface" />
                      <div className="h-3 w-5/6 rounded-lg bg-softodev-surface" />
                      <div className="h-12 rounded-lg bg-softodev-surface" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-10 rounded-lg bg-softodev-surface" />
                      <div className="h-10 rounded-lg bg-softodev-surface" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={align}>
                <div className="mb-2 inline-flex w-fit rounded-full bg-softodev-primarySoft/90 px-3 py-1 text-[11px] font-bold text-softodev-primary border border-softodev-border">
                  {project.tag[locale]}
                </div>

                <h2 className="text-base font-bold text-softodev-text">
                  {project.title[locale]}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.summary[locale]}
                </p>
              </div>

              {/* Meta */}
              <div
                className={`mt-4 flex items-center justify-between text-[11px] text-softodev-muted ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <span>{project.industry[locale]}</span>
                <span>{project.region[locale]}</span>
              </div>

              <div className={`mt-3 text-sm font-bold text-softodev-primary ${align}`}>
                {isArabic ? "عرض تفاصيل المشروع →" : "View case study →"}
              </div>
            </Link>
          ))}
        </div>

        <p className={`text-xs text-softodev-muted ${align}`}>
          {isArabic
            ? "هذه أمثلة مبسطة توضح نوعية العمل. يمكن تكييف نفس الأفكار لتناسب مشروعك سواء كان متجرًا، نظام إدارة، أو صفحة هبوط."
            : "These are simplified examples to illustrate our work. We can adapt the same ideas for your store, system, or landing page."}
        </p>
      </Container>
    </section>
  );
}
