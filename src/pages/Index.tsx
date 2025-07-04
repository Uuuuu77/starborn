
import { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TabNavigation from '@/components/TabNavigation';
import OverviewTab from '@/components/OverviewTab';
import ConstitutionTab from '@/components/ConstitutionTab';
import HierarchyTab from '@/components/HierarchyTab';
import PrinciplesTab from '@/components/PrinciplesTab';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <HeroSection />

      {/* Main Content */}
      <div className="container-fluid section-padding">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabNavigation />

          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="constitution">
            <ConstitutionTab />
          </TabsContent>

          <TabsContent value="hierarchy">
            <HierarchyTab />
          </TabsContent>

          <TabsContent value="principles">
            <PrinciplesTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
