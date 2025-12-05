import { motion } from 'framer-motion';
import assests from '../assets/assests';

const Destination = () => {
    const destination = {
        title: 'Discover Our Destinations',
        description: 'Discover Yala\'s wild heart at the legendary Leopard Territory. Breathe in coastal serenity at Patanagala Beach.',
        blockTitle: 'Block 1 - Leopard Territory',
        blockDescription: 'Block 1 is Yala\'s most iconic zone, renowned for having one of the highest leopard densities in the world. This breathtaking landscape of forests, grasslands, and waterholes',
        mainImage: assests.Destination1,
        sideImage: assests.Destination2
    };

    return (
        <div className="py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Left Column - Title and Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-1"
                    >
                        <h2 className="font-['Outfit-Bold',Helvetica] font-bold text-3xl md:text-4xl leading-tight text-black mb-4">
                            {destination.title}
                        </h2>
                        <p className="font-['Outfit-Regular',Helvetica] font-normal text-gray-600 text-sm md:text-base leading-relaxed">
                            {destination.description}
                        </p>
                    </motion.div>

                    {/* Middle Column - Main Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 flex justify-center"
                    >
                        <img
                            src={destination.mainImage}
                            alt="Leopard Territory"
                            className="w-full h-auto rounded-3xl object-cover max-w-sm md:max-w-full"
                        />
                    </motion.div>

                    {/* Right Column - Side Image and Block Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 flex flex-col gap-6"
                    >
                        {/* Side Image */}
                        <img
                            src={destination.sideImage}
                            alt="Additional View"
                            className="w-full h-48 md:h-56 rounded-3xl object-cover"
                        />

                        {/* Block Info Card */}
                        <div className="bg-white rounded-2xl p-4 md:p-6">
                            <h3 className="font-['Outfit-Bold',Helvetica] font-bold text-base md:text-lg text-black mb-3">
                                {destination.blockTitle}
                            </h3>
                            <p className="font-['Outfit-Regular',Helvetica] font-normal text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                                {destination.blockDescription}
                            </p>
                            <a
                                href="#"
                                className="font-['Outfit-Regular',Helvetica] font-normal text-sm text-black hover:text-gray-700 transition-colors inline-flex items-center gap-1"
                            >
                                View Details <span>→</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Destination;