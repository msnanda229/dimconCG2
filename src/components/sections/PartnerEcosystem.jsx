import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight as ArrowRight, FaCheckCircle as CheckCircle2 } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: "Oracle",
    slug: "oracle",
    tag: "Platinum Cloud Partner",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    logo: <img src="/ai_logos/oracle.png" alt="Oracle Logo" loading="lazy" decoding="async" className="h-[50px] w-auto object-contain" />,
    desc: "Dimension Consulting delivers robust Oracle Cloud ERP implementations, database migrations, and predictive AI configurations for massive-scale enterprise clients.",
    capabilities: [
      "Cloud ERP Modernization",
      "Financial Consolidation",
      "OCI Infrastructure Architecture",
      "Database Administration"
    ],
    caseStudy: "Led 40+ country global ERP consolidation for a Fortune 500 manufacturing conglomerate, delivering a 40% reduction in financial close times.",
    techStack: ["Oracle Financials", "OCI", "Oracle Analytics Cloud", "Autonomous Database"]
  },
  {
    name: "Oracle NetSuite",
    slug: "netsuite",
    tag: "Alliance Partner",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    logo: <img src="/ai_logos/oracle_net_suite.svg" alt="NetSuite Logo" loading="lazy" decoding="async" className="h-[30px] w-auto object-contain" />,
    desc: "We build unified NetSuite ERP systems that unlock immediate financial visibility, automate inventory pipelines, and accelerate multi-subsidiary billing.",
    capabilities: [
      "SuiteSuccess Implementation",
      "Custom SuiteScripting",
      "SuiteBilling Configuration",
      "Inventory & Warehouse Optimization"
    ],
    caseStudy: "Re-engineered multi-entity billing pipeline for a fast-scaling SaaS provider, automating 95% of subscription contract renewals.",
    techStack: ["NetSuite ERP", "SuiteScript 2.0", "SuiteTalk API", "SuiteAnalytics"]
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    tag: "Gold Implementation Partner",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    logo: <img src="/ai_logos/salesforce.png" alt="Salesforce Logo" loading="lazy" decoding="async" className="h-[50px] w-auto object-contain" />,
    desc: "Unify service, sales, and commerce datasets into a single customer profile, leveraging Einstein AI to drive predictive customer engagement.",
    capabilities: [
      "Multi-Cloud Integration",
      "Commerce Cloud Deployments",
      "Einstein Analytics Setup",
      "Apex & Lightning Development"
    ],
    caseStudy: "Integrated Salesforce CRM with NetSuite ERP for a national retail chain, increasing conversion rates by 35% through custom user profiles.",
    techStack: ["Salesforce Sales Cloud", "Commerce Cloud", "Einstein AI", "Apex & Lightning"]
  },
  {
    name: "Workday",
    slug: "workday",
    tag: "Strategic Service Partner",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    logo: <img src="/ai_logos/workday.png" alt="Workday Logo" loading="lazy" decoding="async" className="h-[50px] w-auto object-contain" />,
    desc: "Modernize HR, payroll, and financial operations with unified Workday environments that elevate employee experience and automate regulatory compliance.",
    capabilities: [
      "HCM Modernization",
      "Financial Management Setup",
      "Payroll Integrations",
      "Adaptive Planning"
    ],
    caseStudy: "Unified HR operations across 12 legacy subsidiaries for a global logistics group, streamlining payroll processing for 8,500+ staff.",
    techStack: ["Workday HCM", "Financial Management", "Workday Prism Analytics"]
  },
  {
    name: "Celigo",
    slug: "celigo",
    tag: "Certified Integration Partner",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    logo: <img src="/ai_logos/celigo.png" alt="Celigo Logo" loading="lazy" decoding="async" className="h-[50px] w-auto object-contain" />,
    desc: "Automate complex business integrations between front-office and back-office platforms using Celigo's low-code iPaaS framework.",
    capabilities: [
      "Custom API Integration",
      "EDI Partner Onboarding",
      "Real-Time Sync Pipelines",
      "Error-Monitoring Automation"
    ],
    caseStudy: "Built real-time sync pipelines connecting NetSuite, Salesforce, and Shopify, reducing order processing latency from 6 hours to 5 minutes.",
    techStack: ["Celigo Integrator.io", "REST/SOAP Webhooks", "EDI Integration"]
  },
  {
    name: "Opkey",
    slug: "opkey",
    tag: "Automated Testing Partner",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    logo: <img src="/ai_logos/opkey.png" alt="Opkey Logo" loading="lazy" decoding="async" className="h-[50px] w-auto object-contain" />,
    desc: "Accelerate release testing cycles and ERP updates using Opkey's zero-code continuous test automation and AI impact analysis engines.",
    capabilities: [
      "Continuous Test Automation",
      "Impact Analysis Setup",
      "Regression Suite Design",
      "AI Test Generation"
    ],
    caseStudy: "Reduced regression testing cycles for a global Oracle upgrade by 85%, ensuring zero disruption to daily supply chain operations.",
    techStack: ["Opkey Test Suite", "AI Impact Analyzer", "Zero-Code Testing"]
  },
  {
    name: "Rootstock",
    slug: "rootstock",
    tag: "Cloud ERP Partner",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",
    logo: <img src="/ai_logos/RTS_Logo_Colored.svg" alt="Rootstock Logo" loading="lazy" decoding="async" className="h-[40px] w-auto object-contain" />,
    desc: "Dimension Consulting partners with Rootstock to deliver modern, flexible manufacturing ERP solutions natively built on the Salesforce platform.",
    capabilities: [
      "Manufacturing ERP",
      "Supply Chain Management",
      "Salesforce Integration",
      "Inventory Control"
    ],
    caseStudy: "Streamlined global supply chain and production planning for a discrete manufacturer, reducing inventory holding costs by 25%.",
    techStack: ["Rootstock ERP", "Salesforce Platform", "Manufacturing Cloud"]
  }
];

