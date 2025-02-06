import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function MenuWithCut() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="p-2.5 rounded bg-white cursor-pointer font-thin font-sans"
        onClick={toggleMenu}
      >
        <img src="/images/menu.svg" alt="Menu" />
      </button>

      {/* Menu Overlay */}
      {menuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[1000] flex flex-col justify-start items-start">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-3xl bg-transparent border-none text-white cursor-pointer"
            onClick={toggleMenu}
          >
            ✕
          </button>

          {/* Menu Items */}
          <ul className="absolute text-nowrap list-none p-0 text-left w-52 h-96 flex flex-col justify-center items-start pl-20">
            <li className="my-2.5">
              <Link to="/" className="text-white text-xl no-underline transition-colors duration-300 hover:text-[#d8b861]">
                Shop
              </Link>
            </li>
            <li className="my-2.5">
              <Link to="/newin" className="text-white text-xl no-underline transition-colors duration-300 hover:text-[#d8b861]">
                New Arrivals
              </Link>
            </li>
            <li className="my-2.5">
              <Link to="/about" className="text-white text-xl no-underline transition-colors duration-300 hover:text-[#d8b861]">
                Discover
              </Link>
            </li>
            <li className="my-2.5">
              <Link to="/contact" className="text-white text-xl no-underline transition-colors duration-300 hover:text-[#d8b861]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
