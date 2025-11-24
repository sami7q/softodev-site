import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getPricingForLocale } from "@/lib/pricing";

type HomePricingTeaserProps = {
  locale: Locale;
};

export function HomePricingTeaser({ locale }: HomePricingTeaserProps) {
  const isArabic = locale === "ar";
  const plans = getPricingForLocale(locale);

  return (
    <section className="relative isolate py-16 sm:py-20 bg-softodev-bg/60 overflow-hidden">
      {/* Premium background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-softodev-surface via-softodev-bg to-softodev-surface" />
        {/* glows */}
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-softodev-primary/10 blur-3xl" />
        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />
        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
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
            {isArabic ? "الأسعار" : "Pricing"}
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-softodev-text mb-3">
            {isArabic
              ? "باقات تبدأ من 199$ وتصل حتى مشاريع مخصصة للشركات"
              : "Plans from $199 up to fully custom company systems"}
          </h2>

          <p className="text-base sm:text-lg text-softodev-muted leading-relaxed">
            {isArabic
              ? "الأسعار تختلف حسب تفاصيل المشروع، لكن هذه نظرة سريعة على الباقات الرئيسية التي نقدمها."
              : "Prices vary based on your project details, but here’s a quick overview of our main plans."}
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="group relative rounded-2xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft h-full transition hover:-translate-y-1 hover:shadow-lg hover:border-softodev-primary/30"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-softodev-primarySoft via-softodev-surfaceStrong/70 to-softodev-bg/80 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

              <h3
                className={[
                  "text-base font-bold text-softodev-text mb-1",
                  isArabic ? "text-right" : "text-left",
                ].join(" ")}
              >
                {plan.name}
              </h3>

              <p
                className={[
                  "text-xl font-extrabold text-softodev-text mb-2",
                  isArabic ? "text-right" : "text-left",
                ].join(" ")}
              >
                {plan.priceLabel}
              </p>

              <p
                className={[
                  "text-sm text-softodev-muted leading-relaxed",
                  isArabic ? "text-right" : "text-left",
                ].join(" ")}
              >
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to full pricing */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`/${locale}/pricing`}
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-softodev-primary to-softodev-primaryDark shadow-soft hover:opacity-95 transition active:scale-[0.98]"
          >
            {isArabic ? "شاهد تفاصيل الأسعار كاملة" : "View full pricing details"}
          </Link>
        </div>
      </Container>
    </section>
  );
}
