import React from 'react';
import ReactLoading from 'react-loading';
import './loader.css'
const Loading = () => {
  return (
     <div className="spinner">
            <span>Loading...</span>
            <div className="half-spinner"></div>
          </div>
  );
};

export default Loading;
