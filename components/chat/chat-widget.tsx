"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import { sendChatToAI } from "@/lib/chat/ai-client";

type Role = "user" | "assistant";
type ChatMode = "hardcoded" | "ai";

type Message = {
  id: string;
  role: Role;
  content: string;
  actions?: ChatAction[];
  ts: number;
};

type ChatAction = {
  label: string;
  href?: string;
  kind: "internal" | "whatsapp";
};

type Locale = "ar" | "en" | string;

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905015954826";

const STORAGE_KEY = "softodev_chat_history_v1";

const PANEL_ID = "softodev-chat-panel";

function uid() {
  return Math.random().toString(36).slice(2);
}

function withLocale(locale: Locale, path: string) {
  const safeLocale = locale === "en" ? "en" : "ar";
  return `/${safeLocale}${path.startsWith("/") ? path : `/${path}`}`;
}

function buildWhatsappLink(text: string) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

const COPY = {
  en: {
    title: "SoftoDev Assistant",
    greeting:
      "Hi! 👋 I’m SoftoDev’s assistant. Tell me what you want to build and I’ll guide you to the right service.",
    placeholder: "Type your question…",
    send: "Send",
    quickTitle: "Quick questions",
    badge: "New",
    faqs: [
      {
        id: "pricing",
        label: "Packages & pricing",
        userText: "Tell me about your packages and prices.",
      },
      {
        id: "timeline",
        label: "Project timeline",
        userText: "How long does each service take?",
      },
      {
        id: "lp",
        label: "Landing Page",
        userText: "I need a landing page. What do you offer?",
      },
      {
        id: "website",
        label: "Business Website",
        userText: "I need a company website. What’s included?",
      },
      {
        id: "store",
        label: "E-Commerce Store",
        userText: "I want an e-commerce store. What’s included?",
      },
      {
        id: "system",
        label: "Management System / MVP",
        userText: "I need a management system or MVP.",
      },
      {
        id: "contact",
        label: "Contact / WhatsApp",
        userText: "I want to contact you on WhatsApp.",
      },
    ],
    fallback:
      "I can help with services, pricing, or guidance. Ask about Landing Pages, Websites, Stores, Management Systems, MVPs, or say “contact”.",
  },
  ar: {
    title: "مساعد SoftoDev",
    greeting:
      "مرحباً 👋 أنا مساعد SoftoDev. أخبرني ماذا تريد أن تبني وسأوجهك للخدمة المناسبة.",
    placeholder: "اكتب سؤالك هنا…",
    send: "إرسال",
    quickTitle: "أسئلة سريعة",
    badge: "جديد",
    faqs: [
      {
        id: "pricing",
        label: "الباقات والأسعار",
        userText: "اريد معرفة الباقات والأسعار.",
      },
      {
        id: "timeline",
        label: "مدة التنفيذ",
        userText: "كم المدة المعتادة لكل خدمة؟",
      },
      {
        id: "lp",
        label: "صفحة هبوط",
        userText: "أريد صفحة هبوط، ماذا تقدمون؟",
      },
      {
        id: "website",
        label: "موقع شركة",
        userText: "أريد موقع شركة، ما الذي يتضمنه؟",
      },
      {
        id: "store",
        label: "متجر إلكتروني",
        userText: "أريد متجر إلكتروني، ما الذي يتضمنه؟",
      },
      {
        id: "system",
        label: "نظام إدارة / MVP",
        userText: "أحتاج نظام إدارة أو MVP.",
      },
      {
        id: "contact",
        label: "تواصل / واتساب",
        userText: "أريد التواصل عبر واتساب.",
      },
    ],
    fallback:
      "أقدر أساعدك بالخدمات والأسعار والتوجيه. اسأل عن صفحات الهبوط، المواقع، المتاجر، أنظمة الإدارة، أو اكتب “تواصل”.",
  },
} as const;

// ---------- Hardcoded Intents (v1) ----------
function detectIntent(q: string) {
  const s = q.toLowerCase();

  const has = (...words: string[]) => words.some((w) => s.includes(w));
  const arHas = (...words: string[]) => words.some((w) => s.includes(w));

  if (
    has("whatsapp", "contact", "call", "message") ||
    arHas("تواصل", "واتساب", "مراسلة", "اتصال")
  )
    return "contact";

  if (
    has("price", "pricing", "cost", "package", "$") ||
    arHas("سعر", "اسعار", "باقات", "تكلفة")
  )
    return "pricing";

  if (
    has("time", "timeline", "duration", "days", "week") ||
    arHas("مدة", "وقت", "كم يوم", "تستغرق")
  )
    return "timeline";

  if (has("landing", "lp") || arHas("هبوط", "صفحة هبوط")) return "landing";

  if (
    has("ecommerce", "e-commerce", "store", "shop") ||
    arHas("متجر", "تجارة")
  )
    return "store";

  if (
    has("management", "system", "dashboard", "mvp", "saas") ||
    arHas("نظام", "ادارة", "إدارة", "mvp")
  )
    return "system";

  if (
    has("website", "site", "company", "business") ||
    arHas("موقع", "مواقع", "شركة")
  )
    return "website";

  return "fallback";
}

