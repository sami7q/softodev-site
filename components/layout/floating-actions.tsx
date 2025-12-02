"use client";

import Link from "next/link";

type Locale = "ar" | "en" | string;

export function FloatingActions({
  locale,
  whatsappNumber,
  phoneNumber: _phoneNumber, // kept for compatibility with existing usage
}: {
  locale: Locale;
  whatsappNumber: string;
  phoneNumber: string;
}) {
  const isRTL = locale === "ar";

  const waHref = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
    isRTL
      ? "مرحباً SoftoDev، أريد استشارة بخصوص مشروع."
      : "Hi SoftoDev, I want a consultation about a project.",
  )}`;

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={[
        "fixed z-[70] bottom-5",
        // Arabic right, English left
        isRTL ? "right-5" : "left-5",
        "flex flex-col",
      ].join(" ")}
    >
      <Link
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center justify-center
          rounded-2xl bg-green-600 text-white
          px-4 py-2
          text-xs md:text-[13px] font-semibold
          shadow-soft hover:bg-green-500
          transition active:scale-[0.98]
        `}
        aria-label="WhatsApp"
      >
        {isRTL ? "واتساب" : "WhatsApp"}
      </Link>
    </div>
  );
}
