import { motion } from 'framer-motion';
import assets from '../../assets/assests';

const SafariPackages = () => {
  const packages = [
    {
      id: 1,
      image: assets.card1,
      label: 'Hand-picked safari experiences with premium jeeps and guides',
      title: 'Safari More,',
      highlight: 'Pay Less',
      discount: '40%',
      subtext: '*Flexible peak booking and cancellation policies',
    },
    {
      id: 2,
      image: assets.card2,
      label: 'Limited slots available - reserve your peak-season safari today',
      title: 'Unlock Early',
      highlight: 'Bird Safaris',
      discount: '40%',
      subtext: '*Flexible booking and cancellation policies',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24 bg-white font-outfit">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-outfit md:w-1/2">
            Explore Unmissable Yala Safari Packages Tailored Just For You
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg font-outfit md:w-1/3">
            Discover exclusive offers curated just for you—from last-minute bookings to premium wildlife photographer packages.
          </p>
        </motion.div>

        {/* Desktop Grid (2 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 gap-6 lg:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className="relative h-80 lg:h-96 rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Label Badge */}
              <div className="absolute top-6 left-6 right-6 md:top-4 md:left-4 md:right-4 flex justify-center">
                <span className="bg-white/90 backdrop-blur text-gray-900 text-xs md:text-sm px-4 py-2 rounded-full font-medium">
                  {pkg.label}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 text-white">
                <div className="flex items-end justify-between">
                  <div className="flex-1">
                    <p className="text-xl lg:text-2xl font-bold mb-1">{pkg.title}</p>
                    <h3 className="text-3xl lg:text-5xl font-bold mb-2">{pkg.highlight}</h3>
                    <p className="text-xs lg:text-sm text-gray-200">{pkg.subtext}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm lg:text-base text-gray-300 mb-1">Discount up to</p>
                    <p className="text-4xl lg:text-5xl font-bold">{pkg.discount}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Layout (Stacked) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-6"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Label Badge */}
              <div className="absolute top-4 left-4 right-4 flex justify-center">
                <span className="bg-white/90 backdrop-blur text-gray-900 text-xs px-3 py-1.5 rounded-full font-medium">
                  {pkg.label}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <div className="flex items-end justify-between">
                  <div className="flex-1">
                    <p className="text-lg font-bold mb-0.5">{pkg.title}</p>
                    <h3 className="text-2xl font-bold mb-1">{pkg.highlight}</h3>
                    <p className="text-xs text-gray-200">{pkg.subtext}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-300 mb-1">Discount up to</p>
                    <p className="text-3xl font-bold">{pkg.discount}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SafariPackages;