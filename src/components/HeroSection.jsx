import { motion, AnimatePresence } from 'framer-motion';

function HeroSection() {
    return(
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="min-h-screen bg-white text-slate-200 relative z-50"
        >
        </motion.div>
    )
}

export default HeroSection