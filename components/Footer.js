const Footer = () => {
    return (
      <section className="py-16 bg-background flex justify-center items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-primary">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-background">Phone</h3>
              <p className="text-gray-800">(123) 456-7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-background">Email</h3>
              <p className="text-gray-800">info@varunarealty.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-background">Address</h3>
              <p className="text-gray-800">123 Realty Lane, Dream City, DC 12345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-background">Office Hours</h3>
              <p className="text-gray-800">Mon-Fri: 9am - 6pm</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Footer;
  