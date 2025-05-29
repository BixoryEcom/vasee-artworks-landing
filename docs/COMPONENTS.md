# Component Documentation

This document provides an overview of the main components used in the Vasee Artworks Landing Page project. Each component is briefly described, including its purpose and where it appears on the site.

---

## Main Components

### Hero
- **Hero.tsx**: The main hero section with background video, tagline, and call-to-action button. First thing users see.
- **ScrollIndicator.tsx**: Animated indicator prompting users to scroll down from the hero section.
- **hero/** (folder): Contains subcomponents for the hero section, such as animated backgrounds, logo, and visual effects.

### Brand Essence
- **BrandEssence.tsx**: Displays a poetic introduction to the brand with parallax/grain background and smooth text animation.

### Product Showcase
- **ProductShowcase.tsx**: Horizontal carousel showcasing signature vases, each with image, name, and description. Includes drag and hover effects.

### The Artist's Touch
- **ArtistSection.tsx**: Split layout with studio video and a pull quote. Features scroll-based fade-in and pinning effects.

### Mood Gallery
- **MoodGallery.tsx**: Masonry grid of lifestyle images showing vases in real homes. May include ambient audio toggle and overlay tagline.

### Tease Section
- **TeaseSection.tsx**: Visual teaser with glowing outline or silhouette, used to hint at new products or features.

### Social Proof
- **SocialProof.tsx**: Displays testimonials and press logos to build trust. Appears above the 'Stories in Glass' section.

### Footer
- **Footer.tsx**: Contains brand logo, CTA button, social icons, and legal text. Appears at the bottom of the page.
- **Logo.tsx**: Renders the Vasee brand logo, used in the footer and possibly other sections.

### Animated Text
- **AnimatedText.tsx**: Utility component for animating text appearance, used in various sections for engaging headlines.

---

## UI Components (ui/ folder)
Reusable building blocks such as buttons, cards, tooltips, tabs, sliders, and more. These are used throughout the site to ensure a consistent look and feel.

## Notes
- All components are designed to be responsive and accessible.
- Animations are primarily handled with Framer Motion.
- Utility and layout components are grouped for maintainability.

For more details on each component, see the source code in `src/components/` and its subfolders. 