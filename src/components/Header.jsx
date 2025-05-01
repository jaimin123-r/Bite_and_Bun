import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useCart } from "../context/CartContext.jsx";

const Header = () => {
  const {cart} = useCart();
  const count = cart.length;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-r from-amber-50 to-orange-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative">
              <img
                src="bitebun.png"
                className="h-20 sm:h-24 md:h-28 lg:h-24 xl:h-32 object-contain"
                alt=""
              />
              {/* <span className="text-2xl font-bold text-amber-600">
                Bite & Bun
              </span> */}
              {/* <div className="absolute -bottom-1 left-0 w-full h-1 bg-amber-500 rounded-full transform origin-left scale-x-75"></div> */}
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden flex gap-3">
            {/* Search Link */}
            <Link
              to="/search"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              <CiSearch size={28}/>
            </Link>

            {/* Cart Link */}
            <Link
              to="/cart"
              className=" text-gray-700 hover:text-amber-600 transition-colors"
            >
              <LiaShoppingBagSolid size={28}/>
              {count > 0 && (
                <span className="absolute top-4 right-14 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            <button
              className="lg:hidden text-gray-700 hover:text-amber-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">
              <span className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </NavLink>
            <NavLink to="/menu">
              <span className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
                Menu
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </NavLink>
            <NavLink to="/about">
              <span className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </NavLink>
            <NavLink to="/contact">
              <span className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </NavLink>
          </nav>

          {/* Right-side icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <Link
              to="/search"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              <CiSearch size={20} />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-amber-600 transition-colors"
            >
              <LiaShoppingBagSolid size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            {/* Stores */}
            <Link
              to="/stores"
              className="text-gray-700 hover:text-amber-600 transition-colors flex items-center"
            >
              <IoLocationOutline size={20} />
            </Link>

            {/* Auth */}
            <div className="flex items-center">
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-yellow-400 hover:bg-amber-500 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 mt-4" : "max-h-0 mt-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-2">
            <NavLink to="/">
              <span className="block text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200">
                Home
              </span>
            </NavLink>
            <NavLink to="/menu">
              <span className="block text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200">
                Menu
              </span>
            </NavLink>
            <NavLink to="/about">
              <span className="block text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200">
                About
              </span>
            </NavLink>
            <NavLink to="/contact">
              <span className="block text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200">
                Contact
              </span>
            </NavLink>

            <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
              <Link
                to="/stores"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                <IoLocationOutline size={24} />
              </Link>
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="inline-block">
    {children}
  </Link>
);


export default Header;
