# 🚀 Contributing to Starborn Dominion

> *"Together we build a constitutional framework for the stars"*

Thank you for your interest in contributing to the Starborn Dominion project! This guide will help you understand our development standards, cosmic design principles, and contribution process.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Component Documentation Standards](#component-documentation-standards)
- [Commit Message Standards](#commit-message-standards)
- [Code Review Process](#code-review-process)
- [Design System Guidelines](#design-system-guidelines)

## 🌟 Code of Conduct

The Starborn Dominion project follows the principles established in our constitutional framework:
- **Respect and Dignity**: Treat all contributors with respect and consideration
- **Merit-Based Contributions**: Focus on the quality and value of contributions
- **Transparency**: Maintain open communication and clear documentation
- **Balance**: Strive for consensus while making progress

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Git knowledge
- TypeScript familiarity

### Local Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/starborn-dominion.git
cd starborn-dominion

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 🛠️ Development Guidelines

### Component Creation Standards

When creating new components, follow this structure:

```tsx
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * ComponentName - Brief description aligned with cosmic/constitutional theme
 * 
 * Detailed description explaining the component's purpose, features, and
 * integration with the Starborn design system.
 * 
 * Features:
 * - Feature 1 with cosmic theming
 * - Feature 2 with stellar animations
 * - Feature 3 with responsive design
 * 
 * Design System Integration:
 * - Uses stellar-text for gradient effects
 * - Follows card-interactive hover patterns
 * - Implements animate-fade-in-up for consistency
 * 
 * @param {ComponentProps} props - Component properties
 * @returns {JSX.Element} Component description
 * 
 * @example
 * <ComponentName 
 *   title="Technological Safeguards" 
 *   variant="feature"
 *   className="stellar-text"
 * />
 * 
 * @accessibility
 * - Accessibility features description
 * - Keyboard navigation support
 * - Screen reader compatibility
 */
interface ComponentProps {
  title: string;
  variant?: 'feature' | 'principle' | 'governance';
  className?: string;
}

const ComponentName = ({ title, variant = 'feature', className }: ComponentProps): JSX.Element => {
  return (
    <Card className={`card-interactive animate-fade-in-up ${className}`}>
      <CardHeader>
        <CardTitle className="heading-secondary stellar-text">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Component content */}
      </CardContent>
    </Card>
  );
};

export default ComponentName;
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `ConstitutionTab.tsx`, `HeroSection.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useThrottledScroll.ts`)
- **Utilities**: camelCase (e.g., `logger.ts`, `performance.ts`)
- **Pages**: PascalCase (e.g., `Index.tsx`, `NotFound.tsx`)

### TypeScript Standards

- Always provide explicit types for props interfaces
- Use proper typing for React components (JSX.Element)
- Avoid `any` types - use specific types or `unknown`
- Document complex types with JSDoc comments

## 📚 Component Documentation Standards

### JSDoc Comment Structure

Every component must include comprehensive JSDoc documentation:

```tsx
/**
 * ComponentName - One-line description with cosmic theme
 * 
 * Detailed description explaining purpose, features, and design system integration.
 * Should mention constitutional/cosmic themes and stellar animations where applicable.
 * 
 * Features:
 * - List key features
 * - Mention cosmic theming elements
 * - Note responsive behavior
 * 
 * Design System Integration:
 * - CSS classes used (stellar-text, card-interactive, etc.)
 * - Animation patterns (animate-fade-in-up, stellar-pulse)
 * - Color palette integration (cosmic-400, stellar-400)
 * 
 * @param {PropsInterface} props - Component properties
 * @param {string} props.title - Property description
 * @param {variant} props.variant - Property description with options
 * 
 * @returns {JSX.Element} Description of what the component renders
 * 
 * @example
 * <ComponentName 
 *   title="Example Title"
 *   variant="feature"
 *   className="additional-classes"
 * />
 * 
 * @accessibility
 * - ARIA labels and roles
 * - Keyboard navigation support
 * - Screen reader compatibility
 * - Focus management
 */
```

### Props Interface Documentation

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
```

## 📝 Commit Message Standards

### Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New constitutional articles, UI components, or features
- `fix`: Bug fixes in navigation, animations, or responsive design
- `docs`: Updates to constitutional content or component documentation  
- `style`: Cosmic theme adjustments, Tailwind utility updates
- `refactor`: Component restructuring while preserving design system
- `test`: Adding tests for constitutional display logic
- `chore`: Dependencies, build configuration, or tooling updates

### Examples
```bash
feat(constitution): add new governance hierarchy display component

fix(navigation): resolve mobile menu stellar animation timing

docs(principles): update technological safeguards documentation

style(cosmic): enhance glassmorphism effects for card components

refactor(ui): consolidate stellar-text gradient implementations
```

## 🔍 Code Review Process

### Before Submitting a PR

- [ ] Run `npm run lint` and fix all errors
- [ ] Run `npm run build` successfully
- [ ] Test responsive behavior on multiple screen sizes
- [ ] Verify accessibility with keyboard navigation
- [ ] Ensure cosmic theme consistency
- [ ] Add/update JSDoc documentation for new components
- [ ] Follow established naming conventions

### Code Review Checklist

**Functionality**
- [ ] Code works as intended
- [ ] No breaking changes to existing features
- [ ] Proper error handling

**Design System Compliance**
- [ ] Uses established CSS custom properties and classes
- [ ] Follows cosmic color palette (stellar-400, cosmic-400)
- [ ] Implements consistent animation timing and easing
- [ ] Maintains responsive behavior patterns

**Code Quality**
- [ ] TypeScript interfaces are properly documented
- [ ] JSDoc comments follow established patterns
- [ ] No console.log statements in production code
- [ ] Proper component naming conventions

**Accessibility**
- [ ] ARIA labels where appropriate
- [ ] Keyboard navigation works correctly
- [ ] Focus-visible states are implemented
- [ ] Screen reader compatibility

**Performance**
- [ ] No unnecessary re-renders
- [ ] Optimized animations and transitions
- [ ] Proper component memoization if needed

## 🎨 Design System Guidelines

### Color Usage
```css
/* Primary Colors */
--stellar-400: #a855f7    /* Purple accent for interactive elements */
--cosmic-400: #8b5cf6     /* Violet accent for secondary elements */
--background: #0f0f14     /* Deep space background */
--foreground: #f8fafc     /* Light text */
```

### CSS Classes to Use
- `.stellar-text` - Gradient text effects
- `.card-interactive` - Hover animations for cards
- `.constitution-section` - Content areas with glassmorphism
- `.nav-link` - Interactive navigation styling
- `.heading-display`, `.heading-primary`, `.heading-secondary` - Typography scale
- `.animate-fade-in-up` - Entrance animations
- `.stellar-pulse`, `.cosmic-drift` - Cosmic animations

### Typography Scale
- Use fluid typography classes for responsive design
- Maintain proper heading hierarchy (h1, h2, h3, h4)
- Apply proper line-height for readability

### Animation Guidelines
- Use `animate-fade-in-up` for entrance effects
- Implement staggered delays (100ms, 200ms, 300ms increments)
- Respect `prefers-reduced-motion` media query
- Keep animations smooth and purposeful

## 🌟 Constitutional Theme Guidelines

When adding content or features, maintain the constitutional monarchy theme:

- Use cosmic and stellar terminology
- Reference constitutional principles (justice, liberty, prosperity)
- Maintain the post-Earth civilization narrative
- Include proper governmental hierarchy references
- Use merit-based and balance-of-power concepts

## 📞 Getting Help

- **Issues**: [Open an issue](https://github.com/your-username/starborn-dominion/issues) for bugs or feature requests
- **Discussions**: [Join discussions](https://github.com/your-username/starborn-dominion/discussions) for questions
- **Documentation**: Check the [README.md](README.md) for setup and overview

## 🏆 Recognition

Contributors who follow these guidelines and make meaningful contributions to the Starborn Dominion will be recognized in our project documentation and may be invited to join the Guardian Order of contributors.

---

*"Through merit, service, and dedication, we build a framework for the stars"*

Thank you for contributing to the Starborn Dominion! 🌟