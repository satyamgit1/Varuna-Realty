import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-widest uppercase hover:text-yellow-300 transition duration-300">
          Varuna Realty
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link href="/about" className="hover:text-yellow-300 transition duration-300">About Us</Link>
          <Link href="/properties" className="hover:text-yellow-300 transition duration-300">Properties</Link>
          <Link href="/services" className="hover:text-yellow-300 transition duration-300">Services</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition duration-300">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background text-center space-y-4 py-4 shadow-lg">
          <Link href="/about" className="block text-lg hover:text-yellow-300 transition duration-300">About Us</Link>
          <Link href="/properties" className="block text-lg hover:text-yellow-300 transition duration-300">Properties</Link>
          <Link href="/services" className="block text-lg hover:text-yellow-300 transition duration-300">Services</Link>
          <Link href="/contact" className="block text-lg hover:text-yellow-300 transition duration-300">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
