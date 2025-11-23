// components/layout/floating-actions.tsx
import type { Locale } from "@/lib/i18n/config";

type FloatingActionsProps = {
  locale: Locale;
  whatsappLink: string;
  phone: string;
};

export function FloatingActions({
  locale,
  whatsappLink,
  phone,
}: FloatingActionsProps) {
  const isArabic = locale === "ar";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        zIndex: 40,
      }}
    >
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "3.1rem",
          padding: "0.6rem 1rem",
          borderRadius: 9999,
          backgroundColor: "#22c55e",
          color: "#ffffff",
          fontSize: "0.85rem",
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 14px 30px rgba(22, 163, 74, 0.35)",
        }}
      >
        {isArabic ? "واتساب" : "WhatsApp"}
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "3.1rem",
          padding: "0.6rem 1rem",
          borderRadius: 9999,
          backgroundColor: "#111827",
          color: "#ffffff",
          fontSize: "0.85rem",
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 10px 25px rgba(15, 23, 42, 0.35)",
        }}
      >
        {isArabic ? "اتصال" : "Call"}
      </a>
    </div>
  );
}
