import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, TrendingUp, Headset, Users, Globe, ShoppingCart, PieChart, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 'sales',
    title: 'Sales Cloud',
    icon: <TrendingUp className="w-5 h-5" />,
    shortDesc: 'Drive revenue growth',
    description: 'Accelerate revenue growth, improve forecast accuracy, and empower your sales reps with intuitive automation tools.',
    capabilities: ['Opportunity Management', 'Sales Forecasting', 'Lead Management', 'Pipeline Analytics'],
    outcomes: 'Increase win rates by 28% and improve forecast accuracy.',
  },
  {
    id: 'service',
    title: 'Service Cloud',
    icon: <Headset className="w-5 h-5" />,
    shortDesc: 'Transform customer support',
    description: 'Provide faster, more intuitive customer support across every channel with omnichannel routing, self-service portals, and AI-driven case resolution.',
    capabilities: ['Case Management', 'Omnichannel Routing', 'Self-Service Portals', 'Knowledge Base'],
    outcomes: 'Reduce average resolution time by 30% and increase customer satisfaction.',
  },
  {
    id: 'marketing',
    title: 'Marketing Cloud',
    icon: <Users className="w-5 h-5" />,
    shortDesc: 'Hyper-personalized journeys',
    description: 'Create hyper-personalized, cross-channel customer journeys that drive engagement, loyalty, and measurable ROI.',
    capabilities: ['Journey Builder', 'Email Studio', 'Social Studio', 'Marketing Analytics'],
    outcomes: 'Increase marketing campaign ROI and drive higher engagement rates.',
  },
  {
    id: 'experience',
    title: 'Experience Cloud',
    icon: <Globe className="w-5 h-5" />,
    shortDesc: 'Engage customers and partners',
    description: 'Build branded, interactive portals and communities for customers, partners, and employees to collaborate seamlessly.',
    capabilities: ['Partner Portals', 'Customer Communities', 'Employee Portals', 'Content Management'],
    outcomes: 'Enhance partner collaboration and improve customer self-service.',
  },
  {
    id: 'commerce',
    title: 'Commerce Cloud',
    icon: <ShoppingCart className="w-5 h-5" />,
    shortDesc: 'Unified ecommerce experiences',
    description: 'Deliver seamless, unified B2B and B2C ecommerce experiences across all digital touchpoints with AI-driven merchandising.',
    capabilities: ['B2B Commerce', 'B2C Commerce', 'Order Management', 'AI Merchandising'],
    outcomes: 'Grow online revenue and increase average order value.',
  },
  {
    id: 'analytics',
    title: 'Analytics & AI',
    icon: <PieChart className="w-5 h-5" />,
    shortDesc: 'Data-driven insights',
    description: 'Harness the power of CRM Analytics, Tableau, and Einstein AI for deep data visualization and predictive insights.',
    capabilities: ['Predictive Analytics', 'Data Visualization', 'Einstein Discovery', 'Performance Dashboards'],
    outcomes: 'Make faster, data-driven decisions and uncover hidden business opportunities.',
  },
];

