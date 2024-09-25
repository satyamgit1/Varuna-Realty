// import { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle form submission logic
//     console.log('Form submitted', formData);
//   };

//   return (
//     <section className="py-16 bg-gray-100 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 animate-fadeInDown">
//           Get in Touch Today!
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex space-x-4 animate-fadeInUp">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="w-1/2 p-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-1/2 p-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
//             />
//           </div>
//           <div className="animate-fadeInUp">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Message"
//               className="w-full p-4 h-24 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
//             />
//           </div>
//           <div className="flex justify-center animate-fadeInUp">
//           <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all duration-500 ease-in-out">
//   Send It!
// </button>

//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
          {/* Name and Email in a row */}
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
                className="w-full bg-yellow-100 text-brown-900 p-4 rounded-xl shadow-md outline-none focus:ring-4 focus:ring-orange-400 transition duration-300"
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
