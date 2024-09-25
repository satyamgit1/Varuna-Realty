const PropertyCard = ({ title, location, price, image }) => (
    <div className="border rounded-md shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-primary font-bold">{price}</p>
      </div>
    </div>
  );
  
  export default PropertyCard;
  