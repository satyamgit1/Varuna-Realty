import Image from 'next/image';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaBed, FaBath, FaInstagram } from 'react-icons/fa';

const PropertyModal = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
          >
            ×
          </button>
          <div className="relative h-64 w-full">
            <Image
              src={property.image}
              alt={property.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{property.title}</h2>
              <div className="flex items-center text-gray-600 mt-1">
                <FaMapMarkerAlt className="mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-green-600">{property.price}</span>
              <div className="text-gray-700">{property.area}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 my-4 text-gray-700">
            <div className="flex items-center">
              <FaBed className="mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <FaBath className="mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Property Details</h3>
            <p className="mt-2 text-gray-600">
              Beautiful {property.bedrooms}BHK apartment with modern amenities in prime location. 
              {property.facilities.join(', ')}. Listed by Varuna Realty - Your trusted real estate partner.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
              {property.amenities.map(amenity => (
                <div key={amenity} className="flex items-center">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Nearby Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <div>
                <h4 className="font-medium text-gray-700">Schools</h4>
                <ul className="mt-2 space-y-1">
                  {property.nearby.schools.map(school => (
                    <li key={school} className="text-gray-600 text-sm">• {school}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Hospitals</h4>
                <ul className="mt-2 space-y-1">
                  {property.nearby.hospitals.map(hospital => (
                    <li key={hospital} className="text-gray-600 text-sm">• {hospital}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Transport & Shopping</h4>
                <ul className="mt-2 space-y-1">
                  <li className="text-gray-600 text-sm">• {property.nearby.metro}</li>
                  <li className="text-gray-600 text-sm">• {property.nearby.market}</li>
                  <li className="text-gray-600 text-sm">• Bus Stop: 500 m</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Builder Info</h3>
            <div className="mt-2">
              <p className="text-gray-700">
                <span className="font-medium">Builder:</span> {property.builder.name}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">RERA ID:</span> {property.builder.reraId}
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Varuna Realty</h3>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-3 md:mb-0">
                <p className="font-medium text-gray-700">Devendra Singh</p>
                <p className="text-sm text-gray-600">Real Estate Agent</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">
                    Verified Agent
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <a 
                  href="tel:+917709394888"
                  className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 flex items-center"
                  title="Call Now"
                >
                  <FaPhone />
                </a>
                <a 
                  href="https://wa.me/917709394888"
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 flex items-center"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a 
                  href="https://www.instagram.com/varuna3951/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 flex items-center"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;