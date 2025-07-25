
import { useState } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useThrottledScroll } from '@/hooks/useThrottledScroll';

/**
 * Navigation component properties
 */
interface NavigationProps {
  /** Currently active section identifier */
  activeSection: string;
  /** Callback function to update the active section */
  setActiveSection: (section: string) => void;
}

/**
 * Navigation - Responsive navigation component with cosmic theming
 * 
 * Provides main navigation for the Starborn Dominion constitutional framework.
 * Features responsive design with mobile sheet navigation and desktop menu.
 * Includes throttled scroll performance optimization and stellar animations.
 * 
 * @component
 * @example
 * <Navigation 
 *   activeSection="constitution"
 *   setActiveSection={setActiveSection}
 * />
 * 
 * @param {NavigationProps} props - Navigation configuration
 * @param {string} props.activeSection - Currently active section
 * @param {function} props.setActiveSection - Section update callback
 * 
 * @accessibility
 * - Full keyboard navigation support
 * - Proper ARIA labels for screen readers
 * - Focus-visible states with cosmic ring effects
 * - Mobile menu with proper heading structure
 * - Semantic button elements for interactions
 * 
 * @performance
 * - Throttled scroll listener with 16ms delay for 60fps
 * - Hardware-accelerated animations and transitions
 * - Optimized backdrop blur effects
 * - Responsive layout prevents layout shifts
 * 
 * @design
 * - Stellar branding with Crown icon and cosmic colors
 * - Glassmorphism effects with backdrop blur
 * - Animated underlines for desktop navigation
 * - Mobile-first responsive design patterns
 * - Consistent with Starborn design system
 * 
 * @returns {JSX.Element} Navigation component with responsive behavior
 */
const Navigation = ({ activeSection, setActiveSection }: NavigationProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useThrottledScroll({ threshold: 20, delay: 16 });

  const navigationItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'constitution', label: 'Constitution' },
    { id: 'hierarchy', label: 'Orders & Ranks' },
    { id: 'principles', label: 'Principles' },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-all duration-200 group"
            aria-label="Go to top"
          >
            <Crown className="w-7 h-7 lg:w-8 lg:h-8 text-stellar-400 group-hover:animate-stellar-pulse transition-all duration-200" />
            <span className="font-bold text-lg lg:text-xl stellar-text hidden sm:block">
              Starborn Dominion
            </span>
            <span className="font-bold text-base stellar-text block sm:hidden">
              Starborn
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-link text-sm lg:text-base px-2 py-1 rounded-md transition-all duration-200 animate-fade-in-up ${
                  activeSection === item.id 
                    ? 'text-stellar-400 font-semibold bg-stellar-400/10' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted/30'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-muted/50 transition-colors duration-200"
                aria-label="Open navigation menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 transition-transform duration-200" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-200" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[280px] sm:w-[320px] bg-background/98 backdrop-blur-xl border-l border-border/50"
            >
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-stellar-400" />
                  <span className="stellar-text font-bold">Starborn Dominion</span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-left p-4 rounded-lg transition-all duration-200 animate-slide-in-right ${
                      activeSection === item.id
                        ? 'bg-primary/20 text-stellar-400 font-semibold border border-primary/30'
                        : 'text-foreground/80 hover:text-foreground hover:bg-muted/40 border border-transparent'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-base">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile menu footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs text-muted-foreground text-center">
                  Constitution of the Starborn Dominion
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
