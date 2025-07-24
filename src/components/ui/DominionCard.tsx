import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DominionCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  animationDelay?: number;
  variant?: 'default' | 'interactive' | 'feature' | 'section';
  className?: string;
}

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