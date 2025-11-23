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
    <section className="py-10 md:py-14">
      <Container className="space-y-8">
        {/* Header */}
        <div className={`space-y-3 ${align}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            {isArabic ? "تواصل" : "Contact"}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-softodev-text md:text-3xl">
            {isArabic
              ? "لنبدأ في فهم مشروعك وخيارات التنفيذ المناسبة"
              : "Let’s understand your project and pick the right approach."}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-softodev-muted md:text-[15px]">
            {isArabic
              ? "يمكنك التواصل عبر الفورم أو بشكل مباشر عبر الواتساب. سنعود إليك عادة خلال 24 ساعة عمل."
              : "You can use the form or contact us directly via WhatsApp. We usually respond within 24 business hours."}
          </p>
        </div>

        {/* Layout: form + contact info */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
          {/* ✅ Client form that sends to WhatsApp */}
          <ContactForm locale={locale} />

          {/* Contact info / quick options */}
          <div className={`space-y-4 text-sm text-softodev-muted ${align}`}>
            <div className="rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-4">
              <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                {isArabic ? "تواصل مباشر" : "Direct contact"}
              </h2>
              <div className="mt-3 space-y-1 text-xs">
                <div>
                  {isArabic ? "واتساب:" : "WhatsApp:"}{" "}
                  <a
                    href="https://wa.me/905015954826"
                    className="font-semibold text-softodev-primary hover:underline"
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
                    className="font-semibold text-softodev-primary hover:underline"
                  >
                    sami22eng@gmail.com
                  </a>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-softodev-muted">
                {isArabic
                  ? "إذا كنت تفضّل المحادثة السريعة، الواتساب يكون مناسباً لشرح فكرتك بشكل مبدئي."
                  : "If you prefer a quick chat, WhatsApp is perfect for sharing your idea initially."}
              </p>
            </div>

            <div className="rounded-3xl border border-dashed border-softodev-border/80 bg-softodev-surface/95 p-4 text-xs text-softodev-muted">
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
