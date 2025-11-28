// app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";

type ContactPageParams = {
  params: { locale: Locale };
};

export async function generateMetadata(
  { params }: ContactPageParams
): Promise<Metadata> {
  const { locale } = params;

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

export default function ContactPage({ params }: ContactPageParams) {
  const { locale } = params;
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";

  return (
    <section className="relative isolate pt-12 md:pt-16 pb-24 md:pb-28 bg-softodev-bg/70 overflow-hidden">
      {/* خلفية بنفس نمط الخدمات / الأسعار / الأعمال */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-softodev-primarySoft/40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div className={`max-w-3xl ${align} space-y-3`}>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            <span className="inline-block h-[1px] w-6 bg-softodev-primary/70" />
            <span>{isArabic ? "تواصل" : "CONTACT"}</span>
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic ? (
              <>
                <span>لنبدأ في فهم مشروعك </span>
                <span className="text-softodev-primary">
                  واختيار طريقة التنفيذ الأنسب
                </span>
                <span>.</span>
              </>
            ) : (
              <>
                <span>Let’s understand your project </span>
                <span className="text-softodev-primary">
                  and pick the right way to build it.
                </span>
              </>
            )}
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic ? (
              <>
                يمكنك التواصل عبر{" "}
                <span className="text-softodev-primary font-medium">
                  نموذج التواصل
                </span>{" "}
                أو بشكل مباشر عبر{" "}
                <span className="text-softodev-primary font-medium">
                  الواتساب
                </span>
                . عادةً نرد خلال{" "}
                <span className="font-medium">24 ساعة عمل</span>.
              </>
            ) : (
              <>
                You can reach us using the{" "}
                <span className="text-softodev-primary font-medium">
                  contact form
                </span>{" "}
                or directly via{" "}
                <span className="text-softodev-primary font-medium">
                  WhatsApp
                </span>
                . We usually respond within{" "}
                <span className="font-medium">24 business hours</span>.
              </>
            )}
          </p>
        </div>

        {/* Layout: form + contact info */}
        <div
          className="grid gap-5 md:gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] items-start"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Form wrapper */}
          <article
            className="
              group relative h-full
              overflow-hidden rounded-[26px]
              border border-softodev-border/70
              bg-softodev-surface/95
              p-5 md:p-6
              shadow-soft
              transition-all duration-300
              hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
              hover:border-softodev-primary/45
            "
          >
            <ContactForm locale={locale} />
          </article>

          {/* Contact info / quick options */}
          <div className={`space-y-4 text-sm text-softodev-muted ${align}`}>
            <article
              className="
                group relative h-full
                overflow-hidden rounded-[26px]
                border border-softodev-border/70
                bg-softodev-surface/95
                p-5 md:p-6
                shadow-soft
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
                hover:border-softodev-primary/45
              "
            >
              <h2 className="text-base md:text-[15px] font-extrabold text-softodev-text">
                {isArabic ? "تواصل مباشر" : "Direct contact"}
              </h2>

              <div className="mt-3 space-y-2 text-xs md:text-sm">
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

              <p className="mt-4 text-[11px] md:text-xs text-softodev-muted leading-relaxed">
                {isArabic
                  ? "إذا كنت تفضّل المحادثة السريعة، الواتساب يكون مناسباً لشرح فكرتك بشكل مبدئي قبل الدخول في التفاصيل."
                  : "If you prefer a quick chat, WhatsApp is ideal to share your idea before we dive into the details."}
              </p>

              <a
                href={`https://wa.me/905015954826?text=${encodeURIComponent(
                  isArabic
                    ? "مرحباً SoftoDev، أريد استشارة بخصوص مشروع جديد."
                    : "Hi SoftoDev, I’d like an initial consultation about a new project."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4 inline-flex w-full items-center justify-center
                  rounded-full bg-softodev-primary
                  px-4 py-2.5
                  text-[11px] md:text-xs font-semibold text-white
                  shadow-soft
                  hover:bg-softodev-primaryDark
                  transition active:scale-[0.98]
                "
              >
                {isArabic ? "ابدأ محادثة واتساب" : "Start WhatsApp chat"}
              </a>
            </article>

            <article
              className="
                rounded-[26px] border border-dashed border-softodev-border
                bg-softodev-surface/80
                p-5 md:p-6 text-[11px] md:text-xs text-softodev-muted shadow-soft
              "
            >
              {isArabic ? (
                <>
                  كل مشروع يختلف في{" "}
                  <span className="text-softodev-primary font-medium">
                    الفكرة، السوق، والميزانية
                  </span>
                  ، لذلك حتى لو لم تكن الصورة واضحة 100٪ الآن، لا مشكلة — شارك
                  ما يمكنك حالياً وسنساعدك في ترتيب التفاصيل لاحقاً.
                </>
              ) : (
                <>
                  Every project is different in{" "}
                  <span className="text-softodev-primary font-medium">
                    idea, market and budget
                  </span>
                  , so even if things aren’t 100% clear yet, that’s fine — send
                  what you can for now and we’ll refine the details together.
                </>
              )}
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
