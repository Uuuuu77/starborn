import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    // In production, send to error tracking service
    // analytics.track('error_boundary_triggered', { error: error.message });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <CardTitle className="text-xl">Cosmic Disruption Detected</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-foreground/70">
                The quantum harmonics of this section have been disrupted. 
                Our Guardian AIs are working to restore balance.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left text-xs bg-muted p-3 rounded">
                  <summary className="cursor-pointer font-medium">
                    Technical Details
                  </summary>
                  <pre className="mt-2 whitespace-pre-wrap">
                    {this.state.error.message}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
              
              <Button 
                onClick={this.handleReset}
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Restore Harmony
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}