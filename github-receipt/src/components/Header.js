import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 space-y-4">
      <h1 className="text-4xl font-bold">GitHub Receipt</h1>
      <h2 className="text-lg text-gray-600 px-4 py-2 rounded-lg">
        Generate a receipt-style summary of your GitHub profile
      </h2>

    </div>
  );
};

export default Header;
