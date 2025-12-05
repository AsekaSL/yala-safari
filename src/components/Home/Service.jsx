import { motion } from 'framer-motion';
import assests from '../../assets/assests';

const Service = () => {
    const services = [
        {
            icon: assests.guidedSafariTours,
            title: 'Guided Safari Tours',
            description: 'Professional naturalists and drivers take you through Yala National Park'
        },
        {
            icon: assests.hotelAccommodation,
            title: 'Hotel & Accommodation',
            description: 'Comfortable stays ranging from eco-lodges to luxury tents with meals included.'
        },
        {
            icon: assests.transportation,
            title: 'Transportation',
            description: 'Pickups and drop-off from hotels, air-conditioned transfers, and private jeep arrangements.'
        },
        {
            icon: assests.diningRefreshment,
            title: 'Dining & Refreshment',
            description: 'Freshly prepared meals, picnic-style breakfasts, and refreshments during the safari.'
        }
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
        <div className="py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="font-['Outfit-Bold',Helvetica] font-bold text-3xl md:text-4xl leading-tight text-black">
                            Step Into Your Gateway To Smooth, Stress-Free, And Seamless Travel
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-1/3"
                    >
                        <p className="font-['Outfit-Regular',Helvetica] font-normal text-gray-600 text-sm md:text-base leading-relaxed">
                            Experience a Yala Safari of convenience and adventure with our trusted services.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="flex flex-col gap-4 p-6 md:p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                            <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                            <h3 className="font-['Outfit-Bold',Helvetica] font-bold text-lg md:text-xl text-black">
                                {service.title}
                            </h3>
                            <p className="font-['Outfit-Regular',Helvetica] font-normal text-sm md:text-base text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Service;