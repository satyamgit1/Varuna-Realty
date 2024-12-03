import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await axios.post('http://localhost:3001/contact', {
        userEmail: formData.email, // Send the user's email to the backend
        contactInfo: formData,     // Send all form data
      });

      console.log('Server response:', response.data);
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('Error sending form:', error);
      alert('There was an issue sending your message. Please try again later.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-orange-400 to-brown-500">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 max-w-lg w-full transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <h2 className="text-5xl font-bold text-center text-brown-900 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-brown-700 mb-8">
          Get in touch with Varuna Realty for your property needs.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name, Email, and Phone in a row */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="relative w-full">
              <input
                type="text"
                name="name"
                placeholder="Your First Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-yellow-100 text-brown-900 p-4 rounded-xl shadow-md outline-none focus:ring-4 focus:ring-orange-400 transition duration-300 mb-6 md:mb-0"
                required
              />
            </div>
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-yellow-100 text-brown-900 p-4 rounded-xl shadow-md outline-none focus:ring-4 focus:ring-orange-400 transition duration-300 mb-6 md:mb-0"
                required
              />
            </div>
            <div className="relative w-full">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-yellow-100 text-brown-900 p-4 rounded-xl shadow-md outline-none focus:ring-4 focus:ring-orange-400 transition duration-300 mb-6 md:mb-0"
                pattern="^[0-9]{10}$" // Phone validation for 10 digits
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-yellow-100 text-brown-900 p-4 rounded-xl shadow-md outline-none focus:ring-4 focus:ring-orange-400 transition duration-300 h-32 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Submit Your Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
