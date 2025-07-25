# 🚀 Contributing to Starborn Dominion

Thank you for your interest in contributing to the Starborn Dominion project! This document provides comprehensive guidelines to help you contribute effectively while preserving our carefully crafted cosmic aesthetic and constitutional framework.

## 🌟 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Basic understanding of React, TypeScript, and Tailwind CSS

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/starborn.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Open your browser to `http://localhost:5173`

## 📝 Code Standards

### TypeScript & React Guidelines

- **All new code must be written in TypeScript**
- Use functional components with hooks (no class components)
- Implement proper TypeScript interfaces for all props
- Follow existing naming conventions for components and files

### Component Structure

```tsx
/**
 * ComponentName - Brief description aligned with cosmic/constitutional theme
 * 
 * Detailed explanation of component purpose and design system integration.
 * Maintains the Starborn aesthetic with stellar animations and cosmic theming.
 * 
 * @param prop1 - Description with type information
 * @param prop2 - Description with type information
 * 
 * @example
 * <ComponentName 
 *   prop1="value" 
 *   prop2={true}
 *   className="stellar-text"
 * />
 */
interface ComponentNameProps {
  prop1: string;
  prop2: boolean;
  className?: string;
}

const ComponentName = ({ prop1, prop2, className }: ComponentNameProps): JSX.Element => {
  return (
    <div className={cn("base-classes", className)}>
      {/* Component implementation */}
    </div>
  );
};

export default ComponentName;
```

## 🎨 Design System Guidelines

### Always Maintain

1. **Cosmic Color Palette**: Use CSS custom properties
   - `--stellar-400` (#a855f7) - Purple accent
   - `--cosmic-400` (#8b5cf6) - Violet accent  
   - `--background` (#0f0f14) - Deep space background
   - `--foreground` (#f8fafc) - Light text

2. **Design System Classes**
   - `.stellar-text` - Gradient text effects
   - `.card-interactive` - Interactive hover animations
   - `.constitution-section` - Content area styling
   - `.animate-fade-in-up` - Consistent entry animations

3. **Component Patterns**
   - Use Shadcn/ui as the base with custom Starborn extensions
   - Maintain responsive design patterns
   - Follow established animation timing and easing

### CSS and Styling

```css
/* Starborn Design System - Component Name
 * 
 * Creates cosmic hover effects with stellar animations
 * Maintains accessibility with proper focus states and color contrast
 * Uses custom CSS properties for consistent theming across components
 */
.component-class {
  /* Implementation preserves the established cosmic aesthetic */
  background: linear-gradient(135deg, var(--stellar-400), var(--cosmic-400));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🔧 Commit Message Standards

### Format
```
type(scope): description

Optional longer description explaining the change in more detail.
```

### Types Aligned with Starborn Project
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
test(hierarchy): add unit tests for military rank display
chore(deps): update shadcn/ui components to latest version
```

## 📚 Documentation Standards

### Component Documentation

All components should include:

```markdown
## ComponentName

### Purpose
Brief description aligned with the constitutional/cosmic theme

### Design System Integration
- Uses `stellar-text` for gradient effects
- Follows `card-interactive` hover patterns
- Implements `animate-fade-in-up` for consistency

### Props Interface
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Component title with stellar-text support |
| variant | 'feature' \| 'principle' | 'feature' | Design variant |

### Usage Examples
```tsx
// Basic usage maintaining design system
<ComponentName 
  title="Technological Safeguards"
  variant="feature"
  className="stellar-text"
/>
```

### Accessibility Features
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus-visible states with ring-primary styling
```

### JSDoc Standards

```tsx
/**
 * Combines Tailwind classes with design system utilities
 * 
 * Ensures proper class precedence for the Starborn theme
 * Handles conditional styling for cosmic and stellar variants
 * 
 * @param inputs - Array of class strings to merge
 * @returns Optimized className string for component styling
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

## 🔍 Code Review Checklist

Before submitting a pull request, verify:

- [ ] **Design System Compliance**
  - [ ] Uses established color palette (stellar-400, cosmic-400, etc.)
  - [ ] Follows existing component naming conventions
  - [ ] Maintains constitutional/cosmic theme in content

- [ ] **Animation & Interaction**
  - [ ] Respects cosmic theme timing (0.3s cubic-bezier(0.4, 0, 0.2, 1))
  - [ ] Uses established animation classes (animate-fade-in-up)
  - [ ] Hover effects follow card-interactive patterns

- [ ] **Accessibility**
  - [ ] Proper ARIA labels where needed
  - [ ] Keyboard navigation support
  - [ ] Focus-visible states with consistent ring styling
  - [ ] Color contrast meets WCAG standards

- [ ] **TypeScript & Code Quality**
  - [ ] All interfaces properly documented
  - [ ] No TypeScript errors or warnings
  - [ ] JSDoc comments for exported functions/components
  - [ ] ESLint passes without errors

- [ ] **Responsive Design**
  - [ ] Mobile-first responsive patterns
  - [ ] Matches existing breakpoint usage
  - [ ] Maintains design integrity across screen sizes

- [ ] **Testing**
  - [ ] Manual testing across different screen sizes
  - [ ] Keyboard navigation verification
  - [ ] Screen reader compatibility (if applicable)

## 🌐 Constitutional Theme Guidelines

### Content Writing
- Maintain the post-Earth civilization narrative
- Use formal, constitutional language where appropriate
- Reference cosmic/stellar themes in descriptions
- Preserve the balance of technological advancement and governance wisdom

### UI Text Patterns
- Use "Dominion" for the overarching government
- Reference "stellar", "cosmic", "constitutional" themes
- Maintain consistency with existing article and principle descriptions

## 🚀 Deployment and Release

### Build Verification
```bash
npm run build        # Verify production build works
npm run lint         # Ensure code quality standards
npm run preview      # Test production build locally
```

### Pull Request Process

1. **Create Feature Branch**: `git checkout -b feature/your-feature-name`
2. **Make Changes**: Follow all guidelines above
3. **Test Thoroughly**: Verify functionality and design
4. **Commit**: Use proper commit message format
5. **Push**: `git push origin feature/your-feature-name`
6. **Open PR**: Include detailed description of changes
7. **Review**: Address feedback and requested changes
8. **Merge**: Maintainer will merge when approved

## 💬 Getting Help

- **Documentation**: Check `/docs` folder for additional resources
- **Issues**: [Open an issue](https://github.com/Uuuuu77/starborn/issues) for bugs or questions
- **Discussions**: [Join discussions](https://github.com/Uuuuu77/starborn/discussions) for feature ideas

---

**"Justice, Liberty, and Prosperity Across the Stars"**

Thank you for helping build the future of interplanetary governance! 🌟