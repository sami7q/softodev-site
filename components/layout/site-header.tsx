// components/layout/site-header.tsx
import Link from "next/link";
import { Container } from "./container";
import type { Locale } from "@/lib/i18n/config";

type SiteHeaderProps = {
  locale: Locale;
};

const navItems: Record<
  Locale,
  { href: string; label: string }[]
> = {
  ar: [
    { href: "/ar", label: "الرئيسية" },
    { href: "/ar/services", label: "الخدمات" },
    { href: "/ar/pricing", label: "الأسعار" },
    { href: "/ar/portfolio", label: "الأعمال" },
    { href: "/ar/about", label: "من نحن" },
    { href: "/ar/contact", label: "تواصل معنا" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/services", label: "Services" },
    { href: "/en/pricing", label: "Pricing" },
    { href: "/en/portfolio", label: "Portfolio" },
    { href: "/en/about", label: "About" },
    { href: "/en/contact", label: "Contact" },
  ],
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const items = navItems[locale];

  const switchLocaleHref = locale === "ar" ? "/en" : "/ar";
  const switchLocaleLabel = locale === "ar" ? "EN" : "عربي";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Logo / Brand */}
        <Link
          href={locale === "ar" ? "/ar" : "/en"}
          className="flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
            S
          </span>
          <span className="text-base font-semibold tracking-tight">
            SoftoDev
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex"
          aria-label="Main navigation"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: language switch + main CTA */}
        <div className="flex items-center gap-3">
          <Link
            href={switchLocaleHref}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50"
          >
            {switchLocaleLabel}
          </Link>
          <Link
            href={locale === "ar" ? "/ar/contact" : "/en/contact"}
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 sm:inline-flex"
          >
            {locale === "ar" ? "احجز استشارة مجانية" : "Free Consultation"}
          </Link>
        </div>
      </Container>
    </header>
  );
}
