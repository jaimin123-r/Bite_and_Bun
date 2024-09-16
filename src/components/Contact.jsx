import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BackBtn } from './MenuBar';
import { toast } from 'react-toastify';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    toast.success('Message sent successfully!');
  };

  return (
    <motion.div 
    className="container mx-auto px-4 py-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div>
      <BackBtn />
    </div>
  
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Address:</strong> 123 Burger Street, Foodville, FD 12345</p>
          <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
          <p className="mb-2"><strong>Email:</strong> info@biteandbun.com</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Opening Hours</h3>
          <p className="mb-1">Monday - Friday: 11am - 10pm</p>
          <p>Saturday - Sunday: 10am - 11pm</p>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/rathod.jaimin.792" target='_blank' className="text-2xl hover:text-yellow-500 transition-colors duration-300">
                <FaFacebook size={34}/>
              </a>
              <a href="https://www.instagram.com/__r.j__0011/" target='_blank' className="text-2xl hover:text-yellow-500 transition-colors duration-300">
                <FaInstagram size={34}/>
              </a>
              <a href="#" target='_blank' className="text-2xl hover:text-yellow-500 transition-colors duration-300">
                <FaTwitter size={34}/>
              </a>
              <a href="https://github.com/jaimin123-r" target='_blank' className="text-2xl hover:text-yellow-500 transition-colors duration-300">
                <FaGithub size={34}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Contact;