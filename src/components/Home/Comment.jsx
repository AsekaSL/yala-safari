import { motion } from 'framer-motion';
import assets from '../../assets/assests';

const Comment = () => {
  const testimonial = {
    text: "Booking my Yala safari through Yala Safari Web was one of the best decisions I've ever made. Every detail, from the expert guide selection to the eco-friendly lodging, was taken care of perfectly. I felt so supported throughout the journey and truly got to enjoy my vacation stress-free, culminating in an amazing leopard sighting! I can't wait to book again!",
    author: 'Liam Fernando',
    location: 'New York',
    image: assets.profileImg,
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24 bg-gray-100 font-outfit">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-outfit">
            Hear From Our Safari Travelers
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-outfit">
            Real stories. Real experiences. Real adventures.
          </p>
        </motion.div>

        {/* Desktop Version - Large Card with Split Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="hidden md:block relative rounded-4xl overflow-hidden aspect-video bg-gray-900"
        >
          <img
            src={assets.hotel}
            alt="Safari Hotel"
            className="w-full h-full object-cover"
          />

          {/* Testimonial Card Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 lg:p-10">
              {/* Testimonial Text */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 font-outfit">
                {testimonial.text}
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-200 mb-6"></div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 font-outfit">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-600 text-sm font-outfit">
                    {testimonial.location}
                  </p>
                </div>
              </div>
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
          {/* Background Image */}
          <motion.div
            variants={containerVariants}
            className="relative rounded-3xl overflow-hidden aspect-video"
          >
            <img
              src={assets.hotel}
              alt="Safari Hotel"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            variants={containerVariants}
            className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
          >
            {/* Testimonial Text */}
            <p className="text-gray-700 text-sm leading-relaxed font-outfit">
              {testimonial.text}
            </p>

            {/* Divider */}
            <div className="h-px bg-gray-200"></div>

            {/* Author Info */}
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900 text-sm font-outfit">
                  {testimonial.author}
                </h3>
                <p className="text-gray-600 text-xs font-outfit">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comment;