const PartnerEcosystem = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  // Transitions
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const descTextRef = useRef(null);
  const capsRef = useRef(null);
  const csRef = useRef(null);
  const techRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const isTransitioningRef = useRef(false);

  // Entrance
  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      const elements = [
        titleRef.current,
        descRef.current,
        ".partner-showcase-panel",
        ".partner-rail-tab"
      ];

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(elements,
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
        gsap.fromTo(elements,
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

  // Selection transition
  useEffect(() => {
    if (activeIndex === displayedIndex) return;
    
    isTransitioningRef.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioningRef.current = false;
      }
    });

    tl.to([imageRef.current, badgeRef.current, descTextRef.current, capsRef.current, csRef.current, techRef.current], {
      opacity: 0,
      y: -10,
      duration: 0.25,
      stagger: 0.02,
      ease: "power3.in",
      onComplete: () => {
        setDisplayedIndex(activeIndex);
      }
    });

    tl.fromTo(imageRef.current, 
      { opacity: 0, scale: 1.05, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      { opacity: 1, scale: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.55, ease: "power3.out" }
    );
    tl.fromTo(badgeRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, "-=0.35");
    tl.fromTo(descTextRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, "-=0.3");
    tl.fromTo(capsRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, "-=0.25");
    tl.fromTo(csRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, "-=0.2");
    tl.fromTo(techRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out" }, "-=0.15");

  }, [activeIndex, displayedIndex]);

  const handleTabSelect = (index) => {
    if (index === activeIndex || isTransitioningRef.current) return;
    setActiveIndex(index);
  };

  const displayed = partners[displayedIndex];
  const badgeBelowLogo = new Set(['oracle', 'netsuite', 'salesforce', 'workday']);
  const isBadgeStacked = badgeBelowLogo.has(displayed.slug);

  return (
    <section id="partner-ecosystem" ref={sectionRef} className="relative py-24 bg-white border-t border-[#E8EDF5] overflow-hidden font-sans">
      
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] lg:w-[900px] lg:h-[900px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(37,99,235,0.03) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-16">
          <span className="inline-block text-blue-600 bg-blue-50/80 border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-[0.15em] text-xs md:text-sm font-bold mb-4 shadow-sm">
            Strategic Alliances
          </span>
          <h2 ref={titleRef} className="font-extrabold text-[clamp(32px,5vw,48px)] text-slate-900 leading-[1.1] tracking-[-0.04em] mb-4">
            Strategic Partner Ecosystem
          </h2>
          <p ref={descRef} className="text-base lg:text-lg text-slate-500 max-w-[760px] leading-[1.625] font-light">
            Dimension Consulting partners with leading enterprise technology providers to deliver robust, scalable ERP, CRM, and cloud architectures.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Panel Showcase (65% width / col-span-8) */}
          <div className="flex flex-col items-stretch lg:col-span-8">
            <div className="partner-showcase-panel flex-1 bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
              
              <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
                
                {/* Showcase Details */}
                <div ref={contentRef} className="flex-1 flex flex-col items-start text-left">
                  
                  {/* Partner Badge */}
                  <div
                    ref={badgeRef}
                    className={`mb-6 flex ${isBadgeStacked ? 'flex-col items-start gap-4' : 'flex-wrap items-center gap-4'}`}
                  >
                    <div className="h-12 px-4 py-2 flex items-center justify-center pointer-events-none bg-white rounded-lg border border-gray-100 shadow-sm">
                      {displayed.logo}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                      {displayed.tag}
                    </span>
                  </div>

                  {/* Description */}
                  <p ref={descTextRef} className="text-base text-slate-600 leading-[1.625] font-light mb-6">
                    {displayed.desc}
                  </p>

                  {/* Core Capabilities */}
                  <div ref={capsRef} className="w-full mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Core Capabilities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {displayed.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Showcase Side Image */}
                <div className="w-full h-56 md:w-[260px] md:h-60 shrink-0 rounded-2xl overflow-hidden relative group">
                  <img ref={imageRef} src={displayed.image} alt={displayed.name} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                </div>

              </div>

              {/* Bottom Details Row */}
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-6">
                
                {/* Case Study Block */}
                <div ref={csRef} className="bg-slate-50 p-5 rounded-2xl text-left border border-slate-100">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Proven Success Case</span>
                  <p className="text-sm text-slate-700 font-semibold leading-[1.625]">
                    {displayed.caseStudy}
                  </p>
                </div>

                {/* Tech Pills */}
                <div ref={techRef} className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Technologies</span>
                  {displayed.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            {/* Mobile dots pagination */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {partners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabSelect(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${activeIndex === idx ? 'bg-blue-600 w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Rail Tabs (35% width / col-span-4) */}
          <div className="lg:col-span-4">
            
            <div className="flex gap-4 pb-4 overflow-x-auto snap-x snap-mandatory h-full lg:flex-col lg:overflow-x-visible lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {partners.map((p, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleTabSelect(idx)}
                    className={`partner-rail-tab group snap-center shrink-0 min-w-[220px] sm:min-w-[260px] lg:w-full p-4 lg:p-5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out ${
                      isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 shadow-[0_12px_30px_rgba(37,99,235,0.2)]' 
                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:scale-[1.03]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Name / Logo */}
                      <span className={`text-sm md:text-base font-bold transition-all duration-300 ease-in-out ${isActive ? 'text-white' : 'text-slate-800'}`}>
                        {p.name}
                      </span>
                    </div>

                    {/* Indicator Icon */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
                      isActive
                      ? 'bg-white/15 text-white scale-100'
                      : 'bg-transparent text-slate-400 scale-90 group-hover:text-slate-600'
                    }`}>
                      <ArrowRight size={14} className={`transition-transform duration-300 ease-in-out ${isActive ? 'translate-x-0' : '-translate-x-1 group-hover:translate-x-0'}`} />
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PartnerEcosystem;
