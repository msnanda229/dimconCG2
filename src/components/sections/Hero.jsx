import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play, ChevronLeft, ChevronRight, ArrowRight, BrainCircuit, Cloud, Cpu, LineChart, Layers } from 'lucide-react';

const cards = [
  {
    id: "erp",
    title: "POWERING AI-FIRST ENTERPRISES",
    highlight: "AI Advised Enterprise",
    description: "Scale your cloud advantage with the world's most comprehensive and adopted cloud provider. Dimension enables AI-driven ERP architectures tailored to your industry constraints.",
    image: "/dimension_ERP.png",
    color: "bg-[#0B3A5A]/95", // Deep Navy
    logo: BrainCircuit
  },
  {
    id: "cloud",
    title: "ORACLE CLOUD TRANSFORMATION",
    highlight: "Oracle Center of Excellence",
    description: "Accelerate your transition to OCI. From on-premise migrations to cloud-native application development, our Oracle experts deliver zero-disruption implementations.",
    image: "/dimension_pro.png",
    color: "bg-[#42258F]/95", // Purple
    logo: Cloud
  },
  {
    id: "ai",
    title: "APPLIED AI SOLUTIONS",
    highlight: "Enterprise Intelligence",
    description: "Move beyond generative AI hype. Deploy secure, fine-tuned LLMs that connect to your proprietary enterprise data and integrate directly into daily workflows.",
    image: "/dimension_ai.png",
    color: "bg-[#0A4B41]/95", // Deep Teal/Green
    logo: Cpu
  },
  {
    id: "strategy",
    title: "DIGITAL INNOVATION STRATEGY",
    highlight: "Strategic Consulting",
    description: "Navigate digital disruption with confidence. Our advisory services bridge the gap between technical execution and board-level business objectives.",
    image: "/aiadvStr.png",
    color: "bg-[#592B19]/95", // Deep Rust/Orange
    logo: LineChart
  },
  {
    id: "digital",
    title: "DIGITAL TRANSFORMATION",
    highlight: "End-to-End Modernization",
    description: "Comprehensive digital overhauls for legacy systems. We build scalable, resilient architectures that future-proof your organization.",
    image: "/dimconDigi.png",
    color: "bg-[#163375]/95", // Deep Royal Blue
    logo: Layers
  }
];

const cardVariants = {
  center: { x: '0%', scale: 1, zIndex: 10, opacity: 1 },
  left: { x: '-70%', scale: 0.85, zIndex: 5, opacity: 0.6 },
  right: { x: '70%', scale: 0.85, zIndex: 5, opacity: 0.6 },
  hiddenLeft: { x: '-120%', scale: 0.5, zIndex: 0, opacity: 0 },
  hiddenRight: { x: '120%', scale: 0.5, zIndex: 0, opacity: 0 },
};

const getPosition = (index, currentIndex, length) => {
  if (index === currentIndex) return 'center';
  if (index === (currentIndex + 1) % length) return 'right';
  if (index === (currentIndex - 1 + length) % length) return 'left';

  const diff = index - currentIndex;
  const wrappedDiff = diff < -Math.floor(length / 2) ? diff + length : (diff > Math.floor(length / 2) ? diff - length : diff);
  return wrappedDiff > 0 ? 'hiddenRight' : 'hiddenLeft';
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const length = cards.length;
  const SLIDE_INTERVAL = 6000;

  useEffect(() => {
    let progressInterval;
    let slideTimeout;

    if (!isPaused) {
      const step = 50;
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + (step / SLIDE_INTERVAL) * 100;
        });
      }, step);

      slideTimeout = setTimeout(() => {
        handleNext();
      }, SLIDE_INTERVAL);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-white font-sans text-slate-900 flex flex-col justify-between pb-8 pt-24">
      
      {/* Background Subtle Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#00C2FF] rounded-full mix-blend-multiply filter blur-[200px] opacity-[0.1]"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#0B5FFF] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.1]"></div>
      </div>

      {/* Top Header */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">


        {/* Navigation Controls */}
        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <button 
            onClick={togglePause}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
          </button>
          <button 
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center perspective-[2000px] my-6">
        <div className="relative w-full max-w-[800px] h-[320px] sm:h-[400px] lg:h-[460px] flex items-center justify-center">
          {cards.map((card, index) => {
            const position = getPosition(index, currentIndex, length);
            const isCenter = position === 'center';
            const Icon = card.logo;
            
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                initial={false}
                animate={position}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className={`absolute w-[90%] sm:w-[650px] lg:w-[800px] h-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl bg-slate-100 ${!isCenter && 'pointer-events-none'}`}
                onClick={() => !isCenter && setCurrentIndex(index)}
              >
                {/* Image Background */}
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
                />
                
                {/* Colored Info Panel Overlay */}
                <div className={`absolute top-2 right-2 bottom-2 w-[65%] sm:top-4 sm:right-4 sm:bottom-4 sm:w-[50%] ${card.color} backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-8 flex flex-col justify-between border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]`}>
                  <div>
                     <div className="flex items-center gap-3 mb-4 opacity-90 text-white">
                       <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00C2FF]" />
                       <span className="text-sm sm:text-base font-bold tracking-wide uppercase">{card.highlight}</span>
                     </div>
                     <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{card.title}</h3>
                     <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-[95%]">
                       {card.description}
                     </p>
                  </div>
                  
                  <div className="flex items-center gap-2 font-semibold text-sm sm:text-base text-white group w-fit cursor-pointer mt-4">
                    Learn More 
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Progress & Logos */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 mt-auto pt-6">
        <div className="flex items-end justify-between gap-3 sm:gap-6">
          {cards.map((card, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div 
                key={card.id} 
                className={`flex-1 flex flex-col gap-3 sm:gap-4 items-center cursor-pointer transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => {
                  setProgress(0);
                  setCurrentIndex(idx);
                }}
              >
                {/* Progress Bar Line */}
                <div className="w-full h-[2px] bg-slate-200 relative rounded-full overflow-hidden">
                  {isActive && (
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#0B5FFF] rounded-full"
                      initial={{ width: `${progress}%` }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  )}
                </div>
                {/* Short Title under line */}
                <div className="flex items-center justify-center h-8">
                  <span className="hidden sm:block font-medium tracking-wide text-xs sm:text-sm text-center line-clamp-1 text-slate-700">{card.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
