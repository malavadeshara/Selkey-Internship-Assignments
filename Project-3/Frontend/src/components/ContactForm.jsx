import React, { useState } from 'react';
import axios from 'axios';
import API_ENDPOINT from '../utils/api.js';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // For field-specific errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for the field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Clear previous errors

    try {
      const payload = {
        fullName: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      };

      const response = await axios.post(API_ENDPOINT, payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('API Response:', response.data);
      toast.success('Form submitted successfully!');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (err) {
      console.error('Error:', err);

      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message || 'Form submission failed');
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Form</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${errors.firstName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${errors.lastName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${errors.phoneNumber ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;