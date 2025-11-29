// components/home/brand-strip.tsx
import Image from "next/image";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { MouseParticles } from "@/components/ui/mouse-particles"; // 👈 الجديد

type HomeBrandStripProps = {
  locale: Locale;
};

const brands = [
  { src: "/brands/comicstopia.jpg", alt: "comicstopia" },
  { src: "/brands/EK FINANCE.jpg", alt: "EK FINANCE" },
  { src: "/brands/trendo.png", alt: "trendo" },
  { src: "/brands/EMLAKNA.png", alt: "EMLAKNA" },
  { src: "/brands/IQPLUS.jpg", alt: "IQPLUS" },
];

export function HomeBrandStrip({ locale }: HomeBrandStripProps) {
  const isArabic = locale === "ar";

  return (
    <section className="relative overflow-hidden border-y border-softodev-border/40 bg-softodev-bg/60">
      {/* خلفية النقاط المتحركة خلف شريط البراندات */}
      <MouseParticles
        className="absolute inset-0 -z-10 h-full w-full pointer-events-none"
        dotColor="rgba(15, 23, 42, 0.25)"     // نقاط غامقة خفيفة
        backgroundAlpha={0.18}                // شفافية ناعمة
      />

      <Container className="py-5 sm:py-6">
        {/* النص فوق البراندات */}
        <div
          className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-softodev-muted mb-3 sm:mb-4"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <span className="font-semibold">
            {isArabic ? "ثقة العملاء في" : "Trusted by clients in"}
          </span>
          <span className="hidden sm:inline-block">
            {isArabic
              ? "السعودية، الإمارات، قطر، الكويت، العراق وأكثر"
              : "Saudi Arabia, UAE, Qatar, Kuwait, Iraq & more"}
          </span>
        </div>

        {/* الشريط المتحرك – LTR ثابت عشان يشتغل بنفس الشكل في اللغتين */}
        <div className="marquee-container" dir="ltr">
          <div className="marquee-track">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={`${brand.alt}-${idx}`}
                className="brand-item px-10 sm:px-16 flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={190}
                  height={52}
                  className="brand-logo h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
