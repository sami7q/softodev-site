import Image from "next/image";
import Link from "next/link";

type Locale = "ar" | "en" | string;

export function SiteFooter({ locale }: { locale: Locale }) {
  const isRTL = locale === "ar";

  const cols = [
    {
      title: isRTL ? "الخدمات" : "Services",
      items: [
        {
          label: isRTL ? "صفحات الهبوط" : "Landing Pages",
          href: `/${locale}/services`,
        },
        {
          label: isRTL ? "مواقع الشركات" : "Websites",
          href: `/${locale}/services`,
        },
        {
          label: isRTL ? "المتاجر الإلكترونية" : "E-Commerce Stores",
          href: `/${locale}/services`,
        },
        {
          label: isRTL ? "أنظمة الإدارة" : "Management Systems",
          href: `/${locale}/services`,
        },
      ],
    },
    {
      title: isRTL ? "الشركة" : "Company",
      items: [
        { label: isRTL ? "من نحن" : "About", href: `/${locale}/about` },
        { label: isRTL ? "الأعمال" : "Portfolio", href: `/${locale}/portfolio` },
        { label: isRTL ? "الأسعار" : "Pricing", href: `/${locale}/pricing` },
        { label: isRTL ? "تواصل" : "Contact", href: `/${locale}/contact` },
      ],
    },
    {
      title: isRTL ? "تواصل" : "Contact",
      items: [
        {
          label: isRTL ? "واتساب" : "WhatsApp",
          href: "https://wa.me/905015954826",
          external: true,
        },
        {
          label: isRTL ? "اتصال هاتفي" : "Call",
          href: "tel:+905015954826",
          external: true,
        },
        {
          label: "sami22eng@gmail.com",
          href: "mailto:sami22eng@gmail.com",
          external: true,
        },
      ] as any,
    },
  ];

  return (
    <footer
      className="border-t border-white/10 bg-softodev-primaryDark text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
        {/* أعلى الفوتر: براند + فورم + روابط */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] gap-8">
          {/* Brand + mini form */}
          <div className={isRTL ? "text-right" : "text-left"}>
            {/* Brand – لوغو فقط بدون مربع، بحجم أكبر */}
            <div className="flex items-center mb-3 justify-start">
              <div className="flex items-center h-9 sm:h-10">
                <Image
                  src="/logo/logo.png"
                  alt="SoftoDev logo"
                  width={140}
                  height={40}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 max-w-md">
              {isRTL
                ? "نطوّر مواقع، متاجر وأنظمة إدارة بسيطة وسريعة لسوق الخليج والعراق، مع تركيز على الأداء وتجربة المستخدم."
                : "We build clean, fast websites, stores, and management systems for the GCC & Iraq market, with a focus on performance and UX."}
            </p>

            {/* mini contact form – صغير ومرتب */}
            <div className="rounded-2xl bg-white/6 border border-white/12 p-4 sm:p-5 shadow-soft max-w-md">
              <div className="text-[11px] font-semibold mb-2 text-white/80">
                {isRTL ? "طلب تواصل سريع" : "Quick project inquiry"}
              </div>

              <form
                className="space-y-3"
                action="mailto:sami22eng@gmail.com"
                method="POST"
                encType="text/plain"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[11px] text-white/70">
                      {isRTL ? "الاسم" : "Name"}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={
                        isRTL ? "مثال: أحمد من الرياض" : "e.g. Ahmed from Riyadh"
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-softodev-primary/70"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] text-white/70">
                      {isRTL ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-softodev-primary/70"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div className="space-y-1">
                  <label className="block text-[11px] text-white/70">
                    {isRTL ? "نوع المشروع" : "Project type"}
                  </label>
                  <select
                    name="project_type"
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-softodev-primary/70"
                  >
                    <option value="landing">
                      {isRTL ? "صفحة هبوط" : "Landing page"}
                    </option>
                    <option value="website">
                      {isRTL ? "موقع تعريفي" : "Website"}
                    </option>
                    <option value="store">
                      {isRTL ? "متجر إلكتروني" : "Online store"}
                    </option>
                    <option value="system">
                      {isRTL ? "نظام إدارة" : "Management system"}
                    </option>
                    <option value="other">
                      {isRTL ? "أخرى" : "Other"}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-[11px] text-white/70">
                    {isRTL ? "نبذة سريعة عن المشروع" : "Short project summary"}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={
                      isRTL
                        ? "مثال: نحتاج صفحة هبوط لمنتج جديد مع زر واتساب ونموذج تواصل."
                        : "e.g. Need a landing page for a new product with WhatsApp CTA and contact form."
                    }
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-softodev-primary/70 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-white text-[11px] font-semibold text-softodev-primaryDark px-3 py-2 shadow-soft hover:bg-slate-50 transition"
                >
                  {isRTL ? "إرسال التفاصيل عبر البريد" : "Send details via email"}
                </button>

                <p className="mt-1 text-[10px] text-white/50">
                  {isRTL
                    ? "سيتم فتح تطبيق البريد لديك مع رسالة تحتوي على هذه التفاصيل."
                    : "Your email app will open with these details pre-filled."}
                </p>
              </form>
            </div>
          </div>

          {/* روابط الفوتر – خفيفة ومنسقة */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {cols.map((col) => (
              <div key={col.title}>
                <div className="text-sm font-semibold text-white mb-2">
                  {col.title}
                </div>
                <ul className="space-y-1.5">
                  {col.items.map((it: any) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        target={it.external ? "_blank" : undefined}
                        rel={it.external ? "noopener noreferrer" : undefined}
                        className="text-xs sm:text-sm text-white/70 hover:text-white transition"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} SoftoDev.{" "}
            {isRTL ? "كل الحقوق محفوظة." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-white transition"
            >
              {isRTL ? "الخصوصية" : "Privacy"}
            </Link>
            <span>•</span>
            <Link
              href={`/${locale}/terms`}
              className="hover:text-white transition"
            >
              {isRTL ? "الشروط" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
