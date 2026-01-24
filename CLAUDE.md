# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS website for **Lemon Slice Studios**, an Android app development studio. There is no build system, package manager, or framework—just pure HTML, CSS, and JavaScript.

## Development

### Local Server

```bash
# Python 3
python -m http.server 8000 --directory www/studios

# Or Node.js
npx http-server www/studios
```

Then open http://localhost:8000

### No Build Steps

- No compilation, bundling, or transpilation required
- Edit HTML files directly and refresh browser
- Tailwind CSS runs via runtime script (js/tailwind-min.js)

## Architecture

### Directory Structure

```
www/studios/           # Site root
├── index.html         # Main landing page
├── privacy-policy.html
├── ambiance/          # Product page for Ambiance Wallpaper app
├── img/               # SVG images
├── js/                # Tailwind runtime
└── webfonts/          # Plus Jakarta Sans font files
```

### Styling Approach

- All CSS is embedded in `<style>` tags within HTML files
- Uses CSS custom properties for theming (light/dark mode via `prefers-color-scheme`)
- Tailwind utility classes applied directly to elements
- Key color variables: `--bg-primary`, `--text-primary`, `--border-color`

### Key UI Patterns

- Navigation bar shrinks on scroll (JavaScript in index.html)
- Dark mode support through CSS custom properties
- Responsive design using Tailwind breakpoint prefixes (`md:`)
