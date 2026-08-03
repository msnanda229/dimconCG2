import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Settings, Zap, Link as LinkIcon, BookOpen, Shield, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { step: '01', title: 'NetSuite Consulting', icon: Users, desc: 'Strategic advisory to align NetSuite capabilities with your unique business objectives.' },
  { step: '02', title: 'NetSuite Implementation', icon: Settings, desc: 'Proven methodology for seamless deployment, minimizing risk and downtime.' },
  { step: '03', title: 'NetSuite Optimization', icon: Zap, desc: 'Enhance existing environments with automation, custom scripts, and workflow improvements.' },
  { step: '04', title: 'NetSuite Integration', icon: LinkIcon, desc: 'Connect NetSuite with third-party apps (Salesforce, Shopify, EDI) via robust APIs.' },
  { step: '05', title: 'Training & Education', icon: BookOpen, desc: 'Empower your team with tailored training programs for high user adoption.' },
  { step: '06', title: 'Licensing & Advisory', icon: Shield, desc: 'Navigate licensing complexity and ensure you purchase exactly what you need.' }
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

      // Line fill animation (Horizontal on lg, Vertical on smaller)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        }
      });

      // We animate a CSS variable or just the width/height of the active line
      // For simplicity in responsive design, we'll animate the line width on large screens and height on small screens
      // Let's use a class to handle the line filling in CSS, but GSAP can drive it
      gsap.to('.timeline-line-active', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        }
      });


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
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0e4d9e]/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0e4d9e]/10 blur-[150px]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSIwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iNDAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="approach-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End NetSuite Services</h2>
          <p className="text-lg text-slate-400">From strategic planning to post-go-live support, our certified experts ensure your success at every stage.</p>
        </div>

        <div className="timeline-container relative">
          {/* We will just use a grid for this rather than a horizontal timeline to fit 6 items cleanly, 
              mimicking the grid layout from the original NetSuitePage but with GSAP animations and exact Oracle style cards. */}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={i}
                  className="timeline-step bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#4fa0ff]" />
                    </div>
                    <span className="text-4xl font-black text-slate-700/50">{srv.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{srv.desc}</p>
                  
                  <a href="/contact" className="text-[#4fa0ff] font-semibold hover:text-blue-300 transition-colors flex items-center text-sm uppercase tracking-wider group">
                    Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
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
