import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-20 bg-white">
      <div className="text-2xl font-bold">CIRCLE</div>

      <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2 font-bold">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Features
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Pricing
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          About Us
        </a>
      </nav>

      <div className="hidden md:flex font-bold">
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-8">
          Customer Login
        </a>
        <button className="bg-black text-white px-6 py-2 rounded-md">
          Sign up
        </button>
      </div>

      {/* Mobile and Tablet Menu*/}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile and Tablet Navbar */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Customer Login
          </a>
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Sign up
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
