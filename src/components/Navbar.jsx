import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo4.png';

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="font-bold text-3xl">
          <img src={logo} className="w-44" alt="Logo" />
        </a>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-1/2 bg-white shadow-lg z-40 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col h-full items-start justify-center space-y-6 px-6">
            <Link
              to="/login"
              className="w-full px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 transition-colors text-left"
            >
              Log in
            </Link>
            <a
              href="/signup"
              className="w-full px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 transition-colors text-left"
            >
              Sign up
            </a>
          </div>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Log in
          </Link>
          <a
            href="/signup"
            className="px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
