import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ title, content, imageSrc, imageAlt, reverse = false }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col-reverse md:flex-row items-center gap-8 mb-16 px-4 md:px-8 lg:px-16 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-600">{title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{content}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-3/4 md:w-full max-w-sm md:max-w-md rounded-lg shadow-xl object-cover"
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.div
      className="bg-white text-gray-900 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-amber-700 mb-12">About Us</h1>

        <AboutSection
          title="Our Story"
          content="Bite and Bun was born out of a passion for creating delicious, high-quality burgers that bring people together. Founded in 2020, we've quickly become a local favorite, known for our innovative flavors and commitment to using fresh, locally-sourced ingredients."
          imageSrc="store.png"
          imageAlt="Bite and Bun restaurant"
        />

        <AboutSection
          title="Our Mission"
          content="At Bite and Bun, we believe that great food should be accessible to everyone. We're committed to crafting mouthwatering burgers that not only satisfy your cravings but also bring a smile to your face. Our goal is to create a welcoming atmosphere where friends and family can come together to enjoy good food and great company."
          imageSrc="mission.png"
          imageAlt="Bite and Bun burger"
          reverse
        />

        <AboutSection
          title="Quality Ingredients"
          content="We take pride in using only the finest, freshest ingredients in our burgers. From our locally-sourced beef to our house-made sauces, every component is carefully selected to ensure the best flavor and quality. We also offer vegetarian and vegan options, so there's something for everyone at Bite and Bun."
          imageSrc="quality.jpg"
          imageAlt="Bite and Bun ingredients"
        />
      </div>
    </motion.div>
  );
};

export default About;