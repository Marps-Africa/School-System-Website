import React, { useState } from "react";

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, formData);
    setFormData({ name: "", email: "", message: "" }); // Clear inputs after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-primary-100 focus:border-primary-100 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-primary-100 focus:border-primary-100 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-primary-100 focus:border-primary-100 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
          rows="5"
          placeholder="Write a message"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-100 hover:bg-primary-200 transition duration-300 ease-in-out text-white p-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
