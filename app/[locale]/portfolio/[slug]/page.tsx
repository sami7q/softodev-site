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
  const justify = isArabic ? "justify-end" : "justify-start";

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

  return (
    <>
      <section className="relative isolate py-12 md:py-16 bg-softodev-bg/60 backdrop-blur-sm overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-softodev-primary/12 blur-3xl" />
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-400/12 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
        </div>

        <Container className="relative z-10 space-y-10 md:space-y-12">
          {/* Hero */}
          <div className={`space-y-4 ${align}`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
              {isArabic ? "دراسة حالة" : "Case study"}
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
              {project.name[locale]}
            </h1>

            <p className="max-w-2xl text-base md:text-[15px] leading-relaxed text-softodev-muted">
              {project.shortDescription[locale]}
            </p>

            {/* Tags */}
            <div
              className={`flex flex-wrap gap-3 text-[11px] text-softodev-muted ${justify}`}
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

            {/* CTAs */}
            <div className={`flex flex-wrap gap-3 ${justify}`}>
              <a
                href="https://wa.me/905015954826"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-softodev-primary to-blue-700 px-5 py-2 text-xs md:text-sm font-bold text-white shadow-soft hover:opacity-95 transition active:scale-[0.98]"
              >
                {isArabic
                  ? "ناقشنا مشروعاً مشابهاً لمشروعك"
                  : "Discuss a similar project for your business"}
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-5 py-2 text-xs md:text-sm font-bold text-softodev-text hover:border-softodev-primary/40 transition"
                >
                  {isArabic ? "زيارة الموقع المباشر" : "Visit live site"}
                </a>
              )}

              <Link
                href={`/${locale}/portfolio`}
                className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-5 py-2 text-xs md:text-sm font-bold text-softodev-text hover:border-softodev-primary/40 transition"
              >
                {isArabic ? "العودة إلى الأعمال" : "Back to portfolio"}
              </Link>
            </div>
          </div>

          {/* Layout */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
            {/* Narrative */}
            <div className={`space-y-4 ${align}`}>
              <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft transition hover:border-softodev-primary/30">
                <h2 className="text-base font-bold text-softodev-text">
                  {isArabic ? "الخلفية" : "Background"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.context[locale]}
                </p>
              </div>

              <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft transition hover:border-softodev-primary/30">
                <h2 className="text-base font-bold text-softodev-text">
                  {isArabic ? "الحل" : "Solution"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.solution[locale]}
                </p>
              </div>

              <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft transition hover:border-softodev-primary/30">
                <h2 className="text-base font-bold text-softodev-text">
                  {isArabic ? "النتائج" : "Results"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.results[locale]}
                </p>
              </div>
            </div>

            {/* Side meta */}
            <div className={`space-y-4 ${align}`}>
              <div className="rounded-3xl border border-softodev-border bg-softodev-bg/70 p-6 text-sm text-softodev-muted shadow-soft">
                <h3 className="text-base font-bold text-softodev-text">
                  {isArabic ? "نبذة سريعة عن المشروع" : "Quick project facts"}
                </h3>

                <dl className={`mt-4 space-y-3 ${align}`}>
                  <div>
                    <dt className="font-bold text-softodev-text">
                      {isArabic ? "القطاع" : "Industry"}
                    </dt>
                    <dd className="mt-1">{project.industry[locale]}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-softodev-text">
                      {isArabic ? "المنطقة" : "Region"}
                    </dt>
                    <dd className="mt-1">{project.region[locale]}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-softodev-text">
                      {isArabic ? "التقنيات" : "Tech stack"}
                    </dt>
                    <dd className="mt-1">{project.stack[locale]}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-dashed border-softodev-border bg-softodev-surface/80 p-6 text-sm text-softodev-muted shadow-soft">
                {isArabic
                  ? "يمكن تنفيذ مشروع مشابه لهذا المشروع مع تخصيص الهوية البصرية، اللغة، وطريقة العمل حسب نشاطك ورؤية مشروعك."
                  : "We can build a similar project customized to your brand, language and workflow for your business."}
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
