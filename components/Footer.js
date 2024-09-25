import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-brown-600 via-orange-500 to-yellow-500 text-black py-10">
      <div className="container mx-auto text-center px-6">
        {/* Navigation Links */}
        <div className="mb-8">
          <nav className="flex justify-center space-x-10 text-lg font-medium">
            <a href="/" className="hover:text-brown-100 transition duration-300">Home</a>
            <a href="/properties" className="hover:text-brown-100 transition duration-300">Properties</a>
            <a href="/about" className="hover:text-brown-100 transition duration-300">About</a>
            <a href="/contact" className="hover:text-brown-100 transition duration-300">Contact</a>
          </nav>
        </div>

        {/* Contact Details */}
        <div className="mb-8 text-sm md:text-base">
          <h3 className="font-bold text-xl mb-3 border-b-2 border-yellow-400 inline-block pb-1">Contact Us</h3>
          <p className="mb-2">Phone: <span className="text-yellow-400">+91 9860630888, 7709394888</span></p>
          <p className="mb-2">Email: <span className="text-yellow-400">shatyamshivam2@gmail.com</span></p>
          <p className="mb-2">Address: <span className="text-yellow-400">Building-1, Shop no: F/7, Parasnath Nagari, Vasai Palghar Tivari, 401208</span></p>
          <p>Office Hours: <span className="text-yellow-400">Mon-Fri: 9am - 6pm</span></p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaTwitch size={30} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-black-200 text-sm md:text-base">
          © {new Date().getFullYear()} Varuna Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
