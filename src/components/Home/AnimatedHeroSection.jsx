
import { motion, AnimatePresence } from 'framer-motion';
import assests from '../../assets/assets.js';



// =========================================================================
// 2. ANIMATED HERO SECTION: Layering, Entrance Animation, and Immersive Zoom Exit
// =========================================================================
const AnimatedHeroSection = ({ onExplore }) => {
  
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    exit: { opacity: 0, transition: { duration: 1.2, ease: "easeInOut", delay: 0.2 } }
  };
  const backgroundVariants = {
    initial: { scale: 1.1 },
    animate: { scale: 1, transition: { duration: 5, ease: "easeOut" } },
    exit: { scale: 1.5, transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] } }
  };
  const mountainVariants = {
    initial: { scale: 1.1, y: 50 },
    animate: { scale: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
    exit: { scale: 5, y: 200, transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] } }
  };
  const textVariants = { exit: { opacity: 0, y: -50, transition: { duration: 0.5 } } };
  const buttonVariants = { exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } } };


  return (
    <motion.div 
      className="relative h-screen w-full overflow-hidden flex justify-center items-center"
      variants={containerVariants}
      exit="exit"
    >
      {/* ------------------------------------------------
          LAYER 0: BACKGROUND SKY (z-0)
      ------------------------------------------------ */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
            src={assests.backgroundImage} 
            alt="Background Sky" 
            className="w-full h-full object-cover"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* ------------------------------------------------
          LAYER 20: FOREGROUND MOUNTAIN PNG (z-20)
          This layer is now visually below the text (z-30).
      ------------------------------------------------ */}
      <motion.div 
        className="absolute bottom-0 w-full z-20 pointer-events-none flex items-end justify-center origin-bottom"
        variants={mountainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
         <img 
           // REPLACE THIS with your transparent mountain PNG
           src={assests.mountainImage} 
           alt="Mountain Foreground"
           className="w-full h-auto object-cover min-h-[50vh] md:min-h-[60vh]" 
         />
         <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black/60 to-transparent"></div>
      </motion.div>


      {/* ------------------------------------------------
          LAYER 30: THE GIANT TEXT (z-30)
          FIX: Z-Index set to z-30 to ensure it is always on top of the mountain (z-20).
      ------------------------------------------------ */}
      <motion.div 
          className="absolute inset-0 z-30 flex justify-center items-center pointer-events-none select-none"
      >
          <motion.h1 
              className="font-black text-white drop-shadow-2xl 
                         text-8xl md:text-[12rem] lg:text-[16rem] 
                         leading-none tracking-tighter text-center
                         -translate-y-1/4" // Aligns text higher
              
              // Entrance Animation (Text slides up - now visible immediately)
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 0.9 }} 
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              
              variants={textVariants}
              exit="exit"
          >
              Yala Safari
          </motion.h1>
      </motion.div>


      {/* ------------------------------------------------
          LAYER 40: THE BUTTON (z-40)
          Ensures the button is clickable over the giant text.
      ------------------------------------------------ */}
      <motion.div 
          className="absolute bottom-20 md:bottom-32 z-40 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          variants={buttonVariants}
          exit="exit"
      >
        <motion.button
          onClick={onExplore}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border-2 text-white border-white/50 rounded-full text-xl uppercase tracking-[0.2em] font-bold backdrop-blur-md bg-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:border-white transition-all duration-300"
        >
          Start Safari
        </motion.button>
      </motion.div>

    </motion.div>
  );
};

export default AnimatedHeroSection;