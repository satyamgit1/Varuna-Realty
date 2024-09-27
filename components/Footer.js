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
            <strong>Phone:</strong> <span className="text-brown-400">+91 9860630888, 7709394888</span>
          </p>
          <p className="mb-4">
            <strong>Email:</strong> <span className="text-brown-400">shatyamshivam2@gmail.com</span>
          </p>
          <p className="mb-4">
            <strong>Address:</strong> <span className="text-brown-400">Building-1, Shop no: F/7, Parasnath Nagari, Vasai Palghar Tivari, 401208</span>
          </p>
          <p>
            <strong>Office Hours:</strong> <span className="text-brown-400">Mon-Fri: 9am - 6pm</span>
          </p>
        </div>

        {/* Map Section */}
        <div className="md:col-span-1 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8851333760263!2d72.83141191538472!3d19.07608698708908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceff96e07f61%3A0x40a7f07e20a1c53f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1639491308148!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
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
