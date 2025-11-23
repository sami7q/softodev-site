// components/layout/site-footer.tsx
import { Container } from "./container";
import type { Locale } from "@/lib/i18n/config";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-500 sm:flex-row">
        <p>
          © {year} SoftoDev.{" "}
          {locale === "ar"
            ? "كل الحقوق محفوظة."
            : "All rights reserved."}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:sami22eng@gmail.com"
            className="hover:text-slate-700"
          >
            {locale === "ar" ? "بريد التواصل" : "Contact Email"}
          </a>
          <a
            href="https://github.com/sami7q"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-700"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}
