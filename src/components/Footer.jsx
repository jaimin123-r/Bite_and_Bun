import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYelp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-gradient-to-tr from-amber-50 to-orange-100 py-8 px-4 md:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo (optional) */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <img src="/bitebun.png" alt="Logo" className="h-20 object-contain" />
          <p className="text-gray-600 text-sm">
            Delicious bites, delivered with love. Enjoy the flavor of Bite & Bun!
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            {["About", "Contact", "Stores", "Menu"].map((item, index) => (
              <motion.li key={index} whileHover="hover" variants={linkVariants}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>11, Shree Shyam Society</li>
            <li>Bavla, Ahmedabad, Gujarat</li>
            <li>Phone: 999111222333</li>
            <li>Email: jaiminrathod412@gmail.com</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            {[FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYelp].map((Icon, index) => (
              <motion.a
                key={index}
                href="https://www.facebook.com/rathod.jaimin.792"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={linkVariants}
                className="hover:text-amber-500 transition-colors duration-300"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          {/* Bottom Text */}
      <motion.div
        className=" text-gray-500 text-sm mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        © 2026 Bite & Bun. All rights reserved.
      </motion.div>
        </motion.div>
        
      </div>

      
    </footer>
  );
};

export default Footer;
