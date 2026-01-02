import React, { useState } from 'react';

const TestError: React.FC = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('Test error triggered!');
  }

  return (
    <div>
      <h3>Test Error Component</h3>
      <button onClick={() => setThrowError(true)}>
        Click to throw an error
      </button>
    </div>
  );
};

export default TestError;