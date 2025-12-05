import { motion } from 'framer-motion';
import assets from '../../assets/assests';

const SafariInspiration = () => {
  const inspirationArticles = [
    {
      id: 1,
      image: assets.safariInspiractionCard1,
      title: 'The Ultimate Guide to Spotting the Sri Lankan Leopard',
      date: 'October 18, 2026',
      featured: true,
    },
    {
      id: 2,
      image: assets.safariInspiractionCard2,
      title: 'Top 5 Hidden Gems Near Yala',
      date: 'May 1, 2026',
      featured: false,
    },
    {
      id: 3,
      image: assets.safariInspiractionCard3,
      title: 'How To Pack Smart for Your Tropical Safari Adventure',
      date: 'April 4, 2026',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const headerVariants = {
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
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit">
            Yala Safari Inspiration & Tips
          </h2>
        </motion.div>

        {/* Desktop Grid - 1 Large + 2 Small */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Large Featured Article */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 row-span-2 relative h-96 lg:h-full rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={inspirationArticles[0].image}
              alt={inspirationArticles[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2 line-clamp-2 font-outfit">
                {inspirationArticles[0].title}
              </h3>
              <p className="text-sm text-gray-200 font-outfit">
                {inspirationArticles[0].date}
              </p>
            </div>
          </motion.div>

          {/* Small Articles Grid */}
          {inspirationArticles.slice(1).map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              className="relative h-48 lg:h-56 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-sm lg:text-base font-bold mb-1 line-clamp-2 font-outfit">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-200 font-outfit">{article.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Layout - Stacked */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-5"
        >
          {inspirationArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-base font-bold mb-2 line-clamp-2 font-outfit">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-200 font-outfit">{article.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SafariInspiration;