import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    toast.success('Message sent successfully!');
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center text-amber-700 mb-10">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <motion.div 
          className="bg-white p-6 shadow-lg rounded-xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-2 rounded-md font-semibold hover:bg-amber-600 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-xl shadow-md"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-2">Contact Details</h2>
          {/* <p className="mb-2"><strong>Address:</strong> Bavla, Ahmedabad, Gujarat.</p>
          <p className="mb-2"><strong>Phone:</strong>+91 9574589604</p>
          <p className="mb-2"><strong>Email:</strong> info@biteandbun.com</p> */}
          <ul>
            <li>Address: Bavla, Ahmedabad, Gujarat.</li><li>Phone: +91 9574589604</li><li>Email: info@biteandbun.com</li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg   font-bold text-gray-800 mb-1">Opening Hours</h3>
            <p>Mon - Fri: 11am - 10pm</p>
            <p>Sat - Sun: 10am - 11pm</p>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/rathod.jaimin.792" target='_blank' rel='noopener noreferrer'>
                <FaFacebook size={28} />
              </a>
              <a href="https://www.instagram.com/jaimin_rathod_9534/" target='_blank' rel='noopener noreferrer'>
                <FaInstagram size={28} />
              </a>
              <a href="#" target='_blank' rel='noopener noreferrer'>
                <FaTwitter size={28} />
              </a>
              <a href="https://github.com/jaimin123-r" target='_blank' rel='noopener noreferrer'>
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Contact;