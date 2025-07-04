
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ConstitutionSection {
  title: string;
  content: string;
}

interface ConstitutionArticleProps {
  title: string;
  icon: ReactNode;
  sections: ConstitutionSection[];
}

const ConstitutionArticle = ({ title, icon, sections }: ConstitutionArticleProps) => {
  return (
    <Card className="card-interactive animate-fade-in-up">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-start gap-3 heading-secondary">
          <span className="text-stellar-400 flex-shrink-0 mt-1">{icon}</span>
          <span className="leading-tight">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h4 className="font-semibold text-cosmic-400 mb-3 text-fluid-lg">
                {section.title}
              </h4>
              <p className="text-foreground/85 leading-relaxed body-base">
                {section.content}
              </p>
              {index < sections.length - 1 && (
                <Separator className="mt-6 bg-border/50" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConstitutionArticle;
