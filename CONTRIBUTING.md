# Contributing to Starborn Dominion

We welcome contributions to the Starborn Dominion project! This document outlines our standards and processes to ensure the cosmic constitutional framework maintains its quality and thematic consistency.

## 🚀 Quick Start

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/cosmic-enhancement`
3. Make your changes following our standards
4. Test your changes thoroughly
5. Commit with proper message format (see below)
6. Push to your branch: `git push origin feature/cosmic-enhancement`
7. Open a Pull Request

## 📝 Commit Message Standards

### Format
```
type(scope): description
```

### Types
- `feat`: New constitutional articles, UI components, or features
- `fix`: Bug fixes in navigation, animations, or responsive design
- `docs`: Updates to constitutional content or component documentation
- `style`: Cosmic theme adjustments, Tailwind utility updates
- `refactor`: Component restructuring while preserving design system
- `perf`: Performance improvements for animations or loading
- `test`: Adding tests for constitutional display logic
- `chore`: Dependencies, build configuration, or tooling updates

### Examples
```bash
feat(constitution): add new governance hierarchy display component
fix(navigation): resolve mobile menu stellar animation timing
docs(principles): update technological safeguards documentation
style(cosmic): enhance glassmorphism effects for card components
refactor(ui): consolidate stellar-text gradient implementations
perf(scroll): implement throttled scroll handling for navigation
test(constitution): add unit tests for article display logic
chore(deps): update shadcn/ui components to latest versions
```

## 🎨 Code Standards

### TypeScript
- All new code must be written in TypeScript
- Use strict typing with proper interfaces
- Document complex types with JSDoc comments

### Components
- Use functional components with hooks
- Follow the established component naming conventions
- Maintain the constitutional/cosmic theme in all text content

### Styling
- Use Tailwind semantic tokens from design system
- Follow established CSS custom properties
- Never use direct colors - always use HSL semantic tokens
- Test responsive behavior across all screen sizes

### Documentation
- Add comprehensive JSDoc to all public functions and components
- Include usage examples for complex components
- Document accessibility features and requirements
- Explain cosmic/constitutional theme relevance

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 🎯 Design System Compliance

### Color Usage
- Use `--stellar-*` colors for accent elements
- Use `--cosmic-*` colors for primary theming
- Maintain contrast ratios for accessibility
- Follow the established dark theme palette

### Animation Standards
- Use existing keyframes: `stellar-pulse`, `cosmic-drift`, `fade-in-up`
- Respect `prefers-reduced-motion` settings
- Keep animation timing consistent with cosmic theme
- Test performance on mobile devices

### Component Patterns
- Use `.stellar-text` for gradient text effects
- Use `.card-interactive` for hover animations
- Use `.constitution-section` for content containers
- Follow responsive utility patterns

## 🔍 Code Review Process

### Before Submitting
- [ ] Code follows TypeScript strict standards
- [ ] Components use established design tokens
- [ ] Animations respect cosmic theme timing
- [ ] Accessibility features are preserved
- [ ] Mobile responsiveness is tested
- [ ] Constitutional theme is maintained
- [ ] JSDoc comments are comprehensive
- [ ] Commit messages follow standards

### Review Criteria
- **Functionality**: Does it work as intended?
- **Design System**: Follows Starborn design patterns?
- **Performance**: Optimized for mobile and desktop?
- **Accessibility**: Meets WCAG standards?
- **Documentation**: Properly documented code?
- **Theme Consistency**: Maintains cosmic/constitutional aesthetic?

## 🧪 Testing Guidelines

### Component Testing
- Test all interactive elements
- Verify keyboard navigation
- Check screen reader compatibility
- Test across different viewport sizes

### Performance Testing
- Monitor animation performance
- Check bundle size impact
- Test loading times
- Verify scroll performance

## 📚 Documentation Standards

### JSDoc Format
```tsx
/**
 * ComponentName - Brief description with cosmic theme context
 * 
 * Detailed description explaining the component's role in the
 * Starborn Dominion constitutional framework.
 * 
 * @component
 * @example
 * <ComponentName prop="value" />
 * 
 * @param prop - Description of the prop
 * @returns JSX element with cosmic theming
 * 
 * @accessibility
 * - Describe accessibility features
 * - Note keyboard navigation support
 * - Mention screen reader compatibility
 */
```

### CSS Documentation
```css
/* Design System Class - Purpose Description
 * 
 * Detailed explanation of the class purpose and usage
 * within the Starborn cosmic theme system.
 * 
 * @usage Apply to specific element types
 * @dependencies List required CSS custom properties
 * @accessibility Note contrast or interaction requirements
 */
```

## 🌟 Recognition

Contributors who consistently follow these standards and enhance the Starborn Dominion project will be recognized in our documentation and may be invited to join the project maintainer team.

## 📞 Questions?

- 📚 Check our [documentation](docs/)
- 🐛 [Open an issue](https://github.com/your-username/starborn-dominion/issues)
- 💬 [Start a discussion](https://github.com/your-username/starborn-dominion/discussions)

---

**"Justice, Liberty, and Prosperity Across the Stars"**

Thank you for contributing to the future of interplanetary governance!