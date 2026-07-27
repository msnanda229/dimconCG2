import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Settings, Rocket, BarChart, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "MIGRATION ACCELERATOR",
    icon: <Target size={24} />,
    title: "AECCAR",
    description:
      "Accelerate Oracle Cloud migrations with a proprietary accelerator that simplifies planning, automates migration activities, and improves accuracy from assessment to deployment.",
    details: [
      "Migration Readiness Assessment",
      "Automated Data Migration",
      "Built-in Data Validation",
      "Deployment & Go-Live Support "
    ]
  },
  {
    id: "AI PLATFORM",
    icon: <Rocket size={24} />,
    title: "Synthera AI",
    description:
      "An AI-powered lead management platform that helps sales teams qualify leads, automate follow-ups, and gain actionable insights to improve conversion and sales performance.",
    details: [
      "AI Lead Qualification",
      "Intelligent Sales Insights",
      "Automated Follow-Ups",
      "Performance Analytics"
    ]
  },
  {
    id: "HR PLATFORM",
    icon: <Settings size={24} />,
    title: "RightlyHR ",
    description:
      "A modern HR platform designed to simplify employee lifecycle management, automate HR operations, and deliver a seamless experience for HR teams and employees.",
    details: [
      "Employee Lifecycle Management",
      "Leave & Attendance",
      "Performance & Approvals",
      "HR Analytics & Reports"
    ]
  },

];

const metrics = [
  { value: 3, suffix: "+", label: 'Enterprise Products' },
  { value: 30, suffix: "%", label: 'Lower Implementation Effort ' },
  { value: 99, suffix: "%", label: 'Customer Satisfaction' },
  { value: 100, suffix: "+", label: 'Successful Cloud Transformations' }
];

