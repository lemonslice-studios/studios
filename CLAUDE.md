# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Lemon Slice Studios** website, an Android app development studio. Built with Astro and Bun, using Tailwind CSS for styling.

## Development

### Commands

```bash
# Install dependencies
bun install

# Development server (http://localhost:4321)
bun run dev

# Production build
bun run build

# Preview production build
bun run preview
```

## Architecture

### Directory Structure

```
site-studios/
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration
├── package.json
├── public/
│   ├── img/                  # SVG images (lemon.svg, android-head_3D.svg)
│   ├── fonts/                # Plus Jakarta Sans font files
│   │   └── PlusJakartaSans/
│   └── ambiance/             # Product page images (screenshots, wp.png)
├── src/
│   ├── components/
│   │   ├── Logo.astro        # SVG logo with size prop (sm/md/lg)
│   │   ├── Header.astro      # Main nav (Work/Custom/Philosophy links)
│   │   ├── HeaderSimple.astro # Product nav (logo + Google Play CTA)
│   │   ├── Footer.astro      # Main footer (Privacy/Legal/Contact)
│   │   └── FooterSimple.astro # Product footer (simpler)
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Shared head, fonts, analytics
│   │   ├── MainLayout.astro  # Header + Footer + scroll script
│   │   ├── ProductLayout.astro # HeaderSimple + FooterSimple
│   │   └── StandaloneLayout.astro # Privacy page (own CSS, no Tailwind)
│   ├── styles/
│   │   └── global.css        # CSS variables, Tailwind, custom utilities
│   └── pages/
│       ├── index.astro       # Main landing page
│       ├── privacy-policy.astro
│       └── ambiance/
│           └── index.astro   # Ambiance Wallpaper product page
└── CLAUDE.md
```

### Styling Approach

- Tailwind CSS with build-time compilation
- CSS custom properties for theming (light/dark mode via `prefers-color-scheme`)
- Global styles in `src/styles/global.css`
- Key color variables: `--bg-primary`, `--text-primary`, `--border-color`
- Custom utilities: `.lemon-gradient`, `.soft-shadow`, `.text-gradient`, `.split-bg`

### Key UI Patterns

- Navigation bar shrinks on scroll (JavaScript in layouts)
- Dark mode support through CSS custom properties and Tailwind's `dark:` prefix
- Responsive design using Tailwind breakpoint prefixes (`md:`)

### Layouts

- **MainLayout**: Full site layout with Header/Footer, used for main landing page
- **ProductLayout**: Simplified header with CTA button, used for product pages
- **StandaloneLayout**: No Tailwind, custom inline CSS, used for privacy policy

### Components

- **Logo.astro**: Accepts `size` prop (`sm`, `md`, `lg`) for different contexts
- **Header.astro**: Fixed nav with scroll-shrink effect
- **HeaderSimple.astro**: Accepts `playStoreUrl` prop for CTA button
- **Footer.astro**: Links to privacy, legal, contact
- **FooterSimple.astro**: Minimal footer for product pages
