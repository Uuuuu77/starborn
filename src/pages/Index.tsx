
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
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-stellar-400 rounded-full animate-stellar-pulse"></div>
          <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-cosmic-400 rounded-full animate-stellar-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-40 w-1 h-1 bg-stellar-300 rounded-full animate-stellar-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-cosmic-300 rounded-full animate-stellar-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-16 h-16 text-stellar-400 mr-4 animate-stellar-pulse" />
              <Star className="w-12 h-12 text-cosmic-400 animate-cosmic-drift" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 stellar-text">
              Starborn Dominion
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              A post-Earth civilization founded on the principles of <span className="text-stellar-400 font-semibold">balanced power</span>, 
              <span className="text-cosmic-400 font-semibold"> merit-based leadership</span>, and 
              <span className="text-stellar-400 font-semibold"> universal rights</span> for all sentient beings.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                Constitutional Monarchy
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Guardian Order
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Gavel className="w-4 h-4 mr-2" />
                Merit-Based Rule
              </Badge>
            </div>

            <div className="prose prose-lg prose-invert max-w-4xl mx-auto mb-12">
              <blockquote className="border-l-4 border-stellar-400 pl-6 italic text-lg text-foreground/90">
                "We, the sentient peoples of the Starborn Dominion—united in purpose, diversity, and cosmic vision—do hereby ordain and establish this Constitution to secure justice, liberty, and prosperity for all our worlds and to sustain our legacy across generations."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="constitution" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Constitution
            </TabsTrigger>
            <TabsTrigger value="hierarchy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Orders & Ranks
            </TabsTrigger>
            <TabsTrigger value="principles" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Core Principles
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="constitution-section cosmic-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="w-6 h-6 text-stellar-400" />
                    The Emperor
                  </CardTitle>
                  <CardDescription>Guardian of Constitutional Order</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">
                    Serves 33-year terms as symbolic head of state and cosmic peace keeper. 
                    Succession through merit-based Empyreal Trials, not inheritance.
                  </p>
                </CardContent>
              </Card>

              <Card className="constitution-section cosmic-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-cosmic-400" />
                    Celestial Council
                  </CardTitle>
                  <CardDescription>Wisdom of the Colonies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">
                    9-13 representatives from major planetary colonies and key disciplines, 
                    serving as constitutional guardians and imperial advisors.
                  </p>
                </CardContent>
              </Card>

              <Card className="constitution-section cosmic-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-stellar-400" />
                    Guardian Order
                  </CardTitle>
                  <CardDescription>Protectors of Peace</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">
                    Philosopher-warriors trained in ethics, diplomacy, and defense. 
                    Forbidden from politics, sworn only to constitutional harmony.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="constitution-section">
              <CardHeader>
                <CardTitle className="text-2xl stellar-text">Government Structure</CardTitle>
                <CardDescription>A balance of imperial wisdom and democratic representation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-stellar-400">Executive Branch</h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Emperor/Empress (33-year terms)</li>
                      <li>• Celestial Council (9-13 members)</li>
                      <li>• Planetary Governors (6-year terms)</li>
                      <li>• Elder Advisors (former Emperors)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-cosmic-400">Legislative Branch</h3>
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
            <ScrollArea className="h-[800px] w-full">
              <div className="space-y-8">
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

          <TabsContent value="hierarchy">
            <div className="space-y-8">
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
            </div>
          </TabsContent>

          <TabsContent value="principles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="constitution-section cosmic-glow">
                <CardHeader>
                  <CardTitle className="stellar-text">Founding Philosophy</CardTitle>
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

              <Card className="constitution-section cosmic-glow">
                <CardHeader>
                  <CardTitle className="stellar-text">Technological Safeguards</CardTitle>
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

            <Card className="constitution-section mt-8">
              <CardHeader>
                <CardTitle className="stellar-text text-2xl">Avoiding Earth's Failures</CardTitle>
                <CardDescription>How the Starborn Dominion addresses historical political failures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
