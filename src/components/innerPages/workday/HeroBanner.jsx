import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up animation for left content
      gsap.fromTo('.hero-content > *',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Floating cards stagger animation
      gsap.fromTo('.floating-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Column - 45% */}
          <div className="hero-content w-full lg:w-[45%]">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#005cb9] font-medium text-sm mb-6">
              Workday Implementation & Consulting
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight mb-6">
              Empower Your People with <span className="text-[#005cb9]">Workday</span>
            </h1>

            <p className="text-lg md:text-xl text-black leading-relaxed mb-8">
              A modern cloud platform for Human Capital Management and Financial Management. As your consulting partner, DimensionCG helps you drive transformation and unlock real-time workforce insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#005cb9] hover:bg-[#004a94] text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-[#005cb9] border border-blue-100 hover:border-blue-300 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right Column - 55% Visual */}
          <div className="w-full lg:w-[55%] relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-slate-100 flex items-center justify-center overflow-visible">

            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#005cb9]/5 blur-[80px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-[60px]" />
            </div>

            {/* Central Mockup (Dashboard) */}
            <div className="floating-card relative z-10 w-[85%] max-w-[500px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,92,185,0.08)] border border-slate-100 p-6 wd-animate-float">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#005cb9] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">W</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">Workday</div>
                    <div className="text-xs text-slate-500">HCM & Finance Overview</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
              </div>

              {/* Fake UI Body */}
              <div className="space-y-4">
                <div className="h-4 w-1/3 bg-slate-100 rounded-full mb-6"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-blue-50 rounded-xl border border-blue-100 flex flex-col justify-center px-4">
                    <div className="text-2xl font-bold text-[#005cb9]">2.4K</div>
                    <div className="text-xs text-slate-500 mt-1">Active Headcount</div>
                  </div>
                  <div className="h-20 bg-emerald-50 rounded-xl border border-emerald-100 flex flex-col justify-center px-4">
                    <div className="text-2xl font-bold text-emerald-600">+15%</div>
                    <div className="text-xs text-slate-500 mt-1">Financial Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element 1 - HCM */}
            <div className="floating-card absolute -left-4 md:left-4 top-1/4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-4 wd-animate-float-delayed z-20">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-[#005cb9] flex items-center justify-center">
                <Users size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Human Capital</div>
                <div className="text-xs text-[#005cb9] font-medium">Unified HR</div>
              </div>
            </div>

            {/* Floating Element 2 - Finance */}
            <div className="floating-card absolute -right-4 md:right-8 bottom-1/4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-4 wd-animate-float z-20" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Financials</div>
                <div className="text-xs text-indigo-600 font-medium">Real-time Insights</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
