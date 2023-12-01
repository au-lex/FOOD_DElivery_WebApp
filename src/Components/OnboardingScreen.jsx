// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen
     h-screen flex items-center justify-center bg-yellow-500 bg-opacity-75 z-50">
      <div className="loader ease-linear 
      rounded-full border-t-8 border-slate-100 animate-spin border-solid h-16 w-16"></div>
    </div>
  );
};

export default Loader;
