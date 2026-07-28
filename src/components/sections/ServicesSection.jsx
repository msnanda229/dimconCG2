import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { Settings, Database, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';
import { Cloud } from "lucide-react";
import { Users } from "lucide-react";

const servicesData = [{
  id: "ai-erp",
  tab: "AI ERP",
  category: "Innovation",
  icon: <Sparkles size={24} strokeWidth={2} />,
  title: "AI-Powered ERP",
  description: "Bring intelligence into your everyday operations. We help you integrate AI with your ERP to automate repetitive tasks, uncover actionable insights, and enable faster, data-driven decisions across your business.",
  ctaText: "View AI ERP Case Study",
  capabilities: [
    "Enterprise AI Integration",
    "Process Automation",
    "Predictive Analytics",
    "Workflow Optimization",
    "Legacy System Modernization",
    "Data-Driven Insights"
  ],
  technologies: [
    { name: "Oracle", logo: "/ai_logos/oracle.png" }
  ],
  badge: "Advanced Tech"
}, {
  id: "cloud-transformation",
  tab: "Cloud",
  category: "Cloud Services",
  icon: <Cloud size={24} strokeWidth={2} />,
  title: "Cloud Applications",
  description:
    "Move your business to the cloud with confidence. We help organizations implement, integrate, and optimize enterprise cloud applications that improve agility, simplify operations, and support long-term growth.",
  ctaText: "View Cloud Case Study",
  capabilities: [
    "Cloud Migration Strategy",
    "SaaS Implementation",
    "Scalable Architecture",
    "Platform Integration",
    "Performance Optimization",
    "Cloud Security & Compliance"
  ],
  technologies: [
    { name: "Oracle Cloud", logo: "/ai_logos/oracle.png" },
    { name: "netsuite", logo: "/ai_logos/oracle_net_suite.svg" },
  ],
  badge: "Cloud"
}, {
  id: "implementations",
  tab: "ERP Implementation",
  category: "Implementation",
  icon: <Settings size={24} strokeWidth={2} />,
  title: "Enterprise ERP Implementation",
  description: "From planning to go-live and beyond, we implement Oracle, NetSuite, Salesforce, and Workday solutions with a structured approach that minimizes risk, accelerates adoption, and delivers measurable business outcomes.",
  ctaText: "View ERP Case Study",
  capabilities: [
    "Full-Cycle Implementation",
    "System Configuration",
    "Change Management",
    "User Training & Adoption",
    "Custom Development",
    "Post Go-Live Support"
  ],
  technologies: [
    { name: "Oracle", logo: "/ai_logos/oracle.png" },
    { name: "NetSuite", logo: "/ai_logos/oracle_net_suite.svg" },
    { name: "Salesforce", logo: "/ai_logos/salesforce.png" },
    { name: "Workday", logo: "/ai_logos/workday.png" }
  ],
  badge: "Core Service"
}, {
  id: "data-migration",
  tab: "Data Migration",
  category: "Data Strategy",
  icon: <Database size={24} strokeWidth={2} />,
  title: "Intelligent Data Migration",
  description: "Move your data with confidence. We help you migrate enterprise data securely, preserve its accuracy, and ensure every record reaches its destination with minimal disruption to your business.",
  ctaText: "View Migration Case Study",
  capabilities: [
    "Data Cleansing & Mapping",
    "Secure Data Transfer",
    "Zero-Downtime Migration",
    "Data Validation & Testing",
    "Legacy Data Archiving",
    "Continuous Sync Solutions"
  ],
  technologies: [
    { name: "Celigo", logo: "/ai_logos/celigo.png" }
  ],
  badge: "Data Services"
}, {
  id: "managed-services",
  tab: "Managed Services",
  category: "Operations",
  icon: <Shield size={24} strokeWidth={2} />,
  title: "Application Managed Services",
  description: "Keep your enterprise applications running at their best. From proactive monitoring and performance optimization to issue resolution and platform enhancements, we ensure your systems remain secure, reliable, and ready for business.",
  ctaText: "View Managed Services Case Study",
  capabilities: [
    "24/7 Proactive Monitoring",
    "Performance Tuning",
    "Issue Resolution SLA",
    "Security Patching",
    "Release Management",
    "Continuous Enhancements"
  ],
  technologies: [
    { name: "Opkey", logo: "/ai_logos/opkey.png" }
  ],
  badge: "Support Services"
}, {
  id: "crm-solutions",
  tab: "CRM",
  category: "Customer Experience",
  icon: <Users size={24} strokeWidth={2} />,
  title: "CRM Implementation",
  description:
    "Build stronger customer relationships with CRM solutions designed to unify sales, marketing, and service. Create connected customer experiences, streamline workflows, and empower teams with actionable insights.",
  ctaText: "View CRM Case Study",
  capabilities: [
    "Customer Journey Mapping",
    "Sales Process Automation",
    "Marketing Integration",
    "Omnichannel Service",
    "Custom CRM Dashboards",
    "User Adoption Strategies"
  ],
  technologies: [
    { name: "Salesforce", logo: "/ai_logos/salesforce.png" },
  ],
  badge: "CRM"
}
];

const ServicesSection = () => {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const animatedMetrics = useRef(new Set());
  const previousTab = useRef(0);
  const targetTabRef = useRef(0);
  const panelRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const pendingTabRef = useRef(null);
  const handleTabChangeRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Scroll storytelling pin only on desktop
     

      mm.add("(min-width: 768px)", () => {

        // 2. Section Entrance Animation
        const elementSelectors = [
          ".anim-heading",
          ".anim-desc",
          ".anim-left-nav",
          ".anim-right-main",
          ".anim-buttons"
        ].join(",");

        const elements = gsap.utils.toArray(elementSelectors, containerRef.current);

        if (elements.length > 0) {
          gsap.fromTo(elements,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                once: true
              }
            }
          );
        }
      });

      mm.add("(min-width: 768px) and (prefers-reduced-motion: reduce)", () => {
        const elementSelectors = [
          ".anim-heading",
          ".anim-desc",
          ".anim-left-nav",
          ".anim-right-main",
          ".anim-buttons"
        ].join(",");

        const elements = gsap.utils.toArray(elementSelectors, containerRef.current);

        if (elements.length > 0) {
          gsap.fromTo(elements,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                once: true
              }
            }
          );
        }
      });

    }, containerRef);

    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      pendingTabRef.current = null;
      isTransitioningRef.current = false;
      if (panel) {
        gsap.killTweensOf(panel.querySelectorAll('.tab-content-elements'));
      }
      ctx.revert();
    };
  }, []);


  const handleTabChange = (index, scrollingDown = true) => {
    if (index === targetTabRef.current) return;
    targetTabRef.current = index;
    pendingTabRef.current = null;
    isTransitioningRef.current = true;

    const contentElements = panelRef.current?.querySelectorAll('.tab-content-elements');
    if (!contentElements?.length) {
      setActiveTab(index);
      previousTab.current = index;
      animateMetrics(index);
      isTransitioningRef.current = false;
      return;
    }

    gsap.killTweensOf(contentElements);

    // Staggered out animation
    gsap.to(contentElements, {
      opacity: 0,
      y: (i) => (scrollingDown ? -10 - (i * 2) : 10 + (i * 2)),
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: () => {
        // Update state to render new content
        setActiveTab(targetTabRef.current);

        // Allow React to re-render, then animate in
        transitionTimeoutRef.current = window.setTimeout(() => {
          const isDown = targetTabRef.current > previousTab.current;
          previousTab.current = targetTabRef.current;
          const yOffset = isDown ? 20 : -20;
          const nextContentElements = panelRef.current?.querySelectorAll('.tab-content-elements');

          if (!nextContentElements?.length) return;
          const elementsArray = Array.from(nextContentElements).filter(el => el != null);
          if (elementsArray.length === 0) return;

          // Staggered in animation
          gsap.fromTo(elementsArray,
            { opacity: 0, y: yOffset },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out"
            }
          );

          isTransitioningRef.current = false;

          const pendingIndex = pendingTabRef.current;
          pendingTabRef.current = null;
          if (pendingIndex !== null && pendingIndex !== targetTabRef.current) {
            handleTabChange(pendingIndex, pendingIndex > targetTabRef.current);
          }
        }, 20);
      }
    });
  };

  handleTabChangeRef.current = handleTabChange;

  const activeData = servicesData[activeTab];

  return (
    <div
  ref={containerRef}
  className="bg-[#F8FAFC] w-full relative"
>
      <SectionWrapper
        id="services-section"
        className="relative py-16 lg:py-20"
        spacing="none"
      >
        <SectionContent className="max-w-7xl mx-auto grid grid-cols-1 min-[1000px]:grid-cols-12 gap-8 min-[1000px]:gap-12 xl:gap-16 items-start px-6 md:px-8 lg:px-10 2xl:px-0 py-12">

          {/* Left Column (33% on small laptop, ~41% on large desktop) */}
          <div className="w-full min-[1000px]:col-span-4 flex flex-col gap-8">

            <div className="mb-4 lg:mb-4 xl:mb-6 shrink-0 mt-0">
              <span className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-2 xl:mb-3 block">Expertise</span>
              <h2 className="anim-heading font-heading font-extrabold text-[clamp(28px,4vw,36px)] xl:text-[clamp(32px,5vw,48px)] text-[#0F172A] leading-[1.1] tracking-[-0.04em] mb-3 xl:mb-4">
                Enterprise Services
              </h2>
              <p className="anim-desc text-sm xl:text-lg text-slate-600 max-w-[450px] leading-relaxed font-light">
                Consulting, implementation, and managed services to modernize operations and simplify complex workflows.
              </p>
            </div>

            <div className="anim-left-nav flex relative w-full flex-col lg:pl-0 shrink-0 h-full">
              <div className="flex flex-col w-full relative z-20 gap-0 lg:gap-0.5 py-0.5 xl:py-1">
                {/* Timeline Background Line */}
                <div className="hidden lg:block absolute left-[19.5px] top-[24px] bottom-[24px] w-[1px] bg-slate-200 z-0"></div>

                {/* Animated Active Line */}
                <div
                  className="hidden lg:block absolute left-[19.5px] top-[24px] w-[1px] bg-blue-600 transition-all duration-500 ease-out z-10"
                  style={{ height: `calc(${activeTab / (servicesData.length - 1)} * (100% - 48px))` }}
                ></div>
                {servicesData.map((service, index) => {
                  const isActive = activeTab === index;
                  return (
                    <div key={service.id} className="relative flex items-center group cursor-pointer" onClick={() => handleTabChange(index)}>
                      {/* Timeline Node Column */}
                      <div className="hidden lg:flex shrink-0 w-10 items-center justify-center relative">
                        <div className={`rounded-full z-20 transition-all duration-300 ${isActive ? 'w-2 h-2 bg-blue-600' : 'w-1.5 h-1.5 bg-slate-300 group-hover:bg-blue-400 opacity-60'}`}></div>
                      </div>

                      {/* Card */}
                      <div className={`flex-1 flex items-center gap-2 px-2 py-0.5 lg:px-2 lg:py-0.5 xl:px-2 xl:py-0.5 rounded-lg transition-all duration-300 relative overflow-hidden
                        ${isActive ? 'bg-white shadow-sm border border-slate-100 scale-[1.01]' : 'bg-transparent hover:bg-white/50 border border-transparent'}
                      `}>
                        <div className={`w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-md flex items-center justify-center transition-all duration-300 shrink-0
                            ${isActive ? 'bg-blue-50 text-blue-600' : 'bg-transparent text-slate-400 group-hover:text-blue-500'}
                         `}>
                          <div className="transition-transform duration-300 group-hover:scale-110">
                            {React.cloneElement(service.icon, { size: 14 })}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-[8.5px] xl:text-[9px] font-bold tracking-widest uppercase mb-0 transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                            {service.category}
                          </span>
                          <span className={`text-[11px] lg:text-[12px] xl:text-[14px] font-semibold tracking-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                            {service.tab}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (67% on small laptop) */}
          <div
            className="w-full min-[1000px]:col-span-8 flex flex-col gap-8"
            ref={panelRef}
          >
            {/* Title & Description */}
            <div className="anim-right-main tab-content-elements shrink-0 mb-3 lg:mb-4 xl:mb-5">
              <h3 className="mt-0 text-2xl lg:text-[28px] xl:text-[36px] font-heading font-bold text-[#0F172A] leading-[1.2] tracking-[-0.03em] mb-2 xl:mb-3">
                {activeData.title}
              </h3>
              <p className="text-sm lg:text-[15px] xl:text-[17px] text-[#475569] leading-[1.6] xl:leading-[1.7] max-w-[650px] font-light mb-3 xl:mb-5">
                {activeData.description}
              </p>
              <p className="text-sm lg:text-[15px] xl:text-[17px] text-[#475569] leading-relaxed max-w-[650px] font-light line-clamp-2 lg:line-clamp-2 xl:line-clamp-none">
  Leverage our industry-leading frameworks to transform your enterprise operations. We specialize in developing tailored, scalable architectures that integrate seamlessly with your existing infrastructure, ensuring maximum efficiency, security, and long-term sustainable growth in rapidly evolving global markets.
</p>
<p className="text-sm lg:text-[15px] xl:text-[17px] text-[#475569] leading-relaxed max-w-[650px] font-light line-clamp-2 lg:line-clamp-2 xl:line-clamp-none">
  Leverage our industry-leading frameworks to transform your enterprise operations. We specialize in developing tailored, scalable architectures that integrate seamlessly with your existing infrastructure, ensuring maximum efficiency, security, and long-term sustainable growth in rapidly evolving global markets.
</p>
<p className="text-sm lg:text-[15px] xl:text-[17px] text-[#475569] leading-relaxed max-w-[650px] font-light line-clamp-2 lg:line-clamp-2 xl:line-clamp-none">
  Leverage our industry-leading frameworks to transform your enterprise operations. We specialize in developing tailored, scalable architectures that integrate seamlessly with your existing infrastructure, ensuring maximum efficiency, security, and long-term sustainable growth in rapidly evolving global markets.
</p>
            </div>



            {/* Bottom Section: Logos and Buttons */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] xl:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 xl:mb-4">Technology Partner</h4>

              {/* Partner Logos */}
              <div className="anim-right-main tab-content-elements flex flex-wrap items-center gap-3 mb-3">
                {activeData.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-center h-8 lg:h-10 xl:h-12 min-w-[80px] xl:min-w-[100px] px-2 xl:px-3 rounded-md border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-5 lg:max-h-6 xl:max-h-7 max-w-[80px] xl:max-w-[90px] object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="anim-buttons tab-content-elements flex flex-col sm:flex-row items-center gap-3 xl:gap-5 w-full sm:w-auto">
                <Link to={`/services/${activeData.id}`} className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 xl:px-8 h-10 xl:h-11 flex items-center justify-center gap-2 rounded-full font-semibold text-[13px] xl:text-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  Book Discovery Call <ArrowRight size={16} />
                </Link>
                <Link to="/case-studies" className="w-full sm:w-auto text-center bg-white border-2 border-slate-200 text-slate-800 px-6 lg:px-8 h-11 flex items-center justify-center rounded-full font-semibold text-[14px] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:border-slate-300">
                  {activeData.ctaText}
                </Link>
              </div>
            </div>
          </div>

        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default ServicesSection;
