import React from 'react';

const Loading = () => (
  <div className="flex items-center justify-center h-full py-20">
    <div
      className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-300"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loading;
