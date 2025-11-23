// components/layout/site-header.tsx
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "./container";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const isArabic = locale === "ar";

  const navItems = [
    {
      key: "services",
      href: `/${locale}/services`,
      label: isArabic ? "الخدمات" : "Services",
    },
    {
      key: "pricing",
      href: `/${locale}/pricing`,
      label: isArabic ? "الأسعار" : "Pricing",
    },
    {
      key: "portfolio",
      href: `/${locale}/portfolio`,
      label: isArabic ? "الأعمال" : "Portfolio",
    },
    {
      key: "about",
      href: `/${locale}/about`,
      label: isArabic ? "عن الشركة" : "About",
    },
    {
      key: "contact",
      href: `/${locale}/contact`,
      label: isArabic ? "تواصل" : "Contact",
    },
  ];

  const langSwitch = (
    <div className="flex items-center gap-1 rounded-full border border-softodev-border bg-softodev-surface/90 px-2 py-1 text-[11px] shadow-sm">
      <Link
        href="/ar"
        className={`transition-colors ${
          locale === "ar"
            ? "font-semibold text-softodev-text"
            : "text-softodev-muted"
        }`}
      >
        AR
      </Link>
      <span className="h-3.5 w-px bg-softodev-border" />
      <Link
        href="/en"
        className={`transition-colors ${
          locale === "en"
            ? "font-semibold text-softodev-text"
            : "text-softodev-muted"
        }`}
      >
        EN
      </Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-softodev-border/60 bg-softodev-surface/80 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-softodev-bg/80 to-softodev-bg" />
      <Container className="flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-softodev-text"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-sm font-bold text-white shadow-lg shadow-blue-500/40">
            S
          </div>
          <div className={isArabic ? "text-right" : "text-left"}>
            <div className="text-sm font-semibold tracking-tight">
              SoftoDev
            </div>
            <div className="text-[11px] text-softodev-muted">
              {isArabic
                ? "برمجة مواقع، متاجر، وأنظمة"
                : "Websites, Stores & Systems"}
            </div>
          </div>
        </Link>

        {/* Nav + CTA */}
        <nav className="flex items-center gap-3">
          <ul
            className={`hidden items-center gap-4 text-xs font-medium text-softodev-muted md:flex ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="rounded-full px-2 py-1 transition-colors hover:bg-softodev-primarySoft/60 hover:text-softodev-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {langSwitch}

          <a
            href={`/${locale}/contact`}
            className="hidden items-center gap-1 rounded-full bg-softodev-primary px-3 py-1.5 text-xs font-semibold text-white shadow-soft hover:bg-blue-700 md:inline-flex"
          >
            {isArabic ? "احجز استشارة مجانية" : "Free consultation"}
          </a>
        </nav>
      </Container>
    </header>
  );
}
