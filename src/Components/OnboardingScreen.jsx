// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen
     h-screen flex items-center justify-center bg-slate-100 bg-opacity-100 z-50">
      <div class="loader">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
</div>
    </div>
  );
};

export default Loader;
