import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

/**
 * Props interface for DominionCard component
 */
interface DominionCardProps {
  /** Card heading text, supports stellar-text gradient styling */
  title: string;
  /** Optional icon to display alongside the title */
  icon?: ReactNode;
  /** Card content, typically constitutional text or governance details */
  children: ReactNode;
  /** Stagger animation timing in milliseconds for sequential reveals */
  animationDelay?: number;
  /** Design variant: 'default' | 'interactive' | 'feature' | 'section' */
  variant?: 'default' | 'interactive' | 'feature' | 'section';
  /** Additional Tailwind classes for customization */
  className?: string;
}

/**
 * DominionCard - Interactive card component for displaying constitutional content
 * 
 * Follows the Starborn design system with cosmic theming and stellar animations.
 * Supports multiple variants (default, interactive, feature, section) with consistent spacing.
 * Integrates with the constitutional framework to display governance information with
 * proper accessibility and responsive design patterns.
 * 
 * @param title - Card heading text, supports stellar-text gradient styling
 * @param icon - Optional icon to display alongside the title
 * @param children - Card content, typically constitutional text or governance details
 * @param animationDelay - Stagger animation timing in milliseconds for sequential reveals
 * @param variant - Design variant: 'default' | 'interactive' | 'feature' | 'section'
 * @param className - Additional Tailwind classes for customization
 * 
 * @example
 * ```tsx
 * <DominionCard 
 *   title="Technological Safeguards" 
 *   variant="feature"
 *   animationDelay={200}
 *   className="stellar-text"
 * >
 *   <p>Constitutional content about AI governance assistants...</p>
 * </DominionCard>
 * ```
 * 
 * @example
 * ```tsx
 * <DominionCard 
 *   title="Guardian Order"
 *   icon={<Shield className="h-6 w-6" />}
 *   variant="interactive"
 * >
 *   <div className="space-y-2">
 *     <p>Philosopher-warriors protecting constitutional harmony</p>
 *   </div>
 * </DominionCard>
 * ```
 */
export const DominionCard = ({ 
  title, 
  icon, 
  children, 
  animationDelay = 0,
  variant = 'default',
  className
}: DominionCardProps): JSX.Element => {
  const cardClassName = cn(
    'animate-fade-in-up',
    {
      'card-interactive': variant === 'interactive',
      'card-feature': variant === 'feature',
      'constitution-section': variant === 'section',
    },
    className
  );

  return (
    <Card 
      className={cardClassName}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <CardHeader className="pb-4">
        <CardTitle className={cn(
          "heading-secondary",
          icon && "flex items-start gap-3"
        )}>
          {icon && (
            <span className="text-stellar-400 flex-shrink-0 mt-1">{icon}</span>
          )}
          <span className="leading-tight">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {children}
      </CardContent>
    </Card>
  );
};