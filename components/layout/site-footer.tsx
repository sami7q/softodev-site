import Link from "next/link";
import type { ReactNode } from "react";

type Locale = "ar" | "en" | string;

type FooterItem = {
  label: string;
  href: string;
  external?: boolean;
};

export function SiteFooter({ locale }: { locale: Locale }) {
  const isRTL = locale === "ar";

  const cols: { title: string; items: FooterItem[] }[] = [
    {
      title: isRTL ? "الخدمات" : "Services",
      items: [
        { label: isRTL ? "صفحات الهبوط" : "Landing Pages", href: `/${locale}/services` },
        { label: isRTL ? "مواقع الشركات" : "Websites", href: `/${locale}/services` },
        { label: isRTL ? "المتاجر الإلكترونية" : "E-Commerce Stores", href: `/${locale}/services` },
        { label: isRTL ? "أنظمة الإدارة" : "Management Systems", href: `/${locale}/services` },
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
        { label: isRTL ? "واتساب" : "WhatsApp", href: "https://wa.me/905015954826", external: true },
        { label: isRTL ? "اتصال هاتفي" : "Call", href: "tel:+905015954826", external: true },
        { label: "sami22eng@gmail.com", href: "mailto:sami22eng@gmail.com", external: true },
      ],
    },
  ];

  // ✅ ids للـ accessibility (label -> input/select/textarea)
  const nameId = "footer-qf-name";
  const emailId = "footer-qf-email";
  const projectTypeId = "footer-qf-project-type";
  const messageId = "footer-qf-message";

  return (
    <footer
      className="border-t border-white/10 bg-softodev-primaryDark text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] gap-8">
          {/* Brand + mini form */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="rounded-2xl bg-white/6 border border-white/12 p-4 sm:p-5 shadow-soft max-w-md">
              <div className="text-[11px] font-semibold mb-2 text-white/90">
                {isRTL ? "طلب تواصل سريع" : "Quick project inquiry"}
              </div>

              {/* ✅ mailto بدل info@... */}
              <form
                className="space-y-3"
                action="mailto:info@softodev.net"
                method="POST"
                encType="text/plain"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    {/* ✅ label مرتبط */}
                    <label htmlFor={nameId} className="block text-[11px] text-white/80">
                      {isRTL ? "الاسم" : "Name"}
                    </label>
                    <input
                      id={nameId}
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={
                        isRTL ? "مثال: أحمد – صاحب مشروع" : "e.g. Ahmed – business owner"
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-softodev-primary/70"
                    />
                  </div>

                  <div className="space-y-1">
                    {/* ✅ label مرتبط */}
                    <label htmlFor={emailId} className="block text-[11px] text-white/80">
                      {isRTL ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-softodev-primary/70"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  {/* ✅ label مرتبط للـ select (هذا يحل تحذير Lighthouse) */}
                  <label htmlFor={projectTypeId} className="block text-[11px] text-white/80">
                    {isRTL ? "نوع المشروع" : "Project type"}
                  </label>
                  <select
                    id={projectTypeId}
                    name="project_type"
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-softodev-primary/70"
                  >
                    <option value="landing">{isRTL ? "صفحة هبوط" : "Landing page"}</option>
                    <option value="website">{isRTL ? "موقع تعريفي" : "Website"}</option>
                    <option value="store">{isRTL ? "متجر إلكتروني" : "Online store"}</option>
                    <option value="system">{isRTL ? "نظام إدارة" : "Management system"}</option>
                    <option value="other">{isRTL ? "أخرى" : "Other"}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  {/* ✅ label مرتبط */}
                  <label htmlFor={messageId} className="block text-[11px] text-white/80">
                    {isRTL ? "نبذة سريعة عن المشروع" : "Short project summary"}
                  </label>
                  <textarea
                    id={messageId}
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

                <p className="mt-1 text-[10px] text-white/70">
                  {isRTL
                    ? "سيتم فتح تطبيق البريد لديك مع رسالة تحتوي على هذه التفاصيل."
                    : "Your email app will open with these details pre-filled."}
                </p>
              </form>
            </div>
          </div>

          {/* Links */}
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
                  {col.items.map((it) => (
                    <li key={it.label}>
                      {it.external ? (
                        <a
                          href={it.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-white/80 hover:text-white transition"
                        >
                          {it.label}
                        </a>
                      ) : (
                        <Link
                          href={it.href}
                          className="text-xs sm:text-sm text-white/80 hover:text-white transition"
                        >
                          {it.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/75 ${
            isRTL ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className="text-white/80">
            © {new Date().getFullYear()} SoftoDev.{" "}
            {isRTL ? "كل الحقوق محفوظة." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <Link href={`/${locale}/privacy`} className="hover:text-white transition">
                {isRTL ? "الخصوصية" : "Privacy"}
              </Link>
              <span className="text-white/50">•</span>
              <Link href={`/${locale}/terms`} className="hover:text-white transition">
                {isRTL ? "الشروط" : "Terms"}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] text-white/75">
                {isRTL ? "تابعنا" : "Follow us"}
              </span>

              {/* ✅ خلّيناها <a> بدل button حتى ما يعتبرها تفاعلية بدون رابط */}
              <SocialLink
                href="#"
                ariaLabel={isRTL ? "صفحة فيسبوك" : "Facebook page"}
                label="Facebook"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </SocialLink>

              <SocialLink
                href="#"
                ariaLabel={isRTL ? "صفحة لينكدإن" : "LinkedIn page"}
                label="LinkedIn"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
              </SocialLink>

              <SocialLink
                href="#"
                ariaLabel={isRTL ? "حساب إنستغرام" : "Instagram account"}
                label="Instagram"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  ariaLabel?: string;
  children: ReactNode;
};

function SocialLink({ href, label, ariaLabel, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel ?? label}
      className="
        inline-flex h-8 w-8 items-center justify-center
        rounded-full border border-white/25 bg-white/8
        text-white/85 hover:text-white hover:border-white/70
        shadow-sm hover:shadow-md transition-transform transition-colors
        active:scale-95
      "
    >
      {children}
    </a>
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
