
import { Crown, Star, Users, Shield, Gavel } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950/20 via-cosmic-900/40 to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-stellar-400 rounded-full animate-stellar-pulse hidden sm:block"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-cosmic-400 rounded-full animate-stellar-pulse delay-1000 hidden md:block"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-stellar-300 rounded-full animate-stellar-pulse delay-2000 hidden lg:block"></div>
        <div className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-cosmic-300 rounded-full animate-stellar-pulse delay-3000 hidden sm:block"></div>
      </div>

      <div className="relative z-10 text-center container-fluid section-padding max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <Crown className="w-12 h-12 sm:w-16 sm:h-16 text-stellar-400 mr-3 sm:mr-4 animate-stellar-pulse" />
            <Star className="w-8 h-8 sm:w-12 sm:h-12 text-cosmic-400 animate-cosmic-drift" />
          </div>
          
          <h1 className="heading-display mb-6 sm:mb-8 animate-fade-in-up delay-200">
            Starborn Dominion
          </h1>
          
          <p className="body-large text-foreground/85 mb-8 sm:mb-10 max-w-4xl mx-auto animate-fade-in-up delay-300">
            A post-Earth civilization founded on the principles of{' '}
            <span className="text-stellar-400 font-semibold">balanced power</span>,{' '}
            <span className="text-cosmic-400 font-semibold">merit-based leadership</span>, and{' '}
            <span className="text-stellar-400 font-semibold">universal rights</span>{' '}
            for all sentient beings.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in-up delay-400">
            <Badge variant="secondary" className="px-3 py-2 text-sm hover:bg-secondary/80 transition-colors duration-200">
              <Users className="w-4 h-4 mr-2" />
              Constitutional Monarchy
            </Badge>
            <Badge variant="secondary" className="px-3 py-2 text-sm hover:bg-secondary/80 transition-colors duration-200">
              <Shield className="w-4 h-4 mr-2" />
              Guardian Order
            </Badge>
            <Badge variant="secondary" className="px-3 py-2 text-sm hover:bg-secondary/80 transition-colors duration-200">
              <Gavel className="w-4 h-4 mr-2" />
              Merit-Based Rule
            </Badge>
          </div>

          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up delay-500">
            <blockquote className="border-l-4 border-stellar-400 pl-4 sm:pl-6 italic text-fluid-lg text-foreground/90 text-left sm:text-center">
              "We, the sentient peoples of the Starborn Dominion—united in purpose, diversity, and cosmic vision—do hereby ordain and establish this Constitution to secure justice, liberty, and prosperity for all our worlds and to sustain our legacy across generations."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
