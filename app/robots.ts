// app/robots.txt/route.ts
import { NextResponse } from "next/server";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://softodev.com"; // غيّرها لدومينك النهائي إذا حاب

export function GET() {
  const content = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${BASE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
