# 🎨 Starborn Dominion Code Style Guide

This guide defines the specific code style standards for the Starborn Dominion project, ensuring consistency with our cosmic theme and constitutional framework.

## 📝 Code Comments Guidelines

### React Components

```tsx
/**
 * DominionCard - Interactive card component for displaying constitutional content
 * 
 * Follows the Starborn design system with cosmic theming and stellar animations.
 * Supports multiple variants (feature, principle, governance) with consistent spacing.
 * Integrates with the constitutional framework to display governance information.
 * 
 * @param title - Card heading text, supports stellar-text gradient styling
 * @param variant - Design variant: 'feature' | 'principle' | 'governance'
 * @param animationDelay - Stagger animation timing in milliseconds
 * @param className - Additional Tailwind classes for customization
 * @param children - Card content, typically constitutional text or governance details
 * 
 * @example
 * ```tsx
 * <DominionCard 
 *   title="Technological Safeguards" 
 *   variant="feature"
 *   animationDelay={200}
 *   className="stellar-text"
 * >
 *   <p>Constitutional content here...</p>
 * </DominionCard>
 * ```
 */
```

### CSS/Styling Comments

```css
/* Starborn Design System - Interactive Navigation Links
 * 
 * Creates cosmic hover effects with stellar underline animations
 * Maintains accessibility with proper focus states and color contrast
 * Uses custom CSS properties for consistent theming across components
 * Supports both desktop and mobile interaction patterns
 */
.nav-link-interactive {
  position: relative;
  color: var(--foreground);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Stellar underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--stellar-400), var(--cosmic-400));
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &:focus-visible::after {
    width: 100%;
  }
}
```

### Utility Functions

```tsx
/**
 * Combines Tailwind classes with design system utilities
 * 
 * Ensures proper class precedence for the Starborn theme while maintaining
 * Tailwind's utility-first approach. Handles conditional styling for cosmic
 * and stellar variants with proper merge resolution.
 * 
 * @param inputs - Array of class strings, objects, or conditional expressions
 * @returns Optimized className string for component styling
 * 
 * @example
 * ```tsx
 * cn(
 *   "base-component-classes",
 *   isActive && "stellar-text",
 *   variant === "cosmic" && "cosmic-gradient",
 *   className
 * )
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

### Hook Documentation

```tsx
/**
 * Custom hook for managing constitutional display state
 * 
 * Handles the complex state management for constitutional article navigation,
 * preserving scroll position and managing animations between sections.
 * Integrates with the Starborn routing system and cosmic theme animations.
 * 
 * @param initialSection - Initial section to display on mount
 * @returns Object containing current section, navigation functions, and loading state
 * 
 * @example
 * ```tsx
 * const { 
 *   currentSection, 
 *   navigateToSection, 
 *   isLoading 
 * } = useConstitutionalNavigation('overview');
 * ```
 */
```

## 🏗️ File Structure Standards

### Component File Organization

```
ComponentName/
├── index.ts                 // Export barrel
├── ComponentName.tsx        // Main component
├── ComponentName.test.tsx   // Tests (if applicable)
├── ComponentName.stories.tsx // Storybook stories (if applicable)
└── types.ts                // Component-specific types
```

### Import Organization

```tsx
// 1. React and core dependencies
import { useState, useEffect, type ReactNode } from 'react';
import { type VariantProps } from 'class-variance-authority';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Lucide } from 'lucide-react';

// 3. Internal UI components (alphabetical)
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// 4. Internal business components
import { ConstitutionalSection } from '@/components/ConstitutionalSection';

// 5. Hooks and utilities
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

// 6. Types and constants
import type { ConstitutionalArticle } from '@/types/constitution';
import { STELLAR_ANIMATIONS } from '@/constants/animations';
```

## 🎯 Naming Conventions

### Components

- **PascalCase** for component names: `ConstitutionTab`, `DominionCard`
- **Descriptive names** that reflect purpose: `HierarchySection` not `Section1`
- **Cosmic/Constitutional theme** where appropriate: `StellarNavigation`, `GovernanceCard`

### Variables and Functions

- **camelCase** for variables and functions: `currentSection`, `navigateToArticle`
- **Descriptive names**: `isConstitutionLoaded` not `isLoaded`
- **Boolean variables** start with `is`, `has`, `should`: `isActive`, `hasAnimated`, `shouldShowDetails`

### Constants

- **SCREAMING_SNAKE_CASE** for constants: `STELLAR_COLORS`, `ANIMATION_DURATIONS`
- **Grouped by domain**: `CONSTITUTIONAL_ARTICLES`, `HIERARCHY_RANKS`

### CSS Classes

