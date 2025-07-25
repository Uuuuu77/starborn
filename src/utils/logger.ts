/**
 * Environment-aware logging utility for the Starborn Dominion
 * 
 * Provides structured logging with cosmic theming and development/production awareness.
 * Includes special navigation logging for constitutional framework interactions.
 * 
 * Features:
 * - Environment-aware logging (development vs production)
 * - Structured message formatting with timestamps
 * - Special navigation and routing event tracking
 * - Type-safe console method execution
 * - Error tracking integration hooks for production
 * 
 * @example
 * ```typescript
 * logger.info('Constitution article loaded', { article: 'Article I' });
 * logger.navigation('/constitution', 'visit');
 * logger.error('Component render failed', error);
 * ```
 */

/**
 * LogLevel - Available logging levels for the Starborn system
 * 
 * @interface LogLevel
 * @property {'error'} ERROR - Error level for critical issues
 * @property {'warn'} WARN - Warning level for potential issues
 * @property {'info'} INFO - Info level for general information
 * @property {'debug'} DEBUG - Debug level for detailed diagnostics
 */
interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

/**
 * Logger - Cosmic-themed logging utility class
 * 
 * Handles all logging operations for the Starborn Dominion application with
 * environment awareness and structured formatting. Provides methods for
 * different log levels and special navigation event tracking.
 */
class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  
  /**
   * Formats and outputs log messages with timestamp and level prefix
   * 
   * @param {string} level - Log level (error, warn, info, debug)
   * @param {string} message - Primary log message
   * @param {unknown[]} args - Additional arguments to log
   * @returns {void}
   */
  private formatMessage(level: string, message: string, ...args: unknown[]): void {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    
    if (this.isDevelopment) {
      const consoleMethod = console[level as keyof typeof console] as ((...args: unknown[]) => void) | undefined;
      if (typeof consoleMethod === 'function') {
        consoleMethod(prefix, message, ...args);
      }
    }
  }

  /**
   * Logs error messages for critical issues in the constitutional framework
   * 
   * @param {string} message - Error description
   * @param {unknown[]} args - Additional error context
   * @returns {void}
   */
  error(message: string, ...args: unknown[]): void {
    this.formatMessage(LOG_LEVELS.ERROR, message, ...args);
    
    // In production, send to error tracking service
    if (!this.isDevelopment) {
      // analytics.track('error_logged', { message, args });
    }
  }

  /**
   * Logs warning messages for potential issues
   * 
   * @param {string} message - Warning description
   * @param {unknown[]} args - Additional warning context
   * @returns {void}
   */
  warn(message: string, ...args: unknown[]): void {
    this.formatMessage(LOG_LEVELS.WARN, message, ...args);
  }

  /**
   * Logs informational messages (development only)
   * 
   * @param {string} message - Information description
   * @param {unknown[]} args - Additional information context
   * @returns {void}
   */
  info(message: string, ...args: unknown[]): void {
    if (this.isDevelopment) {
      this.formatMessage(LOG_LEVELS.INFO, message, ...args);
    }
  }

  /**
   * Logs debug messages for detailed diagnostics (development only)
   * 
   * @param {string} message - Debug description
   * @param {unknown[]} args - Additional debug context
   * @returns {void}
   */
  debug(message: string, ...args: unknown[]): void {
    if (this.isDevelopment) {
      this.formatMessage(LOG_LEVELS.DEBUG, message, ...args);
    }
  }

  /**
   * Special logging method for navigation and routing events
   * 
   * Tracks user navigation through the constitutional framework with
   * appropriate log levels based on the action type.
   * 
   * @param {string} path - Navigation path or route
   * @param {'visit' | '404' | 'redirect'} action - Type of navigation action
   * @returns {void}
   * 
   * @example
   * logger.navigation('/constitution', 'visit');
   * logger.navigation('/invalid-path', '404');
   */
  navigation(path: string, action: 'visit' | '404' | 'redirect'): void {
    const message = `Navigation ${action}: ${path}`;
    
    if (action === '404') {
      this.warn(message);
    } else {
      this.info(message);
    }
  }
}

/**
 * Global logger instance for the Starborn Dominion application
 * 
 * @example
 * logger.info('Constitution component mounted');
 * logger.error('Failed to load constitutional data');
 */
export const logger = new Logger();