import Link from 'next/link';

const HeroSection = () => (
  <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/assets/hero-bg.jpg")' }}>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    
    {/* Hero content */}
    <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
      {/* Title with fade-in animation */}
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fadeInUp">
        Find Your Dream Home with Varuna Realty
      </h1>

      {/* Subtitle with delayed fade-in animation */}
      <p className="text-white text-lg md:text-xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300">
        Explore the best residential and commercial properties in Vasai, Palghar, and surrounding regions.
      </p>

      {/* Call-to-action button with hover animation */}
      <Link
        href="/properties"
        className="mt-8 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-600 hover:-translate-y-2 animate-fadeInUp delay-500"
      >
        View Listings
      </Link>
    </div>
  </section>
);

export default HeroSection;
