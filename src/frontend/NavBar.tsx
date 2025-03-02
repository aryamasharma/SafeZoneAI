import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-red-500">
          SafeZoneAI 🚨
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg hover:text-red-400 ${isActive ? "text-red-500 underline" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/chatbot"
            className={({ isActive }) =>
              `text-lg hover:text-red-400 ${isActive ? "text-red-500 underline" : ""}`
            }
          >
            AI Chatbot
          </NavLink>

          <NavLink
            to="/alerts"
            className={({ isActive }) =>
              `text-lg hover:text-red-400 ${isActive ? "text-red-500 underline" : ""}`
            }
          >
            Alerts
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `text-lg hover:text-red-400 ${isActive ? "text-red-500 underline" : ""}`
            }
          >
            Emergency Contacts
          </NavLink>
        </div>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button
          id="menu-btn"
          className="md:hidden text-xl focus:outline-none"
        >
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
