# 👑 Starborn Dominion Constitution

> *"We, the sentient peoples of the Starborn Dominion—united in purpose, diversity, and cosmic vision—do hereby ordain and establish this Constitution to secure justice, liberty, and prosperity for all our worlds and to sustain our legacy across generations."*

A beautifully crafted interactive constitutional framework for a post-Earth civilization, built with modern web technologies and cosmic-inspired design.

## ✨ Features

### 🏛️ Constitutional Framework
- **Article I - Core Principles**: Supremacy of constitution, inalienable rights, and balance of power
- **Article II - The Emperor**: Merit-based leadership with 33-year terms and succession trials
- **Article III - Celestial Council**: Planetary representatives and ethical oversight
- **Article IV - Senate of Free Peoples**: Democratic representation and legislative authority
- **Article V - Planetary Governors**: Local governance and accountability
- **Article VI - Guardian Order**: Philosopher-warriors protecting constitutional harmony

### 🌟 Interactive Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Cosmic-themed transitions and stellar pulse effects
- **Tab Navigation**: Easy exploration of constitution, hierarchy, and principles
- **Accessibility**: Full keyboard navigation and screen reader support

### 🎨 Cosmic Design System
- **Stellar Color Palette**: Deep space backgrounds with luminous accents
- **Fluid Typography**: Responsive text scaling across all devices
- **Glassmorphism Effects**: Modern UI with backdrop blur and transparency
- **Custom Animations**: Parallax stars and cosmic drift effects

## 🚀 Technology Stack

### Frontend Framework
- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and building
- **React Router** for client-side navigation

### UI & Styling
- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** components for consistent design system
- **Lucide React** for beautiful, consistent icons
- **Radix UI** primitives for accessible components

### State Management & Data
- **TanStack Query** for server state management
- **React Hooks** for local component state

### Development Tools
- **TypeScript** for enhanced developer experience
- **ESLint** and **Prettier** for code quality
- **Hot Module Replacement** for instant development feedback

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

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

# Open your browser to http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui component library
│   ├── ConstitutionTab.tsx    # Constitutional articles display
│   ├── HierarchyTab.tsx       # Military and civil hierarchies
│   ├── HeroSection.tsx        # Landing page hero
│   ├── Navigation.tsx         # Main navigation component
│   └── ...
├── pages/               # Route components
│   ├── Index.tsx        # Main application page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── styles/              # Global styles and design tokens
└── main.tsx            # Application entry point
```

## 🎯 Core Components

### Navigation System
- **Responsive Navigation**: Mobile-first design with slide-out menu
- **Smooth Scrolling**: Animated transitions between sections
- **Active State Tracking**: Visual indicators for current section

### Constitutional Framework
- **Article Components**: Modular display of constitutional articles
- **Interactive Cards**: Hover effects and smooth animations
- **Hierarchical Display**: Clear organization of governmental structure

### Design System
- **Stellar Theme**: Cosmic color palette and typography
- **Component Variants**: Consistent styling across all elements
- **Animation Library**: Custom keyframes for stellar and cosmic effects

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Environment Setup

1. **Node Version**: Use Node.js 18+ for optimal compatibility
2. **Editor**: VS Code recommended with these extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
3. **Git Hooks**: Pre-commit hooks for linting and formatting

### Development Guidelines

#### Component Creation
```tsx
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MyComponentProps {
  title: string;
  children: ReactNode;
}

const MyComponent = ({ title, children }: MyComponentProps) => {
  return (
    <Card className="card-interactive animate-fade-in-up">
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

export default MyComponent;
```

#### Styling Conventions
- Use Tailwind utility classes for styling
- Leverage custom CSS classes for design system consistency:
  - `.stellar-text` for gradient text effects
  - `.card-interactive` for hover animations
  - `.constitution-section` for content areas

## 🎨 Design Tokens

### Color Palette
```css
/* Primary Colors */
--stellar-400: #a855f7    /* Purple accent */
--cosmic-400: #8b5cf6     /* Violet accent */
--background: #0f0f14     /* Deep space */
--foreground: #f8fafc     /* Light text */

/* Component Colors */
--card: #1e1e2e           /* Container backgrounds */
--border: #374151         /* Subtle borders */
--muted: #6b7280          /* Secondary text */
```

### Typography Scale
- **Display**: 3.5rem - 4.5rem (fluid scaling)
- **Heading 1**: 2.25rem - 3rem
- **Heading 2**: 1.5rem - 2rem
- **Body Large**: 1.125rem - 1.25rem
- **Body**: 1rem - 1.125rem

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

### Static Hosting
The built files in `dist/` can be served by any static file server.

## 🤝 Contributing

We welcome contributions to the Starborn Dominion project! Please follow these guidelines:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our coding standards
4. Test your changes thoroughly
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Standards
- **TypeScript**: All new code should be written in TypeScript
- **Components**: Use functional components with hooks
- **Styling**: Follow the established design system
- **Accessibility**: Ensure all components are accessible
- **Testing**: Include tests for new functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- **Design Inspiration**: Cosmic themes and space exploration aesthetics
- **UI Framework**: Built with Shadcn/ui and Radix primitives
- **Icons**: Lucide React for beautiful, consistent iconography
- **Community**: Thanks to all contributors and the open source community

## 📞 Support

Having issues? Need help?

- 📚 **Documentation**: Check our [docs](docs/) folder
- 🐛 **Bug Reports**: [Open an issue](https://github.com/your-username/starborn-dominion/issues)
- 💬 **Discussions**: [Join our discussions](https://github.com/your-username/starborn-dominion/discussions)
- 📧 **Email**: contact@starborn-dominion.dev

---

<div align="center">

**"Justice, Liberty, and Prosperity Across the Stars"**

Built with ❤️ for the future of interplanetary governance

[Website](https://starborn-dominion.dev) • [Documentation](docs/) • [Contributing](CONTRIBUTING.md)

</div>
