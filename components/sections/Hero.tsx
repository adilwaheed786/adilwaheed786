import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const animatedTitles = ["Full Stack Developer", "Freelancer", "Problem Solver"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex(prevIndex => (prevIndex + 1) % animatedTitles.length);
    }, 2500); // Change title every 2.5 seconds

    return () => clearInterval(timer);
  }, []);

  const titleVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-navy-950"></div>
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(239,246,255,0.6),rgba(255,255,255,0)) dark:bg-radial-gradient(ellipse_at_center,rgba(30,27,75,0.5),rgba(30,27,75,0))"></div>
      </div>
      <motion.div className="md:w-1/2 mt-8 md:mt-0 z-10" variants={containerVariants}>
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-navy-900 dark:text-white"
          variants={itemVariants}
        >
          Engr. Adil Waheed
        </motion.h1>
        
        <motion.p
          className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          I am a Software Engineer
        </motion.p>

        <motion.div 
          className="mt-1 text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-semibold h-10 md:h-12 flex items-center justify-center md:justify-start"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {animatedTitles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p 
          className="mt-4 max-w-xl mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Building smart web solutions with C#, React & Node.js
        </motion.p>
      </motion.div>
      <div className="md:w-1/2 flex justify-center z-10">
        <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary-500/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.8 }}
        >
            <img src="assets/profilepic.jpeg" alt="Engr. Adil Waheed" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;