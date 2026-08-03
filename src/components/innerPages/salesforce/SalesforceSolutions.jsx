import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Headset, Users, Globe, ShoppingCart, PieChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 'sales',
    icon: TrendingUp,
    title: 'Sales Cloud',
    desc: 'Accelerate revenue growth, improve forecast accuracy, and empower your sales reps with intuitive automation tools.',
    features: ['Opportunity Management', 'Sales Forecasting', 'Lead Management', 'Pipeline Analytics'],
    kpi1: { label: 'Win Rate', val: '+28%' },
    kpi2: { label: 'Forecast Accuracy', val: '95%' }
  },
  {
    id: 'service',
    icon: Headset,
    title: 'Service Cloud',
    desc: 'Provide faster, more intuitive customer support across every channel with omnichannel routing, self-service portals, and AI-driven case resolution.',
    features: ['Case Management', 'Omnichannel Routing', 'Self-Service Portals', 'Knowledge Base'],
    kpi1: { label: 'Resolution Time', val: '-30%' },
    kpi2: { label: 'Customer Sat', val: '+45%' }
  },
  {
    id: 'marketing',
    icon: Users,
    title: 'Marketing Cloud',
    desc: 'Create hyper-personalized, cross-channel customer journeys that drive engagement, loyalty, and measurable ROI.',
    features: ['Journey Builder', 'Email Studio', 'Social Studio', 'Marketing Analytics'],
    kpi1: { label: 'Campaign ROI', val: '+35%' },
    kpi2: { label: 'Engagement', val: '+50%' }
  },
  {
    id: 'experience',
    icon: Globe,
    title: 'Experience Cloud',
    desc: 'Build branded, interactive portals and communities for customers, partners, and employees to collaborate seamlessly.',
    features: ['Partner Portals', 'Customer Communities', 'Employee Portals', 'Content Management'],
    kpi1: { label: 'Self-Service', val: '+60%' },
    kpi2: { label: 'Collaboration', val: 'Real-time' }
  },
  {
    id: 'commerce',
    icon: ShoppingCart,
    title: 'Commerce Cloud',
    desc: 'Deliver seamless, unified B2B and B2C ecommerce experiences across all digital touchpoints with AI-driven merchandising.',
    features: ['B2B Commerce', 'B2C Commerce', 'Order Management', 'AI Merchandising'],
    kpi1: { label: 'Online Revenue', val: '+40%' },
    kpi2: { label: 'Order Value', val: '+20%' }
  },
  {
    id: 'analytics',
    icon: PieChart,
    title: 'Analytics & AI',
    desc: 'Harness the power of CRM Analytics, Tableau, and Einstein AI for deep data visualization and predictive insights.',
    features: ['Predictive Analytics', 'Data Visualization', 'Einstein Discovery', 'Performance Dashboards'],
    kpi1: { label: 'Data Visibility', val: '100%' },
    kpi2: { label: 'Decision Making', val: 'Real-time' }
  }
];

const SalesforceSolutions = () => {
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
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00a1e0]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="solutions-header mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#00a1e0]" />
            <span className="uppercase tracking-[0.2em] text-[#00a1e0] text-sm font-bold">Platform Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Salesforce Solutions We Deliver
          </h2>
          <p className="text-lg text-slate-600">
            From Sales Cloud to advanced AI analytics, we help you deploy and optimize the full suite of Salesforce products.
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
                  className={`tab-item group flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-sky-50 border border-sky-100 shadow-sm' 
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#00a1e0] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-[#00a1e0]'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className={`font-semibold text-lg transition-colors ${isActive ? 'text-[#00a1e0]' : 'text-slate-700'}`}>
                      {solution.title}
                    </span>
                  </div>
                  {isActive && <ArrowRight size={18} className="text-[#00a1e0]" />}
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
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00a1e0]" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Data Visualization / KPIs */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="text-3xl font-black text-[#00a1e0] mb-1">{activeData.kpi1.val}</div>
                    <div className="text-sm text-slate-500 font-medium">{activeData.kpi1.label}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="text-3xl font-black text-slate-800 mb-1">{activeData.kpi2.val}</div>
                    <div className="text-sm text-slate-500 font-medium">{activeData.kpi2.label}</div>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-[#00a1e0] font-bold hover:text-[#0089c1] transition-colors group">
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

export default SalesforceSolutions;
