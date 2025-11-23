# SoftoDev Site

Official marketing website for **SoftoDev** – a software agency focused on building high-performance websites, e-commerce stores, and management systems for the **GCC + Iraq** market.

> ⚠️ **Important:**  
> The current UI is an initial functional wireframe (layout + content + SEO).  
> The design is intentionally simple to allow a future developer to implement a full visual redesign without breaking routing/SEO logic.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Rendering:** SSG / Static with `generateStaticParams` + `generateMetadata`
- **Styling (current):**
  - `app/globals.css` for basic defaults
  - Inline styles inside components (temporary – to be replaced by Tailwind or a proper design system)
- **Routing & i18n:**
  - Locale segment: `/[locale]/...`
  - Supported locales: **`ar`** (default, RTL), **`en`** (LTR)
- **SEO:**
  - Per-page `generateMetadata`
  - `sitemap.xml` via `app/sitemap.ts`
  - `robots.txt` via `app/robots.ts`
  - JSON-LD structured data for Service + Portfolio detail pages

---

## Features (MVP)

- Bilingual marketing site: **Arabic (RTL)** + **English (LTR)**
- Main pages:
  - `/[locale]` – Home
  - `/[locale]/services` – Services list
  - `/[locale]/services/[slug]` – Service detail landing pages
  - `/[locale]/pricing` – Pricing plans
  - `/[locale]/portfolio` – Portfolio list
  - `/[locale]/portfolio/[slug]` – Project details
  - `/[locale]/about` – About / Company info
  - `/[locale]/contact` – Contact form + direct contact info
- Global layout:
  - `app/layout.tsx` – Root HTML shell, fonts, global metadata
  - `app/[locale]/layout.tsx` – Locale-aware layout (RTL/LTR) + header, footer, floating WhatsApp/Call buttons
- SEO:
  - Canonical URLs per locale
  - OpenGraph + Twitter metadata
  - Structured data:
    - `Service` schema for service detail pages
    - `CreativeWork` schema for portfolio detail pages

---

## Project Structure (High Level)

```txt
app/
  layout.tsx                # Root layout (global metadata, font, <html lang>)
  sitemap.ts                # Sitemap XML
  robots.ts                 # Robots.txt

  [locale]/                 # All user-facing pages are nested under [locale]
    layout.tsx              # Locale layout (dir=rtl/ltr, header/footer, floating buttons)
    page.tsx                # Home page

    services/
      page.tsx              # Services overview page
      [slug]/
        page.tsx            # Service detail pages (SEO landing)

    pricing/
      page.tsx              # Pricing page

    portfolio/
      page.tsx              # Portfolio list
      [slug]/
        page.tsx            # Project detail pages

    about/
      page.tsx              # About page

    contact/
      page.tsx              # Contact page (form + direct info)

components/
  layout/
    container.tsx           # Max-width container wrapper
    site-header.tsx         # Header with nav + language switch
    site-footer.tsx         # Footer with links + contact info
    floating-actions.tsx    # Floating WhatsApp + Call buttons

  home/
    portfolio-preview.tsx   # Portfolio teaser section for home
    pricing-teaser.tsx      # Pricing teaser section for home

lib/
  i18n/
    config.ts               # Locales definitions, default locale, types
  seo.ts                    # siteUrl, URL helpers, canonical helpers
  services.ts               # Services definitions + helpers
  pricing.ts                # Pricing plans definitions + helpers
  portfolio.ts              # Portfolio projects definitions + helpers

public/
  # Static assets (logo, preview images, etc.) – to be added later
