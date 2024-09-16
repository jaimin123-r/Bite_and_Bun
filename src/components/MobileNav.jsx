import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white font-bold">
      <ul className="flex justify-around py-2">
        <NavLink to="/"><IoHomeOutline size={20} className='ml-3'/>home</NavLink>
        <NavLink to="/menu"><MdMenuBook size={20} className='ml-3'/>menu</NavLink>
        <NavLink to="/search"><CiSearch size={20} className='ml-3'/>search</NavLink>
        <NavLink to="/menubar"><IoMdMenu size={20} className='ml-3'/>MenuBar</NavLink>
      </ul>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link to={to} className=" hover:text-yellow-600 transition-colors hover:shadow-xl text-gray-800">{children}</Link>
  </motion.li>
);

export default MobileNav;