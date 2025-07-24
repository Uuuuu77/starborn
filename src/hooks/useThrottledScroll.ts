import { useState, useEffect, useCallback } from 'react';

interface UseThrottledScrollOptions {
  threshold?: number;
  delay?: number;
}

export const useThrottledScroll = ({ 
  threshold = 20, 
  delay = 16 
}: UseThrottledScrollOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > threshold);
  }, [threshold]);

  const throttledScrollHandler = useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;
    
    return () => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        handleScroll();
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          handleScroll();
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, [handleScroll, delay]);

  useEffect(() => {
    const scrollHandler = throttledScrollHandler();
    
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [throttledScrollHandler]);

  return isScrolled;
};