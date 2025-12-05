import { motion } from 'framer-motion';
import assests from '../../assets/assets';

const ExploreConfidence = () => {
  const features = [
    {
      id: 1,
      image: assests.expertPlanning,
      title: 'Expert Planning',
      description:
        'Years of experience delivering tailor-made Yala safari experiences, including private game drives and best lodging recommendations.',
    },
    {
      id: 2,
      image: assests.Support247,
      title: '24/7 Support',
      description:
        'Assistance whenever and wherever you need it during your trip, from early morning game drives to emergency contact.',
    },
    {
      id: 3,
      image: assests.exclusiveDeals,
      title: 'Exclusive Deals',
      description:
        'Get the best prices on premium safari experiences, including exclusive access to top-rated nature guides and comfortable jeeps.',
    },
    {
      id: 4,
      image: assests.sustainable,
      title: 'Sustainable Travel',
      description:
        'Eco-conscious safaris that respect and preserve the Yala National Park ecosystem and support local communities.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
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
        <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src={assests.exploreImage}
              alt="Explore With Confidence"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 font-outfit">
                Explore The Wild With Confidence And Style
              </h2>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="shrink-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-outfit">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-outfit">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-8"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 leading-tight font-outfit">
              Explore The Wild With Confidence And Style
            </h2>
            <p className="text-gray-600 text-sm mt-2 font-outfit">
              Embark on unforgettable journeys with Yala Safari as your guide
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={assests.exploreImage}
              alt="Explore With Confidence"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="flex gap-3"
              >
                <div className="shrink-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-outfit">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-outfit">
                    {feature.description}
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

export default ExploreConfidence;