"use client";

import Link from "next/link";

type Locale = "ar" | "en" | string;

export function FloatingActions({
  locale,
  whatsappNumber,
  phoneNumber,
}: {
  locale: Locale;
  whatsappNumber: string;
  phoneNumber: string;
}) {
  const isRTL = locale === "ar";

  const waHref = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
    isRTL
      ? "مرحباً SoftoDev، أريد استشارة بخصوص مشروع."
      : "Hi SoftoDev, I want a consultation about a project."
  )}`;

  const callHref = `tel:${phoneNumber}`;

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={[
        "fixed z-[70] bottom-5",
        // Arabic right, English left
        isRTL ? "right-5" : "left-5",
        "flex flex-col gap-2",
      ].join(" ")}
    >
      {/* WhatsApp – يبقى أخضر كبراند قوي وواضح */}
      <Link
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-2xl bg-green-600 text-white px-4 py-3 shadow-soft hover:bg-green-500 transition"
        aria-label="WhatsApp"
      >
        <span className="text-sm font-semibold">
          {isRTL ? "واتساب" : "WhatsApp"}
        </span>
      </Link>

      {/* Call – الآن بألوان SoftoDev (أزرق) بدل كرت فاتح */}
      <Link
        href={callHref}
        className="group flex items-center gap-2 rounded-2xl bg-softodev-primary text-white px-4 py-3 shadow-soft hover:bg-softodev-primaryDark transition"
        aria-label="Call"
      >
        <span className="text-sm font-semibold">
          {isRTL ? "اتصال" : "Call"}
        </span>
      </Link>
    </div>
  );
}
