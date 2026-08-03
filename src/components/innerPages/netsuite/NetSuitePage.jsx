import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle2, Shield,
  Cloud, LineChart, Globe, Users, Database, Cpu,
  TrendingUp, Building2, ChevronDown, Award,
  BarChart3, Zap, Lock, BookOpen, Layers, PieChart, Settings, Link as LinkIcon
} from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Trust Counters Component
const AnimatedCounter = ({ end, suffix = "", title }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
      <div className="text-4xl md:text-5xl font-bold text-[#0e4d9e] mb-2 flex items-center">
        {end}{suffix}
      </div>
      <div className="text-slate-600 font-medium">{title}</div>
    </div>
  );
};

// AccordionItem matching oracleCloud FAQ style
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-5 flex-1">
          {/* Logo Bullet */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-slate-50">
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
            {question}
          </h3>
        </div>

        {/* Arrow */}
        <ChevronDown
          className={`w-6 h-6 shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-[#0e4d9e]" : "text-slate-400"
            }`}
        />
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <div className="pl-[92px] sm:pl-[104px] pr-8 pb-6 text-slate-600 leading-7">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};
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
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-200 to-[#0e4d9e] rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      );
    case 'crm':
      return (
        <div className="space-y-4">
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
        <div className="space-y-3">
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
        <div className="space-y-3">
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

const NetSuitePage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSolution, setActiveSolution] = useState(netsuiteSolutions[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pt-[92px]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-50 blur-3xl" />
          <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px] py-16 lg:py-24 relative z-10">

          {/* Breadcrumb */}


          <div className="grid lg:grid-cols-[1.1fr_0.9fr] min-[1130px]:grid-cols-2 gap-12 min-[1130px]:gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-xl min-[1130px]:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <motion.div variants={fadeUpVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-5 min-[1130px]:mb-6 mx-auto lg:mx-0">
                <Award className="w-4 h-4" />
                <span>Oracle NetSuite Alliance Partner</span>
              </motion.div>

              <motion.h1 variants={fadeUpVariants} className="text-4xl md:text-5xl lg:text-[48px] min-[1130px]:text-[56px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5 min-[1130px]:mb-6">
                Optimize Operations with <span className="text-[#0e4d9e]">Oracle NetSuite</span>
              </motion.h1>

              <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 min-[1130px]:mb-10 max-w-xl mx-auto lg:mx-0">
                Empower your business with Oracle NetSuite, the world's leading cloud ERP platform. From financial management and CRM to inventory, planning, and analytics, we help organizations implement, optimize, and scale NetSuite for long-term business growth.
              </motion.p>

              <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#solutions" className="group inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#D9872A] text-white font-semibold hover:bg-[#C7781C] transition-colors duration-300 w-full sm:w-auto flex-shrink-0">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-slate-900 font-semibold border border-slate-900 hover:bg-slate-50 transition-colors duration-300 w-full sm:w-auto flex-shrink-0">
                  Schedule a Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual / Dashboard Mock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block scale-90 min-[1130px]:scale-100 transform origin-right"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-white border border-slate-200 shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Abstract Dashboard UI Elements */}
                <div className="absolute inset-4 border border-slate-100 bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <div className="h-6 w-32 bg-slate-200 rounded animate-pulse" />
                    <div className="flex gap-2">
                      <div className="h-6 w-6 rounded-full bg-blue-100" />
                      <div className="h-6 w-6 rounded-full bg-green-100" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-blue-50/50 rounded-lg border border-blue-100 flex items-end p-3"><div className="h-2/3 w-full bg-blue-200 rounded-sm" /></div>
                    <div className="h-24 bg-green-50/50 rounded-lg border border-green-100 flex flex-col justify-end p-3 gap-1">
                      <div className="h-full w-4 bg-green-200 rounded-sm" /><div className="h-3/4 w-4 bg-green-300 rounded-sm" />
                    </div>
                    <div className="h-24 bg-purple-50/50 rounded-lg border border-purple-100 flex items-center justify-center"><Cloud className="w-8 h-8 text-purple-300" /></div>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg border border-slate-100 p-4 flex flex-col gap-3">
                    <div className="h-4 w-3/4 bg-slate-200 rounded" />
                    <div className="h-4 w-1/2 bg-slate-200 rounded" />
                    <div className="h-4 w-5/6 bg-slate-200 rounded" />
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 z-10"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">Revenue Growth</div>
                  <div className="text-lg font-bold text-slate-900">+42.8%</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 z-10"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">Data Synced</div>
                  <div className="text-lg font-bold text-slate-900">Real-time</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHY ORACLE NETSUITE */}
      <section className="py-20 lg:py-32 relative bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Businesses Choose Oracle NetSuite</h2>
            <p className="text-lg text-slate-600">A unified cloud architecture that scales with your growth, providing deep visibility and control across your entire organization.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cloud, title: "Cloud-Native ERP", desc: "Born in the cloud. Seamless updates, zero hardware footprint, and continuous innovation." },
              { icon: Layers, title: "Unified Business Management", desc: "Break down silos with a single data source connecting financials, CRM, and ecommerce." },
              { icon: LineChart, title: "Real-Time Visibility", desc: "Instant insights with customizable role-based dashboards and powerful analytics." },
              { icon: Globe, title: "Anywhere Access", desc: "Securely run your business from any device, anywhere in the world, 24/7." },
              { icon: TrendingUp, title: "Enterprise Scalability", desc: "Easily add new subsidiaries, currencies, and languages as your global footprint expands." },
              { icon: Shield, title: "Intelligent Financial Management", desc: "Automate financial close, ensure compliance, and streamline revenue recognition." }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariants}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0e4d9e] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS WE DELIVER (Tabbed Version) */}
      <section id="solutions" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-[#000000] mb-6"
            >
              Enterprise Solutions Powered by Oracle NetSuite
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="text-lg text-slate-600"
            >
              Comprehensive cloud-native solutions designed to streamline financial operations, customer engagement, inventory management, planning, and business intelligence.
            </motion.p>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 border-b border-slate-200 pb-px max-w-5xl mx-auto">
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
                  <motion.div
                    layoutId="activeSolutionTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0e4d9e]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row"
              >
                {/* Left Content */}
                <div className="w-full md:w-1/2 p-10 lg:p-14">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{netsuiteSolutions.find(s => s.id === activeSolution).title}</h3>
                  <p className="text-sm font-bold tracking-wide uppercase mb-6" style={{ color: netsuiteSolutions.find(s => s.id === activeSolution).color }}>
                    {netsuiteSolutions.find(s => s.id === activeSolution).shortDesc}
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {netsuiteSolutions.find(s => s.id === activeSolution).description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Key Capabilities</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {netsuiteSolutions.find(s => s.id === activeSolution).capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: netsuiteSolutions.find(s => s.id === activeSolution).color }} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg mb-8 border border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-900 mb-1 uppercase tracking-wider">Business Outcome</h4>
                    <p className="text-sm text-slate-600 font-medium">{netsuiteSolutions.find(s => s.id === activeSolution).outcomes}</p>
                  </div>

                  <Link to="/contact" className="font-semibold flex items-center gap-2 hover:gap-3 transition-all group" style={{ color: netsuiteSolutions.find(s => s.id === activeSolution).color }}>
                    Explore {netsuiteSolutions.find(s => s.id === activeSolution).title} Services
                    <ArrowRight className="w-4 h-4 transition-transform" />
                  </Link>
                </div>

                {/* Right Illustration */}
                <div className="w-full md:w-1/2 bg-slate-50 p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50"></div>

                  <div className="relative z-10 w-full max-w-sm bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white p-6">
                    <div className="flex items-center gap-4 border-b border-slate-200/50 pb-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center" style={{ color: netsuiteSolutions.find(s => s.id === activeSolution).color }}>
                        {netsuiteSolutions.find(s => s.id === activeSolution).icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{netsuiteSolutions.find(s => s.id === activeSolution).title} Dashboard</h4>
                        <p className="text-xs text-slate-500">Real-time Analytics</p>
                      </div>
                    </div>
                    {renderNetSuiteDashboard(activeSolution)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>


      {/* 4. OUR NETSUITE SERVICES */}
      <section className="py-20 lg:py-32 bg-[#0a1128] text-white overflow-hidden relative">
        {/* Premium Dark Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0e4d9e]/30 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
          <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />
          {/* Subtle grid overlay for texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSIwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iNDAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px] relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End NetSuite Services</h2>
            <p className="text-lg text-slate-400">From strategic planning to post-go-live support, our certified experts ensure your success at every stage.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "NetSuite Consulting", icon: Users, desc: "Strategic advisory to align NetSuite capabilities with your unique business objectives." },
              { title: "NetSuite Implementation", icon: Settings, desc: "Proven methodology for seamless deployment, minimizing risk and downtime." },
              { title: "NetSuite Optimization", icon: Zap, desc: "Enhance existing environments with automation, custom scripts, and workflow improvements." },
              { title: "NetSuite Integration", icon: LinkIcon, desc: "Connect NetSuite with third-party apps (Salesforce, Shopify, EDI) via robust APIs." },
              { title: "Training & Education", icon: BookOpen, desc: "Empower your team with tailored training programs for high user adoption." },
              { title: "Licensing & Advisory", icon: Shield, desc: "Navigate licensing complexity and ensure you purchase exactly what you need." }
            ].map((srv, i) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariants}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{srv.desc}</p>
                  <Link to="/contact" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center text-sm uppercase tracking-wider">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & TRUST */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-white border-t border-slate-200">
        {/* Background Glows (Blue instead of Orange) */}
        <div className="absolute left-0 top-20 w-[500px] h-[500px] rounded-full bg-[#0e4d9e]/5 blur-[180px]" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-blue-100 blur-[220px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,77,158,0.03),transparent_55%)]" />

        {/* Decorative SVG Pattern */}
        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="199.5" stroke="#0e4d9e" strokeDasharray="4 4" />
            <path d="M400 400L200 200L0 400H400Z" fill="#0e4d9e" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="w-full lg:w-5/12"
            >
              <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#0e4d9e]" />
                <span className="uppercase tracking-[0.28em] text-[#0e4d9e] text-sm font-semibold">
                  Oracle NetSuite Excellence
                </span>
              </motion.div>

              <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900">
                Why Choose
                <br />
                <span className="text-[#0e4d9e]">DimensionCG</span>{" "}
                for
                <br />
                Oracle NetSuite?
              </motion.h2>

              <motion.div variants={fadeUpVariants} className="mt-5 w-14 h-[3px] bg-[#0e4d9e] rounded-full" />

              <motion.p variants={fadeUpVariants} className="mt-5 text-lg leading-7 text-slate-600 max-w-xl">
                Oracle NetSuite is powerful. Maximizing its value requires the right strategy, implementation approach and long-term expertise. We partner with you beyond the go-live date to ensure true digital transformation.
              </motion.p>

              <motion.div variants={fadeUpVariants} className="mt-8 bg-white rounded-3xl p-5 shadow-xl shadow-[0_30px_80px_rgba(14,77,158,0.08)] border border-blue-100 w-fit">
                <img src="/partners/netsuite.png" alt="Oracle NetSuite Partner" className="w-full max-w-xs object-contain" />

                <div className="flex items-center mt-6">
                  <div className="flex -space-x-3">
                    <img src="/avatars/1.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=1'} />
                    <img src="/avatars/2.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=2'} />
                    <img src="/avatars/3.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=3'} />
                    <img src="/avatars/4.jpg" alt="User 4" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=4'} />
                  </div>
                  <div className="ml-5">
                    <p className="font-semibold text-slate-800 text-sm md:text-base">
                      Trusted by <br className="sm:hidden" /><span className="text-[#0e4d9e]">Fortune 500s</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Cards */}
            <div className="w-full lg:w-7/12 relative z-10">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Certified NetSuite Expertise',
                    description: 'Our team comprises highly certified NetSuite professionals with deep domain knowledge across all major modules.',
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Proven Implementation Methodology',
                    description: 'We utilize a proprietary, risk-mitigated framework that ensures on-time, on-budget implementations.',
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: 'Deep Industry Experience',
                    description: 'Tailored solutions designed specifically for the unique regulatory and operational needs of your industry.',
                  },
                  {
                    icon: <Settings className="w-6 h-6" />,
                    title: 'Post Go-Live Optimization',
                    description: 'Continuous support, training, and update management to maximize your long-term ROI.',
                  }
                ].map((feature, idx) => (
                  <motion.div
                    variants={fadeUpVariants}
                    key={idx}
                    className="group relative rounded-3xl bg-white p-8 border border-blue-100 shadow-lg hover:shadow-[0_30px_70px_rgba(14,77,158,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    style={{ marginTop: (idx === 1 || idx === 3) ? '24px' : '0' }}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-lg flex items-center justify-center text-[#0e4d9e] mb-6 relative z-10 transition-transform duration-500 group-hover:rotate-0 -rotate-12">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-900 relative z-10">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                      {feature.description}
                    </p>

                    {/* Hover Glow inside card */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0e4d9e]/5 rounded-full blur-[30px] group-hover:bg-[#0e4d9e]/10 transition-colors duration-500 pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CUSTOMER SUCCESS */}
      <section className="py-20 lg:py-32 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Customer Success Stories</h2>
            <p className="text-lg text-slate-600">See how we've helped leading organizations transform their operations with Oracle NetSuite.</p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                metric: "40%",
                metricLabel: "Faster Financial Close",
                industry: "Manufacturing",
                challenge: "Disparate legacy systems causing data silos and manual reporting errors.",
                solution: "NetSuite ERP implementation with advanced financial modules.",
                outcome: "Unified reporting, automated consolidation, and a 40% reduction in close times."
              },
              {
                metric: "60%",
                metricLabel: "Improved Reporting Efficiency",
                industry: "Technology & Software",
                challenge: "Inability to track SaaS metrics and recognize complex revenue streams.",
                solution: "NetSuite Advanced Revenue Management (ARM).",
                outcome: "Real-time ARR tracking and full ASC 606 compliance."
              },
              {
                metric: "35%",
                metricLabel: "Operational Cost Reduction",
                industry: "Wholesale Distribution",
                challenge: "Lack of inventory visibility leading to stockouts and excess carrying costs.",
                solution: "NetSuite Inventory Management & WMS integration.",
                outcome: "Optimized stock levels, improved fulfillment rates, and reduced overhead."
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background accent on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />

                <div className="mb-8 pb-8 border-b border-slate-100 text-center relative z-10">
                  <div className="text-5xl font-black text-[#0e4d9e] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-500">{study.metric}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{study.metricLabel}</div>
                </div>

                <div className="space-y-6 text-sm relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1 text-xs uppercase tracking-wider">Industry</span>
                      <span className="text-slate-600 leading-relaxed">{study.industry}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1 text-xs uppercase tracking-wider">Challenge</span>
                      <span className="text-slate-600 leading-relaxed">{study.challenge}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1 text-xs uppercase tracking-wider">Solution</span>
                      <span className="text-slate-600 leading-relaxed">{study.solution}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 flex items-start gap-3 mt-4 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0 group-hover:animate-pulse" />
                    <div>
                      <span className="font-semibold text-blue-900 block mb-1 text-xs uppercase tracking-wider">Outcome</span>
                      <span className="text-[#0e4d9e] font-medium leading-relaxed">{study.outcome}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-[24px] md:px-[40px] lg:px-[48px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is Oracle NetSuite suitable for growing businesses?",
                a: "Yes. While NetSuite powers large enterprises, it is fundamentally designed to scale. Mid-market and fast-growing businesses often adopt NetSuite early to establish a robust foundation that won't require replacing as they expand globally."
              },
              {
                q: "Which industries use Oracle NetSuite?",
                a: "NetSuite is highly versatile with industry-specific editions. We frequently implement it for Manufacturing, Wholesale Distribution, Software/Tech, Healthcare, Retail, and Services organizations."
              },
              {
                q: "How long does implementation take?",
                a: "Implementation timelines vary based on scope, integrations, and data migration needs. A standard implementation can take 3-4 months, while complex enterprise rollouts may take 6-9 months. We use SuiteSuccess methodology to accelerate time-to-value."
              },
              {
                q: "Can NetSuite integrate with existing systems?",
                a: "Absolutely. NetSuite offers robust APIs (SuiteTalk) that allow seamless integration with systems like Salesforce, Shopify, HRIS platforms, banks, and EDI providers."
              },
              {
                q: "Do you provide post-implementation support?",
                a: "Yes. Go-live is just the beginning. We offer dedicated Managed Services, continuous optimization, custom reporting, and user training to ensure you maximize your ROI long after implementation."
              }
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 relative overflow-hidden bg-[#0e4d9e]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[50%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px] relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
          >
            Make Oracle NetSuite Work Smarter for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-12"
          >
            Whether you're planning your first Oracle NetSuite implementation or looking to optimize an existing environment, our experts help you maximize the value of your ERP investment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link to="/contact" className="px-8 py-4 bg-white text-[#0e4d9e] font-bold rounded-full hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto">
              Schedule a NetSuite Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border border-blue-400/50 text-white font-bold rounded-full hover:bg-blue-800/50 hover:border-blue-300 transition-all duration-300 w-full sm:w-auto">
              Talk to an Expert
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default NetSuitePage;
