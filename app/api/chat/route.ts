import { NextResponse } from "next/server";

export const runtime = "nodejs"; // keep on server, not edge, for env safety

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

function systemPrompt(locale: string) {
  const isRTL = locale === "ar";
  return isRTL
    ? `
أنت مساعد موقع SoftoDev. هدفك: مساعدة الزائر لفهم خدمات الشركة وتوجيهه للصفحات المناسبة.
الخدمات: صفحات هبوط، مواقع شركات، متاجر إلكترونية، أنظمة إدارة، MVP، إضافات.
قواعد:
- كن مختصراً وواضحاً.
- لا تخترع أسعاراً دقيقة إذا لم تُذكر؛ استخدم نطاقات عامة وأحِل إلى صفحة الأسعار.
- إذا كان السؤال عن التواصل، وجّه لصفحة التواصل أو واتساب.
- إذا احتاج الزائر خدمة محددة، وجّه لصفحة الخدمات.
- لا تذكر أي تفاصيل تقنية داخلية أو أسرار.
أجب بالعربية الفصحى البسيطة.
`.trim()
    : `
You are SoftoDev’s website assistant. Your job: help visitors understand services and guide them to the right pages.
Services: Landing Pages, Business Websites, E-Commerce Stores, Management Systems, MVPs, add-ons.
Rules:
- Be concise and helpful.
- Do not invent exact prices; use general ranges and point to the Pricing page.
- If asked to contact, guide to Contact page or WhatsApp.
- If a service fits, guide to Services page.
- No internal/secret details.
Reply in clear professional English.
`.trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      messages?: IncomingMessage[];
      locale?: string;
    };

    const locale = body.locale === "en" ? "en" : "ar";
    const messages = Array.isArray(body.messages) ? body.messages : [];

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: locale === "ar" ? "المفتاح غير مضبوط." : "API key not configured." },
        { status: 500 }
      );
    }

    // Minimal validation + truncate history
    const safeMessages = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-12);

    if (safeMessages.length === 0) {
      return NextResponse.json(
        { reply: locale === "ar" ? "اكتب سؤالك من فضلك." : "Please write your question." },
        { status: 400 }
      );
    }

    const model = process.env.OPENAI_MODEL || "gpt-5-mini";

    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt(locale) },
          ...safeMessages,
        ],
        temperature: 0.4,
        max_tokens: 300,
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      return NextResponse.json(
        {
          reply:
            locale === "ar"
              ? "حدث خطأ في الاتصال. جرّب واتساب."
              : "Upstream error. Please try WhatsApp.",
          error: errText,
        },
        { status: 500 }
      );
    }

    const data = await upstream.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() || "";

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { reply: "Server error." },
      { status: 500 }
    );
  }
}
