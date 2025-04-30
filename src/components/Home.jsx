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
        <Slider /> <br />
        <FeaturedSection src="Beverages.jpg" name='Diffrent Bevrages'/>
        <div>
        <FeaturedSection2/>
        </div>
        <FeaturedSection src="b-29.jpg" name='savor the flavor'/>  
      </div>
      <br /> <br />
    </motion.div>
  );
};


const FeaturedSection = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-12 p-4">
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
    <div className="flex flex-col md:flex-row items-center mb-12 p-4">
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
      <div className="md:w-1/2 mt-6 md:mb-0">
        <img
          src="b-30.jpg"
          alt="Featured burger"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

const slides = [
  {
    src: heroBG,
    alt: "Slide 1",
  },
  {
    src: "b-28.jpg",
    alt: "Slide 2",
  },
  {
    src: "b-27.jpg",
    alt: "Slide 3",
  },
  {
    src: "b-31.jpg",
    alt: "Slide 4",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

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
              className="w-full h-[450px] object-cover"
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
