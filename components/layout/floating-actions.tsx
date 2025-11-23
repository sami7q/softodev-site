// components/layout/floating-actions.tsx
import type { Locale } from "@/lib/i18n/config";

type FloatingActionsProps = {
  locale: Locale;
  whatsappNumber: string;
  phoneNumber: string;
};

export function FloatingActions({
  locale,
  whatsappNumber,
  phoneNumber,
}: FloatingActionsProps) {
  const isArabic = locale === "ar";

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 flex flex-col gap-2 ${
        isArabic ? "md:right-4" : "md:right-4"
      }`}
    >
      <a
        href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-green-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-green-500/30 hover:bg-green-600"
      >
        <span>WhatsApp</span>
      </a>
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-2 rounded-full bg-softodev-surface px-3 py-2 text-xs font-semibold text-softodev-text shadow-lg shadow-slate-900/10 hover:bg-softodev-primarySoft"
      >
        <span>{isArabic ? "اتصال" : "Call"}</span>
      </a>
    </div>
  );
}
