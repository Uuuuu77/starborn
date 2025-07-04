
import { Crown, Users, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OverviewTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default OverviewTab;
