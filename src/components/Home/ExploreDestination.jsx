import { motion } from 'framer-motion';
import assests from '../../assets/assests';

const ExploreDestination = () => {
  const destinations = [
    {
      id: 1,
      image: assests.tiger,
      title: 'Block 1 – Leopard Territory',
      description: "Witness the world's highest leopard density in action.",
    },
    {
      id: 2,
      image: assests.elephant,
      title: 'Block 5 – Wilderness Trails',
      description:
        'Journey through hidden paths alive with birds, elephants, and untouched beauty.',
    },
    {
      id: 3,
      image: assests.crocca,
      title: 'Lunugamwehera',
      description:
        'Explore vast open plains and tranquil lakes where wildlife roams freely in every direction.',
    },
    {
      id: 4,
      image: assests.deer,
      title: 'Bundala',
      description:
        "Discover a bird-lover's paradise filled with flamingos, wetlands, and scenic coastal beauty.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white font-outfit">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-outfit">
            Explore Destinations And Find <br className="hidden md:block" />
            The Perfect Safari For You
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md font-outfit">
            Embark on unforgettable journeys with Yala Safari as your guide
          </p>
        </motion.div>

        {/* Desktop Grid (2x2) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 gap-6 lg:gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              className="relative h-64 lg:h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 font-outfit">
                  {destination.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-200 font-outfit">
                  {destination.description}
                </p>
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
          {/* Main featured item (tiger) */}
          <motion.div
            variants={cardVariants}
            className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={destinations[0].image}
              alt={destinations[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2 font-outfit">{destinations[0].title}</h3>
              <p className="text-sm text-gray-200 font-outfit">{destinations[0].description}</p>
            </div>
          </motion.div>

          {/* Secondary featured item (elephant) */}
          <motion.div
            variants={cardVariants}
            className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={destinations[1].image}
              alt={destinations[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1 font-outfit">{destinations[1].title}</h3>
              <p className="text-xs text-gray-200 line-clamp-2 font-outfit">
                {destinations[1].description}
              </p>
            </div>
          </motion.div>

          {/* Bottom row - two smaller items */}
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-2 gap-4"
          >
            {destinations.slice(2).map((destination) => (
              <motion.div
                key={destination.id}
                variants={cardVariants}
                className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-sm font-bold mb-1 font-outfit">{destination.title}</h3>
                  <p className="text-xs text-gray-200 line-clamp-2 font-outfit">
                    {destination.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreDestination;