import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ClipLoader color="#007bff" size={50} />
    </div>
  );
};

export default LoadingSpinner;