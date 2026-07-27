import React from 'react';
import { motion } from 'framer-motion';
 
export const FadeInUp = ({ children, className = '', delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
 
export const FadeIn = ({ children, className = '', delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
 
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1, delayChildren = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
 
export const StaggerItem = ({ children, className = '', yOffset = 40 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
 
export const MaskReveal = ({ children, className = '', delay = 0, duration = 0.8 }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
 
export const SlideMaskReveal = ({ children, className = '', delay = 0, duration = 0.8, maskColor = "bg-primary" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: duration + 0.2, delay, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
      <motion.div
        className={`absolute inset-0 ${maskColor} z-10 origin-right`}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
};
 
 