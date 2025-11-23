// components/layout/site-footer.tsx
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "./container";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const isArabic = locale === "ar";

  return (
    <footer className="mt-8 border-t border-softodev-border bg-softodev-surface">
      <Container className="grid gap-6 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] text-sm">
        {/* About */}
        <div>
          <div className="text-sm font-semibold text-softodev-text">
            SoftoDev
          </div>
          <p className="mt-2 max-w-sm text-softodev-muted">
            {isArabic
              ? "SoftoDev تبني مواقع، متاجر إلكترونية وأنظمة إدارة موجهة لسوق الخليج والعراق مع تركيز كبير على الأداء وتجربة المستخدم."
              : "SoftoDev builds websites, e-commerce stores, and management systems tailored for the GCC and Iraq market with a strong focus on performance and UX."}
          </p>
        </div>

        {/* Links + contact */}
        <div
          className={`flex flex-col items-start gap-3 ${
            isArabic ? "md:items-end md:text-right" : "md:items-start"
          }`}
        >
          <div
            className={`flex flex-wrap gap-3 text-softodev-muted ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <Link
              href={`/${locale}/services`}
              className="hover:text-softodev-text"
            >
              {isArabic ? "الخدمات" : "Services"}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="hover:text-softodev-text"
            >
              {isArabic ? "الأسعار" : "Pricing"}
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="hover:text-softodev-text"
            >
              {isArabic ? "الأعمال" : "Portfolio"}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="hover:text-softodev-text"
            >
              {isArabic ? "عن الشركة" : "About"}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hover:text-softodev-text"
            >
              {isArabic ? "تواصل" : "Contact"}
            </Link>
          </div>

          <div
            className={`space-y-1 text-xs text-softodev-muted ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div>
              {isArabic ? "واتساب:" : "WhatsApp:"}{" "}
              <a
                href="https://wa.me/905015954826"
                className="font-medium text-softodev-primary hover:underline"
              >
                +90 501 595 4826
              </a>
            </div>
            <div>
              {isArabic ? "البريد الإلكتروني:" : "Email:"}{" "}
              <a
                href="mailto:sami22eng@gmail.com"
                className="font-medium text-softodev-primary hover:underline"
              >
                sami22eng@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-softodev-border bg-softodev-bg py-3 text-center text-xs text-softodev-muted">
        © {new Date().getFullYear()} SoftoDev.{" "}
        {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}
