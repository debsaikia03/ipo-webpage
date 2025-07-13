import React, { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md shadow-gray-300 px-6 py-3 flex items-center justify-between relative" >
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/ds77uascw/image/upload/v1752403081/bluestock-logo_faxciu.jpg"
          alt="Bluestock"
          className="h-8 w-auto"
        />
        <span className="text-2xl font-bold text-gray-800">BLUESTOCK</span>
      </div>

      {/* Center - Navigation Links (Desktop only) */}
      <ul className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">PRODUCTS</li>
        <li className="hover:text-blue-600 cursor-pointer">PRICING</li>
        <li className="hover:text-blue-600 cursor-pointer">COMMUNITY</li>
        <li className="hover:text-blue-600 cursor-pointer">MEDIA</li>
        <li className="hover:text-blue-600 cursor-pointer">SUPPORT</li>
      </ul>

      {/* Right - Auth Buttons */}
      <div className="flex gap-4 items-center">
        <button className="text-sm text-gray-600 bg-gray-200 px-4 py-1.5 rounded hover:text-blue-600 hidden lg:block">Sign In</button>
        <button className="bg-blue-600  text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700 hidden lg:block">
          Sign Up Now
        </button>
        {/* Hamburger Button (Always visible) */}
        <button
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span className="text-xl cursor-pointer">☰</span>
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-1/4 bg-white shadow-md z-50 lg:hidden animate-fade-in">
          <ul className="flex flex-col gap-2 p-4 text-gray-700 font-medium text-left">
            <li className="hover:text-blue-600 cursor-pointer w-full">PRODUCTS</li>
            <li className="hover:text-blue-600 cursor-pointer w-full">PRICING</li>
            <li className="hover:text-blue-600 cursor-pointer w-full">COMMUNITY</li>
            <li className="hover:text-blue-600 cursor-pointer w-full">MEDIA</li>
            <li className="hover:text-blue-600 cursor-pointer w-full">SUPPORT</li>
            <li className="self-start w-fit">
              <button className="w-fit text-left rounded bg-gray-200 text-gray-600 hover:text-blue-600 px-4 py-2 mt-1">
                Sign In
              </button>
            </li>
            <li className="self-start w-fit">
              <button className="w-fit text-left bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-1">
                Sign Up Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;