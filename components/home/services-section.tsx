// components/home/services-section.tsx
import Image from "next/image";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";

type HomeServicesSectionProps = {
  locale: Locale;
};

type PortfolioCard = {
  id: string;
  title: string;
  href: string;
  image: string; // put in /public/services
  tag?: string;
  external?: boolean;
};

export function HomeServicesSection({ locale }: HomeServicesSectionProps) {
  const isArabic = locale === "ar";

  // ✅ Put these images in: public/services/
  // - public/services/qr-menu.png
  // - public/services/pos.png
  // - public/services/marketing.png

  const cardsEn: PortfolioCard[] = [
    {
      id: "web-qr-menu",
      title: "Restaurant & Café Website + QR Menu",
      href: "https://jorry-menu.vercel.app/",
      image: "/services/qr-menu.png",
      tag: "Web + QR Menu",
      external: true,
    },
    {
      id: "pos",
      title: "POS / Cashier System for Restaurants & Cafés",
      href: "/en/contact",
      image: "/services/pos.png",
      tag: "POS System",
    },
    {
      id: "marketing-design",
      title: "Marketing + Design for Restaurants & Cafés",
      href: "/en/contact",
      image: "/services/marketing.png",
      tag: "Marketing",
    },
  ];

  const cardsAr: PortfolioCard[] = [
    {
      id: "web-qr-menu",
      title: "موقع مطعم/كافيه + منيو QR",
      href: "https://jorry-menu.vercel.app/",
      image: "/services/qr-menu.png",
      tag: "موقع + QR",
      external: true,
    },
    {
      id: "pos",
      title: "نظام كاشير للمطاعم والكافيهات",
      href: "/ar/contact",
      image: "/services/pos.png",
      tag: "POS",
    },
    {
      id: "marketing-design",
      title: "تسويق و ادرة مواقع تواصل اجتماعي",
      href: "/ar/contact",
      image: "/services/marketing.png",
      tag: "تسويق",
    },
  ];

  const cards = isArabic ? cardsAr : cardsEn;

  return (
    <section className="bg-softodev-surface/40 py-10 sm:py-16">
      <Container>
        {/* Header */}
        <div
          className="mx-auto max-w-3xl text-center"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-softodev-muted">
            {isArabic ? "خدماتنا" : "OUR SERVICES"}
          </p>

          <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-softodev-text">
            {isArabic
              ? "3 خدمات للمطاعم والكافيهات"
              : "3 services for restaurants & cafés"}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-softodev-muted">
            {isArabic
}
          </p>
        </div>

        {/* Grid */}
        <div
          className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {cards.map((card) => {
            const isExternal = !!card.external || card.href.startsWith("http");

            return (
              <a
                key={card.id}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group overflow-hidden rounded-3xl border border-softodev-border/80 bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] bg-softodev-bg">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={false}
                  />

                  {/* hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* tag */}
                  {card.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-softodev-text border border-softodev-border/70 backdrop-blur">
                        {card.tag}
                      </span>
                    </div>
                  )}

                  {/* small hint for external demo */}
                  {isExternal && (
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-softodev-text border border-softodev-border/70 backdrop-blur">
                        {isArabic ? "يفتح في تبويب جديد" : "Opens in new tab"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="px-5 py-4">
                  <h3 className="text-sm sm:text-base font-semibold text-softodev-text leading-snug">
                    {card.title}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
