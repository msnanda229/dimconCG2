import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, BarChart3, Users, Database, LineChart, PieChart, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const netsuiteSolutions = [
  {
    id: 'fm',
    title: 'Financial Management',
    icon: <BarChart3 className="w-5 h-5" />,
    shortDesc: 'Comprehensive Financial Operations',
    description: 'Expedite daily financial transactions, accelerate the financial close and ensure compliance. Our cloud-based single platform architecture ensures complete real-time visibility into the financial performance of the business.',
    capabilities: ['General Ledger', 'Accounts Payable', 'Accounts Receivable', 'Revenue Recognition'],
    outcomes: 'Reduce close times by 40% and improve financial reporting accuracy.',
    color: '#0e4d9e'
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: <Users className="w-5 h-5" />,
    shortDesc: 'Customer Relationship Management',
    description: 'Deliver true customer lifecycle management, from marketing and opportunity management, to order management, customer upsell, cross-sell, renewal, and customer service.',
    capabilities: ['Sales Force Automation', 'Marketing Automation', 'Customer Service Management', 'Partner Relationship Management'],
    outcomes: 'Increase sales productivity and boost customer satisfaction.',
    color: '#0e4d9e'
  },
  {
    id: 'im',
    title: 'Inventory Management',
    icon: <Database className="w-5 h-5" />,
    shortDesc: 'Intelligent Inventory Control',
    description: 'Automate inventory tracking across multiple locations. Keep inventory costs low while exceeding customer expectations with real-time visibility into inventory across all locations.',
    capabilities: ['Inventory Tracking', 'Warehouse Management', 'Procurement', 'Order Fulfillment'],
    outcomes: 'Reduce carrying costs by 20% and eliminate stockouts.',
    color: '#0e4d9e'
  },
  {
    id: 'pb',
    title: 'Planning & Budgeting',
    icon: <LineChart className="w-5 h-5" />,
    shortDesc: 'Strategic Financial Planning',
    description: 'Facilitate company-wide and departmental planning with modeling capabilities, approval workflows and reporting within one collaborative scalable solution.',
    capabilities: ['Forecasting & Modeling', 'Budget Planning', 'Cash Flow Projection', 'Scenario Modeling'],
    outcomes: 'Shorten cycle times and improve forecast accuracy.',
    color: '#0e4d9e'
  },
  {
    id: 'ana',
    title: 'NetSuite Analytics',
    icon: <PieChart className="w-5 h-5" />,
    shortDesc: 'Business Intelligence & Insights',
    description: 'Real-time visibility into company performance across all business functions—from summary level to transaction level.',
    capabilities: ['Executive Dashboards', 'Real-Time Reporting', 'KPI Tracking', 'Predictive Insights'],
    outcomes: 'Drive better decision-making with actionable real-time data.',
    color: '#0e4d9e'
  }
];