function hardcodedReply(
  input: string,
  locale: Locale,
): { text: string; actions?: ChatAction[] } {
  const isEn = locale === "en";
  const t = isEn ? COPY.en : COPY.ar;

  const intent = detectIntent(input);

  switch (intent) {
    case "contact": {
      const text = isEn
        ? "You can reach us directly on WhatsApp. Send a short idea and we’ll reply fast."
        : "تقدر تتواصل معنا مباشرة على واتساب. اكتب فكرة بسيطة وسنرد بسرعة.";
      return {
        text,
        actions: [
          {
            label: isEn ? "Open WhatsApp" : "فتح واتساب",
            kind: "whatsapp",
            href: buildWhatsappLink(
              isEn
                ? "Hi SoftoDev, I want to build a project. My request is:"
                : "مرحباً SoftoDev، أريد تنفيذ مشروع. طلبي هو:",
            ),
          },
          {
            label: isEn ? "Contact page" : "صفحة التواصل",
            kind: "internal",
            href: withLocale(locale, "/contact"),
          },
        ],
      };
    }

    case "pricing": {
      const text = isEn
        ? "Packages start from $199 (Landing Page) and scale with complexity. Full details are on the Pricing page."
        : "باقاتنا تبدأ من 199$ (صفحة هبوط) وتزداد حسب التعقيد. التفاصيل في صفحة الأسعار.";
      return {
        text,
        actions: [
          {
            label: isEn ? "View Pricing" : "عرض الأسعار",
            kind: "internal",
            href: withLocale(locale, "/pricing"),
          },
          {
            label: isEn ? "All Services" : "كل الخدمات",
            kind: "internal",
            href: withLocale(locale, "/services"),
          },
        ],
      };
    }

    case "timeline": {
      const text = isEn
        ? "Typical timelines:\n• Landing Page: 2–4 days\n• Website: 5–10 days\n• Store: 10–21 days\n• System/MVP: 3–8 weeks."
        : "المدد المعتادة:\n• صفحة هبوط: 2–4 أيام\n• موقع: 5–10 أيام\n• متجر: 10–21 يوم\n• نظام/MVP: 3–8 أسابيع.";
      return { text };
    }

    case "landing": {
      const text = isEn
        ? "Landing Pages are ideal for one product/service. Fast and SEO-safe."
        : "صفحات الهبوط مناسبة لمنتج/خدمة واحدة. سريعة وآمنة للـSEO.";
      return {
        text,
        actions: [
          {
            label: isEn ? "Landing Page service" : "خدمة صفحة هبوط",
            kind: "internal",
            href: withLocale(locale, "/services"),
          },
          {
            label: isEn ? "WhatsApp quote" : "تسعير عبر واتساب",
            kind: "whatsapp",
            href: buildWhatsappLink(
              isEn
                ? "Hi SoftoDev, I need a landing page. My business is:"
                : "مرحباً SoftoDev، أريد صفحة هبوط. طبيعة عملي:",
            ),
          },
        ],
      };
    }

    case "website": {
      const text = isEn
        ? "We build modern multilingual business websites with strong UX."
        : "نبني مواقع شركات حديثة متعددة اللغات مع UX قوي.";
      return {
        text,
        actions: [
          {
            label: isEn ? "Portfolio" : "الأعمال",
            kind: "internal",
            href: withLocale(locale, "/portfolio"),
          },
          {
            label: isEn ? "Pricing" : "الأسعار",
            kind: "internal",
            href: withLocale(locale, "/pricing"),
          },
        ],
      };
    }

    case "store": {
      const text = isEn
        ? "Our E-Commerce stores include catalog, payments, shipping, and admin dashboard."
        : "متاجرنا تشمل المنتجات، الدفع، الشحن، ولوحة تحكم كاملة.";
      return {
        text,
        actions: [
          {
            label: isEn ? "Store details" : "تفاصيل المتجر",
            kind: "internal",
            href: withLocale(locale, "/services"),
          },
          {
            label: isEn ? "WhatsApp quote" : "تسعير عبر واتساب",
            kind: "whatsapp",
            href: buildWhatsappLink(
              isEn
                ? "Hi SoftoDev, I want an e-commerce store. My products are:"
                : "مرحباً SoftoDev، أريد متجر إلكتروني. نوع المنتجات:",
            ),
          },
        ],
      };
    }

    case "system": {
      const text = isEn
        ? "We build custom management systems & MVPs end-to-end. Tell me your idea."
        : "نبني أنظمة إدارة وMVP مخصصة من البداية للنهاية. اكتب فكرتك.";
      return {
        text,
        actions: [
          {
            label: isEn ? "See Portfolio" : "شاهد الأعمال",
            kind: "internal",
            href: withLocale(locale, "/portfolio"),
          },
          {
            label: isEn ? "Discuss on WhatsApp" : "ناقش على واتساب",
            kind: "whatsapp",
            href: buildWhatsappLink(
              isEn
                ? "Hi SoftoDev, I need a management system/MVP. My idea is:"
                : "مرحباً SoftoDev، أحتاج نظام إدارة/MVP. فكرتي هي:",
            ),
          },
        ],
      };
    }

    default:
      return { text: t.fallback };
  }
}

