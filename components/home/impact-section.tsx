// components/home/impact-section.tsx
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";

type HomeImpactSectionProps = {
  locale: Locale;
};

export function HomeImpactSection({ locale }: HomeImpactSectionProps) {
  const isArabic = locale === "ar";

  const impactStatsEn = [
    { value: "5x", label: "More qualified inquiries" },
    { value: "23hrs", label: "Saved every month" },
    { value: "$50k+", label: "Handled through client systems" },
    { value: "100%", label: "Projects shipped on time" },
  ];

  const impactStatsAr = [
    { value: "٥x", label: "استفسارات مؤهلة أكثر" },
    { value: "٢٣ ساعة", label: "توفير شهري في الوقت" },
    { value: "+50k$", label: "إيرادات تُدار عبر الأنظمة" },
    { value: "100%", label: "مشاريع تُسلّم في موعدها" },
  ];

  const impactCardsEn = [
    {
      title: "Conversion-focused user experience",
      description:
        "Stop losing visitors because your website is slow or confusing. We design flows that feel simple and obvious.",
      bullets: [
        "Clear calls-to-action on every key page.",
        "Mobile-first layouts tuned for your audience.",
        "Copy and structure built to convert, not just look pretty.",
      ],
    },
    {
      title: "Reliable tech that doesn’t break",
      description:
        "Modern stacks and clean code so your site, store, or system stays fast and stable as you grow.",
      bullets: [
        "Next.js, Django and proven tools only.",
        "Performance-first mindset for every project.",
        "Built to scale when your traffic and team grow.",
      ],
    },
    {
      title: "A partner that thinks about impact",
      description:
        "We don’t just deliver a link. We help you connect it to real business results.",
      bullets: [
        "WhatsApp-based communication that fits your workflow.",
        "Clear roadmap from MVP to advanced phases.",
        "Honest advice on what to build now and what to delay.",
      ],
    },
  ];

  const impactCardsAr = [
    {
      title: "تجربة استخدام تركّز على التحويل",
      description:
        "لا تخسر الزوار بسبب موقع بطيء أو مربك. نصمّم مسارات بسيطة وواضحة تحوّل الزيارة إلى فعل.",
      bullets: [
        "أزرار دعوة لاتخاذ إجراء واضحة في الصفحات المهمة.",
        "تصميم يراعي استخدام الجوال وسلوك المستخدم.",
        "نصوص وهيكلة هدفها التحويل، ليس الشكل فقط.",
      ],
    },
    {
      title: "تقنيات موثوقة لا تنهار مع النمو",
      description:
        "نعتمد على تقنيات حديثة وكود نظيف ليبقى موقعك أو متجرك أو نظامك سريعًا ومستقرًا.",
      bullets: [
        "Next.js وDjango وأدوات مجرّبة فقط.",
        "أولوية دائمة للأداء والسرعة في كل مشروع.",
        "جاهزية كاملة للتوسّع مع زيادة الزوار والفريق.",
      ],
    },
    {
      title: "شريك يفكّر في تأثير العمل لا في الكود فقط",
      description:
        "لا نسلم رابطًا ونختفي. نساعدك تربط ما نبنيه بنتائج حقيقية في البزنس.",
      bullets: [
        "تواصل أساسي على واتساب بما يناسب طريقة عملك.",
        "خريطة طريق واضحة من نسخة أولى بسيطة إلى مراحل متقدّمة.",
        "نصائح صادقة حول ما يُبنى الآن وما يمكن تأجيله.",
      ],
    },
  ];

  const impactStats = isArabic ? impactStatsAr : impactStatsEn;
  const impactCards = isArabic ? impactCardsAr : impactCardsEn;

  return (
    <section className="relative py-12 sm:py-16">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-softodev-bg via-softodev-surface/80 to-softodev-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-softodev-primary/10 to-transparent" />

      <Container>
        {/* العنوان */}
        <div
          className="max-w-3xl mx-auto text-center"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-[11px] font-medium text-amber-700 border border-amber-200 shadow-[0_10px_30px_rgba(250,204,21,0.25)]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>
              {isArabic
                ? "توقّف عن خسارة العملاء"
                : "Stop losing opportunities"}
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-softodev-text">
            {isArabic ? (
              <>
                توقّف عن خسارة العملاء بسبب{" "}
                <span className="text-softodev-primary">
                  تجربة استخدام ضعيفة
                </span>
              </>
            ) : (
              <>
                Stop losing customers to{" "}
                <span className="text-softodev-primary">
                  poor user experience
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-softodev-muted">
            {isArabic ? (
              <>
                أغلب الزوار يتركون الموقع عندما يكون{" "}
                <span className="text-softodev-primary font-semibold">
                  بطيئًا
                </span>{" "}
                أو{" "}
                <span className="text-softodev-primary font-semibold">
                  مربكًا
                </span>
                . في SoftoDev نساعدك على تحويل هذا الترافيك إلى{" "}
                <span className="text-softodev-primary font-semibold">
                  مبيعات وحجوزات حقيقية
                </span>
                .
              </>
            ) : (
              <>
                Most visitors leave when a website feels{" "}
                <span className="text-softodev-primary font-semibold">
                  slow
                </span>{" "}
                or{" "}
                <span className="text-softodev-primary font-semibold">
                  confusing
                </span>
                . SoftoDev helps you turn that traffic into{" "}
                <span className="text-softodev-primary font-semibold">
                  real meetings, sales and bookings
                </span>
                .
              </>
            )}
          </p>
        </div>

        {/* الإحصائيات */}
        <div
          className="mt-8 sm:mt-9 max-w-4xl mx-auto"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <div className="rounded-3xl bg-softodev-surface/80 border border-softodev-border/70 shadow-[0_22px_60px_rgba(15,23,42,0.14)] px-4 py-4 sm:px-6 sm:py-5">
            <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-4">
              {impactStats.map((item, idx) => (
                <div
                  key={item.label}
                  className={`flex flex-col items-center justify-center rounded-2xl px-3 py-3 sm:px-3.5 sm:py-3.5 text-center ${
                    idx === 0
                      ? "bg-softodev-primarySoft/80 border border-softodev-primary/40"
                      : "bg-softodev-bg/70 border border-softodev-border/60"
                  }`}
                >
                  <div className="text-base sm:text-lg font-semibold text-softodev-primary">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-softodev-muted">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* الكروت */}
        <div
          className="mt-10 grid gap-6 md:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {impactCards.map((card, index) => (
            <article key={card.title} className="relative group h-full">
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-softodev-primary/16 via-softodev-primary/0 to-emerald-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative h-full rounded-[24px] border border-softodev-border/80 bg-gradient-to-b from-white via-softodev-surface to-softodev-bg/85 shadow-[0_18px_45px_rgba(15,23,42,0.14)] p-5 sm:p-6 overflow-hidden">
                {/* small index badge */}
                <div className="mb-2 flex items-center justify-between text-[11px] text-softodev-muted">
                  <span className="inline-flex items-center gap-1 rounded-full bg-softodev-primarySoft/60 px-2 py-0.5 text-[10px] font-medium text-softodev-primary">
                    {isArabic ? "نقطة قوة" : "Advantage"}{" "}
                    <span>{index + 1}</span>
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-softodev-text">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] sm:text-sm text-softodev-muted">
                  {card.description}
                </p>

                <ul className="mt-3 space-y-1.5 text-[12px] sm:text-[13px] text-softodev-muted">
                  {card.bullets.map((point) => (
                    <li key={point} className="flex gap-1.5">
                      <span className="mt-0.5 text-softodev-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/905015954826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-softodev-primary/40 bg-softodev-primarySoft/60 px-3.5 py-1.5 text-[11px] sm:text-[12px] font-semibold text-softodev-primary hover:bg-softodev-primary hover:text-white transition-colors"
                >
                  {isArabic
                    ? "اسألنا كيف نطبّق هذا في مشروعك"
                    : "Ask how this applies to your project"}
                  <span className="text-[11px]">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