const renderNetSuiteDashboard = (id) => {
  switch (id) {
    case 'fm':
      return (
        <div className="space-y-4 animate-in fade-in zoom-in duration-500">
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
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-200 to-[#0e4d9e] rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      );
    case 'crm':
      return (
        <div className="space-y-4 animate-in fade-in zoom-in duration-500">
          <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="w-10 h-10 rounded-full border-4 border-purple-500 flex items-center justify-center text-purple-500 font-bold text-xs">92%</div>
            <div>
              <div className="text-xs font-semibold text-slate-800">Win Rate</div>
              <div className="text-[10px] text-slate-500">Above industry avg</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-3">
            <div className="text-[10px] uppercase font-semibold text-slate-500">Pipeline by Stage</div>
            {[{ label: 'Discovery', w: '75%', c: 'bg-purple-300' }, { label: 'Proposal', w: '45%', c: 'bg-purple-400' }, { label: 'Negotiation', w: '30%', c: 'bg-purple-600' }].map((item, i) => (
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
    case 'im':
      return (
        <div className="space-y-4 animate-in fade-in zoom-in duration-500">
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
                <div className="w-2 h-2 rounded-full bg-[#0e4d9e] animate-pulse"></div>
                <div className="h-0.5 flex-1 bg-slate-200 mx-1"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>
              <div className="text-[10px] font-medium text-slate-600 text-center mt-2">Fulfillment Status</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-800">Orders Pending</div>
              <div className="text-[10px] text-slate-500">Global warehouses</div>
            </div>
            <div className="text-lg font-bold text-[#0e4d9e]">1,284</div>
          </div>
        </div>
      );
    case 'pb':
      return (
        <div className="space-y-3 animate-in fade-in zoom-in duration-500">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="text-[10px] uppercase font-semibold text-slate-500 mb-3">Q3 Forecast vs Actual</div>
            <div className="flex items-end justify-center gap-4 h-20">
              <div className="flex flex-col justify-end gap-1 items-center w-12">
                <div className="w-full bg-slate-300 rounded-t-sm" style={{ height: '70px' }}></div>
                <div className="text-[9px] font-medium text-slate-500">Forecast</div>
              </div>
              <div className="flex flex-col justify-end gap-1 items-center w-12">
                <div className="w-full bg-orange-500 rounded-t-sm" style={{ height: '85px' }}></div>
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
    case 'ana':
      return (
        <div className="space-y-3 animate-in fade-in zoom-in duration-500">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <div className="text-[10px] uppercase font-semibold text-slate-500">KPI Performance</div>
              <div className="text-[9px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">On Track</div>
            </div>
            <div className="space-y-3">
              {[{ name: 'Gross Margin', prog: '85%', status: 'bg-cyan-500' }, { name: 'Customer Acq Cost', prog: '45%', status: 'bg-cyan-400' }, { name: 'Net Promoter Score', prog: '65%', status: 'bg-cyan-600' }].map((proj, i) => (
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

const NetSuiteSolutions = () => {
  const [activeSolution, setActiveSolution] = useState(netsuiteSolutions[0].id);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.solutions-header > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.solutions-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.solutions-tabs',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeData = netsuiteSolutions.find(s => s.id === activeSolution);

  return (
    <section ref={containerRef} id="solutions" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="solutions-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
            Enterprise Solutions Powered by Oracle NetSuite
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive cloud-native solutions designed to streamline financial operations, customer engagement, inventory management, planning, and business intelligence.
          </p>
        </div>

        {/* Tabs */}
        <div className="solutions-tabs flex overflow-x-auto hide-scrollbar gap-2 mb-12 border-b border-slate-200 pb-px max-w-5xl mx-auto">
          {netsuiteSolutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution.id)}
              className={`flex-1 min-w-[170px] py-4 px-6 text-sm font-medium transition-all relative flex items-center justify-center gap-2
                ${activeSolution === solution.id ? 'text-[#0e4d9e]' : 'text-slate-500 hover:text-[#000000] hover:bg-slate-50 rounded-t-lg'}`}
            >
              {solution.icon}
              {solution.title}
              {activeSolution === solution.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0e4d9e]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="solutions-content max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row min-h-[450px]">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-10 lg:p-14">
              <h3 className="text-2xl font-bold text-[#000000] mb-2">{activeData.title}</h3>
              <p className="text-sm font-bold tracking-wide uppercase mb-6" style={{ color: activeData.color }}>
                {activeData.shortDesc}
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {activeData.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#000000] mb-4 uppercase tracking-wider">Key Capabilities</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {activeData.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: activeData.color }} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg mb-8 border border-slate-100">
                <h4 className="text-xs font-semibold text-[#000000] mb-1 uppercase tracking-wider">Business Outcome</h4>
                <p className="text-sm text-slate-600 font-medium">{activeData.outcomes}</p>
              </div>

              <a href="/contact" className="font-semibold flex items-center gap-2 hover:gap-3 transition-all group" style={{ color: activeData.color }}>
                Explore {activeData.title} Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Illustration */}
            <div className="w-full md:w-1/2 bg-slate-50 p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50"></div>

              <div className="relative z-10 w-full max-w-sm bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white p-6 transition-all duration-300">
                <div className="flex items-center gap-4 border-b border-slate-200/50 pb-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center" style={{ color: activeData.color }}>
                    {activeData.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{activeData.title} Dashboard</h4>
                    <p className="text-xs text-slate-500">Real-time Analytics</p>
                  </div>
                </div>
                {renderNetSuiteDashboard(activeSolution)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetSuiteSolutions;
