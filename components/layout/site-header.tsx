// components/layout/site-header.tsx
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

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

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(243, 244, 246, 0.85)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0.75rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none",
            color: "#0f172a",
          }}
        >
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "0.9rem",
              background:
                "linear-gradient(135deg, #111827, #1f2937, #111827)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f9fafb",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            S
          </div>
          <div>
            <div
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
              }}
            >
              SoftoDev
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
              }}
            >
              {isArabic
                ? "شركة برمجيات ومواقع"
                : "Software & Web Development"}
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.9rem",
              fontSize: "0.85rem",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#4b5563",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language switch بسيط */}
          <div
            style={{
              marginInlineStart: "0.75rem",
              fontSize: "0.8rem",
              borderRadius: 9999,
              border: "1px solid #e5e7eb",
              padding: "0.2rem 0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              backgroundColor: "#ffffff",
            }}
          >
            <Link
              href="/ar"
              style={{
                textDecoration: "none",
                color: locale === "ar" ? "#111827" : "#9ca3af",
                fontWeight: locale === "ar" ? 600 : 400,
              }}
            >
              AR
            </Link>
            <span
              style={{
                width: "1px",
                height: "0.9rem",
                backgroundColor: "#e5e7eb",
              }}
            />
            <Link
              href="/en"
              style={{
                textDecoration: "none",
                color: locale === "en" ? "#111827" : "#9ca3af",
                fontWeight: locale === "en" ? 600 : 400,
              }}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
