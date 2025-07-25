# 🚀 Development Guide

Complete development workflow and setup guide for the Starborn Dominion constitutional framework.

## 🛠️ Local Development Setup

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control
- **VS Code** (recommended) with extensions

### Quick Start
```bash
# Clone the repository
git clone https://github.com/your-username/starborn-dominion.git

# Navigate to project directory
cd starborn-dominion

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Environment Configuration

#### Node Version
```bash
# Check Node version (should be 18+)
node --version

# Using nvm for version management
nvm use 18
nvm alias default 18
```

#### Editor Setup (VS Code)
Recommended extensions for optimal development experience:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 📁 Project Structure

### Source Organization
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui base components
│   │   ├── button.tsx   # Interactive button variants
│   │   ├── card.tsx     # Container components
│   │   └── ...          # Other UI primitives
│   ├── ConstitutionTab.tsx    # Constitutional articles display
│   ├── HierarchyTab.tsx       # Military and governance hierarchy
│   ├── HeroSection.tsx        # Landing page hero component
│   ├── Navigation.tsx         # Responsive navigation system
│   └── ...                    # Feature components
├── hooks/               # Custom React hooks
│   ├── useThrottledScroll.ts  # Performance-optimized scroll tracking
│   └── use-mobile.tsx         # Mobile device detection
├── lib/                 # Utility functions and configurations
│   └── utils.ts         # Class name utilities and helpers
├── pages/               # Route components
│   ├── Index.tsx        # Main application page
│   └── NotFound.tsx     # 404 error handling
├── utils/               # Business logic utilities
│   ├── logger.ts        # Environment-aware logging
│   └── performance.ts   # Performance monitoring tools
├── index.css           # Global styles and design system
└── main.tsx           # Application entry point
```

### Configuration Files
```
├── tailwind.config.ts   # Tailwind CSS configuration
├── vite.config.ts      # Vite build configuration
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint rules and standards
└── package.json        # Dependencies and scripts
```

## 🎯 Development Scripts

### Available Commands
```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint with cosmic coding standards
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier
```

### Development Server Configuration
The Vite development server is configured for optimal Starborn development:

```typescript
// vite.config.ts highlights
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    hmr: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

## 🎨 Component Development

### Component Creation Standards

#### Basic Component Template
```tsx
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
 */
interface ComponentNameProps {
  /** Primary content or text */
  children: ReactNode;
  /** Visual variant for different contexts */
  variant?: 'default' | 'stellar' | 'cosmic';
  /** Additional CSS classes */
  className?: string;
}

const ComponentName = ({ 
  children, 
  variant = 'default', 
  className 
}: ComponentNameProps): JSX.Element => {
  return (
    <div className={cn(
      'constitution-section', // Base cosmic styling
      {
        'stellar-text': variant === 'stellar',
        'cosmic-glow': variant === 'cosmic'
      },
      className
    )}>
      {children}
    </div>
  );
};

export default ComponentName;
```

#### Advanced Component with Hooks
```tsx
import { useState, useEffect } from 'react';
import { useThrottledScroll } from '@/hooks/useThrottledScroll';

/**
 * Advanced component with performance optimizations
 */
const AdvancedComponent = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const isScrolled = useThrottledScroll({ threshold: 100 });
  
  useEffect(() => {
    // Component logic with proper cleanup
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn(
      'animate-fade-in-up',
      isVisible && 'animate-stellar-pulse',
      isScrolled && 'cosmic-glow'
    )}>
      {/* Component content */}
    </div>
  );
};
```

### Styling Guidelines

#### Design System Usage
```tsx
// ✅ CORRECT - Use semantic design tokens
<div className="stellar-text constitution-section">
  <h2 className="heading-secondary">Constitutional Article</h2>
  <p className="body-base text-muted-foreground">Content text...</p>
</div>

// ❌ WRONG - Direct color usage
<div className="text-purple-500 bg-slate-900">
  <h2 className="text-2xl font-bold">Article</h2>
  <p className="text-gray-400">Content...</p>
</div>
```

#### Responsive Design Patterns
```tsx
// Mobile-first responsive classes
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <div className="p-4 sm:p-6 lg:p-8">
    <h3 className="text-fluid-lg">Responsive Title</h3>
  </div>
