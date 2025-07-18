import React, { useState } from "react";
import Logob from "../assets/Logo.png";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="">
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <img src={Logob} alt="Logo" className="w-20 h-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-x-8 text-gray-700 font-medium">
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Men
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Women
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Kids
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Brands
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Contact
            </h1>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-x-6">
            <Person2Icon className="cursor-pointer hover:text-blue-500 transition" />
            <ShoppingBagIcon className="cursor-pointer hover:text-blue-500 transition" />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 gap-y-4 animate-slide-down">
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Men
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Women
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Kids
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Brands
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer transition">
              Contact
            </h1>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
