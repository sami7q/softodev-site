// components/home/hero.tsx
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";

type HomeHeroProps = {
  locale: Locale;
};

export function HomeHero({ locale }: HomeHeroProps) {
  const isArabic = locale === "ar";

  return (
    <section className="pt-10 pb-8 sm:pt-12 sm:pb-10">
      <Container>
        <div
          className="flex flex-col items-center text-center gap-6"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* شريحة أعلى */}
          <div className="inline-flex items-center gap-2 rounded-full border border-softodev-border/70 bg-softodev-surface/80 px-3 py-1 text-[11px] text-softodev-muted shadow-sm">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            <span>
              {isArabic
                ? "أطلق موقعك أو متجرك خلال أيام، وليس شهورًا"
                : "Launch your website or store in days, not months"}
            </span>
          </div>

          {/* العنوان والنصوص */}
          <div className="space-y-4 max-w-2xl sm:max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight text-softodev-text">
              {isArabic ? (
                <>
                  نطوّر{" "}
                  <span className="text-softodev-primary font-semibold">
                    مواقع
                  </span>
                  ، متاجر إلكترونية، وأنظمة{" "}
                  <span className="text-softodev-primary font-semibold">
                    إدارة
                  </span>{" "}
                  مخصّصة لك.
                </>
              ) : (
                <>
                  We build tailored{" "}
                  <span className="text-softodev-primary font-semibold">
                    websites
                  </span>
                  , online stores, and{" "}
                  <span className="text-softodev-primary font-semibold">
                    management systems
                  </span>
                  .
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-softodev-muted">
              {isArabic ? (
                <>
                  من الفكرة إلى الإطلاق، نقدّم حلولًا{" "}
                  <span className="text-softodev-primary font-semibold">
                    سريعة
                  </span>
                  ، مستقرة،{" "}
                  <span className="text-softodev-primary font-semibold">
                    قابلة للتوسّع
                  </span>{" "}
                  مع نمو عملك.
                </>
              ) : (
                <>
                  From idea to launch, we deliver{" "}
                  <span className="text-softodev-primary font-semibold">
                    fast
                  </span>
                  , reliable,{" "}
                  <span className="text-softodev-primary font-semibold">
                    scalable
                  </span>{" "}
                  solutions as your business grows.
                </>
              )}
            </p>
          </div>

          {/* CTA: زر واتساب + زر Shahm بنفس الحجم */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row-reverse sm:items-center sm:justify-center gap-2.5 sm:gap-3">
            {/* زر واتساب */}
            <a
              href="https://wa.me/905015954826"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-softodev-primary px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-soft hover:bg-blue-700 transition-transform hover:-translate-y-0.5"
            >
              {isArabic ? "ابدأ على واتساب" : "Start on WhatsApp"}
            </a>

            {/* زر Shahm */}
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-soft hover:bg-emerald-600 transition-transform hover:-translate-y-0.5"
              data-cal-link="sami7q/business-impact-call"
              data-cal-namespace="shahm"
              data-cal-config='{"layout":"month_view"}'
            >
              <span className="mr-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/60 text-[10px] sm:text-[11px]">
                S
              </span>
              {isArabic
                ? "احجز جلسة مع Shahm"
                : "Schedule a meeting with Shahm"}
            </button>
          </div>

          {/* وصف صغير تحت الأزرار لـ Shahm */}
          <p className="mt-1 text-[11px] text-softodev-muted">
            {isArabic
              ? "Shahm – مستشارك الشخصي لتأثير الأعمال"
              : "Shahm – Your Personal Business Impact Guide"}
          </p>

          {/* نص الدول */}
          <p className="mt-2 text-[11px] text-softodev-muted">
            {isArabic
              ? "عملاءنا في السعودية، الإمارات، قطر، الكويت، البحرين، عُمان والعراق."
              : "We work with clients in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, Oman, and Iraq."}
          </p>
        </div>
      </Container>
    </section>
  );
}
