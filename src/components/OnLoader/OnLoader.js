import React from 'react';
import Loader from 'react-loader-spinner';

const OnLoader = () => {
  return (
    <Loader
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      type="Bars"
      color="#FFDAC0"
      height={80}
      width={80}
      timeout={3000}
    />
  );
};

export default OnLoader;
