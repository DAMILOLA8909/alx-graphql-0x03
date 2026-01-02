import React, { useState } from 'react';

const ErrorProneComponent: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('This is a test error to check ErrorBoundary functionality!');
  }

  return (
    <div style={{ padding: '20px', border: '2px solid red', margin: '20px 0' }}>
      <h3>Error Test Component</h3>
      <p>This component can throw an error when you click the button.</p>
      <button 
        onClick={() => setShouldError(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        🔥 Click to Trigger Error
      </button>
    </div>
  );
};

export default ErrorProneComponent;