// ---------- Component ----------
export default function ChatWidget({ mode = "hardcoded" }: { mode?: ChatMode }) {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const locale: Locale =
    params?.locale || (pathname?.startsWith("/en") ? "en" : "ar");
  const isRTL = locale === "ar";
  const t = isRTL ? COPY.ar : COPY.en;

  const floatingSideClass = isRTL ? "left-5" : "right-5";
  const panelSideClass = floatingSideClass;

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ keep DOM for close animation
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [unread, setUnread] = useState(0);

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") {
      return [
        { id: uid(), role: "assistant", content: t.greeting, ts: Date.now() },
      ];
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) throw new Error("no history");
      const parsed = JSON.parse(raw) as Record<string, Message[]>;
      const history = parsed?.[locale];
      if (history?.length) return history;
    } catch {}
    return [
      { id: uid(), role: "assistant", content: t.greeting, ts: Date.now() },
    ];
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const faqs = useMemo(() => t.faqs, [t]);

  // ✅ mount/unmount panel to avoid aria-hidden + focusables issue
  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useEffect(() => {
    if (!open && mounted) {
      const timer = setTimeout(() => setMounted(false), 220); // matches transition duration
      return () => clearTimeout(timer);
    }
  }, [open, mounted]);

  // Persist history per locale
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as Record<string, Message[]>) : {};
      parsed[locale] = messages.slice(-50);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    } catch {}
  }, [messages, locale]);

  // scroll to bottom
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open, isSending]);

  // focus input when opened
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function pushBotMessage(msg: Omit<Message, "id" | "ts">) {
    const botMsg: Message = { id: uid(), ts: Date.now(), ...msg };
    setMessages((prev) => [...prev, botMsg]);
    if (!open) setUnread((u) => u + 1);
  }

  async function handleSend(textOverride?: string) {
    const text = (textOverride ?? input).trim();
    if (!text || isSending) return;

    const userMsg: Message = {
      id: uid(),
      role: "user",
      content: text,
      ts: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    if (mode === "hardcoded") {
      setIsSending(true);
      setTimeout(() => {
        const reply = hardcodedReply(text, locale);
        pushBotMessage({
          role: "assistant",
          content: reply.text,
          actions: reply.actions,
        });
        setIsSending(false);
      }, 450);
      return;
    }

    try {
      setIsSending(true);
      const aiReply = await sendChatToAI({
        messages: [...messages, userMsg].map((m) => ({
          role: m.role,
          content: m.content,
        })),
        locale,
      });

      pushBotMessage({
        role: "assistant",
        content: aiReply || t.fallback,
      });
    } catch {
      pushBotMessage({
        role: "assistant",
        content: isRTL
          ? "صار خطأ بسيط في الاتصال. جرّب مرة ثانية أو راسلنا على واتساب."
          : "Connection error. Try again or contact us on WhatsApp.",
        actions: [
          {
            label: isRTL ? "واتساب" : "WhatsApp",
            kind: "whatsapp",
            href: buildWhatsappLink(
              isRTL ? "مرحباً SoftoDev، لدي سؤال:" : "Hi SoftoDev, I have a question:",
            ),
          },
        ],
      });
    } finally {
      setIsSending(false);
    }
  }

  function onActionClick(action: ChatAction) {
    if (!action.href) return;
    if (action.kind === "internal") {
      router.push(action.href);
      setOpen(false);
      return;
    }
    window.open(action.href, "_blank", "noopener,noreferrer");
  }

  const interactionDisabled = !open; // ✅ when closing/closed (but mounted), disable focus

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="fixed z-[9999]">
      {/* Floating button */}
      <button
        aria-label="Open chat"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={() => setOpen((v) => !v)}
        className={[
          "fixed bottom-5",
          floatingSideClass,
          "h-10 w-10 sm:h-11 sm:w-11",
          "rounded-full shadow-soft",
          "bg-softodev-primary text-white hover:bg-softodev-primaryDark",
          "flex items-center justify-center",
          "transition-all active:scale-95",
          unread > 0 ? "animate-pulse" : "",
        ].join(" ")}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="opacity-95"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12c0 4.418-4.03 8-9 8-1.087 0-2.13-.17-3.1-.482L3 20l1.174-3.522C3.424 15.244 3 13.686 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="8.5" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="15.5" cy="12" r="1" fill="currentColor" />
        </svg>

        {unread > 0 && (
          <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-600 text-white text-[10px] grid place-items-center">
            {unread}
          </span>
        )}
      </button>

      {/* Chat window (mounted only when opening/closing) */}
      {mounted && (
        <div
          id={PANEL_ID}
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
          className={[
            "fixed bottom-24",
            panelSideClass,
            "w-[330px] sm:w-[360px]",
            "h-[480px] max-h-[70vh]",
            "bg-softodev-surface rounded-2xl shadow-2xl border border-softodev-border",
            "flex flex-col overflow-hidden",
            "transition-all duration-200 ease-out",
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-3 pointer-events-none",
          ].join(" ")}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-softodev-surfaceStrong border-b border-softodev-border">
            <div className="font-semibold text-softodev-text">{t.title}</div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              disabled={interactionDisabled}
              tabIndex={interactionDisabled ? -1 : 0}
              className="text-softodev-muted hover:text-softodev-text disabled:opacity-50"
            >
              ✕
            </button>
          </div>

          {/* Quick FAQ buttons */}
          <div className="px-3 py-2 border-b border-softodev-border bg-softodev-surface">
            <div className="text-xs font-medium text-softodev-muted mb-2">
              {t.quickTitle}
            </div>
            <div className="flex flex-wrap gap-2">
              {faqs.map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleSend(f.userText)}
                  disabled={interactionDisabled || isSending}
                  tabIndex={interactionDisabled ? -1 : 0}
                  className="text-xs px-3 py-1.5 rounded-full bg-softodev-bg hover:bg-softodev-surfaceStrong text-softodev-text border border-softodev-border/60 transition disabled:opacity-50"
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-softodev-surface"
          >
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={[
                    "flex",
                    isUser
                      ? isRTL
                        ? "justify-start"
                        : "justify-end"
                      : isRTL
                      ? "justify-end"
                      : "justify-start",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                      isUser
                        ? "bg-softodev-primary text-white"
                        : "bg-softodev-bg text-softodev-text border border-softodev-border/70",
                    ].join(" ")}
                  >
                    <div className="whitespace-pre-wrap">{m.content}</div>

                    {m.actions && m.actions.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {m.actions.map((a, idx) => (
                          <button
                            key={idx}
                            onClick={() => onActionClick(a)}
                            disabled={interactionDisabled}
                            tabIndex={interactionDisabled ? -1 : 0}
                            className={[
                              "text-xs px-2.5 py-1 rounded-full disabled:opacity-50",
                              a.kind === "whatsapp"
                                ? "bg-green-600 text-white hover:bg-green-700"
                                : "bg-softodev-surface text-softodev-text border border-softodev-border hover:bg-softodev-bg",
                            ].join(" ")}
                          >
                            {a.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isSending && (
              <div className={["flex", isRTL ? "justify-end" : "justify-start"].join(" ")}>
                <div className="bg-softodev-bg text-softodev-muted rounded-2xl px-3 py-2 text-sm border border-softodev-border/70">
                  {isRTL ? "يكتب..." : "Typing..."}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-softodev-border bg-softodev-surface">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 h-10 rounded-xl border border-softodev-border px-3 text-sm outline-none focus:ring-2 focus:ring-softodev-primarySoft disabled:opacity-60"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={interactionDisabled || isSending}
                tabIndex={interactionDisabled ? -1 : 0}
              />
              <button
                onClick={() => handleSend()}
                disabled={interactionDisabled || !input.trim() || isSending}
                tabIndex={interactionDisabled ? -1 : 0}
                className="h-10 px-4 rounded-xl bg-softodev-primary text-white text-sm font-medium disabled:opacity-50 hover:bg-softodev-primaryDark transition"
              >
                {t.send}
              </button>
            </div>

            <div className="mt-1 text-[11px] text-softodev-muted">
              {mode === "ai"
                ? isRTL
                  ? "الإجابات مولّدة بالذكاء الاصطناعي وقد تحتاج لتأكيد."
                  : "Replies are AI-generated and may need confirmation."
                : isRTL
                ? "إصدار تجريبي (FAQ)."
                : "Beta FAQ version."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
