


import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const OwnerProfile = () => {
  const whatsappNumber = "+919860630888"
  return (
    <>
      <Head>
        <title>Varuna Realty - Your Trusted Real Estate Partner</title>
        <meta
          name="description"
          content="Learn more about Devendra Singh, the founder of Varuna Realty, and his vision for the real estate market."
        />
        <meta
          name="keywords"
          content="Devendra Singh, Varuna Realty founder, real estate, owner profile"
        />
        <meta name="author" content="Devendra Singh" />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Devendra Singh - Owner of Varuna Realty"
        />
        <meta
          property="og:description"
          content="Learn about Devendra Singh, his experience, and his role in Varuna Realty."
        />
        <meta property="og:image" content="https://www.varunarealty.com/owner.png" />
        <meta property="og:url" content="https://www.varunarealty.com/owner" />
        <meta property="og:type" content="profile" />
      </Head>

      <section
        className="py-24 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500"
        aria-label="Owner Profile"
      >
        <div className="container mx-auto px-6">
          <div className="relative bg-white shadow-2xl rounded-3xl p-12 md:flex md:space-x-16 items-center transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-yellow-200 to-transparent opacity-30 rounded-t-3xl"></div>
            <div className="flex-shrink-0 mb-8 md:mb-0 relative">
              <Image
                src="/owner.png"
                alt="Owner of Varuna Realty, Devendra Singh"
                width={400}
                height={400}
                className="rounded-full border-8 border-yellow-400 shadow-2xl transform hover:rotate-6 hover:scale-110 transition-transform duration-500 ease-out hover:shadow-yellow-300"
              />
            </div>
            <div className="text-center md:text-left space-y-4 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
                Devendra Singh
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed animate-slideInUp">
                Devendra Singh is the founder and visionary behind Varuna Realty.
                With over 5 years of experience in the real estate market, he has
                helped hundreds of families find their dream homes...
              </p>

              {/* Social Media Links */}
              <div className="flex justify-center md:justify-start space-x-6 mt-8">
                <a
                  href="https://www.linkedin.com/in/satyam-singh-612415223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Devendra Singh's LinkedIn profile"
                  className="text-blue-700 hover:text-yellow-500 transform hover:scale-125 transition-all duration-300"
                >
                  <FaLinkedin size={35} />
                </a>
                <a
                  href="https://www.instagram.com/varuna3951/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Devendra Singh's Twitter profile"
                  className="text-orange-500 hover:text-orange-500 transform hover:scale-125 transition-all duration-300"
                >
                  <FaInstagram size={35} />
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Devendra Singh's Facebook profile"
                  className="text-green-500 hover:text-green-500 transform hover:scale-125 transition-all duration-300"
                >
                  <FaWhatsapp size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default OwnerProfile;
