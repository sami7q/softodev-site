// app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "تواصل مع SoftoDev | طلب عرض سعر أو استشارة"
      : "Contact SoftoDev | Request a quote or consultation";

  const description =
    locale === "ar"
      ? "تواصل معنا لطلب عرض سعر لموقع، متجر إلكتروني، أو نظام إدارة، أو لحجز استشارة أولية."
      : "Get in touch to request a quote for a website, store or management system, or to book an initial consultation.";

  const url = getCanonicalUrl(locale, "/contact");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";

  return (
    <section className="relative isolate py-12 md:py-16 bg-softodev-bg/60 backdrop-blur-sm overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-400/12 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div className={`space-y-3 ${align}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            {isArabic ? "تواصل" : "Contact"}
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic
              ? "لنبدأ في فهم مشروعك وخيارات التنفيذ المناسبة"
              : "Let’s understand your project and pick the right approach."}
          </h1>

          <p className="max-w-2xl text-base md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic
              ? "يمكنك التواصل عبر الفورم أو بشكل مباشر عبر الواتساب. سنعود إليك عادة خلال 24 ساعة عمل."
              : "You can use the form or contact us directly via WhatsApp. We usually respond within 24 business hours."}
          </p>
        </div>

        {/* Layout: form + contact info */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] items-start">
          {/* ✅ Form wrapper (keeps ContactForm behavior intact) */}
          <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-5 md:p-6 shadow-soft">
            <ContactForm locale={locale} />
          </div>

          {/* Contact info / quick options */}
          <div className={`space-y-4 text-sm text-softodev-muted ${align}`}>
            <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-5 md:p-6 shadow-soft">
              <h2 className="text-base font-bold text-softodev-text">
                {isArabic ? "تواصل مباشر" : "Direct contact"}
              </h2>

              <div className="mt-3 space-y-2 text-sm">
                <div>
                  {isArabic ? "واتساب:" : "WhatsApp:"}{" "}
                  <a
                    href="https://wa.me/905015954826"
                    className="font-bold text-softodev-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +90 501 595 4826
                  </a>
                </div>

                <div>
                  {isArabic ? "البريد الإلكتروني:" : "Email:"}{" "}
                  <a
                    href="mailto:sami22eng@gmail.com"
                    className="font-bold text-softodev-primary hover:underline"
                  >
                    sami22eng@gmail.com
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-softodev-muted leading-relaxed">
                {isArabic
                  ? "إذا كنت تفضّل المحادثة السريعة، الواتساب يكون مناسباً لشرح فكرتك بشكل مبدئي."
                  : "If you prefer a quick chat, WhatsApp is perfect for sharing your idea initially."}
              </p>

              {/* Quick CTA */}
              <a
                href={`https://wa.me/905015954826?text=${encodeURIComponent(
                  isArabic
                    ? "مرحباً SoftoDev، أريد استشارة بخصوص مشروع جديد."
                    : "Hi SoftoDev, I’d like an initial consultation about a new project."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full justify-center items-center rounded-xl bg-gradient-to-r from-softodev-primary to-blue-700 text-white px-4 py-3 font-bold shadow-soft hover:opacity-95 transition active:scale-[0.98]"
              >
                {isArabic ? "ابدأ محادثة واتساب" : "Start WhatsApp chat"}
              </a>
            </div>

            <div className="rounded-3xl border border-dashed border-softodev-border bg-softodev-surface/80 p-5 md:p-6 text-sm text-softodev-muted shadow-soft">
              {isArabic
                ? "كل مشروع يختلف في التفاصيل، لذلك، حتى لو لم تكن الصورة واضحة 100٪، لا مشكلة – أرسل ما يمكنك الآن ونتكلم في التفاصيل لاحقاً."
                : "Every project is different, so even if you’re not 100% sure about the details, that’s okay — send what you can now and we’ll refine it together."}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
