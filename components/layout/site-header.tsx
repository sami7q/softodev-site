"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Locale = "ar" | "en" | string;

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isRTL = locale === "ar";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = useMemo(
    () => [
      { href: `/${locale}/services`, label: isRTL ? "الخدمات" : "Services" },
      { href: `/${locale}/pricing`, label: isRTL ? "الأسعار" : "Pricing" },
      { href: `/${locale}/portfolio`, label: isRTL ? "الأعمال" : "Portfolio" },
      { href: `/${locale}/about`, label: isRTL ? "من نحن" : "About" },
      { href: `/${locale}/contact`, label: isRTL ? "تواصل" : "Contact" },
    ],
    [locale, isRTL]
  );

  const switchLocaleHref =
    locale === "ar"
      ? pathname.replace(/^\/ar/, "/en")
      : pathname.replace(/^\/en/, "/ar");

  return (
    <header className="sticky top-0 z-50">
      {/* Background layer (premium / less white) */}
      <div className="relative border-b border-softodev-border bg-softodev-bg/70 backdrop-blur-xl">
        {/* soft gradients / side glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-0 h-56 w-56 rounded-full bg-softodev-primary/15 blur-3xl" />
          <div className="absolute -top-28 right-10 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[72px] flex items-center justify-between gap-3">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-3"
              aria-label="SoftoDev Home"
            >
              <div className="relative h-10 w-10 rounded-2xl bg-gradient-to-br from-softodev-primary to-blue-700 text-white grid place-items-center shadow-soft">
                <span className="font-black tracking-wide">S</span>
                {/* tiny glow */}
                <div className="absolute -inset-1 rounded-2xl bg-softodev-primary/30 blur-md -z-10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="leading-tight">
                <div className="text-base font-extrabold text-softodev-text tracking-tight">
                  SoftoDev
                </div>
                <div className="text-xs text-softodev-muted">
                  {isRTL ? "مواقع، متاجر وأنظمة" : "Websites, Stores & Systems"}
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 rounded-2xl bg-softodev-surface/70 border border-softodev-border px-2 py-1 shadow-soft">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "px-3 py-2 rounded-xl text-sm font-semibold transition",
                        active
                          ? "text-softodev-primary bg-softodev-bg shadow-sm"
                          : "text-softodev-muted hover:text-softodev-text hover:bg-softodev-bg/70",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Locale Switch */}
              <Link
                href={switchLocaleHref}
                className="relative px-3 py-2 rounded-xl border border-softodev-border bg-softodev-surface/80 text-sm font-bold text-softodev-text hover:border-softodev-primary/40 transition"
              >
                {isRTL ? "EN" : "AR"}
              </Link>

              {/* CTA */}
              <Link
                href={`/${locale}/contact`}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-softodev-primary to-blue-700 text-white text-sm font-bold shadow-soft hover:opacity-95 transition"
              >
                {isRTL ? "استشارة مجانية" : "Free consultation"}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-softodev-border bg-softodev-surface/80 shadow-soft hover:border-softodev-primary/40 transition"
            >
              <div className="space-y-1.5">
                <div className="h-0.5 w-5 bg-softodev-text" />
                <div className="h-0.5 w-5 bg-softodev-text" />
                <div className="h-0.5 w-5 bg-softodev-text" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-over */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Panel */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className={[
            "absolute top-0 bottom-0 w-[86%] max-w-sm border-softodev-border shadow-2xl transition-transform",
            "bg-softodev-bg",
            isRTL ? "right-0 border-l" : "left-0 border-r",
            open
              ? "translate-x-0"
              : isRTL
              ? "translate-x-full"
              : "-translate-x-full",
          ].join(" ")}
        >
          {/* Panel gradient header */}
          <div className="relative p-4 border-b border-softodev-border bg-softodev-surface/70">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-10 left-4 h-28 w-28 rounded-full bg-softodev-primary/15 blur-2xl" />
              <div className="absolute -bottom-10 right-4 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl" />
            </div>

            <div className="flex items-center justify-between">
              <div className="font-extrabold text-softodev-text">
                {isRTL ? "القائمة" : "Menu"}
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-lg hover:bg-softodev-bg grid place-items-center"
              >
                ✕
              </button>
            </div>
          </div>

          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "block px-3 py-3 rounded-2xl text-base font-semibold transition",
                    active
                      ? "text-softodev-primary bg-softodev-surface border border-softodev-border shadow-soft"
                      : "text-softodev-text hover:bg-softodev-surface/70 hover:border-softodev-border border border-transparent",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-3 border-t border-softodev-border space-y-2">
            <Link
              href={switchLocaleHref}
              className="block text-center px-3 py-2.5 rounded-xl border border-softodev-border bg-softodev-surface font-bold"
            >
              {isRTL ? "English" : "العربية"}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="block text-center px-3 py-2.5 rounded-xl bg-gradient-to-r from-softodev-primary to-blue-700 text-white font-bold shadow-soft"
            >
              {isRTL ? "استشارة مجانية" : "Free consultation"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
