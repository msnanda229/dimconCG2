import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Settings, Zap, Link as LinkIcon, HeartHandshake, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { step: '01', title: 'Workday Consulting', icon: Users, desc: 'Strategic advisory to align Workday capabilities with your HR and financial objectives.' },
  { step: '02', title: 'Workday Implementation', icon: Settings, desc: 'Proven deployment methodology ensuring on-time delivery with minimal disruption.' },
  { step: '03', title: 'Workday Integration', icon: LinkIcon, desc: 'Connect Workday seamlessly with your existing enterprise systems and third-party apps.' },
  { step: '04', title: 'Workday Optimization', icon: Zap, desc: 'Enhance your existing Workday environment to leverage new features and improve adoption.' },
  { step: '05', title: 'Workday Support', icon: HeartHandshake, desc: 'Dedicated troubleshooting, configuration updates, and continuous post-go-live assistance.' },
  { step: '06', title: 'Managed Services', icon: Shield, desc: 'Comprehensive, proactive management of your Workday ecosystem for long-term success.' }
];

const OurServices = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.approach-header > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Timeline steps stagger animation
      gsap.fromTo('.timeline-step',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#0a1128] text-white overflow-hidden relative">
      {/* Premium Dark Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#005cb9]/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#005cb9]/10 blur-[150px]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSIwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iNDAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="approach-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Workday Services</h2>
          <p className="text-lg text-slate-400">DimensionCG provides comprehensive support throughout your entire Workday journey.</p>
        </div>

        <div className="timeline-container relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={i}
                  className="timeline-step bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#005cb9] group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-black text-slate-700/50">{srv.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{srv.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{srv.desc}</p>
                  
                  <Link to="/contact" className="text-[#4fa0ff] font-semibold hover:text-blue-300 transition-colors flex items-center text-sm uppercase tracking-wider group-hover:text-blue-200">
                    Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
