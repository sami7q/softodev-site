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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="inline-flex items-center gap-2 rounded-full bg-softodev-surface/90 border border-softodev-border px-3 py-1 text-xs font-semibold text-softodev-muted shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-softodev-primary" />
              {isRTL
                ? "أطلق موقعك أو متجرك خلال أيام"
                : "Launch your website/store in days"}
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-softodev-text leading-tight">
              {isRTL
                ? "نصنع مواقع، متاجر وأنظمة إدارة عالية الأداء لسوق الخليج والعراق."
                : "We craft high-performance websites, stores & systems for GCC & Iraq."}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-softodev-muted leading-relaxed max-w-xl">
              {isRTL
                ? "من صفحات الهبوط البسيطة إلى أنظمة الإدارة المعقدة — نركز على السرعة، تجربة المستخدم، ونتائج قابلة للقياس."
                : "From simple landing pages to complex management systems — we focus on speed, UX, and measurable results."}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl bg-gradient-to-r from-softodev-primary to-softodev-primaryDark text-white px-5 py-3 font-bold shadow-soft hover:opacity-95 transition active:scale-[0.98]"
              >
                {isRTL ? "ابدأ على واتساب" : "Start on WhatsApp"}
              </Link>

              <Link
                href={`/${locale}/pricing`}
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl bg-softodev-surface/95 border border-softodev-border text-softodev-text px-5 py-3 font-bold hover:border-softodev-primary/40 transition active:scale-[0.98]"
              >
                {isRTL ? "عرض الباقات والأسعار" : "View pricing plans"}
              </Link>
            </div>

            {/* Mini features row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  title: isRTL
                    ? "صفحات تسويقية جاهزة للإعلانات"
                    : "Ads-ready landing pages",
                  desc: isRTL ? "مهيأة للتحويل والبيع" : "Conversion-focused & fast",
                },
                {
                  title: isRTL ? "متاجر سريعة وتجربة سلسة" : "Fast online stores",
                  desc: isRTL ? "دفع وشحن بسهولة" : "Payments + shipping setup",
                },
                {
                  title: isRTL ? "أنظمة إدارة مخصصة" : "Custom management systems",
                  desc: isRTL ? "حسب سير عملك" : "Tailored to your workflow",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-softodev-border bg-softodev-surface/95 p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:border-softodev-primary/30"
                >
                  <div className="text-sm font-bold text-softodev-text">
                    {f.title}
                  </div>
                  <div className="mt-1 text-sm text-softodev-muted">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-3xl bg-softodev-surface/95 border border-softodev-border shadow-soft p-6">
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-softodev-primarySoft to-softodev-bg border border-softodev-border overflow-hidden">
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_10%,rgba(30,90,239,0.22),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(30,90,239,0.16),transparent_45%)]" />
                <div className="absolute inset-6 rounded-xl bg-softodev-surface border border-softodev-border shadow-soft" />
                <div className="absolute bottom-6 left-6 right-6 h-12 rounded-lg bg-softodev-bg border border-softodev-border" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-softodev-muted">
                <div className="rounded-xl bg-softodev-bg p-3 border border-softodev-border">
                  <div className="font-bold text-softodev-text">Speed</div>
                  95+ Lighthouse
                </div>
                <div className="rounded-xl bg-softodev-bg p-3 border border-softodev-border">
                  <div className="font-bold text-softodev-text">SEO</div>
                  90+ Score
                </div>
                <div className="rounded-xl bg-softodev-bg p-3 border border-softodev-border">
                  <div className="font-bold text-softodev-text">
                    {isRTL ? "جاهز للإعلانات" : "Ads-ready"}
                  </div>
                  Landing Pages
                </div>
              </div>
            </div>

            {/* extra glow behind visual */}
            <div className="pointer-events-none absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-tr from-softodev-primary/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
