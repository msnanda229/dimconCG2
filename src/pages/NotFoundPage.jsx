import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#1E293B] overflow-hidden flex flex-col items-center justify-center relative font-sans">

      {/* Background Clouds and Accents (matching reference style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Cloud */}
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[15%] opacity-30"
        >
          <svg width="120" height="60" viewBox="0 0 120 60" fill="#E6F9F0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="40" r="20" />
            <circle cx="60" cy="30" r="30" />
            <circle cx="90" cy="40" r="20" />
            <rect x="30" y="40" width="60" height="20" />
          </svg>
        </motion.div>

        {/* Top Right Cloud */}
        <motion.div
          animate={{ x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] opacity-30"
        >
          <svg width="100" height="50" viewBox="0 0 120 60" fill="#E6F9F0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="40" r="20" />
            <circle cx="60" cy="30" r="30" />
            <circle cx="90" cy="40" r="20" />
            <rect x="30" y="40" width="60" height="20" />
          </svg>
        </motion.div>

        {/* Tiny stars/sparkles */}
        <div className="absolute top-[30%] left-[25%] w-2 h-2 rounded-full bg-[#E6F9F0]" />
        <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#E6F9F0]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center"
        >
          {/* 404 Hero Section */}
          <div className="relative mb-12 flex flex-col items-center">

            <div className="flex items-center justify-center gap-2 sm:gap-6 text-[140px] sm:text-[200px] md:text-[260px] font-black leading-none tracking-tighter text-[#0e4d9e]">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="drop-shadow-sm"
              >
                4
              </motion.span>

              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="drop-shadow-sm"
              >
                0
              </motion.span>

              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="drop-shadow-sm"
              >
                4
              </motion.span>
            </div>

            {/* Horizontal Ripples / Lines below 404 */}
            <div className="flex gap-4 mt-4 opacity-70">
              <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="h-0.5 w-6 bg-[#0e4d9e]/40 rounded-full" />
              <motion.div animate={{ x: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-0.5 w-12 bg-[#0e4d9e]/40 rounded-full" />
              <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="h-0.5 w-8 bg-[#0e4d9e]/40 rounded-full" />
            </div>
            <div className="flex gap-6 mt-2 opacity-70">
              <motion.div animate={{ x: [3, -3, 3] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="h-0.5 w-8 bg-[#0e4d9e]/40 rounded-full" />
              <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="h-0.5 w-10 bg-[#0e4d9e]/40 rounded-full" />
            </div>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E293B] mb-4"
          >
            Page Not Found
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#94A3B8] text-base md:text-lg max-w-[400px] mx-auto mb-10 leading-relaxed font-medium"
          >
            We're sorry, the page you requested could not be found
            <br className="hidden sm:block" /> please go back to the homepage
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/"
              className="px-10 py-3.5 bg-[#0e4d9e] text-white text-[15px] font-bold tracking-widest uppercase rounded-full hover:bg-[#072b58] hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(56,216,156,0.39)] inline-block"
            >
              Go Home
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
