import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, CheckCircle2, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo('.cta-animate',
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.08, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true
            }
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.fromTo('.cta-animate',
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper className="bg-[#F8FAFC] overflow-hidden" ref={sectionRef}>
      
      <SectionContent>
        
        <div className="bg-[#050505] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(21,101,192,0.15)_0%,_transparent_70%)] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(200,162,74,0.08)_0%,_transparent_70%)] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

          <div className="flex flex-col lg:flex-row relative z-10">
            
            {/* Left Content (Value Prop) */}
            <div className="w-full lg:w-[50%] p-6 min-[480px]:p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              
              <div className="cta-animate inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-semibold text-xs tracking-widest uppercase mb-6 md:mb-8 w-fit">
                <Globe2 size={14} className="text-primary" />
                <span>START YOUR TRANSFORMATION</span>
              </div>
              
              <h2 className="cta-animate font-heading font-black text-[clamp(32px,5vw,56px)] text-white leading-[1.1] tracking-[-0.02em] mb-4">
                Let's Build Your Competitive Advantage
              </h2>
              
              <p className="cta-animate text-base md:text-lg lg:text-xl text-white/60 leading-relaxed font-light mb-8 md:mb-10">
                Partner with Dimension Consulting to simplify complex ERP, cloud, and AI initiatives. From strategy and implementation to long-term support, we're here to help you move forward with confidence.
              </p>
              
              <div className="cta-animate grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 md:mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white/90">Oracle & Workday</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white/90">Zero-Downtime Data</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Zap size={16} className="text-purple-500" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white/90">Predictive AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} className="text-gold" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white/90">Enterprise Security</span>
                </div>
              </div>

              <div className="cta-animate mt-auto pt-6 md:pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm mb-2 md:mb-3">Looking to join our engineering team?</p>
                <Link to="/company/careers" className="inline-flex items-center font-medium text-white hover:text-primary transition-colors text-sm md:text-base group">
                  Explore Careers <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Content (Calendly-style Form) */}
            <div className="w-full lg:w-[50%] p-6 min-[480px]:p-10 md:p-16 lg:p-20 bg-white/[0.02] flex flex-col justify-center">
              
              <div className="cta-animate bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl relative">
                
                {/* Form Header */}
                <div className="flex items-start justify-between mb-6 md:mb-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Schedule a Discovery Call</h3>
                    <p className="text-sm md:text-base text-white/50">Speak directly with a Principal Architect.</p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-primary">
                    <Calendar size={18} className="md:w-5 md:h-5" />
                  </div>
                </div>

                <form className="flex flex-col gap-4 md:gap-5" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs md:text-sm font-semibold text-white/50 uppercase tracking-widest">First Name</label>
                      <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="John" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs md:text-sm font-semibold text-white/50 uppercase tracking-widest">Last Name</label>
                      <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs md:text-sm font-semibold text-white/50 uppercase tracking-widest">Work Email</label>
                    <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="john@enterprise.com" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs md:text-sm font-semibold text-white/50 uppercase tracking-widest">Company</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Global Corp Inc." />
                  </div>

                  <Button className="w-full h-12 md:h-14 bg-[#e28b2b] text-white hover:bg-[#bf6206] hover:shadow-[0_10px_30px_rgba(226,139,43,0.3)] hover:-translate-y-[2px] transition-all duration-200 rounded-xl font-semibold text-base mt-2 md:mt-4">
  Continue to Calendar
</Button>
                  
                  <div className="text-center mt-2 md:mt-4">
                    <span className="text-xs text-white/40">By proceeding, you agree to our Privacy Policy.</span>
                  </div>

                </form>

              </div>

            </div>

          </div>
        </div>

      </SectionContent>
    </SectionWrapper>
  );
};

export default CtaSection;
