import AnimatedHeroSection from "../components/AnimatedHeroSection.jsx"
import HeroSection from "../components/HeroSection.jsx"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
    // =========================================================================
    // 1. MAIN CONTAINER: Manages the state and transition
    // =========================================================================
    const [isExplored, setIsExplored] = useState(false);

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-white text-white">
        
        <AnimatePresence mode="wait">
            {!isExplored && (
            <AnimatedHeroSection key="hero" onExplore={() => setIsExplored(true)} />
            )}
        </AnimatePresence>

        {isExplored && <HeroSection />}
        </div>
    );
}

export default Home