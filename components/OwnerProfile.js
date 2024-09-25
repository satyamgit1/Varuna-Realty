import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const OwnerProfile = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:flex md:space-x-12 items-center transition-transform duration-500 transform hover:scale-105">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <Image
              src="/owner.jpg" // Corrected path with leading slash
              alt="Owner of Varuna Realty"
              width={300}
              height={300}
              className="rounded-full border-4 border-primary shadow-lg transform transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Owner Bio */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-background mb-4">Devendra Singh</h2>
            <p className="text-gray-700 text-lg mb-4">
              Devendra Singh is the founder and visionary behind Varuna Realty. With over 5 years of experience in the real estate market, he has built a reputable brand, offering high-quality residential and commercial properties in Naigaon, Vasai, and Palghar regions.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              His dedication to transparency, client satisfaction, and market expertise has made Varuna Realty a trusted name in the real estate industry. Devendra is passionate about helping clients find their dream homes and secure the best investments.
            </p>
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/rahulsharma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                <FaLinkedin size={30} />
              </a>
              <a href="https://twitter.com/rahulsharma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                <FaTwitter size={30} />
              </a>
              <a href="https://facebook.com/rahulsharma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                <FaFacebook size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerProfile;
