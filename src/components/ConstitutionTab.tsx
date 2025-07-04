
import { ScrollArea } from '@/components/ui/scroll-area';
import { Star, Crown, Users, Gavel, Globe, Shield } from 'lucide-react';
import ConstitutionArticle from '@/components/ConstitutionArticle';

const ConstitutionTab = () => {
  return (
    <ScrollArea className="h-[600px] sm:h-[700px] lg:h-[800px] w-full">
      <div className="space-y-6 sm:space-y-8 pr-4">
        <ConstitutionArticle
          title="Article I – Core Principles"
          icon={<Star className="w-6 h-6" />}
          sections={[
            {
              title: "Supremacy of the Constitution",
              content: "This Constitution is the supreme law of the Dominion. All branches of government, institutions, and citizens are bound by its provisions."
            },
            {
              title: "Inalienable Rights", 
              content: "Every sentient being within the Dominion is entitled to life, dignity, freedom of thought, equality before the law, and the pursuit of knowledge and purpose."
            },
            {
              title: "Balance of Power",
              content: "Authority is distributed among the Emperor, Celestial Council, Senate of Free Peoples, and Planetary Governors to prevent concentration of power and safeguard liberty."
            },
            {
              title: "Merit and Service",
              content: "Leadership and honors are earned through merit, service, and contribution, not by birthright alone."
            },
            {
              title: "Transparency and Accountability",
              content: "All governmental actions, budgets, and laws shall be recorded on the Open Ledger and made accessible to the public."
            }
          ]}
        />

        <ConstitutionArticle
          title="Article II – The Emperor"
          icon={<Crown className="w-6 h-6" />}
          sections={[
            {
              title: "Title and Role",
              content: "The Emperor (or Empress) is the symbolic head of state and guardian of the Constitution and Cosmic Peace."
            },
            {
              title: "Term and Succession",
              content: "The active term lasts thirty-three (33) standard years. Succession is determined by the Empyreal Trials: a merit-based process overseen by the Celestial Council. Upon completion of the term, the Emperor becomes an Elder Advisor with veto power only on constitutional amendments."
            },
            {
              title: "Powers and Limitations",
              content: "Can propose legislation, declare emergencies, and represent the Dominion in external affairs. Cannot unilaterally amend the Constitution or dissolve the Celestial Council or Senate."
            }
          ]}
        />

        <ConstitutionArticle
          title="Article III – The Celestial Council"
          icon={<Users className="w-6 h-6" />}
          sections={[
            {
              title: "Composition",
              content: "Nine (9) to thirteen (13) members representing each major planetary colony and key disciplines (science, culture, ethics)."
            },
            {
              title: "Selection",
              content: "Appointed by the Senate and ratified by Imperial Citizens for nine-year staggered terms."
            },
            {
              title: "Responsibilities",
              content: "Review and approve constitutional amendments. Advise the Emperor, especially on interplanetary crises. Oversee the Empyreal Trials and ethical AI operations."
            }
          ]}
        />

        <ConstitutionArticle
          title="Article IV – The Senate of Free Peoples"
          icon={<Gavel className="w-6 h-6" />}
          sections={[
            {
              title: "Representation",
              content: "Elected delegates from planetary districts—one delegate per million citizens."
            },
            {
              title: "Legislative Authority",
              content: "Draft, debate, and pass legislation. Control Dominion budget and resource allocation. Impeach Governors or Council members for constitutional violations."
            },
            {
              title: "Sessions and Voting",
              content: "Convene bi-annual plenaries on prescribed dates in the Imperial Capital and via holographic link. Require two-thirds majority to override an Emperor's veto."
            }
          ]}
        />

        <ConstitutionArticle
          title="Article V – Planetary Governors"
          icon={<Globe className="w-6 h-6" />}
          sections={[
            {
              title: "Election and Term",
              content: "Elected by local citizens for six-year terms, renewable once."
            },
            {
              title: "Jurisdiction",
              content: "Govern day-to-day affairs, local laws, and enforcement, subject to the Imperial Charter and Dominion statutes."
            },
            {
              title: "Oversight",
              content: "Report annually to the Senate and Council; may be impeached by Senate vote."
            }
          ]}
        />

        <ConstitutionArticle
          title="Article VI – The Guardian Order"
          icon={<Shield className="w-6 h-6" />}
          sections={[
            {
              title: "Mandate",
              content: "Protect the Constitution, Emperor, and citizens; uphold peace without engaging in politics."
            },
            {
              title: "Structure and Training",
              content: "Recruits undergo at least fifteen (15) cycle training in ethics, defense, diplomacy, and philosophy at the Temple of Harmony."
            },
            {
              title: "Restrictions",
              content: "Forbidden from running for political office or influencing legislation directly."
            }
          ]}
        />
      </div>
    </ScrollArea>
  );
};

export default ConstitutionTab;
