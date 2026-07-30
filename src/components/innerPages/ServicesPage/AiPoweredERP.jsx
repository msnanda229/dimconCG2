import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from './components/HeroSection';
import WhyAIERP from './components/WhyAIERP';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import ServicesGrid from './components/ServicesGrid';
import ProcessTimeline from './components/ProcessTimeline';
import PlatformCards from './components/PlatformCards';
import BusinessOutcomes from './components/BusinessOutcomes';
import WhyDimension from './components/WhyDimension';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';

gsap.registerPlugin(ScrollTrigger);

const AiPoweredERP = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top when mounted
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.fromTo(".hero-anim",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      gsap.fromTo(".hero-graphic",
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      // 2. Setup scroll triggers for all section wrappers
      const sections = gsap.utils.toArray('section');
      
      sections.forEach(section => {
        gsap.fromTo(section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen font-sans">
      {/* Assemble the Page */}
      <HeroSection />
      <WhyAIERP />
      <CapabilitiesGrid />
      <ServicesGrid />
      <ProcessTimeline />
      <PlatformCards />
      <BusinessOutcomes />
      <WhyDimension />
      <FAQ />
      <CTASection />
      
    </div>
  );
};

export default AiPoweredERP;
