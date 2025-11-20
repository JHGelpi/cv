# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A web-based professional resume/CV built with plain HTML, CSS, and JavaScript. Designed for deployment on GitHub Pages.

## Development

**Local preview:** Open `index.html` directly in a browser, or use a local server:
```bash
python -m http.server 8000
# or
npx serve
```

**No build step required** - files are served as-is.

## Architecture

- `index.html` - Main resume content with semantic HTML sections
- `css/styles.css` - Styling with CSS custom properties for theming
- `js/main.js` - Optional interactivity (print, smooth scroll)
- `assets/` - Images, icons, and other static files

## Deployment

Configured for GitHub Pages. Push to `main` branch and enable Pages in repository settings pointing to root directory.

## Repository management

- Suggest commit summary comment when making changes to accompany the merge

## Styling Conventions

- CSS custom properties defined in `:root` for colors and spacing
- Mobile-first responsive design with `@media` breakpoints
- Print styles included for PDF generation via browser print
