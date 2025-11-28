"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";

type ContactFormProps = {
  locale: Locale;
};

type ProjectType =
  | "landing"
  | "store"
  | "website"
  | "system"
  | "marketing"
  | "branding"
  | "ai-bot"
  | "other";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  projectType: ProjectType;
  message: string;
};

export function ContactForm({ locale }: ContactFormProps) {
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    projectType: "landing",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function getProjectTypeLabel(value: ProjectType) {
    if (isArabic) {
      switch (value) {
        case "landing":
          return "صفحة هبوط";
        case "store":
          return "متجر إلكتروني";
        case "website":
          return "موقع تعريفي كامل";
        case "system":
          return "نظام برمجي / نظام إدارة";
        case "marketing":
          return "خدمات التسويق الرقمي";
        case "branding":
          return "تصميم هوية بصرية وشعارات";
        case "ai-bot":
          return "بوت ذكاء اصطناعي للموقع";
        case "other":
        default:
          return "مشروع آخر";
      }
    } else {
      switch (value) {
        case "landing":
          return "Landing page";
        case "store":
          return "Online store";
        case "website":
          return "Full website";
        case "system":
          return "Business / management system";
        case "marketing":
          return "Digital marketing services";
        case "branding":
          return "Branding & visual identity";
        case "ai-bot":
          return "AI bot for website";
        case "other":
        default:
          return "Other project";
      }
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, whatsapp, projectType, message } = formState;

    const projectTypeLabel = getProjectTypeLabel(projectType);

    const intro = isArabic
      ? "طلب جديد من نموذج موقع SoftoDev:\n\n"
      : "New request from SoftoDev website form:\n\n";

    const text =
      intro +
      (isArabic
        ? `الاسم: ${name || "-"}\n`
        : `Name: ${name || "-"}\n`) +
      (isArabic
        ? `البريد الإلكتروني: ${email || "-"}\n`
        : `Email: ${email || "-"}\n`) +
      (isArabic
        ? `رقم الواتساب: ${whatsapp || "-"}\n`
        : `WhatsApp: ${whatsapp || "-"}\n`) +
      (isArabic
        ? `نوع المشروع: ${projectTypeLabel}\n\n`
        : `Project type: ${projectTypeLabel}\n\n`) +
      (isArabic ? "وصف المشروع:\n" : "Project description:\n") +
      (message || "-");

    const url = `https://wa.me/905015954826?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4 text-sm text-softodev-text"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div className={align}>
          <label className="mb-1 block text-xs font-semibold text-softodev-text">
            {isArabic ? "الاسم الكامل" : "Full name"}
          </label>
          <input
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-softodev-border/80 bg-gray-50 px-3 py-2 text-xs outline-none ring-0 focus:border-softodev-primary focus:bg-white"
            placeholder={isArabic ? "مثال: أحمد محمد" : "e.g. Ahmed Mohammed"}
          />
        </div>
        <div className={align}>
          <label className="mb-1 block text-xs font-semibold text-softodev-text">
            {isArabic ? "البريد الإلكتروني" : "Email"}
          </label>
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-softodev-border/80 bg-gray-50 px-3 py-2 text-xs outline-none ring-0 focus:border-softodev-primary focus:bg-white"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className={`mt-3 ${align}`}>
        <label className="mb-1 block text-xs font-semibold text-softodev-text">
          {isArabic ? "رقم الواتساب (اختياري)" : "WhatsApp number (optional)"}
        </label>
        <input
          name="whatsapp"
          type="tel"
          value={formState.whatsapp}
          onChange={handleChange}
          className="w-full rounded-2xl border border-softodev-border/80 bg-gray-50 px-3 py-2 text-xs outline-none ring-0 focus:border-softodev-primary focus:bg-white"
          placeholder={isArabic ? "+966..." : "+966... or +90..."}
        />
      </div>

      <div className={`mt-3 ${align}`}>
        <label className="mb-1 block text-xs font-semibold text-softodev-text">
          {isArabic ? "نوع المشروع" : "Project type"}
        </label>
        <select
          name="projectType"
          value={formState.projectType}
          onChange={handleChange}
          className="w-full rounded-2xl border border-softodev-border/80 bg-gray-50 px-3 py-2 text-xs outline-none ring-0 focus:border-softodev-primary focus:bg-white"
        >
          <option value="landing">
            {isArabic ? "صفحة هبوط" : "Landing page"}
          </option>
          <option value="store">
            {isArabic ? "متجر إلكتروني" : "Online store"}
          </option>
          <option value="website">
            {isArabic ? "موقع تعريفي كامل" : "Full website"}
          </option>
          <option value="system">
            {isArabic ? "نظام برمجي / نظام إدارة" : "Business / management system"}
          </option>
          <option value="marketing">
            {isArabic ? "خدمات التسويق الرقمي" : "Digital marketing services"}
          </option>
          <option value="branding">
            {isArabic ? "تصميم هوية بصرية وشعارات" : "Branding & visual identity"}
          </option>
          <option value="ai-bot">
            {isArabic ? "بوت ذكاء اصطناعي للموقع" : "AI bot for website"}
          </option>
          <option value="other">
            {isArabic ? "مشروع آخر" : "Other project"}
          </option>
        </select>
      </div>

      <div className={`mt-3 ${align}`}>
        <label className="mb-1 block text-xs font-semibold text-softodev-text">
          {isArabic ? "وصف مختصر للمشروع" : "Short project description"}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          className="w-full rounded-2xl border border-softodev-border/80 bg-gray-50 px-3 py-2 text-xs outline-none ring-0 focus:border-softodev-primary focus:bg-white"
          placeholder={
            isArabic
              ? "اذكر نوع المشروع، عدد الملفات أو الصفحات تقريباً، وهل لديك أمثلة لمواقع تعجبك..."
              : "Include project type, approximate number of pages/screens, and maybe links to sites you like…"
          }
        />
      </div>

      <div
        className={`mt-4 flex gap-3 text-xs ${
          isArabic ? "justify-end" : "justify-start"
        }`}
      >
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-softodev-primary px-5 py-2 font-semibold text-white shadow-soft hover:bg-blue-700"
        >
          {isArabic ? "إرسال الطلب عبر الواتساب" : "Send request on WhatsApp"}
        </button>
        <a
          href="https://wa.me/905015954826"
          className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface px-5 py-2 font-semibold text-softodev-text hover:bg-softodev-primarySoft/70"
          target="_blank"
          rel="noreferrer"
        >
          {isArabic
            ? "فتح محادثة واتساب مباشرة"
            : "Open WhatsApp chat directly"}
        </a>
      </div>

      <p className={`mt-3 text-[11px] text-softodev-muted ${align}`}>
        {isArabic
          ? "لن نستخدم بياناتك في أي شيء خارج التواصل حول مشروعك."
          : "We will only use your details to communicate about your project."}
      </p>
    </form>
  );
}
