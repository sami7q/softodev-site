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
        { label: isRTL ? "المواقع" : "Websites", href: `/${locale}/services` },
        {
          label: isRTL ? "المتاجر" : "E-Commerce Stores",
          href: `/${locale}/services`,
        },
        {
          label: isRTL ? "أنظمة الإدارة" : "Management Systems",
          href: `/${locale}/services`,
        },
        { label: "MVP", href: `/${locale}/services` },
      ],
    },
    {
      title: isRTL ? "الشركة" : "Company",
      items: [
        { label: isRTL ? "من نحن" : "About", href: `/${locale}/about` },
        {
          label: isRTL ? "الأعمال" : "Portfolio",
          href: `/${locale}/portfolio`,
        },
        { label: isRTL ? "الأسعار" : "Pricing", href: `/${locale}/pricing` },
        { label: isRTL ? "تواصل" : "Contact", href: `/${locale}/contact` },
      ],
    },
    {
      title: isRTL ? "تواصل سريع" : "Quick Contact",
      items: [
        {
          label: isRTL ? "واتساب" : "WhatsApp",
          href: "https://wa.me/905015954826",
          external: true,
        },
        {
          label: isRTL ? "اتصال" : "Call",
          href: "tel:+905015954826",
          external: true,
        },
        {
          label: "softodev.net",
          href: "https://www.softodev.net",
          external: true,
        },
      ] as any,
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-softodev-primaryDark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold">
              <div className="h-9 w-9 rounded-xl bg-softodev-bg text-softodev-text grid place-items-center shadow-soft">
                S
              </div>
              <span>SoftoDev</span>
            </div>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              {isRTL
                ? "نطوّر مواقع ومتاجر وأنظمة إدارة عالية الأداء للسوق الخليجي والعراقي."
                : "We build high-performance websites, stores, and management systems for GCC & Iraq."}
            </p>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-white">
                {col.title}
              </div>
              <ul className="mt-3 space-y-2">
                {col.items.map((it: any) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      target={it.external ? "_blank" : undefined}
                      rel={it.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} SoftoDev.{" "}
            {isRTL ? "كل الحقوق محفوظة." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-2 text-xs text-white/60">
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
