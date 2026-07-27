import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const InitialLoader = ({ onComplete }) => {
  // Ensure we mount first before starting timers
  useEffect(() => {
    // Keep it around 2.2 seconds to allow the user to see the entrance and breathing effect
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFFFF] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <motion.div 
        className="relative z-10 flex flex-col items-center w-full"
      >
        
        {/* Breathing Wrapper (starts after entrance animation) */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="relative mb-10 flex justify-center items-center"
        >
          {/* Logo Entrance Sequence */}
          <motion.img 
            src="/logo.png" 
            alt="Dimension Consulting" 
            // Mobile: 180-220px, Tablet: 280px, Desktop: 350px
            className="w-[180px] min-[480px]:w-[220px] md:w-[280px] lg:w-[350px] h-auto object-contain"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        {/* Loading Indicator (Thin 2px line, continuous blue gradient) */}
        <div className="w-[120px] h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 w-[60px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent rounded-full"
            animate={{ left: ['-60px', '120px'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InitialLoader;
