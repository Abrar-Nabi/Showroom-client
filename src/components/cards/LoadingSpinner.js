import React from 'react';
import '../styles/loadingSpinner.css'; // Ensure you have the styles defined

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
