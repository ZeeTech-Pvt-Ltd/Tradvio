import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * ErrorBoundary — catches render errors so the site never goes blank.
 * Shows the failing component and message for easy debugging.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-deep flex items-center justify-center px-4 py-12">
          <div className="max-w-lg w-full bg-navy border border-danger/40 rounded-xl p-6 text-center">
            <p className="text-danger font-bold mb-2">Something went wrong rendering this section.</p>
            <p className="text-ink-soft text-sm font-mono break-words mb-4">
              {this.state.error.message}
            </p>
            <button
              onClick={() => this.setState({ error: null })}
              className="btn btn-primary btn-sm"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
