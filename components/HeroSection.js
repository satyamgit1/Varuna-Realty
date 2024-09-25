// import Link from 'next/link';

// const HeroSection = () => (
//   <section
//     className="relative bg-cover bg-center h-screen"
//     style={{ backgroundImage: 'url("/hero.png")' }} // Set the background image
//   >
//     {/* Dark overlay */}
//     <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//     {/* Hero content */}
//     <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//       {/* Title */}
//       <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight animate-fadeInUp">
//         Find Your Dream Home with Varuna Realty
//       </h1>

//       {/* Subtitle */}
//       <p className="text-primary text-lg md:text-xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300">
//         Explore the best residential and commercial properties in Naigaon, Vasai, Palghar, and surrounding regions.
//       </p>

//       {/* Call-to-action button */}
//       <Link
//         href="/properties"
//         className="mt-8 bg-primary text-background px-8 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-300 hover:-translate-y-2 animate-fadeInUp delay-500"
//       >
//         View Listings
//       </Link>
//     </div>
//   </section>
// );

// export default HeroSection;



import Link from 'next/link';

const HeroSection = () => (
  <section
    className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: 'url("/hero.png")' }} // Set the background image
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    {/* Hero content */}
    <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight opacity-0 animate-fadeInUp">
        Find Your Dream Home with Varuna Realty
      </h1>

      {/* Subtitle */}
      <p className="text-primary text-lg md:text-xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300">
        Explore the best residential and commercial properties in Naigaon, Vasai, Palghar, and surrounding regions.
      </p>

      {/* Call-to-action button */}
      <Link
        href="/properties"
        className="mt-8 bg-primary text-background px-8 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-300 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500"
      >
        Explore
      </Link>
    </div>
  </section>
);

export default HeroSection;
