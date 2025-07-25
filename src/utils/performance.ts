/**
 * Performance utilities for the Starborn Dominion application
 * 
 * Provides throttling, debouncing, and performance monitoring utilities
 * optimized for cosmic animations and stellar user interactions.
 * 
 * Features:
 * - Throttle utility for scroll and animation optimization
 * - Debounce utility for search and input handling
 * - Performance metrics collection for constitutional framework loading
 * - Web Vitals tracking integration hooks
 * 
 * @example
 * ```typescript
 * const throttledScroll = throttle(handleScroll, 16);
 * const debouncedSearch = debounce(performSearch, 300);
 * const metrics = measurePerformance();
 * ```
 */

/**
 * PerformanceMetrics - Interface for application performance measurements
 * 
 * @interface PerformanceMetrics
 * @property {number} loadTime - Time taken for page load completion
 * @property {number} renderTime - Time taken for DOM content to load
 * @property {number} navigationTime - Time taken for navigation response
 */
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  navigationTime: number;
}

/**
 * WebVitalsCallback - Type definition for Web Vitals metric callback
 * 
 * @typedef {function} WebVitalsCallback
 * @param {unknown} metric - Web Vitals metric data
 * @returns {void}
 */
type WebVitalsCallback = (metric: unknown) => void;

/**
 * Throttle utility for performance optimization of high-frequency events
 * 
 * Limits function execution to once per specified delay period, optimized
 * for stellar animations and cosmic scroll effects in the Starborn interface.
 * 
 * @template T - Function type to be throttled
 * @param {T} func - Function to throttle
 * @param {number} delay - Minimum delay between executions in milliseconds
 * @returns {(...args: Parameters<T>) => void} Throttled function
 * 
 * @example
 * ```typescript
 * const throttledScroll = throttle((event) => {
 *   updateCosmicBackground(event.scrollY);
 * }, 16); // 60fps optimization
 * ```
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
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

/**
 * Debounce utility for search and input optimization
 * 
 * Delays function execution until after specified delay has elapsed since
 * the last invocation. Ideal for constitutional search and filtering operations.
 * 
 * @template T - Function type to be debounced
 * @param {T} func - Function to debounce
 * @param {number} delay - Delay in milliseconds before execution
 * @returns {(...args: Parameters<T>) => void} Debounced function
 * 
 * @example
 * ```typescript
 * const debouncedSearch = debounce((query: string) => {
 *   searchConstitution(query);
 * }, 300);
 * ```
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Measures application performance metrics for the constitutional framework
 * 
 * Collects timing data for page loading, DOM rendering, and navigation
 * to ensure optimal user experience when browsing the Starborn constitution.
 * 
 * @returns {PerformanceMetrics} Object containing performance measurements
 * 
 * @example
 * ```typescript
 * const metrics = measurePerformance();
 * logger.info('Constitution load time:', metrics.loadTime);
 * ```
 */
export const measurePerformance = (): PerformanceMetrics => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
    renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    navigationTime: navigation.responseEnd - navigation.requestStart
  };
};

/**
 * Web Vitals tracking integration for Starborn Dominion performance monitoring
 * 
 * Provides hooks for integrating Web Vitals performance metrics collection.
 * Currently serves as a placeholder for future web-vitals package integration.
 * 
 * @param {WebVitalsCallback} onPerfEntry - Optional callback for metric handling
 * @returns {void}
 * 
 * @example
 * ```typescript
 * trackWebVitals((metric) => {
 *   analytics.track('web_vital', metric);
 * });
 * ```
 * 
 * @note To enable full functionality: npm install web-vitals
 */
export const trackWebVitals = (onPerfEntry?: WebVitalsCallback): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Placeholder for web vitals tracking
    // To enable: npm install web-vitals
    if (process.env.NODE_ENV === 'development') {
      console.info('Web Vitals tracking available when web-vitals package is installed');
    }
  }
};