import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Factory, Cog, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import './rootstock.css';

const HeroBanner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        gsap.set('.hero-overlay', { opacity: 1 });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline();
        tl.to('.hero-overlay', { opacity: 0.55, duration: 1, ease: 'power2.out' })
          .fromTo('.hero-text > *',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
            '-=0.5'
          )
          .fromTo('.hero-ui-element',
            { x: 20, opacity: 0, scale: 0.95 },
            { x: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
            '-=0.6'
          );

        // Continuous floating animation
        gsap.to('.rs-float', { y: -12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
        gsap.to('.rs-float-delayed', { y: -12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 3 });
      });

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline();
        tl.to('.hero-overlay', { opacity: 0.55, duration: 1, ease: 'power2.out' })
          .fromTo('.hero-text > *',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
            '-=0.5'
          )
          .fromTo('.hero-ui-element',
            { x: 50, opacity: 0, scale: 1 },
            { x: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
            '-=0.6'
          );

        // Continuous floating animation
        gsap.to('.rs-float', { y: -15, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
        gsap.to('.rs-float-delayed', { y: -15, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 3.2 });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-white min-h-screen flex items-center pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20"
    >

      {/* Abstract Background Vectors */}
      <div className="hero-overlay opacity-0 absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-indigo-50/80 to-transparent skew-x-12 transform origin-top-right" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-2xl" />
      </div>

      <div className="container mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16 xl:gap-20">

          {/* Left Column - 46% Text */}
          <div className="hero-text w-full lg:w-[46%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6 shadow-sm">
              <Factory size={16} />
              <span>Cloud ERP</span>
            </div>

            <h1 className="text-[2.2rem] sm:text-5xl md:text-[3.4rem] lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
              Build a Smarter <span className="rs-gradient-text">Manufacturing</span> Operation
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-[38rem] leading-relaxed mb-8">
              Rootstock is a cloud-native manufacturing ERP built on the Salesforce platform. Empower your production, supply chain, and financials on a single unified platform with DimensionCG as your trusted implementation partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none justify-center lg:justify-start">
              <Link to="/contact" className="w-full sm:w-auto sm:min-w-[220px] px-8 py-4 bg-[#4f46e5] text-white rounded-xl font-bold text-lg hover:bg-[#4338ca] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                Schedule a Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <Link to="/services" className="w-full sm:w-auto sm:min-w-[220px] px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:border-[#4f46e5] hover:text-[#4f46e5] transition-colors flex items-center justify-center">
                Explore Services
              </Link>
            </div>

            {/* Trusted By / Mini Social Proof */}

          </div>

          {/* Right Column - 54% Visual */}
          <div className="w-full lg:w-[54%] flex justify-center">
            <div className="relative w-full max-w-[720px] min-h-[320px] h-[360px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[650px] rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-slate-100 flex items-center justify-center overflow-visible">

              {/* Background elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-[-10%] right-[-10%] w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#4f46e5]/5 blur-2xl lg:blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-blue-500/5 blur-xl lg:blur-2xl" />
              </div>

              {/* Simulated UI Cards (Floating) */}
              <div className="relative w-full h-full max-w-lg mx-auto overflow-hidden lg:overflow-visible">

                {/* Main Dashboard Card */}
                <div className="hero-ui-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[86%] md:w-[80%] lg:w-[78%] xl:w-[84%] rs-glass rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 z-20">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#4f46e5]">
                        <Cog className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Production Orders</div>
                        <div className="text-[10px] sm:text-xs text-slate-500">Real-time status</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">
                      +15% Yield
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center text-xs font-bold text-slate-500">
                          PO{i}
                        </div>
                        <div className="flex-grow">
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full bg-[#4f46e5] rounded-full`} style={{ width: `${90 - (i * 15)}%` }} />
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-slate-700">{90 - (i * 15)}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Right Floating Card */}
                <div className="hero-ui-element rs-float pointer-events-none absolute top-2 sm:top-6 md:top-8 lg:top-12 right-[-3%] lg:right-[-6%] w-36 sm:w-40 md:w-44 lg:w-48 rs-glass rounded-xl shadow-xl p-3 sm:p-4 z-30 border border-white/60 scale-75 sm:scale-90 lg:scale-100 origin-top-right">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mt-1">
                      <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Inventory</div>
                      <div className="text-lg sm:text-xl font-black text-slate-900">Optimized</div>
                      <div className="text-[10px] sm:text-xs font-medium text-emerald-500 mt-1">No stockouts</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Left Floating Card */}
                <div className="hero-ui-element rs-float-delayed pointer-events-none absolute bottom-2 sm:bottom-0 md:-bottom-2 lg:-bottom-6 left-[-2%] lg:left-[-5%] w-44 sm:w-48 md:w-52 lg:w-56 rs-glass-dark rounded-xl shadow-2xl p-4 sm:p-5 z-30 scale-75 sm:scale-90 lg:scale-100 origin-bottom-left">
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold text-indigo-200 tracking-wider mb-2">Supply Chain Health</div>
                  <div className="flex items-end gap-2 mb-3">
                    <div className="text-2xl sm:text-3xl font-black text-white">99.8%</div>
                    <div className="text-xs sm:text-sm font-medium text-indigo-300 mb-1">uptime</div>
                  </div>
                  {/* Mini Graph */}
                  <div className="flex items-end gap-[3px] h-8 opacity-80">
                    {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-indigo-400 rounded-sm" style={{ height: `${h}%` }}></div>
                    ))}
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
