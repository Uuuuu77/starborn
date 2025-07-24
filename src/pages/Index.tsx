
import { useState, lazy, Suspense } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TabNavigation from '@/components/TabNavigation';
import OverviewTab from '@/components/OverviewTab';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SEOHead } from '@/components/SEOHead';

// Lazy load tab components for better performance
const ConstitutionTab = lazy(() => import('@/components/ConstitutionTab'));
const HierarchyTab = lazy(() => import('@/components/HierarchyTab'));
const PrinciplesTab = lazy(() => import('@/components/PrinciplesTab'));

const Index = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <>
      <SEOHead 
        title="Starborn Dominion - Constitutional Framework"
        description="Explore the constitutional framework of the Starborn Dominion, a post-Earth civilization founded on balanced power, merit-based leadership, and universal rights."
      />
      
      <div className="min-h-screen">
        <ErrorBoundary>
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>

        {/* Main Content */}
        <div className="container-fluid section-padding">
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <ErrorBoundary>
              <TabNavigation />
            </ErrorBoundary>

            <TabsContent value="overview">
              <ErrorBoundary>
                <OverviewTab />
              </ErrorBoundary>
            </TabsContent>

            <TabsContent value="constitution">
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner text="Loading constitutional articles..." />}>
                  <ConstitutionTab />
                </Suspense>
              </ErrorBoundary>
            </TabsContent>

            <TabsContent value="hierarchy">
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner text="Loading hierarchy structures..." />}>
                  <HierarchyTab />
                </Suspense>
              </ErrorBoundary>
            </TabsContent>

            <TabsContent value="principles">
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner text="Loading founding principles..." />}>
                  <PrinciplesTab />
                </Suspense>
              </ErrorBoundary>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Index;
