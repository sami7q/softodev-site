// app/[locale]/portfolio/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { getProjectsForLocale } from "@/lib/portfolio";

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
      ? "استعرض نماذج من أعمال SoftoDev في تطوير المتاجر الإلكترونية، المنصّات التعليمية، ومنصّات العقارات."
      : "Browse real work from SoftoDev including e-commerce, e-learning and real-estate platforms.";

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

  const projects = getProjectsForLocale(locale);

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
              ? "منصّات ومتاجر حقيقية تم تنفيذها لعملاء في العراق والمنطقة"
              : "Real platforms and stores delivered for clients in Iraq and the region."}
          </h1>

          <p className="max-w-2xl text-base md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic
              ? "هذه المشاريع توضح طريقة عمل SoftoDev في بناء متاجر إلكترونية، منصّات تعليمية ومنصّات عقارات مع تركيز على الأداء وتجربة المستخدم."
              : "These projects show how SoftoDev builds e-commerce, e-learning and real-estate platforms with a focus on performance and UX."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/portfolio/${project.slug}`}
              className="group flex flex-col rounded-3xl border border-softodev-border bg-softodev-surface/90 p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:border-softodev-primary/30"
            >
              {/* Screenshot */}
              <div className="relative mb-4 overflow-hidden rounded-2xl border border-softodev-border bg-softodev-bg/80">
                <Image
                  src={`/portfolio/${project.slug}.jpg`}
                  alt={project.name}
                  width={800}
                  height={500}
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className={align}>
                <div className="mb-2 inline-flex w-fit rounded-full bg-softodev-primarySoft/90 px-3 py-1 text-[11px] font-bold text-softodev-primary border border-softodev-border">
                  {project.tag}
                </div>

                <h2 className="text-base font-bold text-softodev-text">
                  {project.name}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.short}
                </p>
              </div>

              {/* Meta */}
              <div
                className={`mt-4 flex items-center justify-between text-[11px] text-softodev-muted ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <span>{project.industry}</span>
                <span>{project.region}</span>
              </div>

              <div className={`mt-3 text-sm font-bold text-softodev-primary ${align}`}>
                {isArabic ? "عرض تفاصيل المشروع →" : "View case study →"}
              </div>
            </Link>
          ))}
        </div>

        <p className={`text-xs text-softodev-muted ${align}`}>
          {isArabic
            ? "يمكن تنفيذ مشروع جديد بأسلوب مشابه لهذه المشاريع، مع تخصيص الهوية البصرية، اللغة، وطريقة العمل حسب نشاطك."
            : "We can build a new project similar to these, fully customized to your brand, language and workflow."}
        </p>
      </Container>
    </section>
  );
}
