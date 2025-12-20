// components/home/floating-tech-icons.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Orbit = 1 | 2 | 3;

type TechIcon = {
  src: string;
  alt: string;
  x: number;
  y: number;
  mobileX?: number;
  mobileY?: number;
  orbit: Orbit;
  delay?: string;
  size?: "sm" | "md" | "lg";
  blur?: boolean;
  hideOnMobile?: boolean;
};

const SIZE_CLASSES: Record<NonNullable<TechIcon["size"]>, string> = {
  sm: "h-8 w-8 sm:h-9 sm:w-9",
  md: "h-9 w-9 sm:h-11 sm:w-11",
  lg: "h-10 w-10 sm:h-12 sm:w-12",
};

// ✅ sizes الصحيحة (بالبيكسل) حتى next/image يطلع نسخة صغيرة جدًا
const SIZE_PX: Record<NonNullable<TechIcon["size"]>, number> = {
  sm: 36,
  md: 44,
  lg: 48,
};

const techIcons: TechIcon[] = [
  {
    src: "/stack/react.png",
    alt: "React",
    x: 12,
    y: 18,
    mobileX: 18,
    mobileY: 20,
    orbit: 1,
    delay: "0s",
    size: "lg",
    blur: true,
  },
  {
    src: "/stack/github.png",
    alt: "GitHub",
    x: 82,
    y: 22,
    mobileX: 78,
    mobileY: 22,
    orbit: 2,
    delay: "1.2s",
    size: "md",
    hideOnMobile: true,
  },
  {
    src: "/stack/python.png",
    alt: "Python",
    x: 16,
    y: 74,
    mobileX: 22,
    mobileY: 78,
    orbit: 3,
    delay: "2.4s",
    size: "lg",
  },
  {
    src: "/stack/node.png",
    alt: "Node.js",
    x: 86,
    y: 70,
    mobileX: 78,
    mobileY: 76,
    orbit: 1,
    delay: "3.6s",
    size: "md",
    hideOnMobile: true,
  },
  {
    src: "/stack/django.png",
    alt: "Django",
    x: 8,
    y: 48,
    mobileX: 12,
    mobileY: 50,
    orbit: 2,
    delay: "4.8s",
    size: "md",
  },
];

function orbitClass(orbit: Orbit): string {
  switch (orbit) {
    case 1:
      return "animate-tech-orbit-1";
    case 2:
      return "animate-tech-orbit-2";
    case 3:
    default:
      return "animate-tech-orbit-3";
  }
}

export function FloatingTechIcons() {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", updateViewport);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobile = viewport.width > 0 && viewport.width < 640;

  const REPULSION_RADIUS = isMobile ? 110 : 170;
  const MAX_OFFSET = isMobile ? 28 : 52;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      {techIcons.map((icon) => {
        if (icon.hideOnMobile && isMobile) return null;

        const sizeKey = icon.size ?? "md";
        const sizeClass = SIZE_CLASSES[sizeKey];
        const sizePx = SIZE_PX[sizeKey];

        const baseX = isMobile && icon.mobileX != null ? icon.mobileX : icon.x;
        const baseY = isMobile && icon.mobileY != null ? icon.mobileY : icon.y;

        let offsetX = 0;
        let offsetY = 0;

        if (!isMobile && viewport.width > 0 && viewport.height > 0) {
          const centerX = (baseX / 100) * viewport.width;
          const centerY = (baseY / 100) * viewport.height;

          const dx = centerX - mouse.x;
          const dy = centerY - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;

          if (distance < REPULSION_RADIUS) {
            const strength = (REPULSION_RADIUS - distance) / REPULSION_RADIUS;
            const factor = strength * MAX_OFFSET;
            offsetX = (dx / distance) * factor;
            offsetY = (dy / distance) * factor;
          }
        }

        return (
          <div
            key={icon.alt}
            className="absolute"
            style={{
              left: `${baseX}%`,
              top: `${baseY}%`,
              animationDelay: icon.delay,
            }}
          >
            <div className={orbitClass(icon.orbit)}>
              <div
                className={`
                  relative flex items-center justify-center
                  ${sizeClass}
                  rounded-2xl border border-softodev-border/60
                  bg-softodev-surface/80 shadow-soft
                  backdrop-blur-sm
                  opacity-70 sm:opacity-90
                  transition-transform duration-200
                `}
                style={{
                  transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
                }}
              >
                {icon.blur && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-softodev-primary/25 blur-xl" />
                )}

                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={sizePx}
                  height={sizePx}
                  className="pointer-events-none relative h-[65%] w-[65%] object-contain"
                  loading="lazy"
                  sizes={`${sizePx}px`}
                  quality={75}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
