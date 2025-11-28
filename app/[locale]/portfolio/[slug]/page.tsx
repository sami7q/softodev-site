// app/[locale]/portfolio/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  type ProjectSlug,
} from "@/lib/portfolio";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ProjectSlug }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const title =
    locale === "ar"
      ? `${project.name.ar} | أعمال SoftoDev`
      : `${project.name.en} | SoftoDev Portfolio`;

  const description = project.shortDescription[locale];
  const url = getCanonicalUrl(locale, `/portfolio/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ProjectSlug }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.name[locale],
    description: project.shortDescription[locale],
    areaServed: project.region.en,
    industry: project.industry.en,
    creator: {
      "@type": "Organization",
      name: "SoftoDev",
    },
  };

  if (project.liveUrl) {
    schema.url = project.liveUrl;
  }

  const whatsappHref = isArabic
    ? `https://wa.me/905015954826?text=${encodeURIComponent(
        `مرحباً SoftoDev، أريد مناقشة مشروع مشابه لـ: ${project.name.ar}`
      )}`
    : `https://wa.me/905015954826?text=${encodeURIComponent(
        `Hi SoftoDev, I’d like to discuss a project similar to: ${project.name.en}`
      )}`;

  return (
    <>
      <section className="relative isolate pt-12 md:pt-16 pb-40 md:pb-48 bg-softodev-bg/70 overflow-hidden">
        {/* خلفية بنفس نمط الخدمات / الأسعار / الأعمال */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-softodev-primary/12 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-softodev-primarySoft/40 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
        </div>

        <Container className="relative z-10 space-y-10 md:space-y-12">
          {/* Hero */}
          <div className={`max-w-3xl ${align} space-y-3`}>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
              <span className="inline-block h-[1px] w-6 bg-softodev-primary/70" />
              <span>{isArabic ? "دراسة حالة" : "CASE STUDY"}</span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
              {project.name[locale]}
            </h1>

            <p className="text-sm md:text-[15px] leading-relaxed text-softodev-muted">
              {project.shortDescription[locale]}
            </p>

            {/* Tags */}
            <div
              className={`mt-2 flex flex-wrap gap-2.5 text-[11px] text-softodev-muted ${
                isArabic ? "justify-end" : "justify-start"
              }`}
            >
              <span className="inline-flex items-center rounded-full bg-softodev-primarySoft/90 px-3 py-1 font-bold text-softodev-primary border border-softodev-border">
                {project.industry[locale]}
              </span>
              <span className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-3 py-1 font-semibold">
                {project.region[locale]}
              </span>
              <span className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-3 py-1 font-semibold">
                {project.stack[locale]}
              </span>
            </div>

            {/* CTAs – نفس نمط الأزرار الصغيرة في باقي الصفحات */}
            <div
              className={`mt-3 flex flex-wrap gap-2.5 ${
                isArabic ? "justify-end" : "justify-start"
              }`}
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
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
                {isArabic
                  ? "ناقشنا مشروعاً مشابهاً لمشروعك"
                  : "Discuss a similar project"}
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-softodev-border
                    bg-softodev-surface/90 px-3 py-1.5
                    text-[11px] md:text-xs font-semibold text-softodev-text
                    hover:border-softodev-primary/40 hover:bg-softodev-primarySoft/40
                    transition
                  "
                >
                  {isArabic ? "زيارة الموقع المباشر" : "Visit live site"}
                </a>
              )}

              <Link
                href={`/${locale}/portfolio`}
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-softodev-border
                  bg-softodev-surface/90 px-3 py-1.5
                  text-[11px] md:text-xs font-semibold text-softodev-text
                  hover:border-softodev-primary/40 hover:bg-softodev-primarySoft/40
                  transition
                "
              >
                {isArabic ? "العودة إلى الأعمال" : "Back to portfolio"}
              </Link>
            </div>
          </div>

          {/* Layout */}
          <div
            className="grid gap-6 md:gap-7 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]"
            dir={isArabic ? "rtl" : "ltr"}
          >
            {/* Narrative */}
            <div className="space-y-4">
              <article
                className={`
                  group relative h-full
                  overflow-hidden rounded-[26px]
                  border border-softodev-border/70
                  bg-softodev-surface/95
                  p-4 md:p-5
                  shadow-soft
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]
                  hover:border-softodev-primary/45
                  ${align}
                `}
              >
                <h2 className="text-sm md:text-base font-semibold text-softodev-text">
                  {isArabic ? "الخلفية" : "Background"}
                </h2>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
                  {project.context[locale]}
                </p>
              </article>

              <article
                className={`
                  group relative h-full
                  overflow-hidden rounded-[26px]
                  border border-softodev-border/70
                  bg-softodev-surface/95
                  p-4 md:p-5
                  shadow-soft
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]
                  hover:border-softodev-primary/45
                  ${align}
                `}
              >
                <h2 className="text-sm md:text-base font-semibold text-softodev-text">
                  {isArabic ? "الحل" : "Solution"}
                </h2>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
                  {project.solution[locale]}
                </p>
              </article>

              <article
                className={`
                  group relative h-full
                  overflow-hidden rounded-[26px]
                  border border-softodev-border/70
                  bg-softodev-surface/95
                  p-4 md:p-5
                  shadow-soft
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]
                  hover:border-softodev-primary/45
                  ${align}
                `}
              >
                <h2 className="text-sm md:text-base font-semibold text-softodev-text">
                  {isArabic ? "النتائج" : "Results"}
                </h2>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
                  {project.results[locale]}
                </p>
              </article>
            </div>

            {/* Side meta */}
            <aside className="space-y-4">
              <div
                className={`
                  rounded-[26px] border border-softodev-border/70
                  bg-softodev-bg/70
                  p-4 md:p-5 text-xs md:text-sm text-softodev-muted shadow-soft
                  ${align}
                `}
              >
                <h3 className="text-sm md:text-base font-semibold text-softodev-text">
                  {isArabic ? "نبذة سريعة عن المشروع" : "Quick project facts"}
                </h3>

                <dl className="mt-4 space-y-3">
                  <div>
                    <dt className="text-xs md:text-sm font-semibold text-softodev-text">
                      {isArabic ? "القطاع" : "Industry"}
                    </dt>
                    <dd className="mt-1">{project.industry[locale]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs md:text-sm font-semibold text-softodev-text">
                      {isArabic ? "المنطقة" : "Region"}
                    </dt>
                    <dd className="mt-1">{project.region[locale]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs md:text-sm font-semibold text-softodev-text">
                      {isArabic ? "التقنيات" : "Tech stack"}
                    </dt>
                    <dd className="mt-1">{project.stack[locale]}</dd>
                  </div>
                </dl>
              </div>

              <div
                className={`
                  rounded-[26px] border border-dashed border-softodev-border
                  bg-softodev-surface/80
                  p-4 md:p-5 text-[11px] md:text-xs text-softodev-muted shadow-soft
                  ${align}
                `}
              >
                {isArabic
                  ? "يمكن تنفيذ مشروع مشابه لهذا المشروع، مع تخصيص الهوية البصرية، اللغة، وطريقة العمل حسب نشاطك وحجم فريقك."
                  : "We can build a similar project, fully tailored to your brand, language and internal processes."}
              </div>
            </aside>
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
