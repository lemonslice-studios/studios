# Lemon Slice Studios

Website for Lemon Slice Studios, an Android app development studio focused on privacy-respecting, battery-efficient applications.

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Opens a development server at http://localhost:4321

### Production Build

```bash
bun run build
```

Outputs static files to the `dist/` directory.

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
src/
├── components/
│   ├── Logo.astro          # SVG logo with size variants
│   ├── Header.astro        # Main navigation
│   ├── HeaderSimple.astro  # Product page navigation
│   ├── Footer.astro        # Main footer
│   └── FooterSimple.astro  # Product page footer
├── layouts/
│   ├── BaseLayout.astro    # Base HTML structure
│   ├── MainLayout.astro    # Main site layout
│   ├── ProductLayout.astro # Product page layout
│   └── StandaloneLayout.astro # Standalone pages (no Tailwind)
├── styles/
│   └── global.css          # Global styles and CSS variables
└── pages/
    ├── index.astro         # Homepage
    ├── privacy-policy.astro
    └── ambiance/
        └── index.astro     # Ambiance Wallpaper product page

public/
├── img/                    # SVG images
├── fonts/                  # Plus Jakarta Sans font files
└── ambiance/               # Product page assets
```

## Pages

- **/** - Main landing page with studio info, portfolio, and philosophy
- **/ambiance/** - Ambiance Wallpaper product page
- **/privacy-policy/** - Privacy policy

## License

Copyright 2026 Lemon Slice Studios (lemon slice digital GmbH)