const AeccarSection = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const rightColRef = useRef(null);
  const detailsRef = useRef(null);
  const metricsRef = useRef([]);
  
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);
  const [navbarOffset, setNavbarOffset] = useState(0);

  useLayoutEffect(() => {
    const navbar = document.querySelector('[data-site-navbar]');
    if (!navbar) return undefined;

    let frameId = null;
    const measureNavbar = () => {
      const nextOffset = Math.ceil(navbar.getBoundingClientRect().bottom);
      setNavbarOffset((currentOffset) => currentOffset === nextOffset ? currentOffset : nextOffset);
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const settledOffset = Math.ceil(navbar.getBoundingClientRect().bottom);
        setNavbarOffset((currentOffset) => currentOffset === settledOffset ? currentOffset : settledOffset);
      });
    };

    const resizeObserver = new ResizeObserver(measureNavbar);
    resizeObserver.observe(navbar);
    window.addEventListener('resize', measureNavbar, { passive: true });
    window.addEventListener('scroll', measureNavbar, { passive: true });
    measureNavbar();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', measureNavbar);
      window.removeEventListener('scroll', measureNavbar);
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Pin the right column and scrub through steps based on scroll
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `top ${navbarOffset}px`,
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.max(0, Math.min(
              Math.floor(progress * steps.length),
              steps.length - 1
            ));
            if (newIndex !== activeStepRef.current) {
              const scrollingDown = newIndex > activeStepRef.current;
              activeStepRef.current = newIndex;
              
              if (detailsRef.current) {
                gsap.killTweensOf(".step-anim-item");
                
                gsap.to(".step-anim-item", {
                  opacity: 0,
                  y: scrollingDown ? -8 : 8,
                  duration: 0.15,
                  ease: "power2.inOut",
                  onComplete: () => {
                    setActiveStep(activeStepRef.current);
                    
                    setTimeout(() => {
                      const yOffset = scrollingDown ? 16 : -16;
                      gsap.fromTo(".step-anim-item", 
                        { opacity: 0, y: yOffset },
                        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.04 }
                      );
                    }, 10);
                  }
                });
              }
            }
          }
        });

        // Parallax Effect for Right Column
        gsap.to(rightColRef.current, {
          y: 15,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Entry animations for left column in exact sequence
        const entryElements = [
          ".aeccar-label",
          ".aeccar-heading",
          ".aeccar-desc",
          ".aeccar-divider",
          ".aeccar-metrics",
          ".aeccar-cta"
        ];
        gsap.fromTo(entryElements, 
          { opacity: 0, y: 20 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.7, 
            stagger: 0.1, 
            ease: "power2.out", 
            scrollTrigger: { 
              trigger: triggerRef.current, 
              start: "top 80%",
              once: true
            } 
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Entry animations for left column without translation
        const entryElements = [
          ".aeccar-label",
          ".aeccar-heading",
          ".aeccar-desc",
          ".aeccar-divider",
          ".aeccar-metrics",
          ".aeccar-cta"
        ];
        gsap.fromTo(entryElements, 
          { opacity: 0 }, 
          { 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.1, 
            scrollTrigger: { 
              trigger: triggerRef.current, 
              start: "top 80%",
              once: true
            } 
          }
        );
      });

      // Number count up animation (1.2s standardized)
      metricsRef.current.forEach((el, index) => {
        if (!el) return;
        const target = { val: 0 };
        const endVal = metrics[index].value;
        
        gsap.to(target, {
          val: endVal,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 70%",
            once: true
          },
          onUpdate: function() {
            if(el) {
              el.innerText = Math.floor(target.val) + metrics[index].suffix;
            }
          }
        });
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, [navbarOffset]);

  return (
    <div ref={containerRef} className="bg-white relative h-auto lg:h-[250vh]">
      <SectionWrapper 
        className="lg:sticky lg:top-0 h-auto lg:min-h-0 overflow-hidden bg-white text-[#0F172A] font-sans" 
        style={{
          top: navbarOffset ? `${navbarOffset}px` : undefined,
          minHeight: navbarOffset ? `calc(100vh - ${navbarOffset}px)` : undefined
        }}
        ref={triggerRef}
        spacing="none"
      >
        
        {/* Background elements */}

        {/* Soft radial blue glow */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[150vw] h-[150vw] lg:w-[800px] lg:h-[800px] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.04)_0%,_transparent_70%)] pointer-events-none"></div>
        {/* Minimal noise */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
          }}
        ></div>

        <SectionContent className="relative z-10 h-full flex flex-col justify-center py-4 lg:py-0">
          <div className="flex flex-col lg:flex-row w-full items-center gap-6 lg:gap-20">
            
            {/* Left Column (Static Information) */}
            <div className="w-full lg:w-[45%] flex flex-col items-start pt-2 lg:pt-0">
              <div className="aeccar-label inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] font-semibold text-[10px] lg:text-xs tracking-[0.1em] uppercase mb-4 lg:mb-8">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>Products & Accelerators</span>
              </div>
              
              <h2 className="aeccar-heading font-heading font-black text-[#0F172A] mb-3 lg:mb-4 leading-[1.05] tracking-[-0.03em] max-w-[560px]" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
                Products & Accelerators
              </h2>
              
              <p className="aeccar-desc text-sm md:text-base lg:text-lg text-[#64748B] leading-relaxed mb-4 lg:mb-8 max-w-[560px]">
                Go beyond consulting with enterprise products and accelerators built to solve real business challenges. From AI-powered platforms to cloud migration accelerators, our solutions help businesses innovate faster and maximize technology investments.
              </p>
              
              {/* Metrics */}
              <div className="aeccar-metrics grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-x-3 lg:gap-x-10 gap-y-4 lg:gap-y-8 w-full max-w-full lg:max-w-[560px] mb-4 lg:mb-10">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-1 lg:gap-1.5">
                    <div 
                      ref={el => metricsRef.current[idx] = el}
                      className="text-2xl md:text-3xl lg:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-none"
                    >
                      0{metric.suffix}
                    </div>
                    <div className="text-[10px] md:text-xs lg:text-sm font-medium text-[#64748B] leading-tight">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="aeccar-divider hidden lg:block w-full h-[1px] bg-[#E2E8F0] mb-10"></div>

              <div className="aeccar-cta flex flex-wrap items-center gap-6 mb-2 lg:mb-10">
                <Link to="/services/aeccar">
                  <Button className="bg-[#e28b2b] hover:bg-[#bf6206] text-white shadow-[0_8px_20px_rgba(226,139,43,0.28)] h-11 lg:h-12 px-6 lg:px-8 rounded-full font-medium text-sm lg:text-base transition-all duration-300 hover:-translate-y-[2px] border-none">
  <span className="flex items-center gap-2">
    Request Demo <ArrowRight size={16} />
  </span>
