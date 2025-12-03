import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
            

            {/* mini contact form – صغير ومرتب */}
            <div className="rounded-2xl bg-white/6 border border-white/12 p-4 sm:p-5 shadow-soft max-w-md">
              <div className="text-[11px] font-semibold mb-2 text-white/80">
                {isRTL ? "طلب تواصل سريع" : "Quick project inquiry"}
              </div>

              <form
                className="space-y-3"
                action="info@softodev.net"
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
                        isRTL
                          ? "مثال: أحمد – صاحب مشروع"
                          : "e.g. Ahmed – business owner"
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
        <div
          className={`pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/60 ${
            isRTL ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div>
            © {new Date().getFullYear()} SoftoDev.{" "}
            {isRTL ? "كل الحقوق محفوظة." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-4">
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

            {/* Social icons – بدون روابط الآن */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                {isRTL ? "تابعنا" : "Follow us"}
              </span>
              <SocialIcon
                label="Facebook"
                ariaLabel={isRTL ? "صفحة فيسبوك" : "Facebook page"}
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </SocialIcon>
              <SocialIcon
                label="LinkedIn"
                ariaLabel={isRTL ? "صفحة لينكدإن" : "LinkedIn page"}
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
              </SocialIcon>
              <SocialIcon
                label="Instagram"
                ariaLabel={isRTL ? "حساب إنستغرام" : "Instagram account"}
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type SocialIconProps = {
  label: string;
  ariaLabel?: string;
  children: ReactNode;
};

function SocialIcon({ label, ariaLabel, children }: SocialIconProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel ?? label}
      className="
        inline-flex h-8 w-8 items-center justify-center
        rounded-full border border-white/20 bg-white/5
        text-white/80 hover:text-white hover:border-white/70
        shadow-sm hover:shadow-md transition-transform transition-colors
        active:scale-95
      "
    >
      {children}
    </button>
  );
}

/* ====== SVG Icons ====== */

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 8h2.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H14a4 4 0 0 0-4 4v3H8a1 1 0 0 0-1 1v2.1a1 1 0 0 0 1 1H10v5.2a1 1 0 0 0 1 1h2.1a1 1 0 0 0 1-1V14.1h2.1a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H14V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 5.5A2 2 0 1 1 2 5.5a2 2 0 0 1 4 0Zm.2 4.1H2.8a.8.8 0 0 0-.8.8v8.1a.8.8 0 0 0 .8.8h3.4a.8.8 0 0 0 .8-.8v-8.1a.8.8 0 0 0-.8-.8Zm4.6 0H8.1a.8.8 0 0 0-.8.8v8.1a.8.8 0 0 0 .8.8h2.7a.8.8 0 0 0 .8-.8v-4.3c0-1.3.7-2.1 1.8-2.1 1 0 1.6.6 1.6 2.1v4.3a.8.8 0 0 0 .8.8h2.7a.8.8 0 0 0 .8-.8v-5.1c0-3-1.6-4.6-4.1-4.6-1.8 0-2.6.9-3.1 1.6h-.1l-.1-1.2a.8.8 0 0 0-.8-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={5}
        ry={5}
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={1.4} />
      <circle cx={17} cy={7} r={1.1} fill="currentColor" />
    </svg>
  );
}
