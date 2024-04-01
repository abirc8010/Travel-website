import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading type="spin" color="#007bff" height={50} width={50} />
    </div>
  );
};

export default Loading;
