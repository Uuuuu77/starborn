import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Crown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logger } from "@/utils/logger";

const NotFound = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    logger.navigation(location.pathname, '404');
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center cosmic-bg">
      <div className="text-center max-w-md p-8">
        <div className="mb-6 flex justify-center">
          <Crown className="w-16 h-16 text-stellar-400" />
        </div>
        <h1 className="text-6xl font-bold stellar-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Sector Not Found
        </h2>
        <p className="text-foreground/70 mb-8 leading-relaxed">
          The cosmic coordinates you seek do not exist in the known territories 
          of the Starborn Dominion. Perhaps the navigation matrix requires recalibration.
        </p>
        <Button asChild className="gap-2">
          <a href="/">
            <Home className="w-4 h-4" />
            Return to Dominion
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
