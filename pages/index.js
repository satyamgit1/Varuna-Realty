import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Varuna Realty</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example properties */}
          <PropertyCard
            title="Luxury Villa"
            location="Vasai, Maharashtra"
            price="₹2.5 Crores"
            image="/assets/villa.jpg"
          />
          {/* Add more PropertyCards as needed */}
        </div>
      </div>
    
      <Footer />
    </>
  );
}
