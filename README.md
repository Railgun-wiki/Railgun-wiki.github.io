# Railgun-wiki — Personal Engineering Project Hub

[![Build & Deploy](https://github.com/Railgun-wiki/Railgun-wiki.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Railgun-wiki/Railgun-wiki.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Site-railgun--wiki.github.io-blue.svg)](https://railgun-wiki.github.io/)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20v4%20%7C%20Vite-black.svg)](https://vite.dev/)

> **A project-oriented developer landing portal focusing on active, in-progress systems, embedded Linux, desktop tooling, and hardware projects rather than a static blog.**

---

## 🏛️ Architecture & Visual Design

- **Layout Structure**: Inspired by the iconic [Brittany Chiang v4 (`bchiang7/v4`)](https://github.com/bchiang7/v4) architecture:
  - Fixed brand navigation with smooth section anchoring and quick CTAs.
  - Floating left social rail (GitHub, Email, Terminal).
  - Floating right cryptographic trust rail (SSH-signed verification).
  - Numbered editorial sections:
    - `01. What I'm Actively Building` (Now / In Progress)
    - `02. Engineering Project Matrix` (Category-filtered project showcase)
    - `03. Engineering Toolchain & Radar` (Languages, kernel, hardware, desktop)
    - `04. Engineering Manifesto` (Project-driven delivery philosophy)
    - `05. Connect & Collaboration` (Dispatch actions)
- **Visual Design System**: Built according to [Figma Design Tokens (`DESIGN.md`)](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/figma):
  - Confident monochrome editorial canvas (`#ffffff` / `#000000`) paired with oversized pastel color-block sections:
    - **Lime** (`#dceeb1`) for AI & desktop tooling (`cc-switch`)
    - **Mint** (`#c8e6cd`) for mainline kernel & embedded BSP (`linux-redmi4a`)
    - **Lilac** (`#c5b0f4`) for systems & telemetry (`performance-hud`)
    - **Cream** (`#f4ecd6`) & **Coral** (`#f3c9b6`) for hardware PCBs and network gateways
    - **Navy** (`#1f1d3d`) for high-contrast running status ticker marquee
  - Pill-shaped CTAs (`rounded-full`), hairline boundaries (`#e6e6e6`), and bold display typography.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript (Strict mode)
- **Build Tool**: Vite 6 (sub-second HMR & static export)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React + custom SVG icons
- **Hosting**: GitHub Pages via automated GitHub Actions

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
pnpm install --ignore-workspace
```

### 2. Run local development server

```bash
pnpm dev
```

Visit `http://localhost:5173` to preview the site.

### 3. Production build

```bash
pnpm build
```

Generates production static assets into `./dist`.

---

## 📝 Updating Projects & Content

All content, active projects, tech stack badges, and profile links are centralized in a single typed configuration file:

👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

To add or update an ongoing project:
```ts
{
  id: 'my-project',
  name: 'Project Name',
  subtitle: 'One-line technical punchline',
  category: 'Systems', // 'Systems' | 'Embedded' | 'AI & Tools' | 'Hardware' | 'Network'
  status: 'Active',
  statusBadge: '🟢 In Active Shipping',
  description: 'Detailed description of the problem solved and architecture.',
  highlights: ['Key feature 1', 'Key feature 2'],
  tech: ['Rust', 'Linux', 'Tauri 2'],
  github: 'https://github.com/Railgun-wiki/my-project',
  website: 'https://example.com',
  colorTheme: 'lime', // 'lime' | 'mint' | 'lilac' | 'cream' | 'coral'
  featured: true,
  activeNow: true,
  year: '2026'
}
```

---

## 🌐 Deployment to GitHub Pages

1. In your GitHub repository **Settings > Pages**:
   - Under **Build and deployment > Source**, select **GitHub Actions**.
2. Push your changes to `master`:
   ```bash
   git add .
   git commit -m "feat: reset repository to project-oriented developer hub"
   git push origin master
   ```
3. The workflow in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) will automatically build and publish to `https://railgun-wiki.github.io/`.
