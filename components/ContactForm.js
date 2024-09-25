import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <section className="py-16 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 animate-fadeInDown">
          Get in Touch Today!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4 animate-fadeInUp">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-1/2 p-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-1/2 p-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
            />
          </div>
          <div className="animate-fadeInUp">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-4 h-24 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
            />
          </div>
          <div className="flex justify-center animate-fadeInUp">
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all duration-500 ease-in-out">
  Send It!
</button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
