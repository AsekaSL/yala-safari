import { motion } from 'framer-motion';
import assets from '../../assets/assets';

const MomentsWildlife = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24 bg-gray-50 font-outfit">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-outfit">
            Moments That Inspire Wildlife Awe
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-outfit">
            Dive into the beauty of unforgettable Yala National Park moments captured through our lens.
          </p>
        </motion.div>

        {/* Desktop Version - Video/Image with Play Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          className="hidden md:block relative rounded-3xl overflow-hidden aspect-video bg-gray-900"
        >
          <img
            src={assets.tiger2}
            alt="Moments That Inspire Wildlife Awe"
            className="w-full h-full object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-110">
              <svg
                className="w-8 h-8 text-gray-900 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Mobile Version - Stacked Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-6"
        >
          {/* Mobile Title */}
          <motion.div variants={textVariants} className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 font-outfit">
              Moments That Inspire Wildlife Awe
            </h2>
            <p className="text-gray-600 text-sm font-outfit">
              Dive into the beauty of unforgettable Yala National Park moments captured through our lens.
            </p>
          </motion.div>

          {/* Mobile Image with Play Button */}
          <motion.div
            variants={imageVariants}
            className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900"
          >
            <img
              src={assets.tiger2}
              alt="Moments That Inspire Wildlife Awe"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-110">
                <svg
                  className="w-6 h-6 text-gray-900 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MomentsWildlife;