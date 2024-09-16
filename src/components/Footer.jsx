import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className=" py-12 mt-16 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around">
          <motion.div 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className='text-lg space-y-2'>
              {['Home', 'Menu', 'Locations', 'About'].map((item, index) => (
                <motion.li key={index} whileHover="hover" variants={linkVariants}>
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-yellow-300 transition-colors duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className='text-lg space-y-2'>
              <li>11,Shree Shyam Society</li>
              <li>Bavla,Ahemedabad,Gujarat</li>
              <li>Phone: 999111222333</li>
              <li>Email: jaiminrathod412@gmail.com</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className='text-2xl flex gap-4'>
              {[FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYelp].map((Icon, index) => (
                <motion.li key={index} whileHover="hover" variants={linkVariants}>
                  <a href="https://www.facebook.com/rathod.jaimin.792" target='_blank' className="text-2xl hover:text-yellow-300 transition-colors duration-300">
                    <Icon size={30}/>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.p 
          className="text-center mt-5 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          © 2024 Bite & Bun. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 