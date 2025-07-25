# 🎨 Starborn Dominion Design System

The Starborn Dominion design system embodies the cosmic aesthetic and constitutional framework of our post-Earth civilization. This comprehensive guide documents all design tokens, components, and patterns.

## 🌌 Design Philosophy

### Core Principles
- **Cosmic Elegance**: Deep space backgrounds with stellar accents create a sense of infinite possibility
- **Constitutional Formality**: Balanced typography and structured layouts reflect governmental authority
- **Universal Accessibility**: All citizens must have equal access to constitutional information
- **Technological Harmony**: AI-enhanced interfaces with transparent interactions

### Visual Metaphors
- **Stars and Cosmos**: Representing infinite potential and exploration
- **Constitutional Documents**: Clean, readable typography for important governance content
- **Balanced Power**: Symmetric layouts reflecting the checks and balances of the Dominion
- **Progression**: Animations suggesting growth and evolution

## 🎨 Color Palette

### Primary Colors

```css
:root {
  /* Stellar Colors - Primary brand accents */
  --stellar-50: #faf5ff;
  --stellar-100: #f3e8ff;
  --stellar-200: #e9d5ff;
  --stellar-300: #d8b4fe;
  --stellar-400: #a855f7;  /* Primary stellar accent */
  --stellar-500: #9333ea;
  --stellar-600: #7c3aed;
  --stellar-700: #6d28d9;
  --stellar-800: #5b21b6;
  --stellar-900: #4c1d95;

  /* Cosmic Colors - Secondary accents */
  --cosmic-50: #f5f3ff;
  --cosmic-100: #ede9fe;
  --cosmic-200: #ddd6fe;
  --cosmic-300: #c4b5fd;
  --cosmic-400: #8b5cf6;  /* Primary cosmic accent */
  --cosmic-500: #7c3aed;
  --cosmic-600: #6d28d9;
  --cosmic-700: #5b21b6;
  --cosmic-800: #4c1d95;
  --cosmic-900: #3c1361;
}
```

### Semantic Colors

```css
:root {
  /* Background Colors */
  --background: #0f0f14;        /* Deep space background */
  --card: #1e1e2e;              /* Container backgrounds */
  --popover: #1e1e2e;           /* Overlay backgrounds */
  --muted: #27272a;             /* Subtle backgrounds */

  /* Text Colors */
  --foreground: #f8fafc;        /* Primary text */
  --muted-foreground: #6b7280;  /* Secondary text */
  --card-foreground: #f8fafc;   /* Card text */

  /* Interactive Colors */
  --primary: #a855f7;           /* Primary actions */
  --primary-foreground: #faf5ff; /* Primary action text */
  --secondary: #27272a;         /* Secondary actions */
  --secondary-foreground: #f8fafc; /* Secondary action text */

  /* Status Colors */
  --destructive: #ef4444;       /* Error states */
  --destructive-foreground: #fef2f2; /* Error text */
  --warning: #f59e0b;           /* Warning states */
  --success: #10b981;           /* Success states */

  /* Border Colors */
  --border: #374151;            /* Subtle borders */
  --input: #374151;             /* Input borders */
  --ring: #a855f7;              /* Focus rings */
}
```

## 📝 Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

```css
/* Display Typography */
.heading-display {
  font-size: clamp(3.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Heading Typography */
.heading-primary {
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.heading-secondary {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.3;
}

.heading-tertiary {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.4;
}

/* Body Typography */
.body-large {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.6;
}

.body-base {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  font-weight: 400;
  line-height: 1.6;
}

.body-small {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
}
```

### Special Text Effects

```css
/* Stellar gradient text effect */
.stellar-text {
  background: linear-gradient(135deg, var(--stellar-400), var(--cosmic-400));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: stellar-shimmer 3s ease-in-out infinite;
}

@keyframes stellar-shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Cosmic gradient text effect */
.cosmic-text {
  background: linear-gradient(90deg, var(--cosmic-400), var(--stellar-400), var(--cosmic-400));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  animation: cosmic-flow 2s linear infinite;
}

@keyframes cosmic-flow {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

## 🧩 Component Patterns

### Card Components

```css
/* Base card styling */
.card-base {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Interactive card with hover effects */
.card-interactive {
  @apply card-base;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 25px -3px rgba(168, 85, 247, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-color: var(--stellar-400);
}

/* Feature card with special styling */
.card-feature {
  @apply card-interactive;
  background: linear-gradient(135deg, var(--card) 0%, rgba(168, 85, 247, 0.05) 100%);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

/* Constitution section styling */
.constitution-section {
  @apply card-base;
  background: rgba(var(--card), 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(168, 85, 247, 0.1);
}
```

### Navigation Components

```css
/* Interactive navigation links */
.nav-link-interactive {
  position: relative;
  color: var(--foreground);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.nav-link-interactive::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--stellar-400), var(--cosmic-400));
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link-interactive:hover,
.nav-link-interactive:focus-visible {
  color: var(--stellar-400);
  background: rgba(168, 85, 247, 0.1);
}

.nav-link-interactive:hover::after,
.nav-link-interactive:focus-visible::after {
  width: 80%;
}

.nav-link-interactive.active {
  color: var(--stellar-400);
  background: rgba(168, 85, 247, 0.1);
}

.nav-link-interactive.active::after {
  width: 80%;
}
```

## 🎬 Animation System

### Core Animation Principles
- **Ease-in-out timing**: `cubic-bezier(0.4, 0, 0.2, 1)` for natural movement
- **Staggered reveals**: Sequential animations with 100-200ms delays
- **Respectful motion**: Honors `prefers-reduced-motion` accessibility setting

### Standard Animations

```css
/* Fade in up - Entry animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Stellar pulse - Accent animation */
@keyframes stellar-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
  }
}

.animate-stellar-pulse {
  animation: stellar-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Cosmic drift - Background animation */
@keyframes cosmic-drift {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
}

.animate-cosmic-drift {
  animation: cosmic-drift 20s linear infinite;
}
```

### Motion Preferences

```css
/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📏 Spacing System

### Base Spacing Scale
```css
:root {
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
}
```

### Layout Spacing
```css
/* Section padding for major content areas */
.section-padding {
  padding: var(--space-12) var(--space-4);
}

@media (min-width: 640px) {
  .section-padding {
    padding: var(--space-16) var(--space-6);
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding: var(--space-20) var(--space-8);
  }
}

/* Container constraints */
.container-fluid {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
```

## 🎯 Accessibility Standards

### Focus Management
```css
/* Visible focus indicators */
.focus-visible {
  outline: 2px solid var(--stellar-400);
  outline-offset: 2px;
  border-radius: 0.25rem;
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--background);
  color: var(--foreground);
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  border: 2px solid var(--stellar-400);
  z-index: 1000;
}

.skip-to-content:focus {
  top: 6px;
}
```

### Color Contrast
All text meets WCAG AA standards:
- **Normal text**: 4.5:1 contrast ratio minimum
- **Large text**: 3:1 contrast ratio minimum
- **Interactive elements**: Clear visual distinction

### Screen Reader Support
- Semantic HTML structure
- Proper ARIA labels and descriptions
- Logical heading hierarchy
- Alternative text for all images

---

This design system ensures consistency across all Starborn Dominion interfaces while maintaining our cosmic aesthetic and constitutional dignity. All components should reference these standards to preserve the unified vision of our interplanetary governance framework.

**"Designed with the precision of the stars and the wisdom of the constitution."** ⭐