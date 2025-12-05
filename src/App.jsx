import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedHeroSection from "./components/Home/AnimatedHeroSection.jsx"

function App() {

  const [isExplored, setIsExplored] = useState(false);

  return(
    <div>
      <Routes>
        <Route path="/" element={ isExplored ? <Home/> : <AnimatedHeroSection key="hero" onExplore={() => setIsExplored(true)} /> } />
      </Routes>
    </div>
  )
}

export default App
