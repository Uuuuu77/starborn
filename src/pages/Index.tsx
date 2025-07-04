import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Crown, Users, Shield, Gavel, Star, BookOpen, Zap, Globe } from 'lucide-react';
import ConstitutionArticle from '@/components/ConstitutionArticle';
import HierarchySection from '@/components/HierarchySection';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Hero Section */}
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

      {/* Main Content */}
      <div className="container-fluid section-padding">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <div className="mb-8 sm:mb-12 overflow-x-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1 bg-card/50 backdrop-blur-sm p-1 rounded-lg min-w-max sm:min-w-0">
              <TabsTrigger 
                value="overview" 
                className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm whitespace-nowrap data-[state=active]:bg-primary/20 data-[state=active]:text-stellar-400"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
                <span className="sm:hidden">Info</span>
              </TabsTrigger>
              <TabsTrigger 
                value="constitution" 
                className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm whitespace-nowrap data-[state=active]:bg-primary/20 data-[state=active]:text-stellar-400"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Constitution</span>
                <span className="sm:hidden">Law</span>
              </TabsTrigger>
              <TabsTrigger 
                value="hierarchy" 
                className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm whitespace-nowrap data-[state=active]:bg-primary/20 data-[state=active]:text-stellar-400"
              >
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Orders & Ranks</span>
                <span className="sm:hidden">Orders</span>
              </TabsTrigger>
              <TabsTrigger 
                value="principles" 
                className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm whitespace-nowrap data-[state=active]:bg-primary/20 data-[state=active]:text-stellar-400"
              >
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Core Principles</span>
                <span className="sm:hidden">Principles</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid-responsive animate-fade-in">
              <Card className="card-feature animate-fade-in-up delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-fluid-xl">
                    <Crown className="w-6 h-6 text-stellar-400" />
                    The Emperor
                  </CardTitle>
                  <CardDescription className="body-base">Guardian of Constitutional Order</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Serves 33-year terms as symbolic head of state and cosmic peace keeper. 
                    Succession through merit-based Empyreal Trials, not inheritance.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-feature animate-fade-in-up delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-fluid-xl">
                    <Users className="w-6 h-6 text-cosmic-400" />
                    Celestial Council
                  </CardTitle>
                  <CardDescription className="body-base">Wisdom of the Colonies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    9-13 representatives from major planetary colonies and key disciplines, 
                    serving as constitutional guardians and imperial advisors.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-feature animate-fade-in-up delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-fluid-xl">
                    <Shield className="w-6 h-6 text-stellar-400" />
                    Guardian Order
                  </CardTitle>
                  <CardDescription className="body-base">Protectors of Peace</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Philosopher-warriors trained in ethics, diplomacy, and defense. 
                    Forbidden from politics, sworn only to constitutional harmony.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Government Structure */}
            <Card className="constitution-section animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="heading-primary stellar-text">Government Structure</CardTitle>
                <CardDescription className="body-base">A balance of imperial wisdom and democratic representation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4">
                    <h3 className="text-fluid-lg font-semibold text-stellar-400">Executive Branch</h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Emperor/Empress (33-year terms)</li>
                      <li>• Celestial Council (9-13 members)</li>
                      <li>• Planetary Governors (6-year terms)</li>
                      <li>• Elder Advisors (former Emperors)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-fluid-lg font-semibold text-cosmic-400">Legislative Branch</h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Senate of Free Peoples</li>
                      <li>• One delegate per million citizens</li>
                      <li>• Bi-annual plenaries</li>
                      <li>• Budget and law authority</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="constitution">
            <ScrollArea className="h-[600px] sm:h-[700px] lg:h-[800px] w-full">
              <div className="space-y-6 sm:space-y-8 pr-4">
                {/* Constitution articles using existing component with enhanced responsiveness */}
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
          </TabsContent>

          <TabsContent value="hierarchy" className="space-y-6 sm:space-y-8">
            {/* Hierarchy sections using enhanced component */}
            <HierarchySection
              title="The Guardian Order"
              icon={<Shield className="w-6 h-6 text-stellar-400" />}
              description="Philosopher-warriors dedicated to protecting constitutional harmony"
              ranks={[
                "Grand Master of Harmony – Supreme head, custodian of doctrine and ethics",
                "Masters of the Order – Lead regional Temples and train senior Guardians",
                "Knight Protectors – Full members sworn to the Oath of Harmony",
                "Sentinels – Mid-level Guardians specializing in intelligence, diplomacy, or protection",
                "Inquisitive Apprentices – Trainees learning philosophy, ethics, and foundational defense",
                "Novitiates – Initiates undergoing evaluation for formal apprenticeship"
              ]}
            />

            <HierarchySection
              title="Imperial Military Command"
              icon={<Zap className="w-6 h-6 text-cosmic-400" />}
              description="Defenders of the Dominion across all worlds and star systems"
              ranks={[
                "Supreme Commander of Forces – Answers directly to the Emperor",
                "Fleet Admirals / Field Marshals – Command entire starfleets or planetary defense theaters",
                "Fleet Captains / General Officers – Lead individual capital ships or army corps",
                "Lieutenant Commanders / Senior Officers – Tactical leaders of squadrons, brigades, or regiments",
                "Lieutenants / Junior Officers – Unit-level command (platoons, starfighter wings)",
                "Enlisted Guardians / Soldiers – Front-line forces: Pilots, Ship Crews, Marine Corps, Armored Divisions, Support Corps"
              ]}
            />

            <HierarchySection
              title="Imperial Rangers & Police Forces"
              icon={<Badge className="w-6 h-6 text-stellar-400" />}
              description="Keepers of peace and order across frontier and urban territories"
              ranks={[
                "Commissioner of Peace – Head of all civil enforcement agencies",
                "Chief Ranger / Chief Inspector – Regional leads for Rangers (frontier) or Police (urban)",
                "Ranger Captains / Police Commanders – Oversee companies or precincts",
                "Ranger Lieutenants / Detective Sergeants – Lead patrols, investigations, and specialized units",
                "Rangers / Patrol Officers – Frontier law enforcement, environmental protection",
                "Constables / Junior Patrols – Entry-level civic security, community engagement",
                "Civic Marshals – Trained negotiators and emergency response liaisons"
              ]}
            />
          </TabsContent>

          <TabsContent value="principles" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card className="card-feature animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="stellar-text heading-secondary">Founding Philosophy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-stellar-400 mb-2">Balance of Power</h4>
                    <p className="text-sm text-foreground/80">
                      Power flows both upwards and downwards. The Emperor governs not by control but by service, 
                      balanced by the Celestial Council, Senate, and local governance.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-cosmic-400 mb-2">Intergenerational Wisdom</h4>
                    <p className="text-sm text-foreground/80">
                      The Emperor's role is to safeguard continuity, long-term vision, and peace, 
                      not to micromanage daily governance.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-stellar-400 mb-2">Rights of Sentience</h4>
                    <p className="text-sm text-foreground/80">
                      Every citizen has inalienable dignity, rights, and purpose—from AI to human to hybrid beings.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature animate-fade-in-up delay-200">
                <CardHeader>
                  <CardTitle className="stellar-text heading-secondary">Technological Safeguards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cosmic-400 mb-2">Open Ledger System</h4>
                    <p className="text-sm text-foreground/80">
                      All governmental decisions, budgets, and laws are recorded on transparent, 
                      decentralized ledgers accessible to all citizens.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-stellar-400 mb-2">AI Governance Assistants</h4>
                    <p className="text-sm text-foreground/80">
                      Ethical AI systems analyze policies for fairness, bias, and potential threats 
                      before implementation.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-cosmic-400 mb-2">Simulation Chambers</h4>
                    <p className="text-sm text-foreground/80">
                      All major policies are tested in immersive VR/AR environments 
                      before being enacted across the Dominion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Earth's Failures section */}
            <Card className="constitution-section animate-fade-in-up delay-300">
              <CardHeader>
                <CardTitle className="stellar-text heading-primary">Avoiding Earth's Failures</CardTitle>
                <CardDescription className="body-base">How the Starborn Dominion addresses historical political failures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-stellar-400">Historical Problems</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Power corruption and tyranny</li>
                      <li>• Dynastic oppression</li>
                      <li>• Bureaucratic stagnation</li>
                      <li>• Military coups</li>
                      <li>• Tyranny of the majority</li>
                      <li>• Extreme inequality</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-cosmic-400">Dominion Solutions</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Term-limited Emperors with transparent AI oversight</li>
                      <li>• Merit-based succession through public trials</li>
                      <li>• Real-time citizen feedback and simulation testing</li>
                      <li>• Guardians forbidden from political rule</li>
                      <li>• Constitutional rights cannot be overridden by vote</li>
                      <li>• All wealth and honor tied to contribution, not inheritance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
