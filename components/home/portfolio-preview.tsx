import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getProjectsForLocale } from "@/lib/portfolio";

type HomePortfolioPreviewProps = {
  locale: Locale;
};

export function HomePortfolioPreview({ locale }: HomePortfolioPreviewProps) {
  const isArabic = locale === "ar";
  const projects = getProjectsForLocale(locale).slice(0, 3);

  return (
    <section className="relative isolate py-16 sm:py-20 bg-softodev-bg/60 overflow-hidden">
      {/* Stronger premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-softodev-surface via-softodev-bg to-softodev-surface" />
        {/* glows (كلها من primary) */}
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-softodev-primary/10 blur-3xl" />
        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />
        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
        {/* bottom divider */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/30 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div
          className={[
            "max-w-2xl mx-auto mb-10 sm:mb-12",
            isArabic ? "text-right" : "text-left",
          ].join(" ")}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-softodev-muted font-semibold mb-2">
            {isArabic ? "نماذج أعمال" : "Selected work"}
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-softodev-text mb-3">
            {isArabic
              ? "مشاريع نفذناها لعملاء حقيقيين"
              : "Projects we’ve delivered for real clients"}
          </h2>

          <p className="text-base sm:text-lg text-softodev-muted leading-relaxed">
            {isArabic
              ? "هذه أمثلة سريعة، يمكنك استعراض التفاصيل الكاملة من صفحة الأعمال لمشاهدة طريقة عرض المشاريع."
              : "These are quick examples. You can see full details on the portfolio page to better understand our approach."}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/portfolio/${project.slug}`}
              className="group"
            >
              <div className="relative rounded-2xl border border-softodev-border bg-softodev-surface/90 p-5 shadow-soft h-full transition hover:-translate-y-1 hover:shadow-lg hover:border-softodev-primary/30">
                {/* subtle hover glow */}
                <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-softodev-primarySoft via-softodev-surfaceStrong/70 to-softodev-bg/80 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

                {/* Mock cover */}
                <div className="rounded-xl border border-softodev-border bg-softodev-bg/70 p-3 mb-4">
                  <div className="h-24 rounded-lg bg-softodev-primarySoft/70 border border-softodev-border mb-3" />
                  <div
                    className={[
                      "flex gap-2",
                      isArabic ? "justify-end" : "justify-start",
                    ].join(" ")}
                  >
                    <div className="w-20 h-14 rounded-lg bg-softodev-primarySoft/70 border border-softodev-border" />
                    <div className="w-10 h-14 rounded-lg bg-softodev-primarySoft/70 border border-softodev-border" />
                  </div>
                </div>

                <h3
                  className={[
                    "text-base font-extrabold text-softodev-text mb-1",
                    isArabic ? "text-right" : "text-left",
                  ].join(" ")}
                >
                  {project.name}
                </h3>

                <p
                  className={[
                    "text-sm text-softodev-muted leading-relaxed mb-3",
                    isArabic ? "text-right" : "text-left",
                  ].join(" ")}
                >
                  {project.short}
                </p>

                <div
                  className={[
                    "text-sm font-bold text-softodev-primary inline-flex items-center gap-1",
                    isArabic ? "text-right justify-end" : "text-left justify-start",
                  ].join(" ")}
                >
                  {isArabic ? "عرض تفاصيل المشروع" : "View project"}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to full portfolio */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`/${locale}/portfolio`}
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-extrabold text-softodev-text bg-softodev-surface/95 border border-softodev-border shadow-soft hover:border-softodev-primary/40 transition"
          >
            {isArabic ? "مشاهدة جميع الأعمال" : "View full portfolio"}
          </Link>
        </div>
      </Container>
    </section>
  );
}
