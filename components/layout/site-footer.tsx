// components/layout/site-footer.tsx
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const isArabic = locale === "ar";

  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "3rem",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "1.75rem 1.25rem",
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
          fontSize: "0.85rem",
        }}
      >
        {/* Left: About snippet */}
        <div>
          <div
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              marginBottom: "0.4rem",
            }}
          >
            SoftoDev
          </div>
          <p
            style={{
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: 360,
            }}
          >
            {isArabic
              ? "SoftoDev تبني مواقع، متاجر إلكترونية وأنظمة إدارة موجهة لسوق الخليج والعراق مع تركيز كبير على الأداء وتجربة المستخدم."
              : "SoftoDev builds websites, e-commerce stores, and management systems tailored for the GCC and Iraq market with a strong focus on performance and UX."}
          </p>
        </div>

        {/* Right: Links + contact */}
        <div
          style={{
            display: "grid",
            gap: "0.75rem",
            justifyContent: isArabic ? "flex-end" : "flex-start",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: isArabic ? "flex-end" : "flex-start",
            }}
          >
            <Link
              href={`/${locale}/services`}
              style={{ textDecoration: "none", color: "#4b5563" }}
            >
              {isArabic ? "الخدمات" : "Services"}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              style={{ textDecoration: "none", color: "#4b5563" }}
            >
              {isArabic ? "الأسعار" : "Pricing"}
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              style={{ textDecoration: "none", color: "#4b5563" }}
            >
              {isArabic ? "الأعمال" : "Portfolio"}
            </Link>
            <Link
              href={`/${locale}/about`}
              style={{ textDecoration: "none", color: "#4b5563" }}
            >
              {isArabic ? "عن الشركة" : "About"}
            </Link>
            <Link
              href={`/${locale}/contact`}
              style={{ textDecoration: "none", color: "#4b5563" }}
            >
              {isArabic ? "تواصل" : "Contact"}
            </Link>
          </div>

          <div style={{ color: "#6b7280" }}>
            <div>
              {isArabic ? "واتساب:" : "WhatsApp:"}{" "}
              <a
                href="https://wa.me/905015954826"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                +90 501 595 4826
              </a>
            </div>
            <div>
              {isArabic ? "البريد الإلكتروني:" : "Email:"}{" "}
              <a
                href="mailto:sami22eng@gmail.com"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                sami22eng@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "0.75rem 1.25rem",
          fontSize: "0.75rem",
          color: "#9ca3af",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} SoftoDev.{" "}
        {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}
