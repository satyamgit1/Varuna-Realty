// import Image from 'next/image';
// import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

// const OwnerProfile = () => {
//   return (
//     <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100">
//       <div className="container mx-auto px-6">
//         {/* Profile Section */}
//         <div className="bg-white shadow-2xl rounded-xl p-12 md:flex md:space-x-16 items-center transition-transform duration-500 transform hover:scale-105 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.3)]">
//           {/* Profile Image */}
//           <div className="flex-shrink-0 mb-8 md:mb-0">
//             <Image
//               src="/owner.png" // Corrected path with leading slash
//               alt="Owner of Varuna Realty"
//               width={400}
//               height={400}
//               className="rounded-full border-8 border-orange-500 shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
//             />
//           </div>

//           {/* Owner Bio */}
//           <div className="text-center md:text-left">
//             <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
//               Devendra Singh
//             </h2>
//             <p className="text-gray-600 text-lg mb-4 leading-relaxed">
//               Devendra Singh is the founder and visionary behind Varuna Realty. With over 5 years of experience in the real estate market, he has built a reputable brand, offering high-quality residential and commercial properties in Naigaon, Vasai, and Palghar regions.
//             </p>
//             <p className="text-gray-600 text-lg mb-6 leading-relaxed">
//               His dedication to transparency, client satisfaction, and market expertise has made Varuna Realty a trusted name in the real estate industry. Devendra is passionate about helping clients find their dream homes and secure the best investments.
//             </p>

//             {/* 3D Social Media Links */}
//             <div className="flex justify-center md:justify-start space-x-6 mt-8">
//               <a
//                 href="https://www.linkedin.com/in/rahulsharma"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-700 hover:text-yellow-500 transition duration-300 transform hover:scale-125 hover:shadow-lg shadow-md rounded-full p-3 bg-white"
//               >
//                 <FaLinkedin size={35} />
//               </a>
//               <a
//                 href="https://twitter.com/rahulsharma"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:text-yellow-500 transition duration-300 transform hover:scale-125 hover:shadow-lg shadow-md rounded-full p-3 bg-white"
//               >
//                 <FaTwitter size={35} />
//               </a>
//               <a
//                 href="https://facebook.com/rahulsharma"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-800 hover:text-yellow-500 transition duration-300 transform hover:scale-125 hover:shadow-lg shadow-md rounded-full p-3 bg-white"
//               >
//                 <FaFacebook size={35} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OwnerProfile;


// components/OwnerProfile.js
// import Image from 'next/image';
// import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

// const OwnerProfile = () => {
//   return (
//     <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100" aria-label="Owner Profile">
//       <div className="container mx-auto px-6">
//         <div className="bg-white shadow-2xl rounded-xl p-12 md:flex md:space-x-16 items-center transition-transform duration-500 hover:scale-105 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.3)]">
//           <div className="flex-shrink-0 mb-8 md:mb-0">
//             <Image
//               src="/owner.png"
//               alt="Owner of Varuna Realty, Devendra Singh"
//               width={400}
//               height={400}
//               className="rounded-full border-8 border-orange-500 shadow-2xl"
//             />
//           </div>
//           <div className="text-center md:text-left">
//             <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Devendra Singh</h2>
//             <p className="text-gray-600 text-lg mb-4 leading-relaxed">
//               Devendra Singh is the founder and visionary behind Varuna Realty. With over 5 years of experience in the real estate market...
//             </p>
//             {/* Social Media Links with Descriptive Text */}
//             <div className="flex justify-center md:justify-start space-x-6 mt-8">
//               <a
//                 href="https://www.linkedin.com/in/rahulsharma"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Visit Devendra Singh's LinkedIn profile"
//                 className="text-blue-700 hover:text-yellow-500 transition duration-300 transform hover:scale-125 hover:shadow-lg"
//               >
//                 <FaLinkedin size={35} />
//                 <span className="sr-only">LinkedIn</span> {/* Screen reader only text */}
//               </a>
//               <a
//                 href="https://twitter.com/rahulsharma"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Visit Devendra Singh's Twitter profile"
//                 className="text-blue-500 hover:text-yellow-500 transition duration-300 transform hover:scale-125 hover:shadow-lg"
//               >
//                 <FaTwitter size={35} />
//                 <span className="sr-only">Twitter</span> {/* Screen reader only text */}
//               </a>
//               <a
//                 href="https://facebook.com/rahulsharma"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Visit Devendra Singh's Facebook profile"
//                 className="text-blue-800 hover:text-yellow-500 transition duration-300 transform hover:scale-125 hover:shadow-lg"
//               >
//                 <FaFacebook size={35} />
//                 <span className="sr-only">Facebook</span> {/* Screen reader only text */}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OwnerProfile;


import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const OwnerProfile = () => {
  return (
    <>
      <Head>
      <title>Varuna Realty - Your Trusted Real Estate Partner</title>
        <meta name="description" content="Learn more about Devendra Singh, the founder of Varuna Realty, and his vision for the real estate market." />
        <meta name="keywords" content="Devendra Singh, Varuna Realty founder, real estate, owner profile" />
        <meta name="author" content="Devendra Singh" />
        
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Devendra Singh - Owner of Varuna Realty" />
        <meta property="og:description" content="Learn about Devendra Singh, his experience, and his role in Varuna Realty." />
        <meta property="og:image" content="https://www.varunarealty.com/owner.png" />
        <meta property="og:url" content="https://www.varunarealty.com/owner" />
        <meta property="og:type" content="profile" />


      </Head>

      <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100" aria-label="Owner Profile">
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-2xl rounded-xl p-12 md:flex md:space-x-16 items-center">
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <Image
                src="/owner.png"
                alt="Owner of Varuna Realty, Devendra Singh"
                width={400}
                height={400}
                className="rounded-full border-8 border-orange-500 shadow-2xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Devendra Singh</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Devendra Singh is the founder and visionary behind Varuna Realty. With over 5 years of experience in the real estate market, he has helped hundreds of families find their dream homes...
              </p>

              {/* Social Media Links */}
              <div className="flex justify-center md:justify-start space-x-6 mt-8">
                <a
                  href="https://www.linkedin.com/in/rahulsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Devendra Singh's LinkedIn profile"
                  className="text-blue-700 hover:text-yellow-500"
                >
                  <FaLinkedin size={35} />
                </a>
                <a
                  href="https://twitter.com/rahulsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Devendra Singh's Twitter profile"
                  className="text-blue-500 hover:text-yellow-500"
                >
                  <FaTwitter size={35} />
                </a>
                <a
                  href="https://facebook.com/rahulsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Devendra Singh's Facebook profile"
                  className="text-blue-800 hover:text-yellow-500"
                >
                  <FaFacebook size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OwnerProfile;
