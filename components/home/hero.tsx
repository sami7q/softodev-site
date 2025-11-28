import Link from "next/link";

export function HomeHero({ locale }: { locale: "ar" | "en" }) {
  const isRTL = locale === "ar";

  return (
    <section className="relative isolate overflow-hidden bg-softodev-bg/60">
      {/* Premium background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-softodev-primarySoft via-softodev-bg to-softodev-surface" />
        {/* radial glows (كلها على الأزرق الأساسي) */}
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_10%,rgba(30,90,239,0.18),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(30,90,239,0.14),transparent_50%)]" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:36px_36px]" />
        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* كل شيء في المنتصف */}
        <div className={`flex flex-col items-center text-center gap-8 ${isRTL ? "direction-rtl" : ""}`}>
          {/* الشارة الصغيرة */}
          <div className="inline-flex items-center gap-2 rounded-full bg-softodev-surface/90 border border-softodev-border px-3 py-1 text-xs font-semibold text-softodev-muted shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-softodev-primary" />
            {isRTL
              ? "أطلق موقعك أو متجرك خلال أيام، وليس شهورًا"
              : "Launch your website or store in days, not months"}
          </div>

          {/* العنوان والنص */}
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-softodev-text leading-tight">
              {isRTL
                ? "نصنع مواقع، متاجر وأنظمة إدارة لسوق الخليج والعراق."
                : "We craft websites, stores & management systems for the GCC & Iraq market."}
            </h1>

            <p className="text-base sm:text-lg text-softodev-muted leading-relaxed">
              {isRTL
                ? "من صفحات الهبوط البسيطة إلى المتاجر الإلكترونية الكاملة وأنظمة إدارة العيادات والشركات — SoftoDev تبني حلولًا سريعة، نظيفة، وقابلة للتوسع، مصممة لسوقك."
                : "From simple landing pages to full e-commerce stores and management systems for clinics and companies — SoftoDev builds fast, clean, and scalable solutions tailored to your market."}
            </p>
          </div>

          {/* زر واتساب فقط */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full bg-gradient-to-r from-softodev-primary to-softodev-primaryDark text-white px-6 py-3 text-sm sm:text-base font-bold shadow-soft hover:opacity-95 transition active:scale-[0.98]"
            >
              {isRTL ? "ابدأ على واتساب" : "Start on WhatsApp"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
