
import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { DominionCard } from '@/components/ui/DominionCard';

interface ConstitutionSection {
  title: string;
  content: string;
}

interface ConstitutionArticleProps {
  title: string;
  icon: ReactNode;
  sections: ConstitutionSection[];
}

const ConstitutionArticle = ({ title, icon, sections }: ConstitutionArticleProps): JSX.Element => {
  return (
    <DominionCard
      title={title}
      icon={icon}
      variant="interactive"
    >
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
    </DominionCard>
  );
};

export default ConstitutionArticle;
