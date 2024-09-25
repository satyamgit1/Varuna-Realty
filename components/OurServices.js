import { useState } from 'react';
import { FaHome, FaChartLine, FaHandshake, FaRegBuilding } from 'react-icons/fa'; // Importing FontAwesome icons

const services = [
  {
    id: 1,
    title: 'Residential Properties',
    description: 'Explore beautiful residential properties that fit your dream home, from cozy apartments to luxurious villas in the Naigaon, Vasai, and Palghar region.',
    icon: <FaHome size={60} className="text-primary" />,
  },
  {
    id: 2,
    title: 'Commercial Spaces',
    description: 'Find the perfect commercial spaces to grow your business, including offices, retail spaces, and more, in prime locations across the city.',
    icon: <FaRegBuilding size={60} className="text-primary" />,
  },
  {
    id: 3,
    title: 'Investment Consulting',
    description: 'Get expert investment consulting to help you make informed decisions about real estate investments and maximize your returns.',
    icon: <FaChartLine size={60} className="text-primary" />,
  },
  {
    id: 4,
    title: 'Property Deals',
    description: 'Work with us to secure the best property deals through our trusted network of realtors, buyers, and sellers. We ensure smooth transactions every time.',
    icon: <FaHandshake size={60} className="text-primary" />,
  },
];

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setSelectedService(service.id)}
              onMouseLeave={() => setSelectedService(null)}
              className={`relative bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 ${
                selectedService === service.id ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{
                perspective: '1000px', // Creating a 3D space
              }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div
                  className="mb-4 transform transition-transform duration-500 hover:rotate-12"
                  style={{
                    transformStyle: 'preserve-3d', // Enabling 3D effects for the icon
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-background mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        {selectedService && (
          <div
            className={`bg-primary text-background p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:rotate-3 ${
              selectedService ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold mb-4">{services.find((service) => service.id === selectedService).title}</h3>
            <p className="text-lg">
              {services.find((service) => service.id === selectedService).description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
