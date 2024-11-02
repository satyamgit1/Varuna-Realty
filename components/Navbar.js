import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
import { useState, useEffect } from "react";
import { FaHome, FaBuilding, FaHandsHelping, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition duration-500 ${
        isScrolled ? "bg-white bg-opacity-90 shadow-xl" : "bg-gradient-to-r from-yellow-500 to-orange-500 bg-opacity-70"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/">
          <Image
            src="/favicon4.ico"
            alt="Logo"
            width={60}
            height={60}
            className="hover:opacity-90 transition duration-300 transform hover:scale-110 rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold text-white">
          <Link
            href="/about"
            className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaHome /> <span>About Us</span>
          </Link>
          <Link
            href="/properties"
            className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaBuilding /> <span>Properties</span>
          </Link>
          <Link
            href="/services"
            className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaHandsHelping /> <span>Services</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaPhoneAlt /> <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 text-center py-6 shadow-lg transition-all duration-300 ease-in-out">
          <Link
            href="/about"
            className="block text-lg text-gray-900 hover:text-yellow-300 transition duration-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/properties"
            className="block text-lg text-gray-900 hover:text-yellow-300 transition duration-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            Properties
          </Link>
          <Link
            href="/services"
            className="block text-lg text-gray-900 hover:text-yellow-300 transition duration-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/ContactForm"
            className="block text-lg text-gray-900 hover:text-yellow-300 transition duration-300 py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
