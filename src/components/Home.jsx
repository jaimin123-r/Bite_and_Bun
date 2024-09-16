import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBG from '../../public/hero-bg.jpg'

const Home = () => {
  return (
    <motion.div
      className="container mx-auto py-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        {/* <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Bite and Bun</h1> */}
        <Slider /> <br />
        <FeaturedSection src="Bevrages.avif" name='Diffrent Bevrages'/>
        <div className='hidden md:block'  >
        <FeaturedSection2/>
        </div>
        <FeaturedSection src="Fries_burger.avif" name='savor the flavor'/>
        {/* <PopularCombos /> */}
      </div>
      <br /> <br />
    </motion.div>
  );
};

//This Not Used
const ImageGallery = () => {
  const images = [
    "https://placehold.co/600x400?text=Burger+1",
    "https://placehold.co/600x400?text=Burger+2",
    "https://placehold.co/600x400?text=Burger+3",
    "https://placehold.co/600x400?text=Burger+4",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  );
};

const FeaturedSection = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src={props.src}
          alt="Featured burger"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">{props.name}</h2>
        <p className="mb-6">
          Indulge in our mouthwatering burgers made with premium ingredients and
          grilled to perfection. Each bite is a journey of taste and texture
          that will leave you craving more.
        </p>
        <Link
          to="/menu"
          className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300"
        >
          Explore Menu
        </Link>
      </div>
    </div>
  );
};
const FeaturedSection2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">Try New Item</h2>
        <p className="mb-6">
          Indulge in our mouthwatering burgers made with premium ingredients and
          grilled to perfection. Each bite is a journey of taste and texture
          that will leave you craving more.
        </p>
        <Link
          to="/menu"
          className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300"
        >
          Explore Menu
        </Link>
      </div>
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="Hotdog.avif"
          alt="Featured burger"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

const PopularCombos = () => {
  const combos = [
    {
      name: "Classic Combo",
      price: "$9.99",
      image: "https://placehold.co/300x200?text=Classic+Combo",
    },
    {
      name: "Double Trouble",
      price: "$12.99",
      image: "https://placehold.co/300x200?text=Double+Trouble",
    },
    {
      name: "Veggie Delight",
      price: "$10.99",
      image: "https://placehold.co/300x200?text=Veggie+Delight",
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Most Popular Combos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {combos.map((combo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={combo.image}
              alt={combo.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{combo.name}</h3>
              <p className="text-gray-600 mb-4">{combo.price}</p>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// src/components/Slider.jsx

const slides = [
  {
    src: heroBG,
    alt: "Slide 1",
  },
  {
    src: "onion_ring.jpg",
    alt: "Slide 2",
  },
  {
    src: "wrap.jpg",
    alt: "Slide 3",
  },
  {
    src: "three_burger.jpg",
    alt: "Slide 4",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-600 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-[430px] object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-16 h-16 mx-2 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out ${
              currentIndex === index ? "border-2 border-gray-800" : ""
            }`}
            onClick={() => showSlide(index)}
          >
            <img
              src={slides[index].src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> 
    </div>
  );
};
export default Home;
