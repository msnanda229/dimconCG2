import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import CtaSection from '../../sections/CtaSection';
import {
  ArrowRight, Database, ShieldCheck, Zap,
  Search, Link as LinkIcon, Users, CheckCircle2,
  BarChart3, LayoutTemplate, Layers, ChevronDown,
  MonitorPlay, Focus, ArrowUpRight, Check, Activity,
  Server, RefreshCw, FileText, ArrowRightLeft, FileSearch, ShieldAlert,
  ServerCrash, FileCheck2, Workflow, CloudUpload, ArrowDown,
  Plus, Minus, HelpCircle
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
              <Database size={14} />
              Enterprise Data Migration
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight"
            >
              Moving Data Is Easy. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Moving It Right</span> Is What Matters.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              Move business-critical data accurately and securely with minimal business disruption. A flawless transition to your new enterprise environment starts here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors flex items-center gap-2 group">
                Discuss Your Migration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg flex items-center justify-center">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-80"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                src="/data-migration-hero.png"
                alt="Enterprise Data Migration Illustration"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MigrationChallenge = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 challenge-header">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            The Migration Challenge
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The risks of a poorly executed data migration can cripple your business operations. We navigate the complexities to ensure a flawless transition.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-1/4 right-1/4 h-1 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 challenge-flow relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <Server className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Legacy Data</h3>
              <p className="text-sm text-slate-500">Complex, fragmented, and often undocumented source systems.</p>
            </div>

            {/* Step 2 (Migration Risks) */}
            <div className="bg-white p-8 rounded-3xl border border-blue-200 shadow-[0_8px_30px_rgb(37,99,235,0.12)] text-center relative overflow-hidden transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 relative z-10">
                <ArrowRightLeft className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">Migration Risks</h3>

              <ul className="text-sm text-slate-700 text-left space-y-3 relative z-10 inline-block">
                <li className="flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-red-500" /> Data Quality Issues</li>
                <li className="flex items-center gap-2"><ServerCrash className="w-4 h-4 text-orange-500" /> Data Loss</li>
                <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-yellow-500" /> Compatibility Errors</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-500" /> Security Vulnerabilities</li>
                <li className="flex items-center gap-2"><MonitorPlay className="w-4 h-4 text-purple-500" /> Business Disruption</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">New Environment</h3>
              <p className="text-sm text-slate-500">A clean, optimized, and fully validated target application.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Data Assessment", desc: "Understand existing data, sources, structure, and migration requirements.", icon: FileSearch },
    { title: "Data Extraction", desc: "Extract required information from existing systems and applications safely.", icon: Database },
    { title: "Data Cleansing", desc: "Identify and address inaccurate, duplicate, or unnecessary information.", icon: RefreshCw },
    { title: "Data Transformation", desc: "Prepare and transform data into the structure required by the target environment.", icon: LayoutTemplate },
    { title: "Data Loading", desc: "Move validated data smoothly into the new enterprise system.", icon: ArrowUpRight },
    { title: "Data Validation", desc: "Verify migrated information for accuracy, completeness, and integrity.", icon: CheckCircle2 }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:flex md:items-end md:justify-between services-header">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold tracking-wider text-xs uppercase mb-6">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Data Migration <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const PipelineVisual = () => {
  const steps = [
    {
      title: "Assess",
      description: "Evaluate source systems, data quality, dependencies, and migration readiness."
    },
    {
      title: "Extract",
      description: "Securely extract business-critical data from legacy systems and applications."
    },
    {
      title: "Cleanse",
      description: "Identify duplicates, remove inconsistencies, and improve overall data quality."
    },
    {
      title: "Transform",
      description: "Convert and map data into the structure required by the target platform."
    },
    {
      title: "Load",
      description: "Load validated data into the new cloud or enterprise environment."
    },
    {
      title: "Validate",
      description: "Verify accuracy, completeness, and business integrity before go-live."
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 font-semibold text-xs tracking-[0.25em] uppercase mb-6">
            Migration Workflow
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
            From Source to Destination
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every successful data migration follows a structured process. We assess, extract, cleanse, transform, load, and validate business-critical information to ensure a secure, accurate, and seamless transition into the target enterprise platform.
          </p>
        </div>

        {/* Desktop Process (Horizontal) */}
        <div className="hidden lg:block relative max-w-7xl mx-auto mb-12">
          {/* Connector Line */}
          <div className="absolute top-[32px] left-[8%] right-[8%] h-[2px] bg-[#E2E8F0]" />

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <div key={index} className="flex flex-col items-center text-center group cursor-default">
                  {/* Step Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all duration-300 mb-6
                    ${isLast
                      ? 'bg-blue-600 text-white border-4 border-blue-100 group-hover:shadow-xl'
                      : 'bg-white text-blue-600 border border-slate-200 group-hover:border-slate-300 group-hover:shadow-lg'}`}
                  >
                    0{index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="text-xs uppercase tracking-widest font-semibold text-blue-600 mb-3">
                    STEP 0{index + 1}
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Process (Vertical) */}
        <div className="lg:hidden relative space-y-6 mb-12 max-w-lg mx-auto">
          {/* Vertical Connector */}
          <div className="absolute top-0 bottom-0 left-[31px] w-[2px] bg-[#E2E8F0]" />

          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div key={index} className="relative flex gap-8 group cursor-default">
                {/* Step Circle */}
                <div className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all duration-300 relative z-10
                  ${isLast
                    ? 'bg-blue-600 text-white border-4 border-blue-100 group-hover:shadow-xl'
                    : 'bg-white text-blue-600 border border-slate-200 group-hover:border-slate-300 group-hover:shadow-lg'}`}
                >
                  0{index + 1}
                </div>

                {/* Step Content */}
                <div className="pt-2 pb-6">
                  <div className="text-xs uppercase tracking-widest font-semibold text-blue-600 mb-2">
                    STEP 0{index + 1}
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Section */}



        {/* Bottom CTA */}


      </div>
    </section>
  );
};



const SupportedSystems = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 systems-header">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            What Can We Migrate?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We specialize in moving enterprise data securely to the platforms that power modern business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto systems-visual">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex-1 w-full text-center">
            <Server className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 text-lg">Existing Environment</h3>
            <p className="text-sm text-slate-500 mt-2">Legacy Systems, On-Premise ERPs, Custom Databases</p>
          </div>

          <div className="flex flex-col items-center justify-center shrink-0 text-blue-600">
            <ArrowRight className="w-8 h-8 hidden lg:block" />
            <ArrowDown className="w-8 h-8 lg:hidden" />
            <span className="text-xs font-bold uppercase tracking-wider mt-2">DimensionCG Migration</span>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-blue-200 shadow-[0_8px_30px_rgb(37,99,235,0.12)] flex-1 w-full relative overflow-hidden">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="flex items-center justify-center p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                <img src="/partners/oracle.png" alt="Oracle" className="h-10 object-contain  opacity-100  transition-all" />
              </div>
              <div className="flex items-center justify-center p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                <img src="/partners/salesforce.png" alt="Salesforce" className="h-10 object-contain  opacity-100  transition-all" />
              </div>
              <div className="flex items-center justify-center p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                <img src="/partners/netsuite.png" alt="NetSuite" className="h-6 object-contain  opacity-100 transition-all" />
              </div>
              <div className="flex items-center justify-center p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                <img src="/ai_logos/RTS_Logo_Colored.svg" alt="Rootstock" className="h-6 object-contain opacity-100 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const DataQuality = () => {
  const points = [
    { title: "Accuracy", desc: "Ensure migrated information reflects the source correctly without corruption.", icon: CheckCircle2 },
    { title: "Completeness", desc: "Verify that all required business data successfully reaches the target environment.", icon: Layers },
    { title: "Integrity", desc: "Maintain absolute consistency and relational structures across migrated information.", icon: LinkIcon },
    { title: "Validation", desc: "Rigorous testing of migrated data before final production deployment.", icon: FileSearch },
    { title: "Security", desc: "Protect sensitive business information throughout the entire migration process.", icon: ShieldCheck }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 quality-header">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            Data Quality at Every Step
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The biggest concern isn't simply moving data—it's whether that data remains usable and trustworthy afterward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 quality-grid justify-center">
          {points.map((pt, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                <pt.icon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">{pt.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyExpertise = () => {
  return (
    <section className="py-16 bg-blue-50 border-y border-blue-100">
      <div className="container mx-auto px-6 max-w-4xl text-center tech-expertise">
        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8">Technology & Integration Expertise</h3>
        <div className="bg-white p-10 rounded-3xl border border-blue-100 shadow-lg shadow-blue-900/5 flex flex-col md:flex-row items-center justify-center gap-10">
          <img src="/partners/celigo.png" alt="Celigo Integration Partner" className="h-12 object-contain" />
          <div className="h-px w-full md:h-16 md:w-px bg-slate-200"></div>
          <p className="text-slate-600 text-left max-w-md">
            As a Celigo Integration Partner, DimensionCG utilizes advanced iPaaS solutions to ensure complex data migrations and ongoing system integrations are executed flawlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

const WhyDimensionCG = () => {
  const reasons = [
    "Enterprise application expertise",
    "Data migration experience",
    "Integration capabilities",
    "Data quality and validation",
    "Structured migration execution",
    "Business continuity"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 why-text">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Why DimensionCG for Data Migration?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              You cannot afford to gamble with your business-critical data. We bring the deep technical knowledge and rigid methodology required to execute migrations correctly the first time.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 relative why-visual">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-4 translate-y-4 opacity-10"></div>
            <img src="/data-migration-expertise.png" alt="Data migration expertise" className="rounded-3xl shadow-2xl relative z-10 w-full h-[400px] object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "What is included in DimensionCG's data migration service?",
      a: "Our service provides end-to-end management of the migration lifecycle. This includes comprehensive data assessment, secure extraction from legacy systems, rigorous cleansing and transformation, validated loading into the target system, and final data integrity checks."
    },
    {
      q: "How do you maintain data accuracy during migration?",
      a: "We implement strict validation protocols at multiple checkpoints—before extraction, after transformation, and post-loading. By utilizing automated testing and side-by-side reconciliation, we ensure the migrated information exactly reflects the source without corruption."
    },
    {
      q: "Can DimensionCG migrate data from legacy systems?",
      a: "Yes. We specialize in extracting unstructured, siloed, and poorly documented data from on-premise legacy systems and safely mapping it to modern, cloud-based enterprise applications."
    },
    {
      q: "How is migrated data validated?",
      a: "Validation involves schema checks, row-count verifications, referential integrity testing, and business logic validation to ensure all relationships and critical data points function correctly in the new environment."
    },
    {
      q: "How do you minimize business disruption during data migration?",
      a: "We plan migrations in carefully sequenced phases, utilizing techniques such as delta loads and weekend cutovers. This highly structured approach ensures your daily operations continue uninterrupted while the new environment is populated."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden faq-container border-t border-slate-100">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="faq-header text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            Data Migration FAQs
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our data migration services, approach, and validation processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div 
                key={index} 
                className={`faq-item border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-slate-200 bg-white hover:border-blue-100'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIdx(isOpen ? -1 : index)}
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-blue-100/50 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


const DataMigration = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // Standard stagger animations for section content
      const sections = [
        '.challenge-header', '.challenge-flow > div',
        '.services-header', '.services-grid > div',
        '.pipeline-header', '.systems-header', '.systems-visual > div',
        '.quality-header', '.quality-grid > div',
        '.tech-expertise', '.why-text', '.why-visual',
        '.faq-container'
      ];

      sections.forEach(selector => {
        gsap.fromTo(selector,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: selector,
              start: "top 85%"
            }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen">
      <Hero />
      <MigrationChallenge />
      <Services />
      <PipelineVisual />
      <SupportedSystems />
      <DataQuality />
      <TechnologyExpertise />
      <WhyDimensionCG />
      <FAQSection />
      <CtaSection />
    </main>
  );
};

export default DataMigration;
