# SoftoDev Chatbot Widget

This widget is a lightweight embedded chat assistant for the SoftoDev marketing website.

## Files

**UI (v1 + v2):**
- `components/chat/chat-widget.tsx`

**AI client helper (v2):**
- `lib/chat/ai-client.ts`

**Server API route (v2):**
- `app/api/chat/route.ts`

## How to mount globally

In `app/[locale]/layout.tsx` (or a global footer), add:

```tsx
import ChatWidget from "@/components/chat/chat-widget";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ChatWidget mode="hardcoded" />  {/* v1 */}
        {/* <ChatWidget mode="ai" /> */}  {/* v2 */}
      </body>
    </html>
  );
}