- **kebab-case** for custom classes: `stellar-text`, `card-interactive`
- **BEM methodology** for complex components: `navigation__item--active`
- **Prefix with component** for scoped styles: `dominion-card__header`

## 🌟 Design System Integration

### Color Usage

```tsx
// ✅ Correct - Use CSS custom properties
className="text-stellar-400 bg-cosmic-400/10"

// ✅ Correct - Use design system classes
className="stellar-text cosmic-gradient"

// ❌ Incorrect - Hard-coded colors
className="text-purple-500 bg-violet-100"
```

### Animation Patterns

```tsx
// ✅ Correct - Use established animation classes
className="animate-fade-in-up"
style={{ animationDelay: `${index * 100}ms` }}

// ✅ Correct - Custom animations with cosmic timing
transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"

// ❌ Incorrect - Inconsistent timing
transition: "all 0.5s ease-in-out"
```

### Typography

```tsx
// ✅ Correct - Use established heading classes
<h1 className="heading-primary stellar-text">Constitutional Framework</h1>
<h2 className="heading-secondary">Article I: Core Principles</h2>
<p className="body-base">Constitutional content...</p>

// ❌ Incorrect - Direct Tailwind without design system
<h1 className="text-4xl font-bold">Title</h1>
```

## 📱 Responsive Design Patterns

### Breakpoint Usage

```tsx
// ✅ Correct - Mobile-first approach with consistent breakpoints
className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
className="text-sm sm:text-base lg:text-lg"
className="p-4 sm:p-6 lg:p-8"

// ❌ Incorrect - Inconsistent or desktop-first
className="grid-cols-3 md:grid-cols-1"
```

### Container Patterns

```tsx
// ✅ Correct - Use established container classes
<div className="container-fluid section-padding">
<div className="constitution-section">

// ❌ Incorrect - Custom container without system integration
<div className="max-w-7xl mx-auto px-4">
```

## 🔧 Error Handling Standards

### Component Error Boundaries

```tsx
/**
 * Error boundary for constitutional content sections
 * 
 * Provides graceful error handling for complex constitutional displays
 * while maintaining the cosmic theme and user experience.
 */
<ErrorBoundary
  fallback={
    <div className="constitution-section text-center">
      <h3 className="heading-secondary text-muted-foreground">
        Unable to load constitutional content
      </h3>
      <p className="body-base text-muted-foreground/80">
        The cosmic data streams are temporarily disrupted. Please try again.
      </p>
    </div>
  }
>
  <ConstitutionalContent />
</ErrorBoundary>
```

### Async Operations

```tsx
// ✅ Correct - Comprehensive error handling with user feedback
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const loadConstitutionalData = async () => {
  setLoading(true);
  setError(null);
  
  try {
    const data = await fetchConstitutionalArticles();
    setArticles(data);
  } catch (err) {
    setError('Failed to load constitutional framework. The stellar networks may be offline.');
    console.error('Constitutional data loading error:', err);
  } finally {
    setLoading(false);
  }
};
```

## 📊 Performance Guidelines

### Lazy Loading

```tsx
// ✅ Correct - Lazy load heavy components with appropriate fallbacks
const ConstitutionTab = lazy(() => import('@/components/ConstitutionTab'));
const HierarchyTab = lazy(() => import('@/components/HierarchyTab'));

// In component
<Suspense fallback={<LoadingSpinner text="Loading constitutional articles..." />}>
  <ConstitutionTab />
</Suspense>
```

### Memoization

```tsx
// ✅ Correct - Memoize expensive computations
const sortedArticles = useMemo(() => 
  articles.sort((a, b) => a.order - b.order),
  [articles]
);

const handleNavigation = useCallback((section: string) => {
  setActiveSection(section);
  scrollToSection(section);
}, []);
```

## 🧪 Testing Standards

### Component Tests

```tsx
/**
 * Test suite for DominionCard component
 * 
 * Verifies constitutional content display, cosmic theming,
 * and accessibility compliance.
 */
describe('DominionCard', () => {
  it('renders with stellar-text className when specified', () => {
    render(
      <DominionCard 
        title="Test Article" 
        className="stellar-text"
      />
    );
    
    expect(screen.getByRole('article')).toHaveClass('stellar-text');
  });

  it('applies proper animation delay for staggered effects', () => {
    render(<DominionCard title="Test" animationDelay={200} />);
    
    expect(screen.getByRole('article')).toHaveStyle({
      animationDelay: '200ms'
    });
  });
});
```

---

This code style guide ensures that all contributions maintain the Starborn Dominion's cosmic aesthetic and constitutional framework while following modern development best practices. 

**"Code with the precision of the stars and the wisdom of the constitution."** ⭐