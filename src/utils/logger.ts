// Environment-aware logging utility
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

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  
  private formatMessage(level: string, message: string, ...args: any[]): void {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    
    if (this.isDevelopment) {
      const consoleMethod = console[level as keyof typeof console] as (...args: any[]) => void;
      if (typeof consoleMethod === 'function') {
        consoleMethod(prefix, message, ...args);
      }
    }
  }

  error(message: string, ...args: any[]): void {
    this.formatMessage(LOG_LEVELS.ERROR, message, ...args);
    
    // In production, send to error tracking service
    if (!this.isDevelopment) {
      // analytics.track('error_logged', { message, args });
    }
  }

  warn(message: string, ...args: any[]): void {
    this.formatMessage(LOG_LEVELS.WARN, message, ...args);
  }

  info(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      this.formatMessage(LOG_LEVELS.INFO, message, ...args);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      this.formatMessage(LOG_LEVELS.DEBUG, message, ...args);
    }
  }

  // Special method for navigation and routing logs
  navigation(path: string, action: 'visit' | '404' | 'redirect'): void {
    const message = `Navigation ${action}: ${path}`;
    
    if (action === '404') {
      this.warn(message);
    } else {
      this.info(message);
    }
  }
}

export const logger = new Logger();