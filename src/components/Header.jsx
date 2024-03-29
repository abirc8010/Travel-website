// Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container sticky mx-auto flex justify-between items-center">
        {/* Left items */}
        <div className="flex items-center space-x-4">
          <div className="text-white">Left Item 1</div>
          <div className="text-white">Left Item 2</div>
        </div>

        {/* Right items */}
        <div className="flex items-center space-x-4">
          <div className="text-white">Right Item 1</div>
          <div className="text-white">Right Item 2</div>
          <div className="text-white">Right Item 3</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
