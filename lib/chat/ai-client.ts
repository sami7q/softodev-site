// lib/chat/ai-client.ts

type ChatRole = "user" | "assistant";

type ChatRequest = {
  messages: {
    role: ChatRole;
    content: string;
  }[];
  locale: string;
};

export async function sendChatToAI(req: ChatRequest): Promise<string> {
  const { locale } = req;

  console.warn(
    "[SoftoDev Chat] sendChatToAI called, but AI mode is not configured yet."
  );

  if (locale === "ar") {
    return "وضع الذكاء الاصطناعي غير مفعّل حالياً في هذا الإصدار. سيتم تشغيله بعد ضبط مفتاح الـ API.";
  }

  return "AI mode is not enabled yet in this version. It will be activated after configuring the API key.";
}
