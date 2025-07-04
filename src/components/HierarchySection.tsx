
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
    <Card className="constitution-section cosmic-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl stellar-text">
          {icon}
          {title}
        </CardTitle>
        <CardDescription className="text-foreground/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {ranks.map((rank, index) => {
            const [rankTitle, ...descriptionParts] = rank.split(' – ');
            const rankDescription = descriptionParts.join(' – ');
            
            return (
              <div 
                key={index} 
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">{rankTitle}</h5>
                  {rankDescription && (
                    <p className="text-sm text-foreground/70">{rankDescription}</p>
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
