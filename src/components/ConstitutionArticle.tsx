
import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { DominionCard } from '@/components/ui/DominionCard';

/**
 * ConstitutionSection - Data structure for constitutional article sections
 * 
 * @interface ConstitutionSection
 * @property {string} title - Section heading text
 * @property {string} content - Detailed constitutional content for the section
 */
interface ConstitutionSection {
  title: string;
  content: string;
}

/**
 * ConstitutionArticleProps - Properties for the ConstitutionArticle component
 * 
 * @interface ConstitutionArticleProps
 * @property {string} title - Article title following constitutional numbering
 * @property {ReactNode} icon - Lucide React icon representing the article theme
 * @property {ConstitutionSection[]} sections - Array of constitutional sections
 */
interface ConstitutionArticleProps {
  title: string;
  icon: ReactNode;
  sections: ConstitutionSection[];
}

/**
 * ConstitutionArticle - Display component for individual constitutional articles
 * 
 * Renders a single constitutional article with multiple sections using the Starborn
 * design system. Features staggered fade-in animations, cosmic theming, and 
 * responsive typography. Wraps content in the DominionCard component for consistent
 * styling across the constitutional framework.
 * 
 * Features:
 * - Staggered animations with 150ms delays between sections
 * - Cosmic-themed section headings with stellar color palette
 * - Responsive separator elements between sections
 * - Interactive card styling with hover effects
 * - Fluid typography scaling for optimal readability
 * 
 * Design System Integration:
 * - Uses DominionCard wrapper with "interactive" variant
 * - Implements cosmic-400 for section title styling
 * - Follows animate-fade-in-up pattern with calculated delays
 * - Maintains text-foreground/85 opacity for content readability
 * - Uses Separator component with border/50 opacity
 * 
 * @param {ConstitutionArticleProps} props - Component properties
 * @param {string} props.title - Constitutional article title (e.g., "Article I – Core Principles")
 * @param {ReactNode} props.icon - Icon component representing article theme
 * @param {ConstitutionSection[]} props.sections - Array of constitutional sections to display
 * 
 * @returns {JSX.Element} Formatted constitutional article with sections
 * 
 * @example
 * <ConstitutionArticle
 *   title="Article I – Core Principles"
 *   icon={<Star className="w-6 h-6" />}
 *   sections={[
 *     {
 *       title: "Supremacy of the Constitution",
 *       content: "This Constitution is the supreme law of the Dominion..."
 *     }
 *   ]}
 * />
 * 
 * @accessibility
 * - Proper heading hierarchy with h4 elements for section titles
 * - High contrast text with foreground/85 opacity
 * - Semantic separation using Separator components
 * - Screen reader friendly content structure
 */
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
