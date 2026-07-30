import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper, SectionContent } from '../components/layout/SectionContainer';
import IndustriesSection from '../components/sections/IndustriesSection';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Layers, Cpu, Cloud, Server, Database,
  Users, Zap, Shield, BarChart3, TrendingUp, CheckCircle2,
  Settings, Truck, Heart, DollarSign, Building2, BookOpen,
  Map, ChevronDown, Activity, Lightbulb,
  Sparkles, UserCheck, Contact, Eye, UsersRound, ShieldCheck, Gauge
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const timelineRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animation
      const tl = gsap.timeline();
      tl.fromTo('.hero-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
      tl.fromTo('.hero-graphic',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.4"
      );

      // 2. Services Cards
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // 3. Timeline
      gsap.fromTo('.timeline-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            once: true
          }
        }
      );

      // 5. FAQ Header
      gsap.fromTo('.faq-anim',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 85%",
            once: true
          }
        }
      );

      // 6. CTA Animation
      gsap.fromTo('.cta-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            once: true
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const servicesData = [
    {
      title: "AI-Powered ERP",
      desc: "Modernize core operations with intelligent enterprise resource planning systems.",
      icon: <Sparkles size={24} strokeWidth={2} />,
      caps: ["Enterprise AI Integration", "Process Automation", "Predictive Analytics"],
      logos: ["/partners/oracle.png", "/partners/netsuite.png"]
    },
    {
      title: "Cloud Applications",
      desc: "Implement scalable, secure, and highly available cloud applications.",
      icon: <Cloud size={24} strokeWidth={2} />,
      caps: ["Cloud Migration", "Platform Integration", "Cloud Optimization"],
      logos: ["/partners/oracle.png", "/partners/salesforce.png", "/ai_logos/RTS_Logo_Colored.svg"]
    },
    {
      title: "ERP Implementation",
      desc: "End-to-end deployment of enterprise systems configured to your specific needs.",
      icon: <Server size={24} strokeWidth={2} />,
      caps: ["Full ERP Deployment", "Configuration", "User Adoption"],
      logos: ["/partners/oracle.png", "/partners/netsuite.png"]
    },
    {
      title: "Data Migration",
      desc: "Securely move critical enterprise data with guaranteed accuracy and minimal downtime.",
      icon: <Database size={24} strokeWidth={2} />,
      caps: ["Secure Migration", "Data Validation", "Zero Downtime"],
      logos: []
    },
    {
      title: "CRM Implementation",
      desc: "Transform customer relationships with intelligent sales and service platforms.",
      icon: <Users size={24} strokeWidth={2} />,
      caps: ["Sales Automation", "Customer Engagement", "Marketing Integration"],
      logos: ["/partners/salesforce.png"]
    },
    {
      title: "HCM Implementation",
      desc: "Modernize human resources with powerful workforce management solutions.",
      icon: < Contact k size={24} strokeWidth={2} />,
      caps: ["HR Transformation", "Workforce Management", "Payroll Integration"],
      logos: ["/ai_logos/RTS_Logo_Colored.svg", "/partners/oracle.png"]
    },
    {
      title: "Application Managed Services",
      desc: "Ensure continuous peak performance with dedicated ongoing support.",
      icon: <ShieldCheck size={24} strokeWidth={2} />,
      caps: ["24/7 Monitoring", "Issue Resolution", "Continuous Support"],
      logos: []
    },
    {
      title: "Monitoring Services",
      desc: "Proactive system monitoring to identify and resolve issues before they impact business.",
      icon: <Eye size={24} strokeWidth={2} />,
      caps: ["Application Health", "Alerts", "System Monitoring"],
      logos: []
    },
    {
      title: "Performance Optimization",
      desc: "Tune and optimize your enterprise applications for maximum speed and efficiency.",
      icon: <Gauge size={24} strokeWidth={2} />,
      caps: ["System Tuning", "Performance Analytics", "Resource Optimization"],
      logos: []
    }
  ];

  const timelineSteps = [
    { num: "01", title: "ERP requirements gathering", desc: "We evaluate your business to recommend specific enhancements. " },
    { num: "02", title: "Assessment & selection", desc: "We find the ideal ERP solution and guide you through the process. " },
    { num: "03", title: "Implementation", desc: "Our experts oversee implementation, ensuring timely and efficient delivery. " },
    { num: "04", title: "Training", desc: "We provide training and ongoing assistance to maximize system use." },
    { num: "05", title: "Ongoing ERP Support", desc: "We ensure system performance through regular monitoring and 24/7 assistance. " },
  ];

  const faqs = [
    {
      id: 1,
      qus: "Which enterprise platforms does Dimension Consulting specialize in?",
      ans: "We specialize in Oracle Cloud, Oracle NetSuite, Salesforce, and Workday, delivering consulting, implementation, migration, integration, and managed services across these platforms."
    },
    {
      id: 2,
      qus: "Do you provide support after implementation?",
      ans: "Yes. Our Application Managed Services include ongoing monitoring, issue resolution, performance optimization, system enhancements, and long-term support to keep enterprise applications performing at their best."
    },
    {
      id: 3,
      qus: "Can you migrate data from legacy systems?",
      ans: "Absolutely. Our migration specialists ensure secure, validated, and accurate migration from legacy systems to modern cloud platforms with minimal disruption."
    },
    {
      id: 4,
      qus: "How do you ensure successful implementations?",
      ans: "Every engagement follows a structured methodology including discovery, planning, implementation, testing, deployment, user enablement, and post-go-live optimization."
    },
    {
      id: 5,
      qus: "Which industries do you work with?",
      ans: "We support organizations across Manufacturing, Retail, Healthcare, Financial Services, Professional Services, Logistics, Public Sector, Higher Education, Telecommunications, Automotive, Energy & Utilities, and Hospitality."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1565D8]/5 to-transparent blur-3xl pointer-events-none"></div>

        <SectionContent className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="hero-anim inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#1565D8] text-sm font-semibold mb-6">
                <Layers size={16} /> ENTERPRISE SERVICES
              </div>
              <h1 className="hero-anim text-4xl lg:text-5xl xl:text-6xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
                Services That Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565D8] to-[#0F4CC9]">Enterprise Transformation</span>
              </h1>
              <p className="hero-anim text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
                From strategy and implementation to optimization and ongoing support, our services are designed to help businesses modernize operations, accelerate innovation, and maximize technology investments.
              </p>
              <div className="hero-anim flex flex-wrap items-center gap-4">

                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
                  Book Discovery Call
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="w-full lg:w-1/2 hero-graphic relative h-[500px] flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[80px]"></div>

              <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center">
                {/* Custom Enterprise Illustration built with layout elements */}
                <div className="relative w-full aspect-square border-[8px] border-slate-50/50 rounded-full flex items-center justify-center bg-white shadow-[0_20px_60px_-15px_rgba(21,101,216,0.15)]">
                  <div className="absolute inset-4 border border-dashed border-blue-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
                  <div className="absolute inset-12 border border-blue-100 rounded-full"></div>

                  {/* Core Hub */}
                  <div className="w-32 h-32 bg-gradient-to-br from-[#1565D8] to-[#0F4CC9] rounded-2xl shadow-[0_10px_30px_rgba(21,101,216,0.4)] flex items-center justify-center z-10 transform rotate-45">
                    <Layers className="text-white transform -rotate-45" size={48} />
                  </div>

                  {/* Orbiting Elements */}
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                    <Cpu className="text-[#1565D8]" size={20} /> <span className="font-bold text-slate-800 text-sm">AI Integration</span>
                  </motion.div>
                  <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                    <Database className="text-[#0F4CC9]" size={20} /> <span className="font-bold text-slate-800 text-sm">Data Migration</span>
                  </motion.div>
                  <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-10">
                    <Cloud className="text-[#1565D8]" size={20} /> <span className="font-bold text-slate-800 text-sm">Cloud Native</span>
                  </motion.div>
                  <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-10">
                    <Server className="text-[#0F4CC9]" size={20} /> <span className="font-bold text-slate-800 text-sm">ERP</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </section>

      {/* 2. EXPLORE OUR SERVICES */}
      <SectionWrapper ref={servicesRef} id="explore-services" className="bg-[#F8FAFC] py-24">
        <SectionContent>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100/50 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">OUR SERVICES</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
              Solutions for Every Stage of Enterprise Transformation
            </h2>
            <p className="text-lg text-slate-600">
              From strategy and implementation to optimization and ongoing support, our services are designed to help organizations modernize operations, improve efficiency, and accelerate business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((srv, idx) => (
              <div key={idx} className="service-card group bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-[0_20px_40px_-15px_rgba(21,101,216,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500 origin-top-right"></div>

                <div className="w-16 h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center mb-6 text-[#1565D8] group-hover:bg-[#1565D8] group-hover:text-white transition-colors duration-300">
                  {srv.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{srv.desc}</p>


                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">

                  <span className="text-sm font-bold text-[#1565D8] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                    Explore Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <Link to={`/services`} className="absolute inset-0 z-20"><span className="sr-only">Explore {srv.title}</span></Link>
                </div>
              </div>
            ))}
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* 3. TIMELINE (HOW WE HELP) */}
      <SectionWrapper ref={timelineRef} className="bg-white py-24 border-b border-slate-100">
        <SectionContent>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
              OUR APPROACH
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
              One Partner. Every Stage of Your Transformation.
            </h2>

            <p className="text-lg text-slate-600">
              Technology transformation isn't a single project. It's a continuous
              journey. Our end-to-end consulting services help organizations plan,
              implement, optimize, and support enterprise solutions that continue
              delivering value long after go-live.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-7xl mx-auto">
            {/* Desktop Line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 via-[#1565D8] to-blue-100 opacity-30 rounded-full"></div>

            {/* Mobile Line */}
            <div className="lg:hidden absolute top-10 bottom-10 left-7 w-[2px] bg-gradient-to-b from-blue-100 via-[#1565D8] to-blue-100 opacity-30 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
              {timelineSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="timeline-step relative flex flex-row lg:flex-col items-start lg:items-center gap-5 lg:gap-6 z-10 group"
                >
                  {/* Number */}
                  <div className="w-14 h-14 lg:w-20 lg:h-20 shrink-0 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center shadow-[0_10px_24px_rgba(21,101,216,0.12)] transition-all duration-300 group-hover:border-[#1565D8]">
                    <span className="font-heading font-black text-xl lg:text-3xl text-slate-400 group-hover:text-[#1565D8] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:flex-none lg:text-center">
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-[220px] lg:mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* 4. INDUSTRIES WE SERVE */}
      <div className="relative z-10">
        <IndustriesSection />
      </div>

      {/* 5. FAQ */}
      <section ref={faqRef} className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 faq-anim">
            <span className="text-[#F15A24] uppercase tracking-[0.3em] text-sm font-semibold">
              FAQ
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Find answers to common questions about our enterprise services,
              implementation approach, and ongoing support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => {
              const open = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className="faq-anim rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : item.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-5 flex-1">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <img
                          src="/dimconLogoIcon.png"
                          alt="DimensionCG"
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      <div className="hidden sm:block h-8 w-px bg-slate-200"></div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 pr-4">
                        {item.qus}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 shrink-0 transition-all duration-300 ${open ? "rotate-180 text-[#F15A24]" : "text-slate-400"
                        }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-[92px] sm:pl-[104px] pr-8 pb-6 text-slate-600 leading-7">
                        {item.ans}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 faq-anim">
            <p className="text-slate-500">
              Still have questions?{" "}
              <Link
                to="/contact"
                className="text-[#F15A24] font-semibold hover:underline"
              >
                Contact our experts →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <SectionWrapper ref={ctaRef} className="bg-[#0F172A] py-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1565D8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <SectionContent className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="cta-anim inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/20">YOUR NEXT MOVE</div>
          <h2 className="cta-anim text-3xl lg:text-5xl font-heading font-black text-white mb-6 tracking-tight">
            Great Transformations Start with the Right Conversation.
          </h2>
          <p className="cta-anim text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're modernizing a single business function or planning an enterprise-wide transformation, our consultants are ready to help you build a roadmap that aligns technology with your business goals.
          </p>
          <div className="cta-anim flex flex-wrap justify-center items-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1565D8] text-white font-bold hover:bg-[#1D4ED8] transition-all shadow-[0_8px_20px_rgba(21,101,216,0.3)] hover:shadow-[0_12px_30px_rgba(21,101,216,0.4)]">
              Book Discovery Call
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition-all">
              Talk to a Services Expert
            </Link>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default Services;
