
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { DominionCard } from '@/components/ui/DominionCard';

const PrinciplesTab = (): JSX.Element => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <DominionCard
          title="Founding Philosophy"
          variant="feature"
          animationDelay={0}
          className="stellar-text"
        >
          <div className="space-y-4">
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
          </div>
        </DominionCard>

        <DominionCard
          title="Technological Safeguards"
          variant="feature"
          animationDelay={200}
          className="stellar-text"
        >
          <div className="space-y-4">
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
          </div>
        </DominionCard>
      </div>

      {/* Earth's Failures section */}
      <Card className="constitution-section animate-fade-in-up" style={{ animationDelay: '300ms' }}>
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
    </div>
  );
};

export default PrinciplesTab;
