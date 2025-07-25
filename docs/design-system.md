# 🌌 Starborn Dominion Design System

A comprehensive guide to the cosmic-themed design system powering the constitutional framework of our post-Earth civilization.

## 🎨 Color Palette

### Cosmic Primary Colors
The foundation of our stellar aesthetic, representing the vastness of space and the light of distant stars.

```css
/* Primary Cosmic Colors */
--background: 220 27% 8%;     /* Deep Space: Primary background */
--foreground: 210 40% 95%;    /* Starlight: Primary text */
--primary: 263 85% 65%;       /* Stellar Purple: Interactive elements */
--card: 224 27% 12%;          /* Space Container: Card backgrounds */
--border: 215 25% 20%;        /* Nebula Edge: Subtle borders */
```

### Stellar Accent Palette
Vibrant colors inspired by stellar phenomena, used for emphasis and interactive states.

```css
/* Stellar Color Scale */
stellar-50:  #fefce8   /* Distant Star Glow */
stellar-100: #fef9c3   /* Solar Corona */
stellar-200: #fef08a   /* Star Flare */
stellar-300: #fde047   /* Stellar Light */
stellar-400: #facc15   /* Golden Star */
stellar-500: #eab308   /* Star Core */
stellar-600: #ca8a04   /* Dense Star */
stellar-700: #a16207   /* Star Surface */
stellar-800: #854d0e   /* Star Interior */
stellar-900: #713f12   /* Stellar Core */
stellar-950: #422006   /* Neutron Star */
```

### Cosmic Blue Palette
Deep space blues representing the cosmic void and interstellar medium.

```css
/* Cosmic Color Scale */
cosmic-50:  #f0f4ff   /* Cosmic Dawn */
cosmic-100: #e5edff   /* Space Mist */
cosmic-200: #cddbfe   /* Nebula Edge */
cosmic-300: #a4cafe   /* Cosmic Blue */
cosmic-400: #818cf8   /* Space Purple */
cosmic-500: #6366f1   /* Deep Space */
cosmic-600: #4f46e5   /* Void Blue */
cosmic-700: #4338ca   /* Dark Matter */
cosmic-800: #3730a3   /* Black Hole Edge */
cosmic-900: #312e81   /* Event Horizon */
cosmic-950: #1e1b4b   /* Singularity */
```

### Semantic Color Usage

#### Text Colors
```css
.text-primary      /* Primary content: Articles, headings */
.text-secondary    /* Secondary content: Descriptions, metadata */
.text-muted        /* Tertiary content: Captions, disabled states */
.text-accent       /* Emphasis: Important terms, calls-to-action */
```

#### Background Colors
```css
.bg-background     /* Main page background */
.bg-card          /* Content containers */
.bg-muted         /* Subtle sections */
.bg-accent        /* Highlighted areas */
```

#### Interactive Colors
```css
.border-primary    /* Active borders */
.ring-primary     /* Focus rings */
.hover:bg-accent  /* Hover states */
```

## 📝 Typography Scale

### Fluid Typography System
Responsive text sizing that scales smoothly across all device sizes, maintaining cosmic readability.

```css
/* Fluid Typography Scale */
fluid-sm:   clamp(0.875rem, 0.8rem + 0.375vw, 1.125rem)   /* 14px → 18px */
fluid-base: clamp(1rem, 0.9rem + 0.5vw, 1.25rem)          /* 16px → 20px */
fluid-lg:   clamp(1.125rem, 1rem + 0.625vw, 1.5rem)       /* 18px → 24px */
fluid-xl:   clamp(1.25rem, 1.1rem + 0.75vw, 1.875rem)     /* 20px → 30px */
fluid-2xl:  clamp(1.5rem, 1.3rem + 1vw, 2.25rem)          /* 24px → 36px */
fluid-3xl:  clamp(1.875rem, 1.6rem + 1.375vw, 3rem)       /* 30px → 48px */
fluid-4xl:  clamp(2.25rem, 1.9rem + 1.75vw, 3.75rem)      /* 36px → 60px */
fluid-5xl:  clamp(3rem, 2.5rem + 2.5vw, 4.5rem)           /* 48px → 72px */
fluid-6xl:  clamp(3.75rem, 3rem + 3.75vw, 6rem)           /* 60px → 96px */
```

### Typography Classes

#### Heading Hierarchy
```css
.heading-display    /* Main page titles: Constitution name */
.heading-primary    /* Section titles: Article headers */
.heading-secondary  /* Subsection titles: Article subsections */
```

#### Body Text
```css
.body-large        /* Important descriptions: Constitutional quotes */
.body-base         /* Standard content: Article text */
.body-small        /* Metadata: Dates, references */
```

#### Special Text Effects
```css
.stellar-text      /* Gradient text: Primary headings */
.text-glow         /* Glowing text: Special emphasis */
.text-fade         /* Faded text: Secondary information */
```

## 🎭 Component Variants

### Card Components

#### Basic Card Styles
```css
.constitution-section {
  /* Standard content container */
  @apply bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg 
         hover:bg-card/70 transition-all duration-300;
}

.card-interactive {
  /* Interactive cards with cosmic effects */
  @apply constitution-section hover:scale-[1.02] hover:shadow-2xl 
         hover:shadow-cosmic-500/25 cursor-pointer transform transition-all duration-300;
}

.card-feature {
  /* Feature highlight cards */
  @apply bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md 
         border border-border/30 rounded-xl p-6 hover:border-border/60 
         transition-all duration-300;
}
```

