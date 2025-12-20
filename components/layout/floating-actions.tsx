// components/layout/floating-actions.tsx
"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type FloatingActionsProps = {
  locale: Locale;
  whatsappNumber: string;
  phoneNumber: string; // موجود للتوافق لو احتجناه لاحقاً
};

export default function FloatingActions({
  locale,
  whatsappNumber,
}: FloatingActionsProps) {
  const isRTL = locale === "ar";

  const waHref = `https://wa.me/${whatsappNumber.replace(
    "+",
    "",
  )}?text=${encodeURIComponent(
    isRTL
      ? "مرحباً SoftoDev، أريد استشارة بخصوص مشروع."
      : "Hi SoftoDev, I want a consultation about a project.",
  )}`;

  // ✅ بدل mailto (Lighthouse يعتبره غير آمن) استخدم Gmail compose (HTTPS)
  const subject = isRTL
    ? "طلب تواصل سريع من موقع SoftoDev"
    : "Quick inquiry from SoftoDev website";
  const body = isRTL
    ? "مرحباً SoftoDev، أريد استشارة بخصوص مشروع.\n\nالرجاء التواصل معي."
    : "Hi SoftoDev, I want a consultation about a project.\n\nPlease contact me.";

  const emailHref =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent("info@softodev.net")}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={[
        "fixed z-[70] bottom-5",
        isRTL ? "right-5" : "left-5",
        "flex flex-col gap-2.5",
      ].join(" ")}
    >
      {/* WhatsApp icon button */}
      <Link
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex h-11 w-11 items-center justify-center
          rounded-full bg-[#22C55E]
          text-white
          shadow-soft border border-emerald-500/70
          hover:bg-[#16A34A] hover:border-emerald-600
          transition active:scale-[0.97]
        `}
        aria-label={isRTL ? "مراسلة واتساب" : "WhatsApp chat"}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </Link>

      {/* Gmail / Email icon button */}
      <Link
        href={emailHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex h-11 w-11 items-center justify-center
          rounded-full bg-white text-[#EA4335]
          shadow-soft border border-slate-200/70
          hover:bg-slate-50 hover:border-slate-300
          transition active:scale-[0.97]
        `}
        aria-label={
          isRTL ? "إرسال بريد إلى SoftoDev" : "Send email to SoftoDev"
        }
      >
        <GmailIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4.5 19.5L5.6 16A7 7 0 1 1 12 19a7.2 7.2 0 0 1-3.3-.8L4.5 19.5Z"
        fill="currentColor"
      />
      <path
        // ✅ FIX: كان عندك "- .5" (خطأ SVG) صار "-.5"
        d="M9.7 8.7c-.2-.4-.3-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3 2 3.1 4.8 4.2c2.4 1 2.9.9 3.4.8.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.2-.2-.5-.3s-1.7-.9-2-1-.5-.2-.7.2-.8 1-1 1.1-.4.2-.7.1a5.7 5.7 0 0 1-1.7-1.1 6.4 6.4 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.3c.2-.2.3-.3.4-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.8-.9-2.2Z"
        fill="#F9FAFB"
      />
    </svg>
  );
}

function GmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="white" />
      <path
        d="M5 8.5L12 13L19 8.5"
        stroke="#EA4335"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18V8.8L12 13.3L19 8.8V18"
        stroke="#EA4335"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
