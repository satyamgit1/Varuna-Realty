import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'property', label: 'Property Inquiry' },
    { value: 'sale', label: 'Selling a Property' },
    { value: 'rent', label: 'Renting a Property' },
    { value: 'investment', label: 'Investment Opportunity' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactInfo: formData
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Server response:', data);
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        phone: '', 
        category: 'general',
        message: '' 
      });
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-3">
            Contact Varuna Realty
          </h2>
          <p className="text-brown-600 max-w-md mx-auto">
            Have questions about properties, investments, or our services? We're here to help.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Your message has been sent successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            There was an issue sending your message. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-yellow-50 border border-yellow-100 text-brown-900 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-200"
                required
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brown-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-yellow-50 border border-yellow-100 text-brown-900 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-200"
                pattern="^[0-9]{10}$"
                required
                placeholder="enter your mobile number"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="category" className="block text-sm font-medium text-brown-700 mb-1">
                Inquiry Type*
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-yellow-50 border border-yellow-100 text-brown-900 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-200"
                required
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1">
              Your Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-yellow-50 border border-yellow-100 text-brown-900 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-200 h-40"
              required
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-orange-600 hover:to-yellow-600'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-brown-500">
          <p>We typically respond within 24 hours</p>
          <p className="mt-1">Call us directly at <span className="font-semibold">+91 9860630888</span></p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;