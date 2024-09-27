// components/OurServices.js
import { useState } from 'react';
import { FaHome, FaChartLine, FaHandshake, FaRegBuilding } from 'react-icons/fa';

const iconMapping = {
  FaHome: <FaHome size={60} className="text-primary" />,
  FaRegBuilding: <FaRegBuilding size={60} className="text-primary" />,
  FaChartLine: <FaChartLine size={60} className="text-primary" />,
  FaHandshake: <FaHandshake size={60} className="text-primary" />,
};

const OurServices = ({ services }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-16 bg-gray-100" aria-label="Our Services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setSelectedService(service.id)}
              onMouseLeave={() => setSelectedService(null)}
              className="relative bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-4">{iconMapping[service.icon]}</div> {/* Render the icon here */}
                <h3 id={`service-title-${service.id}`} className="text-2xl font-semibold text-background mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
