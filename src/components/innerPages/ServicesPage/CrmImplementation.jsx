import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Settings, ShieldCheck, Zap,
  Search, Link as LinkIcon, Users, CheckCircle2,
  LayoutTemplate, ChevronDown,
  MonitorPlay, Check, Activity, Heart, UserPlus, Database,
  ArrowDown, Target, Network, Layers3, BarChart3,
  Award, Globe, Minus, Plus
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
              <Users size={14} />
              CRM Implementation Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight"
            >
              Transform Customer Relationships with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intelligent CRM Implementation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              Enhance your CRM capabilities through seamless integration and expert implementation support. We optimize business processes to drive better customer interactions and enhanced operational efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/company/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors flex items-center gap-2 group">
                Discuss Your CRM Implementation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/cloud-applications/salesforce" className="px-8 py-4 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center gap-2">
                Explore CRM Solutions
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] relative h-[450px] lg:h-[550px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-80"
              />
              <div className="relative flex flex-col gap-4 items-center w-full">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-slate-200 absolute -top-8 right-0 z-20">
                  <img
                    src="/partners/salesforce.png"
                    alt="Salesforce Logo"
                    className="h-6 object-contain"
                    onError={(e) => { e.target.src = '/dimconLogoIcon.png'; e.target.className = "h-5 object-contain opacity-50" }}
                  />
                </div>

                <div className="flex gap-4 w-full">
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xl flex-1 flex flex-col items-center text-center">
                    <Database className="w-6 h-6 text-slate-400 mb-2" />
                    <span className="text-sm font-bold text-slate-700">Customer Data</span>
                  </motion.div>
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xl flex-1 flex flex-col items-center text-center mt-6">
                    <Users className="w-6 h-6 text-blue-400 mb-2" />
                    <span className="text-sm font-bold text-slate-700">Sales</span>
                  </motion.div>
                </div>

                <div className="flex gap-4 w-full justify-center px-8">
                  <ArrowDown className="text-slate-300 w-6 h-6" />
                  <ArrowDown className="text-slate-300 w-6 h-6 mt-6" />
                </div>

                <div className="flex gap-4 w-full">
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xl flex-1 flex flex-col items-center text-center">
                    <Heart className="w-6 h-6 text-indigo-400 mb-2" />
                    <span className="text-sm font-bold text-slate-700">Service</span>
                  </motion.div>
                  <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xl flex-1 flex flex-col items-center text-center mt-6">
                    <Zap className="w-6 h-6 text-amber-400 mb-2" />
                    <span className="text-sm font-bold text-slate-700">Engagement</span>
                  </motion.div>
                </div>

                <div className="flex justify-center w-full mt-4">
                  <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-xl shadow-blue-500/20 flex flex-col items-center text-center w-2/3 z-10">
                    <Search className="w-8 h-8 text-white mb-2" />
                    <span className="text-base font-bold text-white">360° Customer View</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Your CRM Should Connect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">More Than Customer Data.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We leverage our expertise in customer engagement solutions to help you utilize diverse data sources effectively. By bringing information together, we enable you to develop detailed customer profiles, foster meaningful customer relationships, and deliver personalized experiences across every touchpoint.
            </p>
            <div className="flex items-center gap-4 text-blue-700 font-bold">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
              <span>Enable better collaboration, visibility, and experiences.</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="flex flex-col items-center gap-3 w-full max-w-xs relative z-10 value-grid">
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 w-full text-center font-bold text-slate-700">
                Customer Data
              </div>
              <ArrowDown className="text-slate-300 w-6 h-6" />
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 w-full text-center font-bold text-slate-700">
                Sales
              </div>
              <ArrowDown className="text-slate-300 w-6 h-6" />
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 w-full text-center font-bold text-slate-700">
                Service
              </div>
              <ArrowDown className="text-slate-300 w-6 h-6" />
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 w-full text-center font-bold text-slate-700">
                Customer Engagement
              </div>
              <ArrowDown className="text-blue-300 w-6 h-6" />
              <div className="bg-blue-600 px-6 py-4 rounded-xl shadow-lg w-full text-center font-bold text-white text-lg">
                Unified Customer View
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Design & Planning", desc: "Align the CRM solution with your operational requirements and strategic business goals.", icon: <LayoutTemplate /> },
    { title: "Configuration", desc: "Tailor the CRM environment to perfectly match your customer-facing processes.", icon: <Settings /> },
    { title: "Role Definition & Security", desc: "Establish precise user roles, access levels, and robust security protocols for customer data.", icon: <ShieldCheck /> },
    { title: "System Integration", desc: "Connect your CRM seamlessly with your existing technology stack for unified operations.", icon: <LinkIcon /> },
    { title: "Testing", desc: "Rigorously validate CRM functionality and system readiness before organizational rollout.", icon: <Activity /> },
    { title: "User Training & Onboarding", desc: "Equip your teams with the knowledge and confidence to maximize the new CRM system.", icon: <MonitorPlay /> },
    { title: "UAT Support", desc: "Guide users through comprehensive acceptance testing to ensure the CRM meets all needs.", icon: <Users /> },
    { title: "Go-Live Planning", desc: "Meticulously prepare your organization and the CRM system for a smooth production deployment.", icon: <Zap /> }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">CRM Implementation Services</h2>
          <p className="text-lg text-slate-600">Our comprehensive approach covers the entire CRM implementation lifecycle, ensuring your system is built to drive customer engagement.</p>
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

const Outcomes = () => {
  const outcomes = [
    { title: "Connected Customer Data", desc: "Unify information from diverse sources into a single, reliable repository.", icon: <Database /> },
    { title: "Better Customer Profiles", desc: "Develop detailed, actionable insights based on comprehensive customer interactions.", icon: <UserPlus /> },
    { title: "Personalized Customer Experiences", desc: "Deliver tailored engagement that resonates with individual customer needs.", icon: <Heart /> },
    { title: "Improved Business Efficiency", desc: "Streamline workflows and optimize processes across your sales and service teams.", icon: <Zap /> },
    { title: "Stronger Customer Relationships", desc: "Foster meaningful connections by empowering your teams with the right information.", icon: <Users /> }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What a Connected CRM Changes</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Experience tangible business outcomes driven by our proven customer engagement solutions.</p>
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

const SalesforceSection = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <img
              src="/partners/salesforce.png"
              alt="Salesforce Logo"
              className="h-16 object-contain"
              onError={(e) => { e.target.src = '/dimconLogoIcon.png'; e.target.className = "h-12 object-contain opacity-50" }}
            />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Salesforce Behind Your CRM</h2>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            As a Salesforce Gold Consulting Partner, DimensionCG provides expert guidance for seamless CRM implementations. We deliver tailored Salesforce solutions designed to optimize customer interactions and elevate your business operations.
          </p>
          <Link to="/cloud-applications/salesforce" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
            Explore Our Salesforce Expertise <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const EnterpriseIntegration = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="relative w-full max-w-md p-8">
            <div className="relative flex justify-center items-center h-full w-full">
              <img
                src="/enterprise-integration.png"
                alt="Enterprise Integration Diagram"
                className="w-full max-w-md h-auto object-contain rounded-xl shadow-md mix-blend-multiply
             [mask-image:radial-gradient(circle,black_68%,transparent_100%)]
             [-webkit-mask-image:radial-gradient(circle,black_68%,transparent_100%)]"
              />

              {/* Soft edge fade */}
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-[radial-gradient(circle,transparent_65%,rgba(248,250,252,0.85)_88%,rgb(248,250,252)_100%)]"></div>
            </div>
          </div>


          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              From CRM Implementation to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Integration.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A CRM achieves its full potential when connected to your broader enterprise technology landscape. We specialize in robust system integration, ensuring your CRM does not operate independently.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              By connecting connected business applications and your existing infrastructure, we create unified operations where customer data flows seamlessly across your entire organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const WhyDimensionCG = () => {
  const cards = [
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      title: "Certified CRM Expertise",
      desc: "Our team comprises highly certified CRM professionals with deep domain knowledge across all major modules."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: "Proven Implementation Methodology",
      desc: "We utilize a proprietary, risk-mitigated framework that ensures on-time, on-budget implementations."
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      title: "Deep Industry Experience",
      desc: "Tailored solutions designed specifically for the unique regulatory and operational needs of your industry."
    },
    {
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      title: "Post Go-Live Optimization",
      desc: "Continuous support, training, and update management to maximize your long-term ROI."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">

          {/* Left Side */}
          <div className="w-full lg:w-5/12">
            <div className="flex items-center text-blue-600 font-bold text-xs tracking-[0.15em] uppercase mb-6">
              <span className="w-8 h-[2px] bg-blue-600 mr-4"></span>
              CRM Implementation Excellence
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Why Choose <br /><span className="text-blue-600">DimensionCG</span><br /> for CRM Implementation?
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              A CRM is powerful. Maximizing its value requires the right strategy, implementation approach and long-term expertise. We partner with you beyond the go-live date to ensure true digital transformation.
            </p>


          </div>

          {/* Right Side */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pr-4">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
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
      question: "What does DimensionCG's CRM implementation service include?",
      answer: "Our implementation services cover the entire project lifecycle, including comprehensive design and planning, system configuration, role definition and security, system integration, rigorous testing, user training and onboarding, UAT support, and go-live planning."
    },
    {
      question: "Which CRM platform does DimensionCG implement?",
      answer: "We specialize in implementing Salesforce. As a Salesforce Gold Consulting Partner, we leverage its robust capabilities to deliver tailored solutions that optimize your customer interactions."
    },
    {
      question: "Can Salesforce integrate with existing business systems?",
      answer: "Yes, custom system integration is one of our core strengths. We seamlessly connect your CRM with your existing infrastructure and business applications to ensure unified operations and smooth data flow."
    },
    {
      question: "Does DimensionCG provide customer data migration?",
      answer: "Absolutely. We handle complex data migration projects, ensuring your valuable customer information is securely and accurately transferred from legacy systems into your new CRM environment."
    },
    {
      question: "Does DimensionCG provide training and post-implementation support?",
      answer: "Yes. We prioritize expert user training and adoption to prepare your teams to confidently use the system. We also provide dedicated UAT support and meticulous go-live planning to ensure a smooth transition."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">CRM Implementation FAQs</h2>
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
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-500 shrink-0 transition-all duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0 transition-all duration-300 hover:text-blue-500" />
                  )}
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
          YOUR CUSTOMERS ALREADY TELL YOU A LOT.
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
          Give Your Teams One Place <br className="hidden md:block" /> to Understand Them.
        </h2>

        <p className="text-xl text-blue-100/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          Unify your customer information, connect your business processes, and start delivering personalized experiences with a CRM implementation designed around how your business truly operates.
        </p>

        <Link to="/company/contact" className="inline-block px-10 py-5 bg-white text-blue-900 rounded-xl font-bold shadow-2xl hover:shadow-white/20 hover:bg-slate-50 transition-all text-lg hover:-translate-y-1">
          Discuss Your CRM Implementation
        </Link>
      </div>
    </section>
  );
};

const CrmImplementation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
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

      gsap.fromTo(".value-grid > div",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".value-grid", start: "top 80%" } }
      );

      gsap.fromTo(".services-grid > div",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".services-grid", start: "top 80%" } }
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
      <Outcomes />
      <SalesforceSection />
      <EnterpriseIntegration />
      <WhyDimensionCG />
      <FAQSection />
      <CTA />
    </main>
  );
};

export default CrmImplementation;