const renderDashboardContent = (id) => {
  switch (id) {
    case 'sales':
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-[10px] text-slate-500 mb-1 uppercase font-semibold">Pipeline Value</div>
              <div className="text-lg font-bold text-slate-800">$12.5M</div>
              <div className="text-[10px] text-emerald-500 font-medium mt-1">↑ 18% vs last qt</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-[10px] text-slate-500 mb-1 uppercase font-semibold">Win Rate</div>
              <div className="text-lg font-bold text-slate-800">42%</div>
              <div className="text-[10px] text-emerald-500 font-medium mt-1">↑ 5% vs last qt</div>
            </div>
          </div>
          <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 p-3 flex items-end gap-2">
            {[30, 50, 40, 70, 60, 90, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-200 to-[#00a1e0] rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      );
    case 'service':
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="w-10 h-10 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-500 font-bold text-xs">96%</div>
            <div>
              <div className="text-xs font-semibold text-slate-800">CSAT Score</div>
              <div className="text-[10px] text-slate-500">Above industry avg</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-3">
            <div className="text-[10px] uppercase font-semibold text-slate-500">Cases by Channel</div>
            {[{ label: 'Web', w: '65%', c: 'bg-[#00a1e0]' }, { label: 'Phone', w: '25%', c: 'bg-emerald-500' }, { label: 'Social', w: '10%', c: 'bg-purple-500' }].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px] font-medium"><span>{item.label}</span></div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full ${item.c}`} style={{ width: item.w }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'marketing':
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
              <div className="text-[10px] font-semibold text-slate-500 mb-2 uppercase">Email Open Rate</div>
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-200" />
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125" strokeDashoffset="45" className="text-[#00a1e0]" />
                </svg>
                <span className="absolute text-xs font-bold text-slate-800">32%</span>
              </div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex flex-col justify-center items-center">
              <div className="w-full flex items-center justify-between mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00a1e0]"></div>
                <div className="h-0.5 flex-1 bg-slate-200 mx-1"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="h-0.5 flex-1 bg-slate-200 mx-1"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>
              <div className="text-[10px] font-medium text-slate-600 text-center mt-2">Active Journeys</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-800">Marketing Qualified Leads</div>
              <div className="text-[10px] text-slate-500">This Month</div>
            </div>
            <div className="text-lg font-bold text-[#00a1e0]">842</div>
          </div>
        </div>
      );
    case 'experience':
    case 'commerce':
    case 'analytics':
      return (
        <div className="space-y-3">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="text-[10px] uppercase font-semibold text-slate-500 mb-3">Performance Metrics</div>
            <div className="flex items-end justify-center gap-4 h-20">
              <div className="flex flex-col justify-end gap-1 items-center w-12">
                <div className="w-full bg-slate-300 rounded-t-sm" style={{ height: '50px' }}></div>
                <div className="text-[9px] font-medium text-slate-500">Target</div>
              </div>
              <div className="flex flex-col justify-end gap-1 items-center w-12">
                <div className="w-full bg-[#00a1e0] rounded-t-sm" style={{ height: '75px' }}></div>
                <div className="text-[9px] font-medium text-slate-500">Actual</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
              <div className="text-[10px] text-slate-500 mb-1">Engagement Rate</div>
              <div className="text-sm font-bold text-slate-800">45.2%</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
              <div className="text-[10px] text-slate-500 mb-1">Conversion Growth</div>
              <div className="text-sm font-bold text-emerald-500">+12.4%</div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const SalesforceSolutions = () => {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.solutions-header',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const activeSolution = solutions.find(s => s.id === activeTab);

  return (
    <section ref={containerRef} className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="solutions-header max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
            Salesforce Solutions We Deliver
          </h2>
          <p className="text-lg text-[#000000]">
            Tap into the full power of the Salesforce ecosystem. We implement and optimize specialized clouds tailored to your business functions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 border-b border-border pb-px max-w-5xl mx-auto">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`flex-1 min-w-[150px] py-4 px-4 lg:px-6 text-sm font-medium transition-all relative flex items-center justify-center gap-2
                ${activeTab === solution.id ? 'text-[#00a1e0]' : 'text-slate-500 hover:text-[#000000] hover:bg-slate-50 rounded-t-lg'}`}
            >
              {solution.icon}
              <span className="whitespace-nowrap">{solution.title}</span>
              {activeTab === solution.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00a1e0]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row"
            >
              {/* Left Content */}
              <div className="w-full md:w-1/2 p-10 lg:p-14">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">{activeSolution.title}</h3>
                <p className="text-sm font-medium text-[#00a1e0] mb-6">{activeSolution.shortDesc}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">{activeSolution.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[#000000] mb-4 uppercase tracking-wider">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSolution.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#00a1e0] mt-0.5 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg mb-8 border border-slate-100">
                  <h4 className="text-xs font-semibold text-[#000000] mb-1 uppercase tracking-wider">Business Outcome</h4>
                  <p className="text-sm text-slate-600 font-medium">{activeSolution.outcomes}</p>
                </div>

                <button className="text-[#00a1e0] font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
                  Explore {activeSolution.title} Services
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </button>
              </div>

              {/* Right Illustration */}
              <div className="w-full md:w-1/2 bg-slate-50 p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50"></div>

                <div className="relative z-10 w-full max-w-sm sf-glass rounded-xl shadow-lg border border-white p-6">
                  <div className="flex items-center gap-4 border-b border-border/50 pb-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#00a1e0]">
                      {activeSolution.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#000000] text-sm">{activeSolution.title} Dashboard</h4>
                      <p className="text-xs text-[#000000]">Real-time Analytics</p>
                    </div>
                  </div>
                  {renderDashboardContent(activeSolution.id)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SalesforceSolutions;
