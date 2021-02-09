import React, { ReactElement } from 'react';
import Logo from 'assets/images/logo.svg';

const Navbar = (): ReactElement => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex flex-row justify-between items-center py-6">
          <img src={Logo} className="w-12 h-12" />

          <div className="flex flex-row justify-center items-center space-x-8 text-lg font-medium text-gray-900">
            <a href="/">Home</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;