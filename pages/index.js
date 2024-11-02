// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// // import PropertyCard from '../components/PropertyCard';
// import HeroSection from '../components/HeroSection';
// // import ComingSoon from '@/components/ComingSoon';
// import ContactForm from '@/components/ContactForm';
// import StatsSection from '@/components/StatsSection';
// import OurServices from '@/components/OurServices';
// import OwnerProfile from '@/components/OwnerProfile';
// import Head from 'next/head';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       const response = await fetch('/api/services');
//       const data = await response.json();
//       setServices(data);
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
//         <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
//         <meta property="og:url" content="https://yourwebsite.com" />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card Metadata */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Varuna Realty" />
//         <meta name="twitter:description" content="Your trusted real estate partner." />
//         <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
//         <meta name="twitter:site" content="@yourtwitterhandle" />

//         {/* Favicon */}
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />
//       {/* <ComingSoon /> */}
//       <HeroSection />
//       <OwnerProfile />
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Welcome to Varuna Realty</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {/* Example properties */}
//           {/* <PropertyCard
//             title="Luxury Villa"
//             location="Vasai, Maharashtra"
//             price="₹2.5 Crores"
//             image="/assets/villa.jpg"
//           /> */}
//           {/* Add more PropertyCards as needed */}
//         </div>
//       </div>
      
//       <OurServices services={services} /> {/* Pass the fetched services as a prop */}
//       <StatsSection />
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
        // Optionally set a default services array or handle error state
      }
    };

    fetchServices();
  }, []);

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
        "logo": "https://www.varunarealty.com/nav_logo.webp",  // Adjust the path if necessary
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

      <Navbar />
   
      {/* <ComingSoon /> */}
      <HeroSection />
      <WhatsAppButton />
      <OurOffice />
      <OwnerProfile />
     
      
      
      {/* Pass the fetched services as a prop */}
      <OurServices services={services} /> 
      <StatsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
