
import { useState } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'constitution', label: 'Constitution' },
    { id: 'hierarchy', label: 'Orders & Ranks' },
    { id: 'principles', label: 'Principles' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Crown className="w-8 h-8 text-stellar-400" />
            <span className="font-bold text-lg stellar-text hidden sm:block">Starborn Dominion</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-link ${
                  activeSection === item.id 
                    ? 'text-stellar-400 font-semibold' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-8">
                <Crown className="w-6 h-6 text-stellar-400" />
                <span className="font-bold stellar-text">Starborn Dominion</span>
              </div>
              
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`text-left p-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary/20 text-stellar-400 font-semibold'
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
