import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CiSearch } from "react-icons/ci";
// import { ImProfile } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useCart } from '../context/CartContext.jsx';

const Header = () => {

  // const [qnt,setqny] = useState(0);

  // const handleAddToCart = () => {
  //   setqny(qnt + 1);
  // };
  const { addToCart } = useCart();
  let count = addToCart.cartCount
  

  return (
    <header className=" pb-2 pt-4 md:pb-2 md:pt-4 shadow-lg fixed w-full bg-white z-10 text-yellow-400">
      <div className="container mx-auto px-4 flex justify-between">
        <motion.h1 
          className="cursor-pointer text-3xl font-bold text-center mb-4 md:mt-3 m-auto md:m-0 md:mb-5 border-4 border-black rounded-md p-0.5 bg-black text-black shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bite & Bun
        </motion.h1>
        <Link to="/cart" className='md:hidden mt-1.5'><LiaShoppingBagSolid size={24}/></Link>
        <nav className="hidden md:block">
          <ul className="flex justify-center space-x-6 md:mt-3 text-[17px] font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>
        <nav className="hidden md:block">
          <ul className="flex justify-center space-x-6 md:mt-3 font-bold">
            <Link to="/search"><CiSearch size={24}/></Link>
            <Link to="/cart"><LiaShoppingBagSolid size={24}/><sup className='text-xl'>{count}</sup></Link>
            <Link to="/stores"><IoLocationOutline size={24} className='ml-2'/>Stores</Link>
            <Link to="/profile" > <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

{/* <ImProfile size={24} className='ml-2'/> */}  // profile icon
 
const NavLink = ({ to, children }) => (
  <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link to={to} className="hover:text-gray-600 transition-colors underline ">{children}</Link>
  </motion.li>
);



export default Header;
