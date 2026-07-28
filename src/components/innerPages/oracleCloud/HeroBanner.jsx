import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#F15A24] font-medium text-sm mb-6">
              Oracle Cloud Standard Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight mb-6">
              Accelerate Enterprise Transformation with <span className="text-[#F15A24]">Oracle Cloud</span> Applications
            </h1>

            <p className="text-lg md:text-xl text-black leading-relaxed mb-8">
              Modernize finance, HR, supply chain and enterprise operations with Oracle Cloud Applications. DimensionCG helps organizations migrate, implement and optimize Oracle Cloud for long-term business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#F15A24] hover:bg-[#D94E1E] text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/20">
                Talk to Oracle Experts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-black rounded-lg font-medium transition-all duration-300">
                Explore Oracle Solutions
              </button>
            </div>


          </div>

          {/* Right Column - 55% - Dashboard Illustration */}
          <div className="w-full lg:w-[55%] relative h-[500px] lg:h-[600px] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 p-8 flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-400/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Panel */}
              <div className="animate-float oc-glass rounded-xl p-6 shadow-xl w-full">
                <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#F15A24] rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#000000]">Oracle Cloud</h3>
                      <p className="text-xs text-[#000000]">Financial Overview</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-8 bg-slate-100 rounded-md w-3/4"></div>
                  <div className="h-24 bg-slate-50 rounded-md border border-slate-100 flex items-end p-4 gap-2">
                    {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                      <div key={i} className="flex-1 bg-[#F15A24] rounded-t-sm opacity-80" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Element 1 - AI Insights */}
              <div className="floating-card animate-float-delayed absolute -right-8 -top-8 oc-glass rounded-lg p-4 shadow-lg w-48 hidden md:block">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-blue-600 font-bold text-xs">AI</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#000000] mb-1">Optimization Found</p>
                    <p className="text-[10px] text-[#000000]">Supply chain efficiency up by 14%</p>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 - SCM Status */}
              <div className="floating-card animate-float-fast absolute -left-12 bottom-12 oc-glass rounded-lg p-4 shadow-lg w-56 hidden md:block">
                <h4 className="text-xs font-semibold text-[#000000] mb-3">SCM Health</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-slate-600">Inventory Sync Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-slate-600">Logistics Optimized</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
