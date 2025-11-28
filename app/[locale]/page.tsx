// app/[locale]/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { HomePortfolioPreview } from "@/components/home/portfolio-preview";
import { HomePricingTeaser } from "@/components/home/pricing-teaser";
import { HomeBrandStrip } from "@/components/home/brand-strip";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "SoftoDev | شركة برمجة مواقع ومتاجر وأنظمة إدارة"
      : "SoftoDev | Web Development, E-commerce & Management Systems";

  const description =
    locale === "ar"
      ? "SoftoDev متخصصة في تطوير صفحات هبوط، متاجر إلكترونية، وأنظمة إدارة مخصصة لسوق الخليج والعراق مع تركيز على السرعة وتحويل الزوار إلى عملاء."
      : "SoftoDev builds landing pages, e-commerce stores, and custom management systems for the GCC and Iraq market, focused on speed and conversions.";

  const url = getCanonicalUrl(locale, "/");

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const servicesShowcaseEn = [
    {
      id: "landing",
      icon: "🧲",
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
      icon: "🛒",
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
      icon: "🏢",
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
      icon: "⚙️",
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
      icon: "📈",
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
      icon: "🤖",
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
      icon: "🧲",
      badge: "تركّز على التحويل",
      label: "صفحات الهبوط",
      title: "صفحات هبوط تحوّل إعلاناتك إلى عملاء",
      description:
        "صفحات مخصّصة لحملات TikTok وSnapchat وMeta وغيرها.",
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
      icon: "🛒",
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
      icon: "🏢",
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
      icon: "⚙️",
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
      icon: "📈",
      badge: "نمو",
      label: "التسويق الرقمي",
      title: "حملات تجلب الزيارات الصحيحة لا العشوائية",
      description:
        "من إعداد الحملات إلى تحسين صفحات الهبوط والتقارير.",
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
      icon: "🤖",
      badge: "ذكاء اصطناعي",
      label: "روبوتات ذكاء اصطناعي للموقع",
      title: "مساعدات ذكية مدرّبة على خدماتك",
      description:
        "شات بوت مدمج في موقعك يجاوب على أسئلة العملاء 24/7.",
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
    <div className="relative">
      {/* خلفية ناعمة مع Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-sky-100/80 blur-3xl" />
      </div>

      {/* HERO */}
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

      {/* شريط البراندات المتحرك */}
      <HomeBrandStrip locale={locale} />

      {/* قسم الخدمات – بطاقات متقدّمة */}
      <section className="py-10 sm:py-16 bg-softodev-surface/40">
        <Container>
         {/* العنوان */}
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
        <span className="text-softodev-primary">رحلة عملك</span> من أول صفحة
        هبوط إلى أنظمة{" "}
        <span className="text-softodev-primary">الذكاء الاصطناعي</span>
      </>
    ) : (
      <>
        Six <span className="text-softodev-primary">services</span> that cover
        your <span className="text-softodev-primary">journey</span> from first
        landing page to{" "}
        <span className="text-softodev-primary">AI-powered systems</span>
      </>
    )}
  </h2>

  <p className="mt-3 text-sm sm:text-base text-softodev-muted">
    {isArabic ? (
      <>
        كل بطاقة تمثّل{" "}
        <span className="text-softodev-primary">حلاً حقيقيًا</span>{" "}
        <span className="text-softodev-primary">قابلًا للتنفيذ</span>، وليس
        مجرد عنوان تسويقي.
      </>
    ) : (
      <>
        Each card represents a{" "}
        <span className="text-softodev-primary">real</span>,{" "}
        <span className="text-softodev-primary">shippable solution</span> – not
        just a buzzword on a slide.
      </>
    )}
  </p>
</div>


          {/* البطاقات */}
          <div
            className="
              mt-8 sm:mt-10
              grid gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
            dir={isArabic ? "rtl" : "ltr"}
          >
            {servicesShowcase.map((service) => (
              <article
                key={service.id}
                className="
                  relative group
                  rounded-[28px]
                  bg-gradient-to-b from-white/95 via-white to-softodev-bg/70
                  border border-softodev-border/70
                  shadow-[0_22px_60px_rgba(15,23,42,0.12)]
                  overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(15,23,42,0.2)]
                  hover:border-softodev-primary/40
                "
              >
                {/* هالة حول البطاقة على الهوفر */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-br from-softodev-primary/8 via-transparent to-emerald-400/6
                  "
                />

                {/* محتوى البطاقة */}
                <div className="relative flex flex-col h-full">
                  {/* شريط علوي يشبه الجهاز */}
                  <div className="px-4 pt-4 sm:px-5 sm:pt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="
                          flex h-8 w-8 items-center justify-center
                          rounded-2xl bg-softodev-primary/10
                          text-base
                        "
                      >
                        {service.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-softodev-text">
                          {service.label}
                        </span>
                        <span className="text-[10px] text-softodev-muted">
                          {isArabic ? "حل متكامل" : "Done-for-you solution"}
                        </span>
                      </div>
                    </div>
                    <span
                      className="
                        inline-flex items-center rounded-full
                        bg-emerald-50 px-2 py-0.5
                        text-[10px] font-semibold text-emerald-600
                      "
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* النص والتفاصيل */}
                  <div className="px-4 pb-4 pt-2 sm:px-5 sm:pb-5 flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-softodev-text">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] sm:text-sm text-softodev-muted">
                      {service.description}
                    </p>

                    <ul className="mt-3 space-y-1.5 text-[12px] sm:text-[13px] text-softodev-muted">
                      {service.bullets.map((point) => (
                        <li key={point} className="flex gap-1.5">
                          <span className="mt-0.5 text-softodev-primary">
                            ✓
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* الروابط */}
                    <div className="mt-4 flex flex-col gap-1.5 text-[12px] sm:text-[13px]">
                      <a
                        href={isArabic ? "/ar/contact" : "/en/contact"}
                        className="
                          inline-flex items-center gap-1
                          text-softodev-primary font-semibold
                          hover:underline
                        "
                      >
                        {isArabic
                          ? "اطلب عرض سعر لهذه الخدمة"
                          : "Request a quote for this service"}
                        <span>→</span>
                      </a>
                      <a
                        href="https://wa.me/905015954826"
                        className="
                          inline-flex items-center gap-1
                          text-softodev-muted hover:text-softodev-primary
                        "
                      >
                        {isArabic
                          ? "سؤال سريع على واتساب"
                          : "Quick question on WhatsApp"}
                      </a>
                    </div>
                  </div>

                  {/* شريط سفلي – أرقام ومؤشرات */}
                  <div
                    className="
                      border-t border-softodev-border/60
                      bg-white/90 backdrop-blur-sm
                      px-4 py-3 sm:px-5
                      flex items-center justify-between
                      text-[11px] sm:text-[12px] text-softodev-muted
                    "
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-softodev-primary">
                        {service.metricLeft.value}
                      </span>
                      <span>{service.metricLeft.label}</span>
                    </div>
                    <div className="h-8 w-px bg-softodev-border/60" />
                    <div className="flex flex-col text-right">
                      <span className="font-semibold text-softodev-primary">
                        {service.metricRight.value}
                      </span>
                      <span>{service.metricRight.label}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Teaser للأسعار */}
      <HomePricingTeaser locale={locale} />

      {/* Teaser للأعمال */}
      <HomePortfolioPreview locale={locale} />
    </div>
  );
}
