
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, BookOpen, Shield, Zap } from 'lucide-react';

const TabNavigation = () => {
  return (
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
  );
};

export default TabNavigation;
