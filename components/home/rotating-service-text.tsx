"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

const phrasesByLocale: Record<Locale | "default", string[]> = {
  en: ["websites", "online stores", "management systems"],
  ar: ["مواقع إلكترونية", "متاجر إلكترونية", "أنظمة إدارة"],
  default: ["websites", "online stores", "management systems"],
};

type RotatingServiceTextProps = {
  locale: Locale;
};

type Mode = "typing" | "holding" | "deleting";

const TYPE_SPEED = 75;        // سرعة الكتابة
const DELETE_SPEED = 45;      // سرعة الحذف
const HOLD_AFTER_TYPE = 1100; // وقت التوقف بعد ما تكتمل الكلمة

function getCommonPrefixLength(a: string, b: string) {
  const min = Math.min(a.length, b.length);
  let i = 0;
  while (i < min && a[i] === b[i]) i++;
  return i;
}

export function RotatingServiceText({ locale }: RotatingServiceTextProps) {
  const phrases = useMemo(
    () => phrasesByLocale[locale] ?? phrasesByLocale.default,
    [locale],
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [mode, setMode] = useState<Mode>("typing");

  // إعادة ضبط الأنيميشن عند تغيير اللغة
  useEffect(() => {
    setPhraseIndex(0);
    setDisplayText("");
    setMode("typing");
  }, [phrases]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] ?? "";
    const nextIndex = (phraseIndex + 1) % phrases.length;
    const nextPhrase = phrases[nextIndex] ?? "";

    let delay = TYPE_SPEED;
    if (mode === "deleting") delay = DELETE_SPEED;
    if (mode === "holding") delay = HOLD_AFTER_TYPE;

    const id = setTimeout(() => {
      if (mode === "typing") {
        // خلصنا كتابة الكلمة الحالية
        if (displayText === currentPhrase) {
          setMode("holding");
          return;
        }

        const nextLength = displayText.length + 1;
        setDisplayText(currentPhrase.slice(0, nextLength));
      } else if (mode === "holding") {
        // نبدأ الحذف (جزئي إلى المشترك)
        setMode("deleting");
      } else if (mode === "deleting") {
        const commonPrefixLen = getCommonPrefixLength(
          currentPhrase,
          nextPhrase,
        );

        if (displayText.length > commonPrefixLen) {
          const nextLength = displayText.length - 1;
          setDisplayText(currentPhrase.slice(0, nextLength));
        } else {
          // وصلنا للجزء المشترك → ننتقل للكلمة التالية
          setPhraseIndex(nextIndex);
          setMode("typing");
        }
      }
    }, delay);

    return () => clearTimeout(id);
  }, [displayText, mode, phraseIndex, phrases]);

  return (
    <span
      className="inline-flex items-center"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="relative inline-flex items-center">
        <span className="transition-all duration-150">{displayText}</span>
        {/* الكرسر */}
        <span
          className="ml-[2px] inline-block h-[1.1em] w-[1px] bg-softodev-primary/80 animate-pulse align-middle"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
