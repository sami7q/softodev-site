"use client";

import dynamic from "next/dynamic";

// نحمّل الـ ChatWidget كـ Client Component فقط بدون SSR
const ChatWidgetInner = dynamic(() => import("./chat-widget"), {
  ssr: false,
});

type ChatWidgetShellProps = {
  mode?: "hardcoded" | "ai";
};

export function ChatWidgetShell({ mode = "hardcoded" }: ChatWidgetShellProps) {
  return <ChatWidgetInner mode={mode} />;
}
