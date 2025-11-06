import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl md:text-3xl font-bold cursor-pointer"
        >
          Fund<span className="text-purple-600">Sharing</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-purple-600 cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-600 cursor-pointer">
            About
          </Link>
          <Link to="/campaigns" className="hover:text-purple-600 cursor-pointer">
            Campaigns
          </Link>
          <Link to="/contact" className="hover:text-purple-600 cursor-pointer">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 cursor-pointer"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/campaigns"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 cursor-pointer"
            >
              Campaigns
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
