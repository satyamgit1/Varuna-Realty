


// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import HeroSection from '../components/HeroSection';
// import ContactForm from '@/components/ContactForm';
// import StatsSection from '@/components/StatsSection';
// import OurServices from '@/components/OurServices';
// import OwnerProfile from '@/components/OwnerProfile';
// import WhatsAppButton from '@/components/WhatsAppButton';
// import Head from 'next/head';
// import { useEffect, useState } from 'react';
// import OurOffice from '../components/OurOffice';

// export default function Home() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch('/api/services');
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
//         setServices(data);
//       } catch (error) {
//         console.error('Failed to fetch services:', error);
//         // Optionally set a default services array or handle error state
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Varuna Realty - Your Trusted Real Estate Partner</title>
//         <meta name="description" content="Explore residential and commercial properties in Naigaon, Vasai, and Palghar. Get expert investment consulting and secure the best property deals." />
//         <meta name="keywords" content="real estate, properties, investment, Naigaon, Vasai, Palghar" />
//         <meta name="author" content="Devendra Singh" />
        
//         {/* Open Graph Metadata */}
//         <meta property="og:title" content="Varuna Realty" />
//         <meta property="og:description" content="Explore beautiful residential and commercial properties." />
//         <meta property="og:image" content="https://www.varunarealty.com/nav_logo.webp" />
//         <meta property="og:url" content="https://www.varunarealty.com/" />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card Metadata */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Varuna Realty" />
//         <meta name="twitter:description" content="Your trusted real estate partner." />
//         <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
//         <meta name="twitter:site" content="@yourtwitterhandle" />

//         {/* Favicon */}
//         <link rel="icon" href="/favicon.ico" />
//         <script type="application/ld+json">
//     {`
//       {
//         "@context": "https://schema.org",
//         "@type": "Organization",
//         "url": "https://www.varunarealty.com",
//         "logo": "https://www.varunarealty.com/nav_logo.webp",  // Adjust the path if necessary
//         "name": "Varuna Realty",
//         "contactPoint": {
//           "@type": "ContactPoint",
//           "telephone": "+1-800-555-5555",
//           "contactType": "Customer Service"
//         }
//       }
//     `}
//   </script>
//       </Head>

//       <Navbar />
   
//       {/* <ComingSoon /> */}
//       <HeroSection />
//       <WhatsAppButton />
//       <OurOffice />
//       <OwnerProfile />
     
      
      
//       {/* Pass the fetched services as a prop */}
//       <OurServices services={services} /> 
//       {/* <StatsSection /> */}
//       <ContactForm />
//       <Footer />
//     </>
//   );
// }


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactForm from '@/components/ContactForm';
import StatsSection from '@/components/StatsSection';
import OurServices from '@/components/OurServices';
import OwnerProfile from '@/components/OwnerProfile';
import WhatsAppButton from '@/components/WhatsAppButton';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import OurOffice from '../components/OurOffice';

export default function Home() {
  const [services, setServices] = useState([]);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();

    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      <Head>
        <title>Varuna Realty - Your Trusted Real Estate Partner</title>
        <meta name="description" content="Explore residential and commercial properties in Naigaon, Vasai, and Palghar. Get expert investment consulting and secure the best property deals." />
        <meta name="keywords" content="real estate, properties, investment, Naigaon, Vasai, Palghar" />
        <meta name="author" content="Devendra Singh" />
        
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Varuna Realty" />
        <meta property="og:description" content="Explore beautiful residential and commercial properties." />
        <meta property="og:image" content="https://www.varunarealty.com/nav_logo.webp" />
        <meta property="og:url" content="https://www.varunarealty.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varuna Realty" />
        <meta name="twitter:description" content="Your trusted real estate partner." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@yourtwitterhandle" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.varunarealty.com",
              "logo": "https://www.varunarealty.com/nav_logo.webp",
              "name": "Varuna Realty",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Head>

      {/* Popup Banner */}
      {showBanner && (
        <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg max-w-xs border border-blue-300 animate-bounce">
          <button 
            onClick={closeBanner}
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
          <h3 className="text-lg font-bold text-blue-600 mb-2">Contact Us!</h3>
          <p className="text-sm mb-3">Get in touch for property inquiries</p>
          <div className="flex space-x-3">
            <a 
              href="https://www.instagram.com/varuna3951/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="tel:+917709394888" 
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="mailto:varunarealty1@gmail.com" 
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      <Navbar />
      <HeroSection />
      <WhatsAppButton />
      <OurOffice />
      <OwnerProfile />
      <OurServices services={services} /> 
      <ContactForm />
      <Footer />
    </>
  );
}