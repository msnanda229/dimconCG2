import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Briefcase, TrendingUp, Award, DollarSign, BarChart2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 'hcm',
    icon: Users,
    title: 'Human Capital Management',
    desc: 'Empower your workforce with comprehensive HR tools designed for the modern global enterprise.',
    features: ['Core HR & Payroll', 'Benefits Administration', 'Time Tracking & Absence', 'Employee Experience'],
    kpi1: { label: 'User Adoption', val: '95%' },
    kpi2: { label: 'HR Efficiency', val: '+40%' }
  },
  {
    id: 'finance',
    icon: Briefcase,
    title: 'Financial Management',
    desc: 'Gain real-time financial insights and automate complex accounting processes with a single core system.',
    features: ['Core Accounting', 'Revenue Management', 'Expenses & Procurement', 'Global Compliance'],
    kpi1: { label: 'Close Faster', val: '50%' },
    kpi2: { label: 'Audit Time', val: '-30%' }
  },
  {
    id: 'planning',
    icon: TrendingUp,
    title: 'Workforce Planning',
    desc: 'Align your business strategy with workforce capabilities using continuous, data-driven planning.',
    features: ['Headcount Planning', 'Skills Ontology', 'Scenario Modeling', 'Capacity Management'],
    kpi1: { label: 'Forecast Accuracy', val: '98%' },
    kpi2: { label: 'Planning Cycles', val: 'Faster' }
  },
  {
    id: 'talent',
    icon: Award,
    title: 'Talent Management',
    desc: 'Attract, develop, and retain top talent with data-backed insights and personalized career paths.',
    features: ['Performance Enablement', 'Career Planning', 'Learning & Development', 'Recruiting'],
    kpi1: { label: 'Retention', val: '+25%' },
    kpi2: { label: 'Time to Hire', val: '-15 Days' }
  },
  {
    id: 'payroll',
    icon: DollarSign,
    title: 'Payroll & Benefits',
    desc: 'Ensure accurate, timely compensation across global workforces with continuous payroll processing.',
    features: ['Global Payroll', 'Continuous Calculation', 'Tax Compliance', 'Flexible Benefits'],
    kpi1: { label: 'Payroll Errors', val: '0.1%' },
    kpi2: { label: 'Processing Time', val: '-60%' }
  },
  {
    id: 'analytics',
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Unlock the power of your HR and financial data with predictive analytics and customizable dashboards.',
    features: ['Prism Analytics', 'People Analytics', 'Discovery Boards', 'Benchmarking'],
    kpi1: { label: 'Data Visibility', val: '100%' },
    kpi2: { label: 'Report Creation', val: 'Instant' }
  }
];

const WorkdaySolutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.solutions-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
      );

      gsap.fromTo('.tab-item',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.tabs-container', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Animate content change
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [activeTab]);

  const activeData = solutions[activeTab];

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden border-t border-slate-100">

      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right z-0 pointer-events-none" />
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#005cb9]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="solutions-header mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#005cb9]" />
            <span className="uppercase tracking-[0.2em] text-[#005cb9] text-sm font-bold">Platform Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Workday Solutions We Deliver
          </h2>
          <p className="text-lg text-slate-600">
            From Human Capital to Financial Management, we help you deploy and optimize the full suite of Workday enterprise applications.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

          {/* Tabs Menu */}
          <div className="tabs-container w-full lg:w-[35%] flex flex-col gap-2">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(idx)}
                  className={`tab-item group flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left ${isActive
                    ? 'bg-blue-50 border border-blue-100 shadow-sm'
                    : 'hover:bg-slate-50 border border-transparent'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-[#005cb9] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-[#005cb9]'
                      }`}>
                      <Icon size={20} />
                    </div>
                    <span className={`font-semibold text-lg transition-colors ${isActive ? 'text-[#005cb9]' : 'text-slate-700'}`}>
                      {solution.title}
                    </span>
                  </div>
                  {isActive && <ArrowRight size={18} className="text-[#005cb9]" />}
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="w-full lg:w-[65%]">
            <div
              ref={contentRef}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              {/* Decorative graphic inside card */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <activeData.icon size={200} />
              </div>

              <div className="relative z-10">


                <h3 className="text-3xl font-bold text-slate-900 mb-4">{activeData.title}</h3>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                  {activeData.desc}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {activeData.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#005cb9]" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Data Visualization / KPIs */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="text-3xl font-black text-[#005cb9] mb-1">{activeData.kpi1.val}</div>
                    <div className="text-sm text-slate-500 font-medium">{activeData.kpi1.label}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="text-3xl font-black text-slate-800 mb-1">{activeData.kpi2.val}</div>
                    <div className="text-sm text-slate-500 font-medium">{activeData.kpi2.label}</div>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-[#005cb9] font-bold hover:text-[#004a94] transition-colors group">
                  Discuss your {activeData.title} strategy
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkdaySolutions;
