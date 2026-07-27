import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLoader as Loader2, FiCheckCircle as CheckCircle2 } from 'react-icons/fi';


const messages = [
  "Understanding your business...",
  "Analysing enterprise systems...",
  "Evaluating AI readiness...",
  "Identifying transformation opportunities...",
  "Preparing executive recommendations...",
  "Building roadmap...",
  "Finalising executive report..."
];

const LoadingScreen = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Cycle through messages every 1.5 seconds
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => 
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background Particles/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E28B2B] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* Central Rotating Graphic */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="relative w-32 h-32 mb-12 flex items-center justify-center"
      >
        <div className="absolute inset-0 border-t-2 border-r-2 border-[#E28B2B] rounded-full opacity-50" />
        <div className="absolute inset-4 border-b-2 border-l-2 border-white rounded-full opacity-30" />
        <Loader2 className="w-10 h-10 text-[#E28B2B] animate-spin" />
      </motion.div>

      {/* Messages */}
      <div className="flex flex-col items-start max-w-md w-full gap-4 px-6">
        {messages.map((msg, index) => {
          const isPast = index < currentMessageIndex;
          const isFuture = index > currentMessageIndex;

          if (isFuture) return null;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-3 text-lg font-medium ${isPast ? 'text-white/50' : 'text-white'}`}
            >
              {isPast ? (
                <CheckCircle2 className="w-5 h-5 text-[#E28B2B]" />
              ) : (
                <Loader2 className="w-5 h-5 text-[#E28B2B] animate-spin" />
              )}
              <span>{msg}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LoadingScreen;
