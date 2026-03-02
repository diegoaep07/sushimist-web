# AGENTS.md

This document provides essential information for agentic coding agents operating in this repository.

## 1. Project Overview
- **Type:** Astro (v5+) web application.
- **Language:** TypeScript.
- **Purpose:** A minimal bistro/restaurant website with a WhatsApp-based order flow.
- **Key Files:**
  - `src/config.ts`: Central configuration (SITE_CONFIG and MENU).
  - `src/pages/`: Main application routes (index, menu, cart).
  - `src/components/`: Reusable Astro components.
  - `src/styles/global.css`: Global CSS variables and utility classes.

## 2. Commands & Workflow
Currently, there are no specific linting or testing frameworks configured.

### Build & Dev
- **Development:** `npm run dev` (starts the local dev server).
- **Build:** `npm run build` (generates static site in `dist`).
- **Preview:** `npm run preview` (previews the build).
- **Astro CLI:** `npm run astro -- [command]` (for specific Astro operations).

### Testing & Linting
- **Tests:** No testing suite is established. If you need to add tests, consider Vitest or Playwright.
- **Linter:** No explicit ESLint/Prettier configuration found. Follow existing file formatting (spaces, semicolon).
- **Types:** Run `npm run build` to verify types across the project via Astro's built-in check.

## 3. Code Style & Guidelines

### File Structure & Naming
- **Components:** Use PascalCase for `.astro` files (e.g., `FoodCard.astro`).
- **Pages:** Use lowercase for route files in `src/pages/` (e.g., `menu.astro`).
- **Assets:** Store images in `src/assets/menu/` for dynamic loading.

### Astro Component Pattern
Astro components follow the code fence (`---`) pattern for server-side logic and the `<script>` tag for client-side interactivity.

```astro
---
// Server-side Logic (TypeScript)
import { SITE_CONFIG } from '../config';

interface Props {
  title: string;
  price?: number;
}

const { title, price = 0 } = Astro.props;
---

<div class="component">
  <h3>{title}</h3>
  {price > 0 && <span>{SITE_CONFIG.currency}{price}</span>}
</div>

<script>
  // Client-side Logic
  // Use 'astro:page-load' for interactivity that persists across View Transitions
  document.addEventListener('astro:page-load', () => {
    console.log('Component hydrated');
  });
</script>

<style>
  /* Scoped Styles */
  .component {
    padding: var(--space-sm);
  }
</style>
```

### TypeScript Usage
- **Strict Mode:** The project extends `astro/tsconfigs/strict`. Always provide explicit types for component props using `interface Props`.
- **Imports:**
  - Prefer relative imports for local project files (e.g., `import { SITE_CONFIG } from '../config'`).
  - Use `import type` for type-only imports when possible.

### State Management
- **Cart Logic:** Persisted in `sessionStorage`.
- **Inter-component Communication:** Use custom `window.dispatchEvent` events (e.g., `cart-updated`) to notify other components of state changes.

### Styling
- **CSS Variables:** Use the variables defined in `src/styles/global.css` (e.g., `var(--primary)`, `var(--space-md)`).
- **Scoped Styles:** Prefer the `<style>` tag within Astro components for component-specific styling.
- **Responsive Design:** Follow a mobile-first approach.

### Assets & Images
- **Image Metadata:** Use `import.meta.glob` to dynamically load menu images.
- **Astro Image:** Always use the `<Image />` component from `astro:assets` for optimized image delivery.

## 4. Specific Rules & Integrations
- **Cursor Rules:** No specific `.cursorrules` or `.cursor/rules/` directories are defined. Follow the general style of the codebase.
- **Copilot Rules:** No specific `.github/copilot-instructions.md` is defined.

## 5. Implementation Instructions
- **Modifying Menu:** To add or remove items, edit `MENU` in `src/config.ts`. Ensure image filenames match what's in `src/assets/menu/`.
- **WhatsApp Integration:** The `whatsappNumber` in `SITE_CONFIG` must be in international format without `+` or leading zeros (e.g., `1234567890`).
- **Cart Updates:** Ensure any action that modifies `sessionStorage` also dispatches `cart-updated` to keep the UI in sync.
