import React from 'react';
import ErrorBoundary from 'helper/ErrorBoundary';

export const withErrorBoundary = (ChildComponent) => {
  return (props) => (
    <ErrorBoundary>
      <ChildComponent {...props} />
    </ErrorBoundary>
  );
};
