import React, { ReactNode } from 'react';
import * as Sentry from '@sentry/react';

interface State {
  hasError: boolean;
  errorMessage: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true, 
      errorMessage: error.message 
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console
    console.log('Error caught by ErrorBoundary:', { error, errorInfo });
    
    // Send error to Sentry
    try {
      Sentry.captureException(error, { 
        extra: {
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString()
        },
        tags: {
          error_boundary: 'true',
          error_type: 'react_component_error'
        }
      });
      
      console.log('Error reported to Sentry successfully');
    } catch (sentryError) {
      console.error('Failed to send error to Sentry:', sentryError);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            maxWidth: '600px'
          }}>
            <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>
              ⚠️ Oops, there is an error!
            </h2>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '20px',
              textAlign: 'left',
              fontFamily: 'monospace',
              fontSize: '14px'
            }}>
              <strong>Error Details:</strong>
              <p style={{ color: '#dc3545', marginTop: '10px' }}>
                {this.state.errorMessage}
              </p>
            </div>
            
            <p style={{ marginBottom: '25px', color: '#6c757d' }}>
              This error has been logged to our monitoring system.
            </p>
            
            <button 
              onClick={() => {
                this.setState({ hasError: false, errorMessage: '' });
                // Optional: reload the page
                // window.location.reload();
              }}
              style={{
                padding: '12px 24px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            >
              Try again?
            </button>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#6c757d' }}>
              <p>If the problem persists, please contact support.</p>
              <p>Error ID: {Date.now()}</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;