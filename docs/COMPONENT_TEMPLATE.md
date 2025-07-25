# 📚 Component Documentation Template

> *"Every component tells the story of our cosmic constitutional framework"*

This template provides the standard format for documenting React components in the Starborn Dominion project.

## 📝 Component Documentation Format

Use this format for creating comprehensive documentation for new components:

```markdown
# ComponentName

## Purpose
Brief description of the component's role in the constitutional framework, aligned with the cosmic theme.

## Design System Integration
- Uses `stellar-text` for gradient effects
- Follows `card-interactive` hover patterns  
- Implements `animate-fade-in-up` for consistency
- Maintains cosmic color palette (stellar-400, cosmic-400)
- Supports responsive behavior with fluid typography

## Props Interface

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| title | string | - | ✅ | Component title, supports stellar-text gradient styling |
| variant | 'feature' \| 'principle' \| 'governance' | 'feature' | ❌ | Design variant affecting styling and behavior |
| animationDelay | number | 0 | ❌ | Stagger animation timing in milliseconds |
| className | string | '' | ❌ | Additional Tailwind classes for customization |
| children | ReactNode | - | ❌ | Child elements to render within component |

## Usage Examples

### Basic Usage
```tsx
<ComponentName 
  title="Technological Safeguards"
  variant="feature"
/>
```

### With Custom Styling
```tsx
<ComponentName 
  title="Constitutional Principles"
  variant="principle"
  className="stellar-text animate-fade-in-up"
  animationDelay={200}
>
  <p>Additional constitutional content</p>
</ComponentName>
```

### Advanced Configuration
```tsx
<ComponentName 
  title="Governance Hierarchy"
  variant="governance"
  className="mb-8 card-interactive"
  animationDelay={300}
>
  <div className="space-y-4">
    <p className="text-cosmic-400">Hierarchical content</p>
    <Button className="stellar-gradient">Learn More</Button>
  </div>
</ComponentName>
```

## Accessibility Features
- Proper ARIA labels for screen readers
- Keyboard navigation support (Tab, Enter, Escape)
- Focus-visible states with ring-primary styling
- High contrast text ratios for readability
- Semantic HTML structure with proper heading hierarchy
- Reduced motion support via CSS media queries

## Animation Behavior
- Entrance: `animate-fade-in-up` with configurable delay
- Hover: Scale transform and cosmic shadow effects
- Focus: Ring outline with stellar-400 color
- Stagger: Progressive delays for multiple instances

## Responsive Design
- Mobile-first approach with breakpoint scaling
- Fluid typography using text-fluid-* classes
- Adaptive spacing (px-4 sm:px-6 lg:px-8)
- Touch-friendly interactive elements (min 44px)

## Design System Classes Used
- `.stellar-text` - Gradient text from stellar-300 to stellar-500
- `.card-interactive` - Hover effects with scale and shadow
- `.constitution-section` - Glassmorphism background with borders
- `.animate-fade-in-up` - Entrance animation with upward motion
- `.text-cosmic-400` - Cosmic purple accent color
- `.ring-primary` - Focus ring with stellar-400 color

## Code Quality
- TypeScript strict mode compliance
- Comprehensive JSDoc documentation
- ESLint rule adherence
- Performance optimized with React.memo if needed
- Error boundary compatibility

## Testing Considerations
- Render testing with different prop combinations
- Accessibility testing with screen readers
- Keyboard navigation validation
- Responsive behavior across breakpoints
- Animation timing and performance testing

## Related Components
- List components that work well together
- Reference parent/child component relationships
- Note any required context providers

## Constitutional Theme Integration
- Explain how the component fits the post-Earth civilization narrative
- Reference governmental hierarchy if applicable
- Describe merit-based or constitutional principle connections
```

## 📋 JSDoc Template

Use this template for comprehensive JSDoc comments:

```tsx
/**
 * ComponentName - Brief description with cosmic/constitutional theme
 * 
 * Detailed description explaining the component's purpose within the Starborn
 * constitutional framework. Include information about cosmic theming, stellar
 * animations, and responsive behavior patterns.
 * 
 * Features:
 * - Cosmic theming with stellar gradient effects
 * - Interactive hover states and animations  
 * - Responsive design with fluid typography
 * - Accessibility features with keyboard navigation
 * - Constitutional theme integration
 * 
 * Design System Integration:
 * - Uses stellar-text class for gradient text effects
 * - Implements card-interactive for hover animations
 * - Follows animate-fade-in-up pattern for entrances
 * - Maintains cosmic color palette (stellar-400, cosmic-400)
 * - Supports responsive spacing patterns
 * 
 * @param {ComponentProps} props - Component properties object
 * @param {string} props.title - Component title, supports stellar-text styling
 * @param {'feature' | 'principle' | 'governance'} props.variant - Design variant
 * @param {number} props.animationDelay - Animation delay in milliseconds
 * @param {ReactNode} props.children - Child elements to render
 * @param {string} props.className - Additional CSS classes
 * 
 * @returns {JSX.Element} Rendered component with cosmic theming
 * 
 * @example
 * ```tsx
 * <ComponentName 
 *   title="Technological Safeguards"
 *   variant="feature"
 *   animationDelay={200}
 *   className="stellar-text"
 * >
 *   <p>Constitutional content</p>
 * </ComponentName>
 * ```
 * 
 * @accessibility
 * - ARIA labels for interactive elements
 * - Keyboard navigation support (Tab, Enter, Escape)
 * - Screen reader compatible semantic structure
 * - Focus-visible states with ring-primary styling
 * - High contrast ratios for text readability
 * - Reduced motion support via prefers-reduced-motion
 */
```

## 🎯 Props Interface Template

```tsx
/**
 * ComponentProps - Properties interface for ComponentName
 * 
 * Defines the props contract for the component with comprehensive typing
 * and documentation for the Starborn design system integration.
 * 
 * @interface ComponentProps
 * @property {string} title - Component heading text, supports stellar-text gradient styling
 * @property {'feature' | 'principle' | 'governance'} variant - Design variant affecting card styling and cosmic colors
 * @property {number} animationDelay - Optional stagger animation timing in milliseconds (default: 0)
 * @property {ReactNode} children - Optional child elements to render within component structure
 * @property {string} className - Additional Tailwind CSS classes for layout and styling customization
 */
interface ComponentProps {
  title: string;
  variant?: 'feature' | 'principle' | 'governance';
  animationDelay?: number;
  children?: ReactNode;
  className?: string;
}
```

## 🌟 Best Practices

### Documentation Standards
1. **Cosmic Theme**: Always reference the constitutional/cosmic theme
2. **Design System**: Document which classes and patterns are used
3. **Accessibility**: Include comprehensive accessibility information
4. **Examples**: Provide multiple usage examples with progression
5. **Integration**: Explain how the component fits the larger system

### Content Guidelines
- Use constitutional terminology (governance, principles, hierarchy)
- Reference stellar and cosmic visual elements
- Maintain post-Earth civilization narrative
- Include merit-based and balance-of-power concepts
- Connect to the broader Starborn Dominion framework

### Technical Standards
- TypeScript strict mode compliance
- Comprehensive JSDoc documentation
- Responsive design considerations
- Performance optimization notes
- Error handling strategies

---

*"Document with precision, guide with stellar clarity"* ✨

This template ensures consistency across all component documentation in the Starborn Dominion project.