import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Settings, ShieldCheck, Zap,
  Search, Link as LinkIcon, Users, CheckCircle2,
  BarChart3, LayoutTemplate, Layers, ChevronDown,
  MonitorPlay, Focus, ArrowUpRight, Check, Activity
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-blue-100 blur-[140px] opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-100 blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[55%] text-left hero-text-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold tracking-wider text-xs uppercase mb-6"
            >
              <Settings size={14} />
              ERP Implementation Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight"
            >
               A Successful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ERP Projects</span> Starts Before the System Goes Live.
            </motion.h1>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
             Get the planning, architecture, integration, testing, and user readiness right from the beginning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors flex items-center gap-2 group">
                Discuss Your Implementation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-80"
              />
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
                  <LayoutTemplate className="w-8 h-8 text-blue-400 mb-4" />
                  <div className="h-2 w-24 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-16 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-12 bg-slate-200 rounded" />
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl mt-8">
                  <Layers className="w-8 h-8 text-indigo-400 mb-4" />
                  <div className="h-2 w-20 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-12 bg-slate-200 rounded" />
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
                  <Settings className="w-8 h-8 text-blue-400 mb-4" />
                  <div className="h-2 w-16 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-20 bg-slate-200 rounded" />
                </motion.div>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl mt-8">
                  <Users className="w-8 h-8 text-indigo-400 mb-4" />
                  <div className="h-2 w-24 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-14 bg-slate-200 rounded" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  const challenges = [
    { title: "Business Requirements", icon: <Focus /> },
    { title: "Process Alignment", icon: <Layers /> },
    { title: "System Integrations", icon: <LinkIcon /> },
    { title: "Data Security", icon: <ShieldCheck /> },
    { title: "Rigorous Testing", icon: <Activity /> },
    { title: "User Adoption", icon: <Users /> }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              An ERP Is Only as Good as <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Its Implementation.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Investing in a powerful ERP system is just the first step. The true challenge lies in mapping it to your operational realities, securing data, training users, and ensuring system readiness before you flip the switch.
            </p>
            <div className="flex items-center gap-4 text-blue-700 font-bold">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
              <span>We focus on go-live readiness from day one.</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 value-grid">
            {challenges.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-bold text-slate-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Design & Planning", desc: "Understand business requirements, project scope, stakeholders, and implementation goals.", icon: <LayoutTemplate /> },
    { title: "Configuration", desc: "Configure the ERP environment around specific business requirements.", icon: <Settings /> },
    { title: "Role Definition & Security", desc: "Define appropriate roles, access controls, and security profiles.", icon: <ShieldCheck /> },
    { title: "System Integration", desc: "Connect the ERP solution with the existing technology environment.", icon: <LinkIcon /> },
    { title: "Testing", desc: "Validate functionality, performance, and system readiness.", icon: <Activity /> },
    { title: "User Training", desc: "Prepare users to confidently work with the new ERP environment.", icon: <MonitorPlay /> },
    { title: "UAT Support", desc: "Support users through acceptance testing before deployment.", icon: <Users /> },
    { title: "Go-Live Planning", desc: "Prepare the organization and system for production deployment.", icon: <Zap /> }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERP Implementation Services</h2>
          <p className="text-lg text-slate-600">What exactly will DimensionCG handle during your implementation? We cover the entire lifecycle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 services-grid">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
              <p className="text-slate-600">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProvenApproach = () => {
  const steps = [
    { num: "01", title: "Initializing the Implementation", desc: "Define project goals and establish the foundation for implementation." },
    { num: "02", title: "Onsite Analysis & Project Planning", desc: "Assess requirements and create a customized project roadmap." },
    { num: "03", title: "Solution Architecture & Mapping", desc: "Design the solution architecture and map it to business operations." },
    { num: "04", title: "Validate", desc: "Test and validate the solution to ensure reliability and readiness." },
    { num: "05", title: "Closure & Go-Live", desc: "Move into production with training and user support." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">From Planning to Go-Live</h2>
          <p className="text-lg text-slate-600 max-w-2xl">Our Proven Implementation Approach</p>
        </div>

        <div className="relative pt-12 pb-12">
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-[80px] left-0 w-full h-1 bg-slate-100 z-0" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative z-10 approach-grid">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 relative group">
                {/* Connecting Line Mobile */}
                {i !== steps.length - 1 && <div className="lg:hidden absolute top-12 left-6 bottom-[-2rem] w-0.5 bg-slate-100 z-0" />}

                <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 items-start relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center font-black text-slate-400 group-hover:border-blue-500 group-hover:text-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Platforms = () => {
  const platforms = [
    { name: "Oracle Cloud", logo: "/partners/oracle.png", desc: "Comprehensive cloud suite for enterprise financials, supply chain, and HCM.", link: "/oracle-cloud" },
    { name: "Oracle NetSuite", logo: "/partners/netsuite.png", desc: "The #1 cloud ERP for fast-growing mid-market and enterprise organizations.", link: "/cloud-applications/netsuite" },
    { name: "Workday", logo: "/ai_logos/workday.png", desc: "Enterprise cloud applications for finance and human resources.", link: "/cloud-applications/workday" }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          ERP Platforms We Implement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 platforms-grid">
          {platforms.map((plat, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-[0_20px_40px_-15px_rgba(21,101,216,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative cursor-pointer"
            >
              <div className="h-12 flex items-center justify-start mb-6">
                <img
                  src={plat.logo}
                  alt={`${plat.name} Logo`}
                  className="h-8 object-contain"
                  onError={(e) => { e.target.src = '/dimconLogoIcon.png'; e.target.className = "h-8 object-contain opacity-50" }}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{plat.name}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {plat.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-[#1565D8] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                  Explore Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <Link to={plat.link} className="absolute inset-0 z-20"><span className="sr-only">Explore {plat.name}</span></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const outcomes = [
    { title: "Connected Operations", desc: "Bring business processes and systems together.", icon: <LinkIcon /> },
    { title: "Greater Automation", desc: "Reduce manual effort across everyday processes.", icon: <Zap /> },
    { title: "Better Visibility", desc: "Use operational and financial information for more informed decisions.", icon: <Search /> },
    { title: "Standardized Processes", desc: "Create greater consistency across business operations.", icon: <LayoutTemplate /> },
    { title: "Built to Scale", desc: "Support evolving requirements as the organization grows.", icon: <BarChart3 /> }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What a Well-Implemented ERP Changes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 outcomes-grid">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-200 hover:shadow-xl hover:bg-white transition-all group ${i === 3 ? 'lg:col-span-1 lg:ml-auto' : ''} ${i === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100/50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyDimensionCG = () => {
  const reasons = [
    "Business Process Planning & Gap Analysis",
    "Custom System Integration",
    "System Design & Configuration",
    "Data Migration",
    "Report Transformations"
  ];

  const specifics = [
    "Prioritizing business objectives",
    "Systematic execution",
    "Comprehensive testing",
    "Transparent analytics",
    "User training and adoption"
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-slate-900 to-slate-900"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why DimensionCG for ERP Implementation?
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              We move beyond generic claims by focusing on systematic execution and true business alignment.
            </p>

            <div className="space-y-4 why-list-1">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <Check className="text-blue-400 w-5 h-5 shrink-0" />
                  <span className="text-slate-200 font-medium">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-500/40 to-indigo-900/40 p-8 md:p-12 rounded-3xl border border-blue-500/20 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-8">How We Execute</h3>
            <div className="space-y-6 why-list-2">
              {specifics.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-lg text-slate-300">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does DimensionCG's ERP implementation service include?",
      answer: "Our service covers the entire implementation lifecycle, including design and planning, system configuration, role definition and security, system integration, rigorous testing, user training, UAT support, and final go-live planning."
    },
    {
      question: "How does DimensionCG plan an ERP implementation?",
      answer: "We begin by establishing a deep understanding of your business requirements, project scope, and stakeholders. We then map these requirements to a customized project roadmap and design a solution architecture that perfectly aligns with your operations."
    },
    {
      question: "Can DimensionCG integrate ERP with our existing systems?",
      answer: "Yes. System integration is a core component of our service. We connect your new ERP solution with your existing technology environment—whether through modern iPaaS tools or native APIs—to ensure seamless data flow across the enterprise."
    },
    {
      question: "How do you test an ERP system before go-live?",
      answer: "We execute comprehensive testing phases that validate system functionality, performance, and readiness. We also provide dedicated UAT (User Acceptance Testing) support to ensure end-users can confidently validate the system before production deployment."
    },
    {
      question: "Does DimensionCG provide user training and post-go-live support?",
      answer: "Absolutely. We prepare your users to confidently work with the new ERP environment through targeted onboarding. We also plan the go-live cutover meticulously to ensure your team has the support they need as they move into production."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">ERP Implementation FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white hover:border-blue-100'}`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={`font-bold pr-8 ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-blue-900">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-indigo-900 to-slate-900 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8">
          BEFORE YOU IMPLEMENT
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
          A Successful ERP Project Starts <br className="hidden md:block" /> Before the System Goes Live.
        </h2>

        <p className="text-xl text-blue-100/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          Get the planning, architecture, integration, testing, and user readiness right from the beginning.
        </p>

        <Link to="/contact" className="inline-block px-10 py-5 bg-white text-blue-900 rounded-xl font-bold shadow-2xl hover:shadow-white/20 hover:bg-slate-50 transition-all text-lg hover:-translate-y-1">
          Discuss Your ERP Implementation
        </Link>
      </div>
    </section>
  );
};

const ErpImplementation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {

      // Animate section headers instead of hiding the entire section background
      const headers = gsap.utils.toArray('section:not(:first-child) h2');
      headers.forEach(header => {
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: header, start: "top 85%" }
          }
        );
      });

      const descriptions = gsap.utils.toArray('section:not(:first-child) p.text-lg, section:not(:first-child) p.text-xl');
      descriptions.forEach(desc => {
        gsap.fromTo(desc,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.1,
            scrollTrigger: { trigger: desc, start: "top 85%" }
          }
        );
      });

      // Specific section stagger content
      gsap.fromTo(".value-grid > div",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".value-grid", start: "top 80%" } }
      );

      gsap.fromTo(".services-grid > div",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".services-grid", start: "top 80%" } }
      );

      gsap.fromTo(".approach-grid > div",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".approach-grid", start: "top 80%" } }
      );

      gsap.fromTo(".platforms-grid > div",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".platforms-grid", start: "top 80%" } }
      );

      gsap.fromTo(".outcomes-grid > div",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".outcomes-grid", start: "top 85%" } }
      );

      gsap.fromTo(".why-list-1 > div",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: ".why-list-1", start: "top 85%" } }
      );

      gsap.fromTo(".why-list-2 > div",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: ".why-list-2", start: "top 85%" } }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen">
      <Hero />
      <ValueProp />
      <Services />
      <ProvenApproach />
      <Platforms />
      <Outcomes />
      <WhyDimensionCG />
      <FAQSection />
      <CTA />
    </main>
  );
};

export default ErpImplementation;
