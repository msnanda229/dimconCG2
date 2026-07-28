import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Database, Users, Truck, PieChart, Briefcase, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 'erp',
    title: 'Oracle ERP',
    icon: <Database className="w-5 h-5" />,
    shortDesc: 'Enterprise Resource Planning',
    description: 'Modernize your financial operations with Oracle ERP Cloud. Gain real-time visibility, automate processes, and ensure compliance across your global operations.',
    capabilities: ['Financial Management', 'Project Management', 'Procurement', 'Risk Management'],
    outcomes: 'Reduce close times by 50% and improve financial reporting accuracy.',
  },
  {
    id: 'hcm',
    title: 'Oracle HCM',
    icon: <Users className="w-5 h-5" />,
    shortDesc: 'Human Capital Management',
    description: 'Transform your HR operations with a unified solution that connects every human resource process from hire to retire.',
    capabilities: ['Talent Management', 'Workforce Rewards', 'Workforce Management', 'HR Analytics'],
    outcomes: 'Increase employee engagement and reduce HR administrative overhead.',
  },
  {
    id: 'scm',
    title: 'Oracle SCM',
    icon: <Truck className="w-5 h-5" />,
    shortDesc: 'Supply Chain Management',
    description: 'Build a resilient, adaptable supply chain that responds to changing demand, supply, and market conditions in real-time.',
    capabilities: ['Inventory Management', 'Manufacturing', 'Order Management', 'Logistics'],
    outcomes: 'Improve supply chain visibility and reduce inventory carrying costs.',
  },
  {
    id: 'epm',
    title: 'Oracle EPM',
    icon: <PieChart className="w-5 h-5" />,
    shortDesc: 'Enterprise Performance Management',
    description: 'Model and plan across finance, HR, supply chain, and sales, streamline the financial close process, and drive better decisions.',
    capabilities: ['Planning & Budgeting', 'Financial Close', 'Narrative Reporting', 'Profitability Analytics'],
    outcomes: 'Accelerate planning cycles and improve forecasting accuracy.',
  },
  {
    id: 'ppm',
    title: 'Oracle PPM',
    icon: <Briefcase className="w-5 h-5" />,
    shortDesc: 'Project Portfolio Management',
    description: 'Optimize project delivery with integrated project planning, execution, and financial management.',
    capabilities: ['Project Planning', 'Resource Management', 'Project Costing', 'Billing & Revenue'],
    outcomes: 'Deliver projects on time and within budget while maximizing profitability.',
  },
];

