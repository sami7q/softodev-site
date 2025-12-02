// components/home/services-section.tsx
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";

type HomeServicesSectionProps = {
  locale: Locale;
};

export function HomeServicesSection({ locale }: HomeServicesSectionProps) {
  const isArabic = locale === "ar";

  const servicesShowcaseEn = [
    {
      id: "landing",
      short: "LP",
      badge: "High-converting",
      label: "Landing Pages",
      title: "Landing pages built to turn ads into clients",
      description:
        "Single-focus pages for campaigns on TikTok, Snapchat, Meta and more.",
      bullets: [
        "Professional design matched to your brand and offer.",
        "Focused structure with one main CTA – no distractions.",
        "Lightning-fast loading for better ad performance.",
      ],
      metricLeft: { value: "2–3 days", label: "Avg. launch time" },
      metricRight: { value: "+30%", label: "Conversion uplift" },
    },
    {
      id: "stores",
      short: "ES",
      badge: "E-Commerce",
      label: "Online Stores",
      title: "Sales-ready online stores with payments & shipping",
      description:
        "Full e-commerce setups tailored to your country and logistics.",
      bullets: [
        "Payment gateways & shipping options tuned to your market.",
        "Simple admin to manage products, orders, and discounts.",
        "Responsive design that works beautifully on all devices.",
      ],
      metricLeft: { value: "500+ products", label: "Scale-ready" },
      metricRight: { value: "4.8/5", label: "Client rating" },
    },
    {
      id: "websites",
      short: "CW",
      badge: "Corporate",
      label: "Full Websites",
      title: "Company, clinic & startup websites end-to-end",
      description:
        "Multi-page websites that explain what you do and why you’re different.",
      bullets: [
        "Clear information architecture for your services & story.",
        "SEO-friendly content structure from day one.",
        "Contact forms, maps, WhatsApp and booking CTAs.",
      ],
      metricLeft: { value: "SEO-ready", label: "Structure" },
      metricRight: { value: "Multi-page", label: "Scalable content" },
    },
    {
      id: "systems",
      short: "MS",
      badge: "Back-Office",
      label: "Business Systems",
      title: "Custom systems for clinics, stores & companies",
      description:
        "Internal tools that manage your invoices, bookings, clients and more.",
      bullets: [
        "Dashboards for finance, clients, bookings, and operations.",
        "Online or offline workflows depending on your team.",
        "Architecture ready to grow with your business.",
      ],
      metricLeft: { value: "99.9%", label: "Uptime target" },
      metricRight: { value: "∞", label: "Grows with you" },
    },
    {
      id: "marketing",
      short: "DM",
      badge: "Growth",
      label: "Digital Marketing",
      title: "Campaigns designed to bring the right traffic",
      description:
        "From campaign setup to landing page optimizations and simple reports.",
      bullets: [
        "Campaigns on the platforms that fit your audience.",
        "Landing page tweaks to increase conversion rate.",
        "Clear reports focused on the metrics that matter.",
      ],
      metricLeft: { value: "+ROAS", label: "Better ad spend" },
      metricRight: { value: "Done-for-you", label: "Execution" },
    },
    {
      id: "ai-bots",
      short: "AI",
      badge: "AI",
      label: "AI Website Bots",
      title: "AI assistants trained on your services",
      description:
        "Custom chatbots embedded in your site to answer questions 24/7.",
      bullets: [
        "Answers common questions about pricing, services and process.",
        "Trained on your website content and internal docs.",
        "Smooth integration without breaking your current design.",
      ],
      metricLeft: { value: "24/7", label: "Availability" },
      metricRight: { value: "-40%", label: "Support load" },
    },
  ];

  const servicesShowcaseAr = [
    {
      id: "landing",
      short: "LP",
      badge: "تركّز على التحويل",
      label: "صفحات الهبوط",
      title: "صفحات هبوط تحوّل إعلاناتك إلى عملاء",
      description: "صفحات مخصّصة لحملات TikTok وSnapchat وMeta وغيرها.",
      bullets: [
        "تصميم احترافي متوافق مع هويتك والعرض التسويقي.",
        "هيكلة مركّزة مع زر أساسي واحد بدون تشتيت.",
        "سرعة تحميل عالية لتحسين أداء الإعلانات.",
      ],
      metricLeft: { value: "2–3 أيام", label: "متوسط وقت الإطلاق" },
      metricRight: { value: "+30%", label: "تحسّن في التحويل" },
    },
    {
      id: "stores",
      short: "ES",
      badge: "متاجر إلكترونية",
      label: "المتاجر الإلكترونية",
      title: "متاجر جاهزة للبيع مع الدفع والشحن",
      description:
        "إعداد متجر متكامل يناسب سوقك وطرق الدفع والشحن المتاحة.",
      bullets: [
        "بوابات دفع وخيارات شحن مناسبة لدولتك.",
        "لوحة تحكم بسيطة لإدارة المنتجات والطلبات والعروض.",
        "تصميم متجاوب يعمل بسلاسة على جميع الأجهزة.",
      ],
      metricLeft: { value: "500+ منتج", label: "قابلة للتوسّع" },
      metricRight: { value: "4.8/5", label: "رضا العملاء" },
    },
    {
      id: "websites",
      short: "CW",
      badge: "مواقع شركات",
      label: "مواقع كاملة",
      title: "مواقع للشركات والعيادات والستارت أب",
      description:
        "مواقع متعددة الصفحات تشرح مشروعك، خدماتك، وقيمتك المضافة.",
      bullets: [
        "هيكلة واضحة للمحتوى والخدمات وقصّة العلامة.",
        "بنية محتوى صديقة لمحركات البحث من البداية.",
        "نماذج تواصل، خرائط، وأزرار واتساب وحجز مواعيد.",
      ],
      metricLeft: { value: "جاهزة للسيو", label: "هيكلة المحتوى" },
      metricRight: { value: "متعددة الصفحات", label: "قابلة للتطوير" },
    },
    {
      id: "systems",
      short: "MS",
      badge: "أنظمة إدارة",
      label: "أنظمة أعمال مخصّصة",
      title: "أنظمة لإدارة الشركات والمتاجر والعيادات",
      description:
        "أدوات داخلية تنظّم الفواتير، الحجوزات، العملاء والعمليات.",
      bullets: [
        "لوحات تحكم للماليات، العملاء والحجوزات والمهام.",
        "إمكانية العمل أونلاين أو أوفلاين حسب أسلوب فريقك.",
        "هيكلية جاهزة للنمو مع توسّع عملك.",
      ],
      metricLeft: { value: "99.9%", label: "استقرار مستهدف" },
      metricRight: { value: "∞", label: "تنمو معك" },
    },
    {
      id: "marketing",
      short: "DM",
      badge: "نمو",
      label: "التسويق الرقمي",
      title: "حملات تجلب الزيارات الصحيحة لا العشوائية",
      description: "من إعداد الحملات إلى تحسين صفحات الهبوط والتقارير.",
      bullets: [
        "حملات على المنصات الأنسب لشريحتك المستهدفة.",
        "تحسين صفحات الهبوط لرفع نسبة التحويل.",
        "تقارير بسيطة تركّز على الأرقام المهمة فقط.",
      ],
      metricLeft: { value: "+عائد الإعلانات", label: "إنفاق أذكى" },
      metricRight: { value: "تنفيذ كامل", label: "Done-for-you" },
    },
    {
      id: "ai-bots",
      short: "AI",
      badge: "ذكاء اصطناعي",
      label: "روبوتات ذكاء اصطناعي للموقع",
      title: "مساعدات مدرّبة على خدماتك",
      description: "شات بوت مدمج في موقعك يجاوب على أسئلة العملاء 24/7.",
      bullets: [
        "يرد على الأسئلة المتكررة عن الأسعار والخدمات والعملية.",
        "مدرّب على محتوى موقعك وملفاتك الداخلية.",
        "دمج سلس بدون تخريب تصميم موقعك الحالي.",
      ],
      metricLeft: { value: "24/7", label: "متاح دائمًا" },
      metricRight: { value: "-40%", label: "عبء دعم أقل" },
    },
  ];

  const servicesShowcase = isArabic ? servicesShowcaseAr : servicesShowcaseEn;

  return (
    <section className="py-10 sm:py-16 bg-softodev-surface/40">
      <Container>
        {/* Section header */}
        <div
          className="max-w-3xl mx-auto text-center"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-softodev-muted">
            {isArabic ? (
              <>
                ماذا نستطيع أن{" "}
                <span className="text-softodev-primary">نبنيه</span>{" "}
                <span className="text-softodev-primary">لك؟</span>
              </>
            ) : (
              <>
                WHAT WE CAN{" "}
                <span className="text-softodev-primary">BUILD</span> FOR{" "}
                <span className="text-softodev-primary">YOU</span>
              </>
            )}
          </p>

          <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-softodev-text">
            {isArabic ? (
              <>
                <span className="text-softodev-primary">ست خدمات</span> تغطي{" "}
                <span className="text-softodev-primary">رحلة عملك</span> من أول
                صفحة هبوط إلى أنظمة{" "}
                <span className="text-softodev-primary">الذكاء الاصطناعي</span>
              </>
            ) : (
              <>
                Six <span className="text-softodev-primary">services</span> that
                cover your <span className="text-softodev-primary">journey</span>{" "}
                from first landing page to{" "}
                <span className="text-softodev-primary">
                  AI-powered systems
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-softodev-muted">
            {isArabic ? (
              <>
                كل بطاقة تمثّل{" "}
                <span className="text-softodev-primary">حلاً حقيقيًا</span>{" "}
                <span className="text-softodev-primary">
                  قابلًا للتنفيذ
                </span>
                ، وليس مجرد عنوان تسويقي.
              </>
            ) : (
              <>
                Each card represents a{" "}
                <span className="text-softodev-primary">real</span>,{" "}
                <span className="text-softodev-primary">
                  shippable solution
                </span>{" "}
                – not just a buzzword on a slide.
              </>
            )}
          </p>
        </div>

        {/* Cards */}
        <div
          className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {servicesShowcase.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <article key={service.id} className="relative group h-full">
                {/* soft outer glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-softodev-primary/18 via-softodev-primary/0 to-emerald-400/18 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* main card */}
                <div
                  className={`
                    relative flex h-full flex-col rounded-[30px] overflow-hidden
                    border border-softodev-border/80
                    bg-gradient-to-b from-white/95 via-softodev-surface to-softodev-bg/80
                    shadow-soft
                    transition-transform duration-300
                    group-hover:-translate-y-1 group-hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]
                  `}
                >
                  {/* top stripe */}
                  <div
                    className={
                      isFeatured
                        ? "h-1 w-full bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]"
                        : "h-1 w-full bg-softodev-primary/70"
                    }
                  />

                  {/* header row */}
                  <div className="flex items-center justify-between px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-4 border-b border-softodev-border/60 bg-softodev-bg/70 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-softodev-primary/10 text-[11px] font-semibold text-softodev-primary">
                        {service.short}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-softodev-text">
                          {service.label}
                        </span>
                        <span className="text-[11px] text-softodev-muted">
                          {isArabic
                            ? "حل مُدار بالكامل لك"
                            : "Done-for-you solution"}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center rounded-full bg-softodev-primarySoft/60 px-2.5 py-0.5 text-[10px] font-semibold text-softodev-primary">
                        {service.badge}
                      </span>
                      {isFeatured && (
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                          {isArabic ? "الأكثر طلبًا" : "Most popular"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-softodev-text">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] sm:text-sm text-softodev-muted">
                        {service.description}
                      </p>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-[12px] sm:text-[13px] text-softodev-muted">
                      {service.bullets.map((point) => (
                        <li key={point} className="flex gap-1.5">
                          <span className="mt-0.5 text-softodev-primary">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA + metrics */}
                    <div className="mt-4 pt-3 border-t border-softodev-border/50 flex flex-col gap-3">
                      {/* buttons */}
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={isArabic ? "/ar/contact" : "/en/contact"}
                          className="inline-flex items-center gap-1.5 rounded-full bg-softodev-primary px-3.5 py-1.5 text-[11px] sm:text-[12px] font-semibold text-white shadow-soft hover:bg-softodev-primaryDark transition-colors"
                        >
                          {isArabic
                            ? "اطلب عرض سعر لهذه الخدمة"
                            : "Request a quote for this service"}
                          <span className="text-[11px]">→</span>
                        </a>

                        <a
                          href="https://wa.me/905015954826"
                          className="inline-flex items-center gap-1.5 rounded-full bg-softodev-surfaceStrong px-3 py-1.5 text-[11px] sm:text-[12px] font-medium text-softodev-text hover:bg-softodev-primarySoft/80 hover:text-softodev-primary transition-colors"
                        >
                          {isArabic
                            ? "سؤال سريع على واتساب"
                            : "Quick question on WhatsApp"}
                        </a>
                      </div>

                      {/* metrics chips */}
                      <div className="flex flex-wrap gap-2 sm:justify-end text-[11px] sm:text-[12px]">
                        <div className="inline-flex items-baseline gap-1 rounded-full bg-softodev-primarySoft/70 px-3 py-1">
                          <span className="font-semibold text-softodev-primary">
                            {service.metricLeft.value}
                          </span>
                          <span className="text-softodev-muted">
                            {service.metricLeft.label}
                          </span>
                        </div>
                        <div className="inline-flex items-baseline gap-1 rounded-full bg-softodev-primarySoft/40 px-3 py-1">
                          <span className="font-semibold text-softodev-primary">
                            {service.metricRight.value}
                          </span>
                          <span className="text-softodev-muted">
                            {service.metricRight.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
