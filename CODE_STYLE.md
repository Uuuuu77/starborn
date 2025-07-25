# 🎨 Starborn Dominion Code Style Guide

> *"Consistency across the cosmos, beauty in every line of code"*

This document defines the code style and conventions for the Starborn Dominion project, ensuring consistency with our cosmic design system and constitutional theme.

## 📋 Table of Contents

- [TypeScript & React Guidelines](#typescript--react-guidelines)
- [CSS & Styling Conventions](#css--styling-conventions)
- [Component Structure](#component-structure)
- [JSDoc Documentation Standards](#jsdoc-documentation-standards)
- [File Organization](#file-organization)
- [Design System Classes](#design-system-classes)

## 🔧 TypeScript & React Guidelines

### Component Definition

```tsx
// ✅ Preferred: Functional components with explicit return type
const ComponentName = (): JSX.Element => {
  return <div>Content</div>;
};

// ✅ With props: Interface definition with JSDoc
interface ComponentProps {
  title: string;
  variant?: 'feature' | 'principle' | 'governance';
  className?: string;
}

const ComponentName = ({ title, variant = 'feature', className }: ComponentProps): JSX.Element => {
  return <div className={className}>{title}</div>;
};
```

### Props Interface Standards

```tsx
/**
 * ComponentProps - Properties for the Component
 * 
 * @interface ComponentProps
 * @property {string} title - Component title, supports stellar-text gradient styling
 * @property {'feature' | 'principle' | 'governance'} variant - Design variant affecting styling
 * @property {number} animationDelay - Stagger animation timing in milliseconds
 * @property {string} className - Additional Tailwind classes for customization
 */
interface ComponentProps {
  title: string;
  variant?: 'feature' | 'principle' | 'governance';
  animationDelay?: number;
  className?: string;
}
```

### State Management

```tsx
// ✅ Use descriptive state names
const [isNavigationOpen, setIsNavigationOpen] = useState(false);
const [activeSection, setActiveSection] = useState('overview');

// ✅ Use proper typing for complex state
interface ConstitutionState {
  currentArticle: number;
  isLoading: boolean;
  sections: ConstitutionSection[];
}

const [constitutionState, setConstitutionState] = useState<ConstitutionState>({
  currentArticle: 1,
  isLoading: false,
  sections: []
});
```

### Event Handlers

```tsx
// ✅ Use descriptive handler names
const handleNavigationToggle = () => {
  setIsNavigationOpen(!isNavigationOpen);
};

const handleSectionChange = (section: string) => {
  setActiveSection(section);
  // Additional logic
};

// ✅ With proper typing for events
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};
```

## 🎨 CSS & Styling Conventions

### Tailwind Class Organization

```tsx
// ✅ Organize classes by category
<div className={`
  // Layout
  flex items-center justify-between
  // Spacing  
  px-4 py-6 mb-8
  // Colors & Backgrounds
  bg-card/50 backdrop-blur-sm
  // Borders & Radius
  border border-border/50 rounded-lg
  // Typography
  text-foreground/85 font-semibold
  // Interactions
  hover:bg-card/70 hover:scale-[1.02]
  // Animations
  transition-all duration-300 animate-fade-in-up
  // Responsive
  sm:px-6 lg:px-8
`}>
```

### Custom CSS Classes

```css
/* Starborn Design System Classes */

/* ✅ Component-specific classes with descriptive names */
.constitution-section {
  @apply bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg 
         hover:bg-card/70 transition-all duration-300;
}

.card-interactive {
  @apply constitution-section hover:scale-[1.02] hover:shadow-2xl 
         hover:shadow-cosmic-500/25 cursor-pointer transform transition-all duration-300;
}

/* ✅ Semantic naming for design system */
.stellar-text {
  @apply bg-gradient-to-r from-stellar-300 via-stellar-400 to-stellar-500 
         bg-clip-text text-transparent;
}

.nav-link {
  @apply relative text-foreground/80 hover:text-foreground transition-colors duration-200
         after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
         after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right 
         after:transition-transform after:duration-300 
         hover:after:scale-x-100 hover:after:origin-bottom-left;
}
```

### Color Usage Guidelines

```tsx
// ✅ Use semantic color classes
<h1 className="stellar-text">Starborn Dominion</h1>
<p className="text-cosmic-400">Constitutional Framework</p>
<div className="bg-background border-border">Content</div>

// ✅ Use opacity variants for hierarchy
<p className="text-foreground">Primary text</p>
<p className="text-foreground/85">Secondary text</p>
<p className="text-foreground/60">Tertiary text</p>
```

## 🏗️ Component Structure

### Standard Component Template

```tsx
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * ComponentName - Brief description with cosmic theme
 * 
 * Detailed description explaining the component's purpose and design system integration.
 * 
 * Features:
 * - Feature list with cosmic theming
 * - Stellar animations and responsive behavior
 * - Accessibility considerations
 * 
 * Design System Integration:
 * - CSS classes used (stellar-text, card-interactive)
 * - Animation patterns (animate-fade-in-up)
 * - Color palette (cosmic-400, stellar-400)
 * 
 * @param {ComponentProps} props - Component properties
 * @returns {JSX.Element} Component description
 * 
 * @example
 * <ComponentName title="Example" variant="feature" />
 * 
 * @accessibility
 * - ARIA labels and keyboard navigation
 * - Screen reader compatibility
 */
interface ComponentProps {
  title: string;
  variant?: 'feature' | 'principle' | 'governance';
  children?: ReactNode;
  className?: string;
}

const ComponentName = ({ 
  title, 
  variant = 'feature', 
  children, 
  className 
}: ComponentProps): JSX.Element => {
  return (
    <Card className={`card-interactive animate-fade-in-up ${className}`}>
      <CardHeader>
        <CardTitle className="heading-secondary stellar-text">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default ComponentName;
```

### Conditional Rendering

```tsx
// ✅ Use clear conditional patterns
{isLoading && (
  <div className="animate-fade-in">
    <LoadingSpinner />
  </div>
)}

{sections.length > 0 && (
  <div className="space-y-6">
    {sections.map((section, index) => (
      <ConstitutionSection 
        key={section.id} 
        {...section}
        animationDelay={index * 150}
      />
    ))}
  </div>
)}

// ✅ Use ternary for simple toggles
<div className={`
  ${isActive ? 'text-stellar-400' : 'text-foreground/60'}
  ${isScrolled ? 'bg-background/95' : 'bg-background/80'}
`}>
```

## 📚 JSDoc Documentation Standards

### Component Documentation

```tsx
/**
 * ComponentName - One-line description with cosmic/constitutional theme
 * 
 * Multi-line description explaining:
 * - Component purpose and constitutional relevance
 * - Key features and cosmic theming elements
 * - Integration with Starborn design system
 * - Responsive behavior and accessibility
 * 
 * Features:
 * - Bullet list of key features
 * - Cosmic theming and stellar animations
 * - Responsive design considerations
 * - Accessibility features
 * 
 * Design System Integration:
 * - CSS classes used (.stellar-text, .card-interactive)
 * - Animation patterns (animate-fade-in-up, stellar-pulse)
 * - Color palette integration (cosmic-400, stellar-400)
 * - Typography scale (heading-secondary, body-base)
 * 
 * @param {ComponentProps} props - Component properties object
 * @param {string} props.title - Component title, supports stellar-text gradient
 * @param {'feature' | 'principle' | 'governance'} props.variant - Design variant
 * @param {ReactNode} props.children - Child elements to render
 * @param {string} props.className - Additional Tailwind classes
 * 
 * @returns {JSX.Element} Rendered component with cosmic theming
 * 
 * @example
 * ```tsx
 * <ComponentName 
 *   title="Technological Safeguards"
 *   variant="feature"
 *   className="stellar-text animate-fade-in-up"
 * >
 *   <p>Constitutional content</p>
 * </ComponentName>
 * ```
 * 
 * @accessibility
 * - ARIA labels for interactive elements
 * - Keyboard navigation support (Tab, Enter, Escape)
 * - Screen reader compatible with semantic HTML
 * - Focus-visible states with ring-primary styling
 * - Reduced motion support via CSS media queries
 */
```

### Interface Documentation

```tsx
/**
 * ComponentProps - Properties interface for ComponentName
 * 
 * Defines the props contract for the component, including optional variants
 * and styling customization options for the Starborn design system.
 * 
 * @interface ComponentProps
 * @property {string} title - Component heading text, supports stellar-text gradient styling
 * @property {'feature' | 'principle' | 'governance'} variant - Design variant affecting card styling and colors
 * @property {number} animationDelay - Optional stagger animation timing in milliseconds (default: 0)
 * @property {ReactNode} children - Optional child elements to render within component
 * @property {string} className - Additional Tailwind CSS classes for customization
 */
```

### Function Documentation

```tsx
/**
 * Handles navigation section changes with smooth scrolling
 * 
 * Updates the active section state and closes mobile navigation menu.
 * Implements smooth scrolling behavior for enhanced user experience.
 * 
 * @param {string} section - Target section identifier ('overview', 'constitution', etc.)
 * @returns {void}
 * 
 * @example
 * handleNavigation('constitution');
 */
const handleNavigation = (section: string): void => {
  setActiveSection(section);
  setIsOpen(false);
};
```

## 📁 File Organization

### Directory Structure

```
src/
├── components/           # React components
│   ├── ui/              # Shadcn/ui components
│   ├── ConstitutionTab.tsx    # Feature components
│   ├── Navigation.tsx         # Layout components
│   └── HeroSection.tsx        # Section components
├── hooks/               # Custom React hooks
│   ├── useThrottledScroll.ts  # Scroll-related hooks
│   └── useMobile.tsx          # Device-related hooks
├── lib/                 # Utility libraries
│   └── utils.ts              # General utilities
├── pages/               # Route components
│   ├── Index.tsx             # Main pages
│   └── NotFound.tsx          # Error pages
├── utils/               # Utility functions
│   ├── logger.ts             # Logging utilities
│   └── performance.ts        # Performance utilities
├── App.tsx              # App component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

### Import Organization

```tsx
// ✅ Import order: React, third-party, local components, utilities
import { useState, useEffect } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useThrottledScroll } from '@/hooks/useThrottledScroll';
import { cn } from '@/lib/utils';
```

## 🌟 Design System Classes

### Typography Classes

```css
/* Heading hierarchy */
.heading-display    /* 3.5rem - 4.5rem fluid */
.heading-primary    /* 2.25rem - 3rem */
.heading-secondary  /* 1.5rem - 2rem */
.body-large         /* 1.125rem - 1.25rem */
.body-base          /* 1rem - 1.125rem */

/* Special text effects */
.stellar-text       /* Gradient from stellar-300 to stellar-500 */
.cosmic-text        /* Gradient from cosmic-300 to cosmic-500 */
```

### Layout Classes

```css
/* Container utilities */
.container-fluid    /* w-full px-4 sm:px-6 lg:px-8 */
.section-padding    /* py-8 sm:py-12 lg:py-16 */

/* Grid systems */
.grid-responsive    /* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 */
.grid-hero          /* grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center */
```

### Interactive Classes

```css
/* Card variants */
.card-interactive   /* Hover effects with scale and shadow */
.card-feature       /* Gradient background with backdrop blur */
.constitution-section /* Glassmorphism with border effects */

/* Navigation */
.nav-link          /* Underline animation on hover */
.nav-link-active   /* Active state styling */
```

### Animation Classes

```css
/* Entrance animations */
.animate-fade-in       /* Basic fade in */
.animate-fade-in-up    /* Fade in with upward motion */
.animate-stellar-pulse /* Cosmic pulse effect */
.animate-cosmic-drift  /* Gentle floating motion */

/* Animation delays */
.delay-100, .delay-200, .delay-300, .delay-400, .delay-500
```

## 🔧 Linting Configuration

### ESLint Rules Alignment

Follow these key ESLint rules for consistency:

```json
{
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-empty-object-type": "error", 
  "react-refresh/only-export-components": "warn"
}
```

### TypeScript Configuration

- Use strict mode for better type safety
- Avoid `any` types - prefer `unknown` or specific types
- Document complex types with JSDoc comments
- Use interface over type for object definitions

---

*"Code with precision, style with cosmic beauty"* ✨

Following these style guidelines ensures consistency across the Starborn Dominion codebase while maintaining our cosmic aesthetic and constitutional theme.