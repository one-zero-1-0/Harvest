import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 text-center w-screen">
      <h1 className="text-2xl font-bold">HarvestLink</h1>
      <nav>
        <ul className=" flex justify-center space-x-4">
          <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
          <li><a href="#benefits" className="hover:underline">Benefits</a></li>
          <li><a href="#community-impact" className="hover:underline">Community Impact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
