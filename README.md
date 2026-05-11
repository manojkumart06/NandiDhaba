# Nandi Fishland Dhaba

Premium cinematic restaurant website for **Nandi Fishland Dhaba** — Devanahalli Main Road, Karahalli, Karnataka.

> Where fire meets fresh catch.

## Tech

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** with custom ink / ember / gold / ocean palette
- **Framer Motion** + **GSAP** for cinematic scroll & motion
- **Lenis** smooth scrolling
- **Lucide** icons

## Features

- Fullscreen cinematic hero with animated swimming fish, ember particles, parallax
- Bilingual UI (English / ಕನ್ನಡ) with premium switcher
- Seafood horizontal scrub showcase, Grill & Fire cinematic frame, Dhaba experience bento
- Immersive menu — 17 categories, 80+ plates, real-time search with highlight + cross-category match
- Cinematic gallery with masked reveals
- Reservation modal that pre-fills WhatsApp with name / phone / guests / date / notes
- Floating call + WhatsApp + sticky mobile reserve CTA
- Embedded Google Maps location

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   # Navbar, Hero, HeroFish, SeafoodShowcase, GrillFire,
                # DhabaExperience, MenuSection, Gallery, Visit, Footer,
                # ReservationModal, FloatingButtons, LanguageSwitcher
  context/      # LanguageContext (EN / KN)
  data/         # menu.ts, translations.ts
  hooks/        # useSmoothScroll (Lenis + GSAP)
  index.css     # Cinematic grain, glass, ember/gold accents
```
