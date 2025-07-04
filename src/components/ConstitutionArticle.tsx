
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
    <Card className="constitution-section cosmic-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl stellar-text">
          <span className="text-stellar-400">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-cosmic-400 mb-3">{section.title}</h4>
              <p className="text-foreground/80 leading-relaxed">{section.content}</p>
              {index < sections.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConstitutionArticle;
