import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper, SectionContent } from '../components/layout/SectionContainer';
import { ArrowRight, Cloud, Shield, Zap, TrendingDown, Smartphone, BarChart3, Database, Server, Users, Briefcase, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const CloudApplications = () => {
  const [active, setActive] = useState(1);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const platformsRef = useRef(null);
  const tableRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);

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

      // 2. Features Animation
      gsap.fromTo('.feature-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // 3. Platforms Animation
      gsap.fromTo('.platform-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: platformsRef.current,
            start: "top 75%",
            once: true
          }
        }
      );

      // 4. Table Animation
      gsap.fromTo('.table-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // 5. Partners Animation
      gsap.fromTo('.partner-logo',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: partnersRef.current,
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

  const features = [
    { icon: <Zap size={24} />, title: "Faster Deployment", desc: "Accelerate time-to-value with pre-configured cloud architectures." },
    { icon: <Shield size={24} />, title: "Enterprise Security", desc: "Bank-grade encryption, compliance, and proactive threat monitoring." },
    { icon: <Cloud size={24} />, title: "AI & Automation", desc: "Leverage embedded AI to automate routine workflows and scale." },
    { icon: <TrendingDown size={24} />, title: "Lower IT Costs", desc: "Shift from CAPEX to OPEX with predictable subscription models." },
    { icon: <Smartphone size={24} />, title: "Anywhere Access", desc: "Empower your global workforce with secure mobile accessibility." },
    { icon: <BarChart3 size={24} />, title: "Real-Time Analytics", desc: "Transform complex data into actionable business intelligence." }
  ];

  const platforms = [
    {
      logo: "/partners/oracle.png",
      title: "Oracle Cloud",
      desc: "Enterprise infrastructure and mission-critical business applications.",
      focus: "Infrastructure • ERP • SCM • HCM",
      path: "/oracle-cloud",
      color: "from-red-500/10 to-red-600/5",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      logo: "/partners/netsuite.png",
      title: "Oracle NetSuite",
      desc: "Unified cloud ERP for growing and mid-market businesses.",
      focus: "Cloud ERP • Financials • CRM",
      path: "/netsuite",
      color: "from-[#0066CC]/10 to-[#004C99]/5",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      logo: "/partners/salesforce.png",
      title: "Salesforce",
      desc: "Customer relationship management and engagement platform.",
      focus: "CRM • Sales • Service • Marketing",
      path: "/salesforce",
      color: "from-[#00A1E0]/10 to-[#0077B6]/5",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      logo: "/ai_logos/workday.png",
      title: "Workday",
      desc: "Human Capital Management and Financial Management.",
      focus: "HCM • Financial Management",
      path: "/workday",
      color: "from-[#F58220]/10 to-[#F26722]/5",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      logo: "/ai_logos/RTS_Logo_Colored.svg",
      title: "Rootstock",
      desc: "Modern, flexible manufacturing ERP natively built on the Salesforce platform.",
      focus: "Manufacturing ERP • Supply Chain",
      path: "/rootstock",
      color: "from-[#104C97]/10 to-[#0B3A78]/5",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    }
  ];
  const faqData = [
    {
      id: 1,
      qus: "What Oracle Cloud services does DimensionCG offer?",
      ans: "DimensionCG provides end-to-end Oracle Cloud consulting, including implementation, cloud migration, system integration, optimization, managed services, upgrades, and ongoing support across Oracle ERP, SCM, HCM, EPM, CX, and OCI."
    },
    {
      id: 2,
      qus: "Can DimensionCG migrate our existing ERP system to Oracle Cloud?",
      ans: "Yes. We help organizations migrate from legacy ERP platforms or on-premise Oracle systems to Oracle Cloud with a structured, low-risk approach that minimizes disruption and ensures business continuity."
    },
    {
      id: 3,
      qus: "How long does an Oracle Cloud implementation take?",
      ans: "Project timelines depend on the complexity of your business, the number of Oracle modules, integrations, and data migration requirements. After an initial assessment, we provide a detailed implementation roadmap with realistic milestones."
    },
    {
      id: 4,
      qus: "Do you provide post-implementation support?",
      ans: "Absolutely. Our engagement continues after go-live with application support, performance optimization, quarterly Oracle updates, user training, and continuous improvements."
    },
    {
      id: 5,
      qus: "Why choose DimensionCG as your Oracle Cloud implementation partner?",
      ans: "Our certified Oracle consultants combine deep product expertise with proven delivery methodologies and industry best practices to deliver secure, scalable Oracle Cloud solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1565D8]/5 to-transparent blur-3xl pointer-events-none"></div>

        <SectionContent className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="hero-anim inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#1565D8] text-sm font-semibold mb-6">
                <Cloud size={16} /> Enterprise Solutions
              </div>
              <h1 className="hero-anim text-4xl lg:text-5xl xl:text-6xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
                Accelerate Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565D8] to-[#0F4CC9]">Enterprise Cloud</span> Applications
              </h1>
              <p className="hero-anim text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
                Modern enterprises require secure, scalable, and intelligent cloud platforms to stay competitive. Dimension Consulting helps organizations implement, migrate, integrate, and optimize industry-leading cloud applications that drive operational excellence and long-term growth.
              </p>
              <div className="hero-anim flex flex-wrap items-center gap-4">
                <button onClick={() => {
                  document.getElementById('platforms').scrollIntoView({ behavior: 'smooth' });
                }} className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1565D8] text-white font-bold hover:bg-[#1D4ED8] transition-all shadow-[0_8px_20px_rgba(21,101,216,0.3)] hover:shadow-[0_12px_25px_rgba(21,101,216,0.4)] group">
                  Explore Platforms <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
                  Talk to a Cloud Expert
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="w-full lg:w-1/2 hero-graphic relative h-[500px] flex items-center justify-center">
              {/* Central glowing orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[80px]"></div>

              {/* Illustration container */}
              <div className="relative w-full max-w-[500px] h-[500px]">
                <img src="/cloud-applications-pattern.png" alt="Cloud Enterprise Graphic" className="w-full h-full object-contain opacity-90 drop-shadow-2xl" />

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-white/90 backdrop-blur shadow-lg rounded-2xl p-4 border border-slate-100 flex items-center gap-3"
                >
                  <Database className="text-[#1565D8]" size={24} />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Data Integration</p>
                    <p className="text-sm font-bold text-slate-900">Seamless Flow</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 bg-white/90 backdrop-blur shadow-lg rounded-2xl p-4 border border-slate-100 flex items-center gap-3"
                >
                  <Shield className="text-[#0F4CC9]" size={24} />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Enterprise Grade</p>
                    <p className="text-sm font-bold text-slate-900">High Security</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionContent>
      </section>

      {/* 2. WHY CLOUD APPLICATIONS */}
      <SectionWrapper ref={featuresRef} id="why-cloud" className="bg-[#F8FAFC] py-24">
        <SectionContent>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
              Why Modern Enterprises Choose Cloud Applications
            </h2>
            <p className="text-lg text-slate-600">
              Cloud applications enable organizations to innovate faster, reduce operational complexity, strengthen security, and gain real-time visibility across business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="feature-card bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1565D8] flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* 3. EXPLORE PLATFORMS */}
      <SectionWrapper ref={platformsRef} id="platforms" className="bg-white py-24">
        <SectionContent>
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
              Explore Our Cloud Platforms
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              We partner with the world's leading technology providers to deliver tailored cloud solutions that meet your exact business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform, idx) => (
              <div key={idx} className="platform-card group relative bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 overflow-hidden hover:shadow-[0_25px_70px_-15px_rgba(21,101,216,0.12)] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${platform.color} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="h-12 flex items-center justify-start mb-8">
                    <img src={platform.logo} alt={platform.title} className="h-full object-contain transition-all duration-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{platform.title}</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed flex-grow">
                    {platform.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg w-max mb-8">
                    <CheckCircle2 size={16} className="text-[#1565D8]" />
                    {platform.focus}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className={`text-sm font-bold ${platform.btnColor.replace('bg-', 'text-').split(' ')[0]} flex items-center gap-2`}>
                      Explore {platform.title.split(' ').pop()} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Link to={platform.path} className="absolute inset-0 z-20"><span className="sr-only">Explore {platform.title}</span></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* 4. COMPARISON TABLE */}


      {/* 5. TRUSTED PARTNERS */}
      <SectionWrapper ref={partnersRef} className="bg-white py-20 border-b border-slate-100">
        <SectionContent>
          <div className="text-center mb-10 partner-logo">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Trusted Technology Partners
            </h3>
          </div>

          <div className="flex items-center justify-center gap-8 lg:gap-14 overflow-x-auto scrollbar-hide">
            <img src="/partners/oracle.png" alt="Oracle" className="h-8 lg:h-10 flex-shrink-0 object-contain transition-all partner-logo hover:-translate-y-1" />
            <img src="/partners/netsuite.png" alt="NetSuite" className="h-8 lg:h-10 flex-shrink-0 object-contain transition-all partner-logo hover:-translate-y-1" />
            <img src="/partners/salesforce.png" alt="Salesforce" className="h-10 lg:h-12 flex-shrink-0 object-contain transition-all partner-logo hover:-translate-y-1" />
            <img src="/ai_logos/RTS_Logo_Colored.svg" alt="Rootstock" className="h-8 lg:h-10 flex-shrink-0 object-contain transition-all partner-logo hover:-translate-y-1" />
            <img src="/partners/celigo.png" alt="Celigo" className="h-8 lg:h-10 flex-shrink-0 object-contain transition-all partner-logo hover:-translate-y-1" />
            <img src="/partners/opkey.png" alt="Opkey" className="h-8 lg:h-10 flex-shrink-0 object-contain transition-all partner-logo hover:-translate-y-1" />
          </div>
        </SectionContent>
      </SectionWrapper>
      {/* 5. FAQ SECTION */}
      <SectionWrapper className="bg-white py-24 relative overflow-hidden">
        <SectionContent>
          <div className="max-w-5xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-12">
              <span className="text-[#F15A24] uppercase tracking-[0.3em] text-sm font-semibold">
                FAQ
              </span>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                Find answers to common questions about our Oracle Cloud services,
                implementation approach, and ongoing support.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              {faqData.map((item) => {
                const open = active === item.id;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => setActive(open ? null : item.id)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <div className="flex items-center gap-5 flex-1">

                        {/* Logo Bullet */}
                        <div className="w-12 h-12 rounded-full   flex items-center justify-center shrink-0">
                          <img
                            src="/dimconLogoIcon.png"
                            alt="DimensionCG"
                            className="w-7 h-7 object-contain"
                          />
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block h-8 w-px bg-slate-200"></div>

                        {/* Question */}
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900 pr-4">
                          {item.qus}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <ChevronDown
                        className={`w-6 h-6 shrink-0 transition-all duration-300 ${open
                          ? "rotate-180 text-[#F15A24]"
                          : "text-slate-400"
                          }`}
                      />
                    </button>

                    {/* Answer */}
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

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-slate-500">
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-[#F15A24] font-semibold hover:underline"
                >
                  Contact our experts →
                </a>
              </p>
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* 6. FINAL CTA */}
      <SectionWrapper ref={ctaRef} className="bg-[#0F172A] py-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1565D8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <SectionContent className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="cta-anim text-3xl lg:text-5xl font-heading font-black text-white mb-6">
            Not Sure Which Cloud Platform Fits Your Business?
          </h2>
          <p className="cta-anim text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Our cloud experts will evaluate your business requirements, existing architecture, and growth objectives to recommend the enterprise cloud platform that best aligns with your digital transformation goals.
          </p>
          <div className="cta-anim flex flex-wrap justify-center items-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1565D8] text-white font-bold hover:bg-[#1D4ED8] transition-all shadow-[0_8px_20px_rgba(21,101,216,0.3)]">
              Talk to a Cloud Expert
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition-all">
              Schedule Discovery Call
            </Link>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default CloudApplications;
