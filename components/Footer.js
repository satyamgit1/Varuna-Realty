import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-brown-600 via-orange-500 to-yellow-500 text-black py-12">
      {/* Top Navigation */}
      <div className="container mx-auto px-6">
        <nav className="flex justify-center space-x-10 text-lg font-medium mb-8">
          <a href="/" className="hover:text-brown-100 transition duration-300">Home</a>
          <a href="/properties" className="hover:text-brown-100 transition duration-300">Properties</a>
          <a href="/about" className="hover:text-brown-100 transition duration-300">About</a>
          <a href="/contact" className="hover:text-brown-100 transition duration-300">Contact</a>
        </nav>
      </div>

      {/* Contact Information and Map Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="md:col-span-1 text-left">
          <p className="mb-4">
            <strong>Phone:</strong> <span className="text-brown-400">+91 7709394888</span>
          </p>
          <p className="mb-4">
            <strong>Email:</strong> <span className="text-brown-400">varunarealty1@gmail.com</span>
          </p>
          <p className="mb-4">
            <strong>Address:</strong> <span className="text-brown-400">Building-1, Shop no: F/7, Parasnath Nagari, Vasai Palghar Tivari, 401208</span>
          </p>
          <p>
            <strong>Office Hours:</strong> <span className="text-brown-400">Mon-Fri: 9am - 6pm</span>
          </p>
        </div>


      
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-black-200 md:text-base">
        © {new Date().getFullYear()} Varuna Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
