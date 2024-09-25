const ContactForm = () => (
    <form className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send</button>
    </form>
  );
  
  export default ContactForm;
  