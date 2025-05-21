
# VASEE Landing Page – Product Requirements Document

## Project Overview

Create a visually stunning, dark-mode, animated one-page landing experience for the VASEE brand at `vasee.art`, designed to introduce the brand identity and drive users to the main Shopify store (hosted externally).

---

## Objectives

- Emotionally connect visitors with the VASEE brand.
- Use high-end visuals, motion, and tone to establish luxury feel.
- Direct users via a clear CTA to the Shopify store.
- Maintain fast performance, elegant responsiveness, and SEO readiness.
- Create visual assets where needed to best fit requirement description provided below.


---

## Target Tech Stack

- **Frontend Framework:** React (with Vite)
- **Styling:** Tailwind CSS (with dark mode defaults)
- **Animations:** Framer Motion
- **Hosting:** GitHub Pages via GitHub Actions
- **File Types:** .mp4/.webm for background video, .jpg/.png for images

---

## Page Structure

### 1. Hero Section – Video Reveal

- **Background:** Fullscreen auto-looping muted video (.mp4/.webm)
- **Overlay Text:** 
  - Primary tagline: “Designed to Hold Presence.”
  - Button CTA: `Enter the Gallery →` (links to Shopify store)
- **Motion:** Text fade-in, slow zoom on video, scroll-down indicator

---

### 2. Brand Essence Block

- **Content:** 1-paragraph poetic brand introduction
- **Visual:** Parallax ceramic texture background or grain overlay
- **Motion:** Slow text fade, background shifts on scroll

---

### 3. Signature Vases Showcase

- **Component:** Horizontal scroll or carousel of 3–5 vases
- **Each Item Includes:**
  - Product image
  - Name
  - 1-line descriptor
- **Motion:** Magnetic drag + hover zoom/tilt

---

### 4. The Artist's Touch

- **Split Layout:** 
  - Left: Looping studio video (hands shaping vase)
  - Right: Pull quote (e.g., “Crafted by hands that listen to silence.”)
- **Motion:** Scroll-based fade-in and pinning text effect

---

### 5. Mood Gallery – Interior Styling

- **Layout:** Masonry image grid or overlapping cards
- **Images:** Lifestyle shots in design-conscious homes
- **Optional:** Light ambient audio toggle (muted by default)
- **Tagline Overlay:** “The Shape of Thoughtful Living.”

---

### 6. Hint of Vasee Glow

- **Visual:** Glowing outline or blurred silhouette of a candle or similar object
- **Motion:** Scroll-triggered glow-in animation
- **Text:** “New forms of quiet beauty are taking shape.”

---

### 7. Footer CTA

- **Brand Logo Repeat**
- **CTA Button:** `Enter the Gallery →`
- **Social Icons:** Instagram / Pinterest
- **Minimal Legal Text:** © Vasee 2025

---

## Functional Requirements

- Fully responsive on mobile, tablet, and desktop
- Smooth scroll effects with lazy-loaded assets
- Minimal initial bundle size (<1MB preferred)
- Internal routing not required (pure scroll-page)
- External CTA opens Shopify in new tab

---

## Assets Required

| Type | Description | Format |
|------|-------------|--------|
| Hero Video | Glaze pour / Vase spin loop | .mp4 / .webm |
| Product Photos | 3–5 signature vase renders | .jpg / .png |
| Studio Footage | Artisan hands shaping clay | .mp4 |
| Interior Shots | Vases in styled homes | .jpg |
| Logo | Wordmark and icon | .svg / .png |
| Font Files | Maison Neue / Inter | .woff2 |

---

## Timeline Suggestion

| Milestone | ETA |
|----------|-----|
| Project scaffold (Vite + Tailwind + Routing) | Step 1 |
| Hero video & CTA section built | Step 2 |
| Brand & Showcase sections | Step 3 |
| Artist, Gallery, and Footer | Step 4 |
| QA + GitHub Pages deploy | Step 5 |

---

## Repository & Deployment

- **Repo Name:** `vasee-landing`
- **Branch:** `main`
- **Deployment:** GitHub Actions → GitHub Pages (root or `/docs` folder)
