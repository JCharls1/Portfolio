// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-customGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center ">
            <div className="hidden md:block ">
              <div className="">
              <a href="https://github.com/JCharls1" className="text-gray-300 hover:bg-shgreen hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Github
              </a>
                    <a href="https://www.facebook.com/profile.php?id=100068895682025" className="text-gray-300 hover:bg-shgreen hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Facebook
                    </a>
                    {/* <a href="#" className="text-gray-300 hover:bg-shgreen hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Services
                    </a>
                    <a href="#" className="text-gray-300 hover:bg-shgreen hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                </a> */}

              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
