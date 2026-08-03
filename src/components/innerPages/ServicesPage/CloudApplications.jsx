import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Cloud, Database, BarChart3, Settings,
  ShieldCheck, ArrowUpRight, Zap, RefreshCw,
  Search, Link as LinkIcon, Users, Building2,
  CheckCircle2, Server, Globe2, Layers, Briefcase, Plus, Minus, Factory
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Industries from '../../sections/IndustriesSection';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-[55%] hero-text-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-8"
            >
              <Cloud size={16} />
              <span className="tracking-widest text-xs">CLOUD APPLICATIONS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-[4.5rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-8"
            >
              Cloud Applications That Keep <br className="hidden lg:block" /> Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Moving</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
            >
              Move beyond disconnected systems and legacy applications with cloud solutions built around your business. From implementation and migration to integration and ongoing support, DimensionCG brings your enterprise applications together for better visibility, flexibility, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors flex items-center gap-2 group"
              >
                Explore Cloud Applications
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-700 rounded-xl font-bold shadow-sm border border-slate-200 hover:border-blue-200 hover:bg-slate-50 transition-colors"
              >
                Talk to an Expert
              </motion.button>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] relative h-[500px] lg:h-[600px] flex items-center justify-center hero-visual">
            {/* 3D Glass cloud abstract visualization */}
            <div className="relative w-full h-full max-w-md mx-auto">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-20 flex items-center justify-center"
              >
                <div className="w-72 h-56 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/20" />
                  <Cloud size={100} className="text-blue-600/80 drop-shadow-xl" />
                </div>
              </motion.div>

              {/* Floating Nodes */}
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[15%] left-[0%] w-20 h-20 bg-white/70 backdrop-blur-md border border-white rounded-2xl shadow-xl flex items-center justify-center z-30"
              >
                <Database className="text-indigo-500 w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[20%] right-[0%] w-24 h-24 bg-white/70 backdrop-blur-md border border-white rounded-[1.5rem] shadow-xl flex items-center justify-center z-30"
              >
                <BarChart3 className="text-blue-500 w-10 h-10" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[10%] right-[10%] w-14 h-14 bg-white/70 backdrop-blur-md border border-white rounded-2xl shadow-lg flex items-center justify-center z-30"
              >
                <Settings className="text-slate-700 w-6 h-6" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const BusinessChallenges = () => {
  const challenges = [
    { icon: <Database />, title: "Disconnected Systems", desc: "Data locked in silos prevents unified visibility across your enterprise." },
    { icon: <Search />, title: "Limited Visibility", desc: "Lack of real-time insights delays critical business decision-making." },
    { icon: <RefreshCw />, title: "Manual Processes", desc: "Reliance on spreadsheets and manual entry increases error rates." },
    { icon: <LinkIcon />, title: "Complex Integrations", desc: "Patchwork middleware that breaks during system updates." },
    { icon: <Server />, title: "Legacy Limitations", desc: "Outdated on-premise solutions that scale poorly and cost too much." }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight section-title">
              Your Business Has Moved Forward.<br />
              <span className="text-slate-400">Have Your Applications?</span>
            </h2>
            <p className="text-lg text-slate-600 section-desc">
              Legacy infrastructure creates bottlenecks. Modern cloud applications remove them, paving the way for scalable growth and agility.
            </p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 challenges-grid">
            {challenges.map((chal, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden ${i === 4 ? 'md:col-span-2 md:flex md:items-center md:gap-8' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-md relative z-10 shrink-0"
                >
                  {chal.icon}
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{chal.title}</h3>
                  <p className="text-slate-600">{chal.desc}</p>
                </div>
                <ArrowUpRight className="absolute top-8 right-8 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Briefcase />, title: "Cloud Consulting", desc: "Strategic roadmaps and readiness assessments to align cloud tech with business goals." },
    { icon: <Layers />, title: "Cloud Implementation", desc: "End-to-end deployment of enterprise platforms with proven methodologies." },
    { icon: <Globe2 />, title: "Cloud Migration", desc: "Secure, structured migration from legacy on-premise systems to modern cloud infrastructure." },
    { icon: <LinkIcon />, title: "Cloud Integration", desc: "Seamless connectivity across your ecosystem using modern iPaaS tools or native APIs." },
    { icon: <Zap />, title: "Cloud Optimization", desc: "Performance tuning, license optimization, and process automation post go-live." },
    { icon: <ShieldCheck />, title: "Application Support", desc: "24/7 managed services, release testing, and continuous improvement." }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 services-header">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            More Than Moving to the Cloud
          </h2>
          <p className="text-xl text-slate-600">
            A successful cloud strategy requires more than just a lift-and-shift. We provide comprehensive services across the entire application lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              whileHover="hover"
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm relative group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500 shadow-sm">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-500">{svc.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 group-hover:text-blue-50 transition-colors duration-500">
                  {svc.desc}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-white transition-colors duration-500">
                  <span>Learn more</span>
                  <motion.div variants={{ hover: { x: 5 } }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConnectedBusiness = () => {
  const nodes = [
    {
      id: 1,
      title: "Finance",
      desc: "Bring financial processes and business data together for greater visibility and control.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "text-blue-500",
      bg: "bg-blue-50",
      borderHover: "hover:border-blue-400",
      shadowHover: "hover:shadow-blue-500/20",
      gradient: "from-blue-50 to-blue-100/50"
    },
    {
      id: 2,
      title: "HCM",
      desc: "Connect workforce information and HR processes through modern cloud applications.",
      icon: <Users className="w-8 h-8" />,
      color: "text-orange-500",
      bg: "bg-orange-50",
      borderHover: "hover:border-orange-400",
      shadowHover: "hover:shadow-orange-500/20",
      gradient: "from-orange-50 to-orange-100/50"
    },
    {
      id: 3,
      title: "Supply Chain",
      desc: "Improve visibility across planning, inventory, procurement, and operations.",
      icon: <Factory className="w-8 h-8" />,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      borderHover: "hover:border-emerald-400",
      shadowHover: "hover:shadow-emerald-500/20",
      gradient: "from-emerald-50 to-emerald-100/50"
    },
    {
      id: 4,
      title: "Customer Management",
      desc: "Connect customer information and processes to support sales, service, and stronger customer relationships.",
      icon: <Building2 className="w-8 h-8" />,
      color: "text-purple-500",
      bg: "bg-purple-50",
      borderHover: "hover:border-purple-400",
      shadowHover: "hover:shadow-purple-500/20",
      gradient: "from-purple-50 to-purple-100/50"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-[100px]" />

        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-50/50 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Heading */}
        <div className="text-center mb-24 connected-header">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200 shadow-sm">
            ONE CONNECTED ECOSYSTEM
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            One Cloud Strategy.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Connected Business Functions.
            </span>
          </h2>

          <p className="text-2xl text-slate-700 font-medium mb-4">
            Connect More Than Applications
          </p>

          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Cloud applications create greater value when different parts of the
            business can work with connected information and processes.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mt-16">

          {/* Desktop Connector */}
          <div className="hidden lg:block absolute top-[88px] left-[10%] right-[10%] h-[2px] bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"
            />
          </div>

          {/* Mobile Connector */}
          <div className="lg:hidden absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[2px] bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="h-1/2 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-70"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 text-center flex flex-col items-center shadow-sm transition-all duration-300 ${node.borderHover} ${node.shadowHover}`}
              >
                {/* Top Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${node.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${node.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 w-24 h-24 rounded-2xl ${node.bg} ${node.color} flex items-center justify-center mb-8 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-20">
                    {node.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-black text-slate-900 mb-3">
                  {node.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm leading-relaxed text-slate-500">
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CloudPlatforms = () => {
  const platforms = [
    { name: "Oracle Cloud", logo: "/partners/oracle.png", desc: "Comprehensive cloud suite for enterprise financials, supply chain, and HCM.", link: "/oracle-cloud" },
    { name: "Oracle NetSuite", logo: "/partners/netsuite.png", desc: "The #1 cloud ERP for fast-growing mid-market and enterprise organizations.", link: "/cloud-applications/netsuite" },
    { name: "Salesforce", logo: "/partners/salesforce.png", desc: "The world's leading CRM platform for sales, service, and marketing automation.", link: "/cloud-applications/salesforce" },
    { name: "Workday", logo: "/partners/workday.png", desc: "Enterprise cloud applications for finance and human resources.", link: "/cloud-applications/workday" }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16 platforms-title">
          The Right Platform for the Right Business Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 platforms-grid">
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

const WhyDimensionCG = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-slate-900 to-slate-900"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center why-title">
          Cloud Technology Is Only <br className="hidden md:block" /> Part of the Equation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 why-grid">
          {[
            { title: "Enterprise Expertise", desc: "Decades of experience navigating complex global deployments." },
            { title: "Leading Platforms", desc: "Deep partnerships with Oracle, Salesforce, and Workday." },
            { title: "Integration Expertise", desc: "Flawlessly connecting your entire enterprise ecosystem." },
            { title: "Beyond Implementation", desc: "Long-term partnership through managed services and support." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-colors group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
                <CheckCircle2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              {/* Timeline Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-700 overflow-hidden">
                <div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

<Industries />

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "What are cloud applications?", a: "Cloud applications are software programs where cloud-based and local components work together. They are hosted on remote servers and accessed via the internet, reducing local infrastructure costs." },
    { q: "Can DimensionCG migrate our legacy applications?", a: "Yes, we specialize in migrating legacy, on-premise systems to modern cloud infrastructure with zero to minimal downtime using proven structured methodologies." },
    { q: "Which platforms do you implement?", a: "We have deep expertise across tier-1 enterprise platforms including Oracle Cloud, Oracle NetSuite, Salesforce, and Workday." },
    { q: "Can cloud apps integrate with our existing tools?", a: "Absolutely. We utilize modern APIs and robust integration platforms like MuleSoft to seamlessly connect your entire digital ecosystem." },
    { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive Managed Services including 24/7 support, quarterly release testing, and continuous process optimization post go-live." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16 faq-header">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4 faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white hover:border-blue-100'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out`} style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}>
                  <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-blue-100/50 mt-2">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-indigo-900 to-slate-900 animate-pulse"></div>
      </div>

      {/* Moving Light Rays / Particles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-10 pointer-events-none"
        style={{ backgroundImage: 'conic-gradient(from 0deg, transparent 0 340deg, white 360deg)' }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8">
          YOUR CLOUD, YOUR WAY
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Your Applications Can Do <br className="hidden md:block" /> More in the Cloud.
        </h2>

        <p className="text-xl text-blue-100/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          Already using cloud applications? Planning a migration? Or still deciding which platform fits your business? Start with where you are, and we'll help you figure out what comes next.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-white text-blue-900 rounded-xl font-bold shadow-2xl hover:shadow-white/20 hover:bg-slate-50 transition-all text-lg"
        >
          Explore Your Cloud Options
        </motion.button>
      </div>
    </section>
  );
};

const CloudApplications = () => {
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
      gsap.fromTo(".challenges-grid > div",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".challenges-grid", start: "top 80%" } }
      );

      gsap.fromTo(".services-grid > div",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".services-grid", start: "top 80%" } }
      );

      gsap.fromTo(".platforms-grid > div",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".platforms-grid", start: "top 80%" } }
      );

      gsap.fromTo(".why-grid > div",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".why-grid", start: "top 80%" } }
      );

      gsap.fromTo(".industries-grid > div",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, scrollTrigger: { trigger: ".industries-grid", start: "top 85%" } }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="font-sans">
      <HeroSection />
      <BusinessChallenges />
      <Services />
      <ConnectedBusiness />
      <CloudPlatforms />
      <WhyDimensionCG />
      <Industries />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default CloudApplications;
