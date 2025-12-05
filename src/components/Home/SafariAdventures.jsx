import { motion } from 'framer-motion';
import { useState } from 'react';
import assets from '../../assets/assests';

const SafariAdventures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const adventures = [
    {
      id: 1,
      image: assets.safariAdventuresCard1,
      location: 'Yala National Park, Sri Lanka',
      title: 'Starting at $64',
      date: '5 Days, Sep 5–9, 2026',
      link: 'Learn More →',
    },
    {
      id: 2,
      image: assets.safariAdventuresCard2,
      location: 'Yala & South Coast, Sri Lanka',
      title: 'Starting at $16',
      date: '7 Days, Feb 10–16, 2026',
      link: 'Learn More →',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % adventures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + adventures.length) % adventures.length);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24 bg-white font-outfit">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-start">
          {/* Left Section - Header and Controls */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-outfit">
                Upcoming Yala Safari Adventures You Can't Miss
              </h2>
              <p className="text-gray-600 text-base font-outfit">
                Reserve your spot and start your next journey into the Sri Lankan wild.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Section - Cards Carousel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="col-span-2 grid grid-cols-2 gap-6"
          >
            {adventures.map((adventure, index) => (
              <div
                key={adventure.id}
                className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={adventure.image}
                  alt={adventure.location}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Location Badge */}
                <div className="absolute top-6 left-6 right-6 flex justify-center">
                  <span className="bg-white/90 backdrop-blur text-gray-900 text-sm px-4 py-2 rounded-full font-medium">
                    {adventure.location}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{adventure.title}</h3>
                      <p className="text-sm text-gray-200 mb-3">{adventure.date}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {adventure.link}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-8"
        >
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4 font-outfit">
              Upcoming Yala Safari Adventures You Can't Miss
            </h2>
            <p className="text-gray-600 text-sm font-outfit">
              Reserve your spot and start your next journey into the Sri Lankan wild.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {adventures.map((adventure) => (
              <div
                key={adventure.id}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={adventure.image}
                  alt={adventure.location}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Location Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-center">
                  <span className="bg-white/90 backdrop-blur text-gray-900 text-xs px-3 py-1.5 rounded-full font-medium">
                    {adventure.location}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{adventure.title}</h3>
                      <p className="text-xs text-gray-200 mb-2">{adventure.date}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-xs text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {adventure.link}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SafariAdventures;