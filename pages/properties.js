import { useState } from 'react';
import Head from 'next/head';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PropertiesPage = () => {
  // Sample property data with YOUR contact details
  const [properties, setProperties] = useState([
    {
       id: 1,
    title: "1,2,3 BHK Sunteck West World",
    price: "₹32 Lac",
    area: "392 sq.ft",
    location: "Naigaon, Maharashtra",
    image: "https://newprojectdetails.com/Project_Images/ProjectImages_65_2_290420041041.jpg", // Your image URL
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Park", "Power Backup"],
    facilities: ["Modular Kitchen", "Wooden Flooring", "AC", "Fully Furnished"],
    nearby: {
      schools: ["Inventure Academy (1.2 km)", "Oakridge International (2 km)"],
      hospitals: ["Manipal Hospital (3 km)", "Apollo Clinic (1.5 km)"],
      metro: "Upcoming",
      market: "Phoenix Marketcity (2 km)"
    },
    builder: {
      name: "Sunteck",
      reraId: "KA-RERA-123456"
    }
    },
    {
       id: 1,
    title: "1,2,3 BHK Sunteck West World",
    price: "₹32 Lac",
    area: "392 sq.ft",
    location: "Naigaon, Maharashtra",
    image: "https://newprojectdetails.com/Project_Images/ProjectImages_65_2_290420041041.jpg", // Your image URL
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Park", "Power Backup"],
    facilities: ["Modular Kitchen", "Wooden Flooring", "AC", "Fully Furnished"],
    nearby: {
      schools: ["Inventure Academy (1.2 km)", "Oakridge International (2 km)"],
      hospitals: ["Manipal Hospital (3 km)", "Apollo Clinic (1.5 km)"],
      metro: "Upcoming",
      market: "Phoenix Marketcity (2 km)"
    },
    builder: {
      name: "Sunteck",
      reraId: "KA-RERA-123456"
    }
    }
  ]);

  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <>
    <Navbar />
      <Head>
        <title>Properties | Varuna Realty</title>
        <meta name="description" content="Premium properties listed by Varuna Realty - Your trusted real estate partner" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Varuna Realty Listings</h1>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            Total Properties: {properties.length}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <PropertyCard 
              key={property.id}
              property={property}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>

        {selectedProperty && (
          <PropertyModal 
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default PropertiesPage;