const renderDashboardContent = (id) => {
  switch (id) {
    case 'erp':
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-[10px] text-slate-500 mb-1 uppercase font-semibold">Revenue</div>
              <div className="text-lg font-bold text-slate-800">$4.2M</div>
              <div className="text-[10px] text-emerald-500 font-medium mt-1">↑ 12% vs last qt</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-[10px] text-slate-500 mb-1 uppercase font-semibold">Expenses</div>
              <div className="text-lg font-bold text-slate-800">$1.8M</div>
              <div className="text-[10px] text-emerald-500 font-medium mt-1">↓ 5% vs last qt</div>
            </div>
          </div>
          <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 p-3 flex items-end gap-2">
            {[40, 60, 45, 80, 65, 95, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-orange-200 to-[#F15A24] rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      );
    case 'hcm':
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="w-10 h-10 rounded-full border-4 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-xs">92%</div>
            <div>
              <div className="text-xs font-semibold text-slate-800">Retention Rate</div>
              <div className="text-[10px] text-slate-500">Above industry avg</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-3">
            <div className="text-[10px] uppercase font-semibold text-slate-500">Headcount by Dept</div>
            {[ { label: 'Engineering', w: '75%', c: 'bg-[#F15A24]' }, { label: 'Sales', w: '45%', c: 'bg-blue-500' }, { label: 'Marketing', w: '30%', c: 'bg-emerald-500' } ].map((item, i) => (
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
    case 'scm':
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                <div className="text-[10px] font-semibold text-slate-500 mb-2 uppercase">Inventory Health</div>
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-200" />
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125" strokeDashoffset="25" className="text-emerald-500" />
                  </svg>
                  <span className="absolute text-xs font-bold text-slate-800">80%</span>
                </div>
             </div>
             <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex flex-col justify-center items-center">
                <div className="w-full flex items-center justify-between mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <div className="h-0.5 flex-1 bg-slate-200 mx-1"></div>
                  <div className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse"></div>
                  <div className="h-0.5 flex-1 bg-slate-200 mx-1"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-[10px] font-medium text-slate-600 text-center mt-2">Logistics Route Status</div>
             </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-between">
             <div>
               <div className="text-xs font-semibold text-slate-800">Active Shipments</div>
               <div className="text-[10px] text-slate-500">Global network</div>
             </div>
             <div className="text-lg font-bold text-[#F15A24]">1,284</div>
          </div>
        </div>
      );
    case 'epm':
      return (
        <div className="space-y-3">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="text-[10px] uppercase font-semibold text-slate-500 mb-3">Q3 Forecast vs Actual</div>
            <div className="flex items-end justify-center gap-4 h-20">
               <div className="flex flex-col justify-end gap-1 items-center w-12">
                 <div className="w-full bg-slate-300 rounded-t-sm" style={{ height: '70px' }}></div>
                 <div className="text-[9px] font-medium text-slate-500">Forecast</div>
               </div>
               <div className="flex flex-col justify-end gap-1 items-center w-12">
                 <div className="w-full bg-[#F15A24] rounded-t-sm" style={{ height: '85px' }}></div>
                 <div className="text-[9px] font-medium text-slate-500">Actual</div>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
               <div className="text-[10px] text-slate-500 mb-1">EBITDA Margin</div>
               <div className="text-sm font-bold text-slate-800">24.5%</div>
             </div>
             <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
               <div className="text-[10px] text-slate-500 mb-1">OpEx Variance</div>
               <div className="text-sm font-bold text-emerald-500">-2.1%</div>
             </div>
          </div>
        </div>
      );
    case 'ppm':
      return (
        <div className="space-y-3">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
             <div className="flex justify-between items-center mb-4">
                <div className="text-[10px] uppercase font-semibold text-slate-500">Portfolio Health</div>
                <div className="text-[9px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">On Track</div>
             </div>
             <div className="space-y-3">
                {[ { name: 'Cloud Migration', prog: '85%', status: 'bg-emerald-500' }, { name: 'ERP Rollout', prog: '45%', status: 'bg-amber-500' }, { name: 'DC Consolidation', prog: '15%', status: 'bg-[#F15A24]' }].map((proj, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="text-[9px] font-medium text-slate-700 truncate">{proj.name}</div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1">
                         <div className={`h-full rounded-full ${proj.status}`} style={{ width: proj.prog }}></div>
                      </div>
                    </div>
                    <div className="text-[9px] font-bold text-slate-600 w-6 text-right">{proj.prog}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const OracleCloudSolutions = () => {
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
            Oracle Cloud Solutions for Every Business Function
          </h2>
          <p className="text-lg text-[#000000]">
            Whether you're modernizing finance, HR, supply chain, or enterprise planning, Oracle Cloud provides an integrated platform to simplify operations and support long-term growth.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 border-b border-border pb-px max-w-4xl mx-auto">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-all relative flex items-center justify-center gap-2
                ${activeTab === solution.id ? 'text-[#F15A24]' : 'text-slate-500 hover:text-[#000000] hover:bg-slate-50 rounded-t-lg'}`}
            >
              {solution.icon}
              {solution.title}
              {activeTab === solution.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24]"
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
                <p className="text-sm font-medium text-[#F15A24] mb-6">{activeSolution.shortDesc}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">{activeSolution.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[#000000] mb-4 uppercase tracking-wider">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSolution.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#F15A24] mt-0.5 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg mb-8 border border-slate-100">
                  <h4 className="text-xs font-semibold text-[#000000] mb-1 uppercase tracking-wider">Business Outcome</h4>
                  <p className="text-sm text-slate-600 font-medium">{activeSolution.outcomes}</p>
                </div>

                <button className="text-[#F15A24] font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
                  Explore {activeSolution.title} Services
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </button>
              </div>

              {/* Right Illustration */}
              <div className="w-full md:w-1/2 bg-slate-50 p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50"></div>

                <div className="relative z-10 w-full max-w-sm oc-glass rounded-xl shadow-lg border border-white p-6">
                  <div className="flex items-center gap-4 border-b border-border/50 pb-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#F15A24]">
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

export default OracleCloudSolutions;