#### Usage Examples
```tsx
// Constitutional article container
<div className="constitution-section">
  <h2 className="heading-secondary stellar-text">Article I</h2>
  <p className="body-base">Constitutional content...</p>
</div>

// Interactive principle card
<div className="card-interactive">
  <h3 className="heading-secondary">Core Principle</h3>
  <p className="body-base">Principle description...</p>
</div>

// Feature showcase card
<div className="card-feature">
  <h3 className="text-stellar-400">Guardian Order</h3>
  <p className="text-muted-foreground">Protectors of the Constitution...</p>
</div>
```

### Navigation Components

#### Navigation Links
```css
.nav-link {
  /* Animated underline navigation */
  @apply relative text-foreground/80 hover:text-foreground transition-colors duration-200
         after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
         after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right 
         after:transition-transform after:duration-300 hover:after:scale-x-100 
         hover:after:origin-bottom-left;
}
```

#### Usage Example
```tsx
<nav className="space-x-6">
  <a href="#constitution" className="nav-link">Constitution</a>
  <a href="#hierarchy" className="nav-link">Hierarchy</a>
  <a href="#principles" className="nav-link">Principles</a>
</nav>
```

## 🎬 Animation System

### Keyframe Animations

#### Cosmic Motion Effects
```css
/* Stellar pulse animation for icons and emphasis */
@keyframes stellar-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.8; transform: scale(1.05); }
}

/* Cosmic drift for floating elements */
@keyframes cosmic-drift {
  0%   { transform: translateX(-10px) translateY(-5px); }
  50%  { transform: translateX(10px) translateY(5px); }
  100% { transform: translateX(-10px) translateY(-5px); }
}

/* Smooth fade-in for content loading */
@keyframes fade-in-up {
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

#### Animation Classes
```css
.animate-stellar-pulse   /* 3s infinite stellar pulsing */
.animate-cosmic-drift    /* 8s infinite cosmic floating */
.animate-fade-in-up      /* 0.4s content entrance */
.animate-slide-in-right  /* 0.3s slide from right */
```

### Animation Timing

#### Performance-Optimized Timing
```css
/* Standard transitions for interactive elements */
.transition-stellar     /* 300ms cubic-bezier(0.4, 0, 0.2, 1) */
.transition-cosmic      /* 500ms ease-in-out */
.transition-instant     /* 150ms ease-out */
```

#### Staggered Animation Delays
```css
.delay-100  { animation-delay: 100ms; }
.delay-200  { animation-delay: 200ms; }
.delay-300  { animation-delay: 300ms; }
.delay-400  { animation-delay: 400ms; }
.delay-500  { animation-delay: 500ms; }
```

## 📐 Layout System

### Responsive Grid Patterns

#### Content Grids
```css
.grid-responsive {
  /* Adaptive content grid */
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8;
}

.grid-hero {
  /* Hero section layout */
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center;
}

.grid-constitution {
  /* Constitutional article layout */
  @apply grid grid-cols-1 gap-6 max-w-4xl mx-auto;
}
```

### Container System

#### Fluid Containers
```css
.container-fluid {
  /* Full-width responsive container */
  @apply w-full px-4 sm:px-6 lg:px-8;
}

.section-padding {
  /* Consistent vertical spacing */
  @apply py-8 sm:py-12 lg:py-16;
}
```

## 🔧 Usage Guidelines

### Color Implementation
1. **Always use semantic tokens** - Never hardcode color values
2. **Maintain contrast ratios** - Ensure WCAG 2.1 AA compliance
3. **Test in dark mode** - Verify cosmic theme works across all states
4. **Use HSL format** - All colors defined in HSL for consistency

### Typography Best Practices
1. **Use fluid typography** - Ensures readability across all devices
2. **Maintain hierarchy** - Clear visual distinction between content levels
3. **Limit font variations** - Stick to the established type scale
4. **Consider line spacing** - Ensure comfortable reading experience

### Animation Guidelines
1. **Respect motion preferences** - Honor `prefers-reduced-motion`
2. **Use hardware acceleration** - Leverage CSS transforms for performance
3. **Keep it subtle** - Animations should enhance, not distract
4. **Test on mobile** - Ensure smooth performance on all devices

### Component Standards
1. **Follow naming conventions** - Use established cosmic/constitutional terminology
2. **Maintain accessibility** - Include proper ARIA labels and focus management
3. **Document thoroughly** - Use JSDoc for all public components
4. **Test responsively** - Verify behavior across all screen sizes

## 🌟 Advanced Features

### Custom Gradients
```css
.stellar-gradient {
  background: linear-gradient(135deg, 
    hsl(var(--stellar-300)) 0%, 
    hsl(var(--stellar-400)) 50%, 
    hsl(var(--stellar-500)) 100%);
}

.cosmic-gradient {
  background: linear-gradient(135deg, 
    hsl(var(--cosmic-600)) 0%, 
    hsl(var(--cosmic-700)) 50%, 
    hsl(var(--cosmic-800)) 100%);
}
```

### Glassmorphism Effects
```css
.glass-cosmic {
  background: rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Interactive States
```css
.hover-stellar:hover {
  color: hsl(var(--stellar-400));
  text-shadow: 0 0 20px hsl(var(--stellar-400) / 0.3);
}

.focus-cosmic:focus-visible {
  outline: none;
  ring: 2px solid hsl(var(--cosmic-400));
  ring-offset: 2px;
  ring-offset-color: hsl(var(--background));
}
```

---

## 📞 Design System Support

For questions about the design system:
- Check component documentation in `/src/components/`
- Review implementation in `src/index.css`
- Reference Tailwind config in `tailwind.config.ts`
- Open an issue for missing patterns or improvements

**"Designing the interface for interplanetary governance"**