</div>

// Container patterns
<section className="container-fluid section-padding">
  <div className="max-w-4xl mx-auto">
    {/* Content with proper constraints */}
  </div>
</section>
```

## 🧪 Testing Strategy

### Component Testing
```tsx
// Example test structure
import { render, screen } from '@testing-library/react';
import { ConstitutionTab } from '@/components/ConstitutionTab';

describe('ConstitutionTab', () => {
  it('renders all constitutional articles', () => {
    render(<ConstitutionTab />);
    
    expect(screen.getByText('Article I – Core Principles')).toBeInTheDocument();
    expect(screen.getByText('Article II – The Emperor')).toBeInTheDocument();
    // Additional assertions...
  });

  it('maintains cosmic theme styling', () => {
    render(<ConstitutionTab />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveClass('constitution-section');
  });
});
```

### Performance Testing
```typescript
// Performance monitoring
import { measurePerformance } from '@/utils/performance';

const ComponentWithMetrics = () => {
  useEffect(() => {
    const cleanup = measurePerformance('component-mount');
    return cleanup;
  }, []);

  // Component implementation
};
```

## 🔧 Build Configuration

### Production Build
```bash
# Create optimized production build
npm run build

# Build output analysis
npm run build -- --analyze

# Preview production build
npm run preview
```

### Build Optimization
- **Tree Shaking**: Removes unused code automatically
- **Code Splitting**: Dynamic imports for route-based splitting
- **Asset Optimization**: Images and fonts optimized for web
- **CSS Purging**: Removes unused Tailwind classes

### Bundle Analysis
```bash
# Analyze bundle composition
npx vite-bundle-analyzer dist

# Check bundle size
du -sh dist/
```

## 🚀 Performance Optimization

### Animation Performance
```css
/* Use transform for hardware acceleration */
.stellar-element {
  transform: translateZ(0); /* Force GPU acceleration */
  will-change: transform;   /* Hint browser for optimization */
}

/* Efficient animations */
@keyframes optimized-fade {
  from { opacity: 0; transform: translate3d(0, 10px, 0); }
  to   { opacity: 1; transform: translate3d(0, 0, 0); }
}
```

### Image Optimization
```typescript
// Lazy loading implementation
const LazyImage = ({ src, alt }: { src: string; alt: string }) => (
  <img 
    src={src} 
    alt={alt}
    loading="lazy"
    decoding="async"
    className="transition-opacity duration-300"
  />
);
```

### Code Splitting
```typescript
// Route-based code splitting
import { lazy, Suspense } from 'react';

const ConstitutionTab = lazy(() => import('@/components/ConstitutionTab'));

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <ConstitutionTab />
  </Suspense>
);
```

## 🐛 Debugging

### Development Tools
```typescript
// Debug logging
import { logger } from '@/utils/logger';

const debugComponent = () => {
  logger.debug('Component state:', { state });
  logger.performance('render-time', performance.now());
};
```

### Browser DevTools
- **React DevTools**: Component inspection and state management
- **Performance Tab**: Animation and rendering analysis
- **Network Tab**: Asset loading optimization
- **Lighthouse**: Accessibility and performance auditing

## 📦 Deployment

### Build Verification
```bash
# Pre-deployment checklist
npm run type-check    # TypeScript validation
npm run lint         # Code quality check
npm run build        # Production build
npm run preview      # Local preview test
```

### Environment Configuration
```bash
# Environment variables (if needed)
VITE_APP_VERSION=${npm_package_version}
VITE_BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
```

## 🤝 Contribution Workflow

### Feature Development
```bash
# Start new feature
git checkout -b feature/cosmic-enhancement
git push -u origin feature/cosmic-enhancement

# Development workflow
npm run dev          # Develop with live reload
npm run type-check   # Validate TypeScript
npm run lint         # Check code quality

# Pre-commit
npm run build        # Ensure build works
npm run preview      # Test production build
```

### Code Review Preparation
1. **Self Review**: Check all modified files
2. **Testing**: Verify functionality across devices
3. **Documentation**: Update relevant docs
4. **Performance**: Check for any degradation
5. **Accessibility**: Validate with screen readers

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

**"Building the future of interplanetary governance, one component at a time."**