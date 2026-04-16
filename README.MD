# Eluwa Prime Global

Landing page scaffold for Eluwa Prime Global, built with Next.js App Router and organized into separate reusable files for each homepage section.

## Stack

- Next.js
- React
- TypeScript
- `next/font` for Montserrat and Open Sans

## Project Structure

```text
app/
  portfolio/
    page.tsx
  team/
    page.tsx
  work/
    page.tsx
  fonts.ts
  globals.css
  layout.tsx
  page.tsx
components/
  layout/
    footer.tsx
    header.tsx
    mobile-nav.tsx
  pages/
    page-hero.tsx
    portfolio-page.tsx
    project-card.tsx
    team-page.tsx
    work-page.tsx
  sections/
    contact-section.tsx
    faq-section.tsx
    hero-section.tsx
    home-page.tsx
    services-section.tsx
    stats-section.tsx
    testimonials-section.tsx
    trust-bar.tsx
    value-proposition-section.tsx
  ui/
    animated-counter.tsx
    brand-mark.tsx
    parallax-panel.tsx
    reveal.tsx
    section-heading.tsx
    service-icon.tsx
data/
  site-content.ts
types/
  site.ts
```

## Features

- Sticky header with transparent-to-solid scroll behavior
- Mobile navigation with hamburger menu
- Dedicated `Work`, `Portfolio`, and `Team` pages
- Real brand logo, building image, and official portrait integration
- GitHub-informed portfolio entries with inspiration notes
- Hero, trust ticker, value proposition, services, impact stats, testimonials, FAQ, contact, and footer sections
- Scroll reveal animations for cards and content blocks
- Parallax treatment for featured imagery
- Animated counters in the impact section
- Data-driven content structure for easy future edits

## Getting Started

```bash
npm install
npm run dev
```

## Notes

- The layout uses remote WebP-ready Unsplash image sources as placeholders for production photography.
- The contact form currently demonstrates a front-end submission state and is ready for API or email integration.
