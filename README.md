# BlocPoint Landing — Vue 3 + Vite + Tailwind

## Setup
- Ensure Node 18+ is installed
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build: `npm run build`

## Editing Content
- All copy and data lives in `src/content/siteContent.ts`
- Update sections, FAQs, pricing, and hero dashboard here without touching components

## Theme Tokens
- Core tokens defined in `src/style.css` via CSS variables:
  - `--bg`, `--surface`, `--border`, `--glow`, `--primary`, `--text`
- Glassmorphism classes:
  - `glass`, `noise`, `gradient-border`, `sheen`

## Animations
- Confetti icons implemented in `ConfettiLayer.vue` using `requestAnimationFrame`
- Scroll reveal via `useScrollReveal` composable (IntersectionObserver)
- Card tilt interaction implemented in `Card.vue`
- Respects `prefers-reduced-motion` and disables confetti automatically

## Accessibility
- Focus-visible rings on interactive elements
- Keyboard navigable header and menus
- Reduced motion preference supported

## SEO
- Per-route meta via `useSeo` composable powered by `@vueuse/head`
- Default OG tags included in `index.html`

## Routes
- `/` Home
- `/about`
- `/compliance`
- `/privacy`
- `/terms`

## Notes
- No backend; modal forms mock-submit to localStorage and show toast
- Decorative assets use CSS gradients and SVG paths for performance
