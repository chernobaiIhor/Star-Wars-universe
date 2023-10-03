import React, { Component, ErrorInfo, ReactNode } from 'react';

import { ERROR } from 'src/constants/errors';

import { ErrorGrid } from 'src/components/error-grid';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorGrid message={ERROR.BOUNDARY} />;
    }

    return this.props.children;
  }
}
