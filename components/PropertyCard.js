import Image from 'next/image';

const PropertyCard = ({ property, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Varuna Listed
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-1">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-green-600 text-lg">{property.price}</span>
          <span className="text-gray-700">{property.area}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <span className="mr-3">{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {property.amenities.slice(0, 3).map(amenity => (
            <span 
              key={amenity} 
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;