// Throttle utility for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

// Debounce utility for search and input optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Performance monitoring hook
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  navigationTime: number;
}

export const measurePerformance = (): PerformanceMetrics => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
    renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    navigationTime: navigation.responseEnd - navigation.requestStart
  };
};

// Web Vitals tracking (placeholder - requires web-vitals package)
export const trackWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Placeholder for web vitals tracking
    // To enable: npm install web-vitals
    if (process.env.NODE_ENV === 'development') {
      console.info('Web Vitals tracking available when web-vitals package is installed');
    }
  }
};