</Button>
                </Link>
              </div>
            </div>

            {/* Right Column (Scroll-Driven Interactive Visualization) */}
            <div className="w-full lg:w-[55%] flex-1 lg:flex-none" ref={rightColRef}>
              <div className="bg-white rounded-[24px] lg:rounded-[32px] p-5 md:p-8 lg:p-16 shadow-[0_10px_40px_rgba(15,23,42,0.06)] lg:shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-[#E2E8F0] relative overflow-hidden h-[360px] md:h-[400px] lg:h-auto">
                
                <div className="flex flex-col md:flex-row gap-6 lg:gap-10 relative z-10 h-full lg:h-[500px]">
                  
                  {/* Timeline Tracker (SVG Path) */}
                  <div className="w-[40px] h-full relative hidden md:flex flex-col items-center justify-between py-12">
                    {/* Background Track */}
                    <div className="absolute top-12 bottom-12 w-[2px] bg-[#E2E8F0] rounded-full"></div>
                    
                    {/* Animated Fill Track */}
                    <div 
                      className="absolute top-12 w-[2px] bg-[#2563EB] rounded-full transition-all duration-500 ease-out"
                      style={{ height: `calc(${((activeStep) / Math.max(1, steps.length - 1)) * 100}% - 96px)` }}
                    ></div>

                    {/* Step Nodes */}
                    {steps.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full transition-all duration-500 z-10 relative ${
                          i <= activeStep 
                            ? 'bg-[#2563EB] scale-150 shadow-[0_0_0_4px_rgba(37,99,235,0.15)]' 
                            : 'bg-[#CBD5E1]'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Step Details Pane */}
                  <div className="flex-1 flex flex-col justify-center relative pl-0 md:pl-2 h-full">
                    <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] bg-blue-50/50 blur-[60px] lg:blur-[80px] rounded-full pointer-events-none transition-all duration-500"></div>
                    
                    <div ref={detailsRef} className="relative z-10 flex flex-col h-full justify-center">
                      <div className="step-anim-item flex items-center gap-2 lg:gap-3 mb-3 lg:mb-5">
                        <div className="px-3 py-1 lg:py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs lg:text-sm font-bold tracking-[0.1em] uppercase border border-blue-100 flex items-center gap-2">
                          <span className="opacity-80"></span> {steps[activeStep].id}
                        </div>
                      </div>
                      
                      <h3 className="step-anim-item text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#0F172A] mb-2 lg:mb-3 leading-tight tracking-[-0.01em]">
                        {steps[activeStep].title}
                      </h3>
                      
                      <p className="step-anim-item text-[#64748B] text-sm lg:text-base leading-relaxed mb-4 lg:mb-8 font-normal max-w-[95%]">
                        {steps[activeStep].description}
                      </p>
                      
                      <div className="flex flex-col gap-2 lg:gap-3 overflow-y-auto pr-2" style={{ maxHeight: 'calc(100% - 140px)' }}>
                        {steps[activeStep].details.map((detail, dIdx) => (
                          <div 
                            key={dIdx} 
                            className="step-anim-item group flex items-center gap-3 lg:gap-4 bg-white p-3 lg:p-4 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition-all duration-300 relative overflow-hidden shrink-0"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-all duration-300 shrink-0">
                              <ChevronRight size={14} className="text-slate-400 group-hover:text-[#2563EB] transition-colors duration-300" />
                            </div>
                            <span className="text-sm font-semibold text-[#0F172A] truncate">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators for Mobile context */}
                    <div className="absolute bottom-0 left-0 flex md:hidden gap-1 w-full justify-between mt-4">
                      {steps.map((_, i) => (
                        <div 
                          key={i} 
                          className={`flex-1 h-[2px] rounded-full transition-colors duration-300 ${i <= activeStep ? 'bg-[#2563EB]' : 'bg-[#E2E8F0]'}`}
                        ></div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default AeccarSection;
