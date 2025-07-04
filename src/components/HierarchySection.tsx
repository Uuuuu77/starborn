
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface HierarchySectionProps {
  title: string;
  icon: ReactNode;
  description: string;
  ranks: string[];
}

const HierarchySection = ({ title, icon, description, ranks }: HierarchySectionProps) => {
  return (
    <Card className="card-interactive animate-fade-in-up">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-start gap-3 heading-secondary">
          <span className="text-stellar-400 flex-shrink-0 mt-1">{icon}</span>
          <div className="min-w-0 flex-1">
            <span className="leading-tight block">{title}</span>
          </div>
        </CardTitle>
        <CardDescription className="text-foreground/70 body-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {ranks.map((rank, index) => {
            const [rankTitle, ...descriptionParts] = rank.split(' – ');
            const rankDescription = descriptionParts.join(' – ');
            
            return (
              <div 
                key={index} 
                className="group flex items-start gap-3 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 border border-transparent hover:border-border/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center text-sm font-bold text-primary transition-colors duration-300">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-foreground mb-1 text-fluid-base leading-tight">
                    {rankTitle}
                  </h5>
                  {rankDescription && (
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {rankDescription}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default HierarchySection;
