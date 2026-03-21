# Design Blueprint: Vishal Tools Enterprise (VTE)

Keep this document in the codebase as the absolute source of truth for the design and architecture of the VTE website. When implementing new features or pages, follow these guidelines strictly to maintain the "Precision Engineering" aesthetic.

## 1. Core Aesthetics & Philosophy
- **Style**: Modern, Industrial, High-Tech, Premium.
- **Tone**: Professional, Reliable, Precise, Cutting-edge.
- **Key Visual Elements**: Smooth gradients, subtle micro-animations (Framer Motion), glassmorphism (Hero section), and high-contrast dark/light modes.

## 2. Color Palette (OKLCH)
We use modern OKLCH color definitions via Tailwind 4 and DaisyUI.

### Primary Brand Colors
- **Main Accent (Orange)**: `oklch(0.646 0.222 41.116)` (Tailwind `orange-600`)
  - Used for: Primary CTAs, key accents, focus icons, and highlights.
- **Dark Mode Background**: `oklch(0.145 0 0)` (Gray-950)
- **Light Mode Background**: `oklch(1 0 0)` (White)
- **Primary Text**: `oklch(0.145 0 0)` (Dark) / `oklch(0.985 0 0)` (Light)

### Semantic Colors
- **Success**: Green shades (e.g., `green-600` for maintenance services).
- **Secondary**: Blue shades (e.g., `blue-600` for spare parts).
- **Muted**: `gray-200` (Dark Mode) / `gray-600` (Light Mode).

## 3. Typography
- **Font Stack**: `Geist Sans` (Primary), `Geist Mono` (Technical/Accents).
- **Base Font Size**: 14px (Mobile/Base) -> 15px (Desktop) for a compact, professional feel.
- **Headings**:
  - `Hero H1`: 3xl/4xl (Mobile) -> 5xl (Desktop), Bold, Tracking-tight.
  - `Section H2`: 2xl/3xl (Mobile) -> 4xl (Desktop), Bold.
  - `Subtitles`: Text-base/lg, Leading-relaxed, Font-light/medium.

## 4. UI Components & Layout patterns

### Hero Section
- **Visuals**: Full-screen (`min-h-[100dvh]`), object-cover background image with a dark overlay (`brightness-[0.4]`).
- **Content**: Centered, max-width 5xl, high-impact heading with an orange accent span.
- **CTAs**: Large, rounded-lg buttons. Primary (Filled Orange), Secondary (Glassmorphic border).

### Feature/Service Cards
- **Structure**: Rounded-2xl, semi-transparent backgrounds, subtle shadows (`shadow-sm` -> `hover:shadow-xl`).
- **Interaction**: `-translate-y-1` on hover, transition-all (300ms).
- **Iconography**: Large SVG icons in a soft rounded box (bg-orange-50/bg-orange-900/20).

### About/Stats Section
- **Layout**: 2-column grid. Left: Text & Stats. Right: Image with Badge.
- **Badges**: Absolute-positioned, bold color blocks (Orange bg, White text).

### Forms & Input
- **System**: React Hook Form + Zod validation.
- **Modal**: Framer Motion or Shadcn/Radix dialog.

## 5. Technical Stack
- **Framework**: Next.js (App Router, Turbopack).
- **Styling**: Tailwind CSS v4, DaisyUI v5.
- **Components**: Radix UI (Unstyled primitives), Shadcn (Design system components).
- **Animations**: Framer Motion, `tw-animate-css`.
- **Icons**: Lucide React, FontAwesome (fa-brands, fa-solid).
- **Utilities**: `clsx`, `tailwind-merge`.

## 6. Implementation Rules

1. **Always** check for `dark` variants.
2. **Never** use hardcoded hex/rgb; use CSS variables or Tailwind classes via OKLCH tokens.
3. **Responsive first**: Ensure all sections use `sm:`, `md:`, `lg:` breakpoints.
4. **Spacing**: Use standard `px-6` (Mobile) / `px-20` (Desktop) for container padding. Use large vertical gaps (py-32) for section separation.
5. **Floating Elements**: Use `fixed top-4 left-4 right-4` with `glass-card` for primary navigation.
6. **Backgrounds**: Use `grid-pattern` (opacity 5-10%) on dark backgrounds or hero sections for a technical feel.
7. **Aesthetics**: Every new section MUST have a "WOW" factor (e.g., a background blur element, a subtle grid overlay, or a Framer Motion entrance animation).

## 7. Icons & Assets

- **Icons**: Use `Lucide` or `FontAwesome` (React variants).
- **Images**: Use `next/image` with `priority` for Hero/Above-the-fold content. Add `rounded-lg` or `rounded-2xl` to all images.

---
*Created by Antigravity AI for Vishal Tools Enterprise*
