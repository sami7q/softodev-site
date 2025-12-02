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
    <section className="relative isolate py-12 md:py-16 bg-softodev-bg/70 overflow-hidden">
      {/* خلفية بنفس نمط الخدمات / الأسعار */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-softodev-primarySoft/40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div
          className={`max-w-3xl ${align} space-y-3`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            <span className="inline-block h-[1px] w-6 bg-softodev-primary/70" />
            <span>{isArabic ? "الأعمال" : "PORTFOLIO"}</span>
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic ? (
              <>
                <span>منصّات ومتاجر </span>
                <span className="text-softodev-primary">حقيقية</span>
                <span> تم تنفيذها لعملاء في العراق والمنطقة.</span>
              </>
            ) : (
              <>
                <span>Real platforms and stores </span>
                <span className="text-softodev-primary">shipped for clients</span>
                <span> in Iraq and across the region.</span>
              </>
            )}
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic ? (
              <>
                هذه المشاريع توضح طريقة عمل{" "}
                <span className="text-softodev-primary font-medium">
                  SoftoDev
                </span>{" "}
                في بناء متاجر إلكترونية، منصّات تعليمية ومنصّات عقارات مع تركيز
                على الأداء وتجربة المستخدم.
              </>
            ) : (
              <>
                These projects show how{" "}
                <span className="text-softodev-primary font-medium">
                  SoftoDev
                </span>{" "}
                delivers e-commerce, e-learning and real-estate platforms with a
                strong focus on performance and user experience.
              </>
            )}
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/portfolio/${project.slug}`}
              className="
                group relative h-full
                overflow-hidden rounded-[26px]
                border border-softodev-border/70
                bg-softodev-surface/95
                p-4 md:p-5
                shadow-soft
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
                hover:border-softodev-primary/45
              "
            >
              {/* شريط علوي ملون مثل الخدمات/التسعير */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-softodev-primary via-softodev-primaryDark to-softodev-primary/80" />

              {/* glow overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0 -z-10
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/85 to-softodev-bg/90
                "
              />

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
                <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-softodev-primarySoft/90 px-3 py-1 text-[11px] font-bold text-softodev-primary border border-softodev-border">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-softodev-primary/80" />
                  <span>{project.tag}</span>
                </div>

                <h2 className="text-base md:text-[15px] font-extrabold text-softodev-text">
                  {project.name}
                </h2>

                <p className="mt-2 text-xs md:text-sm leading-relaxed text-softodev-muted">
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

              {/* CTA */}
              <div
                className={`
                  mt-3 text-[11px] md:text-sm font-semibold text-softodev-primary
                  ${align} flex items-center gap-1
                `}
              >
                {isArabic ? (
                  <>
                    <span>عرض تفاصيل المشروع</span>
                    <span className="text-[13px]">←</span>
                  </>
                ) : (
                  <>
                    <span>View case study</span>
                    <span className="text-[13px]">→</span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>

        <p className={`text-xs text-softodev-muted ${align}`}>
          {isArabic
            ? "يمكن تنفيذ مشروع جديد بأسلوب مشابه لهذه المشاريع، مع تخصيص الهوية البصرية، اللغة، وطريقة العمل حسب نشاطك."
            : "We can build a new project similar to these, fully adapted to your brand, language and internal workflow."}
        </p>
      </Container>
    </section>
  );
}
