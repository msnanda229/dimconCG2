import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  description2: "By leveraging machine learning and predictive analytics, our AI solutions transform static data into strategic assets. Your systems will actively forecast trends, optimize resources, and drive continuous operational excellence.",
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
  description2: "Our comprehensive cloud transformation methodology ensures a seamless transition with zero disruption to your daily operations. We architect resilient, scalable environments that empower your workforce to collaborate globally, scale on demand, and rapidly deploy new innovations in a highly secure ecosystem.",
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
  description2: "We employ a rigorous, milestone-driven deployment framework designed to align complex software capabilities with your unique business processes. Through comprehensive stakeholder engagement and meticulous testing, we guarantee an implementation that drives immediate user adoption and accelerated return on investment.",
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
  description2: "Our data engineering experts utilize advanced mapping and cleansing protocols to guarantee absolute data integrity during complex system transitions. We eliminate historical redundancies and establish robust governance frameworks, ensuring your new enterprise systems are fueled by clean, reliable, and perfectly structured data.",
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
  description2: "Acting as an extension of your internal IT team, our managed services provide unparalleled platform stability and strategic guidance. We continuously monitor system health, rapidly deploy critical updates, and architect ongoing enhancements to ensure your enterprise applications evolve in lockstep with your business objectives.",
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
  description2: "By breaking down operational silos, our tailored CRM implementations provide a unified, 360-degree view of your customer lifecycle. We architect intuitive digital workspaces that empower your sales and support teams to deliver hyper-personalized experiences, accelerating deal velocity and maximizing long-term customer retention.",
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
  const panelRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:768px)", () => {
      const elements = gsap.utils.toArray(
        ".anim-heading,.anim-desc,.anim-left-nav,.anim-right-main,.anim-buttons",
        containerRef.current
      );

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  const handleTabChange = (index) => {
    if (index === activeTab) return;

    setActiveTab(index);

    const elements = panelRef.current?.querySelectorAll(".tab-content-elements");

    if (!elements?.length) return;

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
      }
    );

    const backgrounds = panelRef.current?.querySelectorAll(".orb-bg");
    if (backgrounds?.length) {
      gsap.fromTo(backgrounds, {
        rotation: -15,
        scale: 0.95,
        opacity: 0,
      }, {
        rotation: 0,
        scale: 1,
        opacity: 0.08,
        duration: 1,
        ease: "power2.out"
      });
    }
  };

  const activeData = servicesData[activeTab];

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] w-full relative overflow-hidden"
    >
      {/* Subtle background orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <SectionWrapper
        id="services-section"
        className="relative pt-16 md:pt-20 lg:pt-24 pb-0"
        spacing="none"
      >
        <SectionContent className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-0 py-8 lg:py-10">

          {/* Centered Heading */}
          <div className="text-center mb-8 md:mb-10 lg:mb-14 shrink-0 mt-0 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-2 xl:mb-3 block">Expertise</span>
            <h2 className="anim-heading font-heading font-extrabold text-[clamp(28px,4vw,36px)] xl:text-[clamp(32px,5vw,48px)] text-[#0F172A] leading-[1.1] tracking-[-0.04em] mb-3 xl:mb-4">
              Enterprise Services Tailored to Your Business
            </h2>
            <p className="anim-desc text-sm xl:text-lg text-slate-600 max-w-[650px] leading-relaxed font-light mx-auto">
              Consulting, implementation, and managed services to modernize operations and simplify complex workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 items-stretch">
            {/* Left Column (33% on small laptop, ~41% on large desktop) */}
            <div className="w-full lg:col-span-4 flex flex-col h-full">
              <div className="bg-white/90 backdrop-blur-xl rounded-[24px] border border-slate-200/70 shadow-[0_25px_70px_-15px_rgba(21,101,216,0.12)] p-5 sm:p-6 lg:p-8 xl:py-10 xl:px-8 h-full flex flex-col relative overflow-hidden">
                <div className="anim-left-nav relative w-full overflow-x-auto lg:overflow-visible hide-scrollbar">
                  <div className="flex lg:flex-col gap-3 lg:gap-4 w-max lg:w-full pb-2 relative z-20">
                    {/* Timeline Background Line */}
                    <div className="hidden xl:block absolute left-[21px] top-[28px] bottom-[28px] w-[1px] bg-slate-200 z-0"></div>

                    {/* Animated Active Line */}
                    <div
                      className="hidden xl:block absolute left-[21px] top-[28px] w-[1px] bg-gradient-to-b from-[#1565D8] to-transparent transition-all duration-500 ease-out z-10"
                      style={{ height: `calc(${activeTab / (servicesData.length - 1)} * (100% - 56px))` }}
                    ></div>
                    {servicesData.map((service, index) => {
                      const isActive = activeTab === index;
                      return (
                        <div key={service.id} className="relative flex items-center group cursor-pointer flex-shrink-0 w-[230px] sm:w-[250px] lg:w-full" onClick={() => handleTabChange(index)}>
                          {/* Timeline Node Column */}
                          <div className="hidden xl:flex shrink-0 w-11 items-center justify-center relative">
                            <div className={`rounded-full z-20 transition-all duration-300 ${isActive ? 'w-2.5 h-2.5 bg-[#1565D8] shadow-[0_0_12px_rgba(21,101,216,0.5)] ring-4 ring-blue-50' : 'w-1.5 h-1.5 bg-slate-300 group-hover:bg-[#1565D8] opacity-60'}`}></div>
                          </div>

                          {/* Card */}
                          <div className={`flex-1 flex items-center gap-3 px-4 py-2.5 lg:py-3 rounded-xl transition-all duration-300 relative overflow-hidden h-full hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(21,101,216,0.12)]
                          ${isActive ? 'bg-white/95 backdrop-blur-sm shadow-[0_12px_40px_rgba(21,101,216,0.14)] border-l-[3px] border-[#1565D8] scale-[1.02] border-y border-r border-slate-200/70' : 'bg-transparent hover:bg-[#1565D8]/5 hover:text-[#1565D8] border-l-[3px] border-transparent'}
                        `}>
                            <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0
                              ${isActive ? 'bg-gradient-to-br from-blue-50 to-blue-100/50 text-[#1565D8] shadow-sm' : 'bg-transparent text-slate-400 group-hover:text-[#1565D8]'}
                           `}>
                              <div className="transition-transform duration-300 group-hover:scale-110">
                                {React.cloneElement(service.icon, { size: 16 })}
                              </div>
                            </div>
                            <div className="flex flex-col justify-center">
                              <span className={`text-[10px] xl:text-[11px] font-bold tracking-widest uppercase mb-1 transition-colors ${isActive ? 'text-[#E68A00]' : 'text-slate-400 group-hover:text-[#1565D8]/70'}`}>
                                {service.category}
                              </span>
                              <span className={`text-[16px] lg:text-[18px] xl:text-[19px] font-semibold tracking-tight transition-colors ${isActive ? 'text-[#0F172A]' : 'text-slate-500 group-hover:text-[#1565D8]'}`}>
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
            </div>

            {/* Right Column (67% on small laptop) */}
            <div
              className="w-full lg:col-span-8 flex flex-col h-full"
              ref={panelRef}
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-[24px] border border-slate-200/70 shadow-[0_25px_70px_-15px_rgba(21,101,216,0.12)] p-5 sm:p-6 lg:p-8 xl:py-10 xl:px-8 h-full flex flex-col relative overflow-hidden">

                {/* Abstract Brand Graphics Backgrounds */}
                <div className="absolute inset-0 pointer-events-none z-0 rounded-[24px] overflow-hidden">
                  {/* Soft Blue Tint Glow */}
                  <div className="absolute bottom-0 translate-y-1/4 right-[-10%] w-[500px] h-[500px] bg-[#1565D8] opacity-[0.08] rounded-full blur-[100px] orb-bg"></div>

                  {/* Technical Dot Grid */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1565D8 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                  {/* Glass Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1565D8]/5 via-white/40 to-white/10 opacity-60"></div>
                </div>

                {/* Wrapper to keep content above backgrounds */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title & Description */}
                  <div className="anim-right-main shrink-0">
                    <div className="tab-content-elements">
                      <h3 className="mt-0 text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-[#0F172A] leading-[1.2] tracking-[-0.03em] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0F172A] to-[#1e293b]">
                        {activeData.title}
                      </h3>
                      <div className="space-y-4">
                        <p className="text-sm sm:text-base xl:text-lg text-[#334155] leading-7 max-w-[650px] font-light">
                          {activeData.description}
                        </p>
                      </div>
                      <br />
                      <p className='text-sm sm:text-base xl:text-lg text-[#334155] leading-7 max-w-[650px] font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed ea error esse deleniti aliquam optio facere, pariatur fugit incidunt molestiae exercitationem excepturi itaque laboriosam modi, vitae libero, in quas!</p>
                      <p className='text-sm sm:text-base xl:text-lg text-[#334155] leading-7 max-w-[650px] font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed ea error esse deleniti aliquam optio facere, pariatur fugit incidunt molestiae exercitationem excepturi itaque laboriosam modi, vitae libero, in quas!</p>

                    </div>
                  </div>

                  {/* Bottom Section: Logos and Buttons */}
                  <div className="mt-5 pt-5 md:mt-6 md:pt-6 border-t border-slate-100/60 flex flex-col gap-2 relative z-20 flex-grow">
                    <h4 className="text-[10px] xl:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technology Partner</h4>

                    {/* Partner Logos */}
                    <div className="anim-right-main flex overflow-x-auto lg:flex-wrap flex-nowrap gap-3 pb-2 hide-scrollbar mb-4 md:mb-6">
                      <div className="tab-content-elements flex overflow-x-auto lg:flex-wrap flex-nowrap gap-3 pb-2 hide-scrollbar">
                        {activeData.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex-shrink-0 flex items-center justify-center h-9 xl:h-10 min-w-[90px] xl:min-w-[100px] px-3 xl:px-4 rounded-full border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                          >
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              loading="lazy"
                              decoding="async"
                              className="max-h-5 xl:max-h-6 max-w-[80px] xl:max-w-[90px] object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="anim-buttons flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                      <div className="tab-content-elements flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                        <Link to={`/services/${activeData.id}`} className="w-full md:w-auto bg-gradient-to-r from-[#1565D8] to-[#0F4CC9] hover:from-[#0F4CC9] hover:to-[#0d40a8] text-white px-7 xl:px-8 h-11 flex items-center justify-center gap-2 rounded-full font-semibold text-[14px] transition-all duration-300 shadow-[0_4px_14px_rgba(21,101,216,0.25)] hover:shadow-[0_6px_20px_rgba(21,101,216,0.4)]">
                          Book Discovery Call <ArrowRight size={16} />
                        </Link>
                        <Link to="/case-studies" className="w-full md:w-auto text-center bg-white border border-slate-200/80 text-[#0F172A] px-7 xl:px-8 h-11 flex items-center justify-center rounded-full font-semibold text-[14px] transition-all duration-300 hover:bg-[#F8FAFC] hover:border-slate-300">
                          {activeData.ctaText}
                        </Link>
                      </div>
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

export default ServicesSection;
