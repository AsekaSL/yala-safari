import { motion, AnimatePresence } from 'framer-motion';
import assests from '../assets/assests';

function HeroSection() {
    return (
        <div className="pt-20 md:pt-28 px-4 md:px-8">
            {/* Hero Section Container */}
            <div 
                className="relative w-full h-[350px] md:h-[500px] bg-cover bg-center rounded-3xl overflow-hidden"
                style={{
                    backgroundImage: `url(${assests.heroImage})`,
                    backgroundPosition: 'center'
                }}
            >
                {/* Dark Overlay - slightly darker on left */}
                <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/10"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col md:flex-row md:justify-between items-start md:items-center px-6 md:px-12 py-8 md:py-12">
                    {/* Left Side - Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 pt-4 md:pt-0"
                    >
                        <h1 className="font-['Outfit-Bold',Helvetica] font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                            Explore Yala Destinations You've Only Imagined
                        </h1>
                    </motion.div>

                    {/* Right Side - Description and Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-start md:items-end gap-4 mt-8 md:mt-0 w-full md:w-auto"
                    >
                        <p className="font-['Outfit-Regular',Helvetica] font-normal text-sm md:text-base text-white leading-relaxed max-w-xs text-left md:text-right">
                            Explore new horizons, experience new cultures, and create lasting memories.
                        </p>
                        <button className="bg-white text-black font-['Outfit-Regular',Helvetica] font-semibold px-7 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base whitespace-nowrap">
                            Plan Your Trip
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;