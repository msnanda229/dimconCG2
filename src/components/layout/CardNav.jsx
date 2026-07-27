import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, ArrowRight,
  Cloud, Layers, Building2, Handshake, Users, BookOpen,
  Database, Server, Briefcase, Cpu, RefreshCw, Settings,
  Shield, Zap, LifeBuoy, Heart, DollarSign, Truck, BarChart,
  Map, Lightbulb, Activity, TrendingUp, FileText, HelpCircle, Download
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { generateNavigationData } from '../../utils/navigation';

// Static icon lookup map (Vite ESM — no require())
const iconMap = {
  Cloud, Layers, Building2, Handshake, Users, BookOpen,
  Database, Server, Briefcase, Cpu, RefreshCw, Settings,
  Shield, Zap, LifeBuoy, Heart, DollarSign, Truck, BarChart,
  Map, Lightbulb, Activity, TrendingUp, FileText, HelpCircle, Download,
  CloudUpload: Cloud // alias
};

const getCategoryIcon = (slug) => {
  switch(slug) {
    case 'services': return <Layers size={32} strokeWidth={1.5} />;
    case 'cloud-applications': return <Cloud size={32} strokeWidth={1.5} />;
    case 'industry-solutions': return <Building2 size={32} strokeWidth={1.5} />;
    case 'strategic-alliances': return <Handshake size={32} strokeWidth={1.5} />;
    case 'products': return <Server size={32} strokeWidth={1.5} />;
    case 'company': return <Users size={32} strokeWidth={1.5} />;
    case 'resources': return <BookOpen size={32} strokeWidth={1.5} />;
    default: return <Layers size={32} strokeWidth={1.5} />;
  }
}

const aiSolutionsData = [
  {
    heading: "AI Strategy",
    items: [
      { title: "AI Assessment", description: "Evaluate enterprise AI maturity and opportunities.", icon: "Activity", path: "#" },
      { title: "AI Readiness", description: "Prepare people, processes, and technology for AI adoption.", icon: "Database", path: "#" },
      { title: "AI Advisory", description: "Define an enterprise AI roadmap aligned with business goals.", icon: "Lightbulb", path: "#" }
    ]
  },
  {
    heading: "Enterprise AI",
    items: [
      { title: "Generative AI", description: "LLM-powered enterprise applications and copilots.", icon: "RefreshCw", path: "#" },
      { title: "Agentic AI", description: "Autonomous AI agents for intelligent business workflows.", icon: "Cpu", path: "#" },
      { title: "AI Automation", description: "AI-powered business process automation.", icon: "Zap", path: "#" }
    ]
  },
  {
    heading: "Responsible AI",
    items: [
      { title: "AI Governance", description: "Secure, compliant, ethical, and scalable AI frameworks.", icon: "Shield", path: "#" }
    ]
  }
];

const CardNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Desktop Mega Menu State
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoverIntent, setHoverIntent] = useState(null);
  
  // Mobile Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  const navData = useMemo(() => generateNavigationData(), []);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simple window scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll target on route load
  useEffect(() => {
    if (location.pathname === '/') {
      const targetId = sessionStorage.getItem('scrollTarget');
      if (targetId) {
        sessionStorage.removeItem('scrollTarget');
        setTimeout(() => {
          if (targetId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 150);
      }
    }
  }, [location.pathname]);

  // Hover Intent for Mega Menu (Safe Hover Zone)
  useEffect(() => {
    let timer;
    if (hoverIntent) {
      timer = setTimeout(() => {
        setActiveMenu(hoverIntent);
      }, 120);
    } else {
      timer = setTimeout(() => {
        setActiveMenu(null);
      }, 250);
    }
    return () => clearTimeout(timer);
  }, [hoverIntent]);

  // Close Mega Menu gracefully on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeMenu) {
        setHoverIntent(null);
        setActiveMenu(null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [isMobileMenuOpen]);

  // Close menus on route change or resize to desktop
  useEffect(() => {
    if (windowWidth >= 1024) {
      setIsMobileMenuOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoverIntent(null);
    setActiveMenu(null);
  }, [location.pathname]);

  // Handle Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setHoverIntent(null);
        setActiveMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getNavPadding = (isScrolledState) => {
    if (windowWidth < 480) return "16px";
    if (windowWidth < 768) return "20px";
    if (windowWidth < 1024) return "24px";
    if (windowWidth < 1280) return "32px";
    if (windowWidth < 1536) return "48px";
    return "64px";
  };

  const isMobile = windowWidth < 1024;
  const isLightBg = location.pathname === '/' || location.pathname === '/contact';
  const effectiveIsScrolled = isScrolled || activeMenu !== null;

  // 3. SCROLL BEHAVIOR:
  // Initial (top): Transparent background, no borders
  // Scrolled: white glass, backdrop blur, subtle shadow, 100% width, slightly reduced height
  const navVariants = {
    top: {
      width: "100%",
      maxWidth: "100%",
      height: windowWidth < 768 ? "72px" : "90px",
      borderRadius: "0px",
      backgroundColor: "rgba(255,255,255,0)",
      backdropFilter: "blur(0px) saturate(100%)",
      boxShadow: "none",
      borderBottom: "1px solid transparent",
      y: 0,
      paddingLeft: getNavPadding(false),
      paddingRight: getNavPadding(false)
    },
    scrolled: {
      width: "100%",
      maxWidth: "100%",
      height: windowWidth < 768 ? "64px" : "76px",
      borderRadius: "0px",
      backgroundColor: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(20px) saturate(180%)",
      boxShadow: "0 10px 30px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.02)",
      borderBottom: "1px solid rgba(15,23,42,0.06)",
      y: 0,
      paddingLeft: getNavPadding(true),
      paddingRight: getNavPadding(true)
    }
  };

  const handleNavClick = (slug, e) => {
    const sectionId = {
      'services': 'services-section',
      'industries': 'industries-section',
      'partnerships': 'partner-ecosystem',
      'resources': 'case-studies',
      'company': 'leadership-section'
    }[slug];

    if (!sectionId) return;

    if (location.pathname === '/') {
      if (e) e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setHoverIntent(null);
      setActiveMenu(null);
    } else {
      sessionStorage.setItem('scrollTarget', sectionId);
      navigate('/');
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setHoverIntent(null);
      setActiveMenu(null);
    } else {
      sessionStorage.setItem('scrollTarget', 'top');
      navigate('/');
    }
  };

  const toggleAccordion = useCallback((slug) => {
    setActiveAccordion(prev => prev === slug ? null : slug);
  }, []);

  return (
    <>
      {/* Desktop Navbar Container */}
      <div data-site-navbar className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none">
        <motion.nav
          className="relative flex items-center pointer-events-auto overflow-hidden lg:overflow-visible transition-colors duration-500"
          variants={navVariants}
          initial="top"
          animate={effectiveIsScrolled ? "scrolled" : "top"}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between w-full h-full relative z-10 max-w-[1920px] mx-auto">
            
            {/* Left: Logo */}
            <div className="flex-1 min-w-0 flex items-center justify-start h-full">
              <Link to="/" onClick={handleLogoClick} className="flex-shrink-0 flex items-center h-full group" aria-label="Home" onMouseEnter={() => setHoverIntent(null)}>
                <motion.img 
                  src="/logo.png" 
                  alt="Dimension Consulting Logo" 
                  fetchpriority="high"
                  className="h-9 md:h-10 lg:h-12 xl:h-14 object-contain max-w-[180px] xl:max-w-[220px] w-auto group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                  animate={{
                    filter: (effectiveIsScrolled || isLightBg) ? "brightness(1) invert(0)" : "brightness(0) invert(1)",
                    scale: effectiveIsScrolled ? 0.95 : 1
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <div 
              className="hidden lg:flex min-w-0 items-center justify-center gap-1 xl:gap-2 2xl:gap-3 h-full z-20"
              onMouseLeave={() => setHoverIntent(null)}
            >
              {navData.map((category) => {
                const isHovered = hoverIntent === category.slug || activeMenu === category.slug;
                return (
                  <div
                    key={category.slug}
                    className="h-full flex items-center relative group"
                    onMouseEnter={() => setHoverIntent(category.slug)}
                  >
                    <button 
                      onClick={(e) => handleNavClick(category.slug, e)}
                      className={`relative px-2 xl:px-3 py-2 flex items-center justify-center transition-colors focus:outline-none min-h-[48px] ${
                        isHovered 
                          ? 'text-[#2563EB]' 
                          : (effectiveIsScrolled 
                              ? 'text-[#0F172A] hover:text-[#2563EB]' 
                              : (isLightBg ? 'text-slate-800 hover:text-[#2563EB]' : 'text-white/80 hover:text-white')
                            )
                      }`}
                      aria-expanded={activeMenu === category.slug}
                    >
                      {/* Top Dot */}
                      <div className={`absolute top-0 w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                        isHovered ? 'bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)] opacity-100 scale-100' : 'bg-transparent opacity-0 scale-0'
                      }`}></div>
                      
                      <span className={`text-sm font-semibold relative whitespace-nowrap transition-all duration-200 ${isHovered ? "text-[#2563EB]" : ""}`}>
                        {category.name}
                        {/* Animated Underline */}
                        {isHovered && (
                          <motion.div
                            layoutId="navUnderline"
                            className="absolute -bottom-[8px] left-0 right-0 h-[2px] rounded-full bg-[#2563EB]"
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          />
                        )}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right: CTA & Hamburger */}
            <div className="flex-1 min-w-0 flex items-center justify-end gap-2 lg:gap-3">
              {/* Desktop CTA */}
              <div 
                className="hidden lg:flex items-center h-full relative"
                onMouseEnter={() => setHoverIntent('ai-solutions')}
                onMouseLeave={() => setHoverIntent(null)}
              >
                <button 
                  className={`inline-flex items-center justify-center min-h-11 px-5 xl:px-6 rounded-full font-semibold tracking-wide transition-all duration-300 group text-sm ${
                    activeMenu === 'ai-solutions' 
                      ? 'bg-gradient-to-r from-[#D9872A] to-[#BF6206] text-white shadow-[0_10px_24px_rgba(191,98,6,0.28)]' 
                      : 'bg-gradient-to-r from-[#D9872A] to-[#BF6206] hover:from-[#C7781C] hover:to-[#A75404] text-white'
                  }`}
                  aria-expanded={activeMenu === 'ai-solutions'}
                >
                  AI Solutions 
                  <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${activeMenu === 'ai-solutions' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Mobile/Tablet CTA */}
              <div className="block lg:hidden">
                <button onClick={() => setIsMobileMenuOpen(true)} className="inline-flex items-center justify-center h-9 sm:h-10 px-4 sm:px-5 rounded-full bg-gradient-to-r from-[#D9872A] to-[#BF6206] hover:from-[#C7781C] hover:to-[#A75404] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(191,98,6,0.2)]">
                  <span className="hidden sm:inline">AI Solutions</span>
                  <span className="sm:hidden">AI</span>
                </button>
              </div>
              
              {/* Mobile Hamburger */}
              <button 
                className={`lg:hidden flex items-center justify-center w-[44px] h-[44px] focus:outline-none rounded-md transition-colors ${(effectiveIsScrolled || isLightBg) ? 'text-slate-800' : 'text-white'}`}
                aria-label="Open Mobile Menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={26} />
              </button>
            </div>
            
          </div>
        </motion.nav>

        {/* Global Mega Menu Dropdown Container */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              className="fixed left-0 right-0 z-[999] pointer-events-auto flex justify-center px-6"
              style={{
                top: effectiveIsScrolled ? (windowWidth < 768 ? '64px' : '76px') : (windowWidth < 768 ? '72px' : '90px')
              }}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseEnter={() => setHoverIntent(activeMenu)}
              onMouseLeave={() => setHoverIntent(null)}
            >
              {(() => {
                if (activeMenu === 'ai-solutions') {
                  return (
                    <div className="bg-white rounded-3xl border border-[#E8ECF5] shadow-[0_12px_40px_rgba(15,23,42,0.12)] w-full max-w-7xl p-8 flex gap-8 mt-4">
                      
                      {/* Left: AI Solutions Sub-navigation grid */}
                      <div className="w-[72%] grid grid-cols-3 gap-x-5 gap-y-1 content-start border-r border-[#E8ECF5] pr-6">
                        {aiSolutionsData.map((col, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-2">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                              {col.heading}
                            </h4>
                            {col.items.map((item, idx) => (
                              <Link 
                                key={idx} 
                                to={item.path} 
                                className="group/item flex gap-3 p-3 rounded-xl hover:bg-orange-50/50 border border-transparent hover:border-orange-100/50 transition-all duration-micro min-h-12 relative overflow-hidden"
                                onClick={() => { setHoverIntent(null); setActiveMenu(null); }}
                              >
                                <div className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] group-hover/item:text-[#D9872A] group-hover/item:border-orange-100 group-hover/item:bg-white transition-colors duration-micro shrink-0 overflow-hidden">
                                  {(() => {
                                    const IconComponent = iconMap[item.icon] || Cloud;
                                    return <IconComponent size={16} />;
                                  })()}
                                </div>
                                <div className="flex-1 min-w-0 pr-4">
                                  <h4 className="font-semibold text-sm text-[#0F172A] mb-0.5 group-hover/item:text-[#D9872A] transition-colors duration-micro truncate">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-[#64748B] leading-snug truncate">
                                    {item.description}
                                  </p>
                                </div>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#D9872A]">
                                  <ArrowRight size={14} />
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Right: Featured Panel */}
                      <div className="w-[28%] bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 flex flex-col relative overflow-hidden shrink-0 border border-orange-100 shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="text-xl font-black font-heading text-slate-900 mb-2 z-10 tracking-tight">Enterprise AI</h3>
                        <p className="text-sm text-slate-600 mb-6 z-10 leading-relaxed font-medium">
                          Accelerate business transformation with responsible, enterprise-grade AI solutions.
                        </p>
                        <ul className="flex flex-col gap-3 mb-8 z-10">
                          <li className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D9872A] shadow-[0_0_8px_rgba(217,135,42,0.6)]"></div>
                            AI Strategy
                          </li>
                          <li className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D9872A] shadow-[0_0_8px_rgba(217,135,42,0.6)]"></div>
                            Enterprise AI
                          </li>
                          <li className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D9872A] shadow-[0_0_8px_rgba(217,135,42,0.6)]"></div>
                            Responsible AI
                          </li>
                        </ul>
                        <Link to="/contact" className="mt-auto z-10 w-full inline-flex items-center justify-center h-12 bg-gradient-to-r from-[#D9872A] to-[#BF6206] hover:from-[#C7781C] hover:to-[#A75404] text-white font-semibold rounded-xl transition-all duration-300 group shadow-md hover:shadow-[0_8px_20px_rgba(191,98,6,0.3)]">
                          Talk to an AI Expert <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                    </div>
                  );
                }

                const category = navData.find(c => c.slug === activeMenu);
                if (!category) return null;
                return (
                  <div className="bg-white rounded-3xl border border-[#E8ECF5] shadow-[0_12px_40px_rgba(15,23,42,0.12)] w-full max-w-7xl p-8 flex gap-10 mt-4">
                    
                    {/* COLUMN 1: Overview */}
                    <div className="w-[28%] flex flex-col border-r border-[#E8ECF5] pr-6 shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#60A5FA]/10 flex items-center justify-center text-[#2563EB] mb-6">
                        {getCategoryIcon(category.slug)}
                      </div>
                      <h3 className="font-heading font-black text-2xl text-[#0F172A] tracking-tight mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <Link 
                        to={`/${category.slug}`} 
                        className="inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors gap-2 group mt-auto min-h-12"
                        onClick={() => { setHoverIntent(null); setActiveMenu(null); }}
                      >
                        {category.featuredCTA} 
                        <ArrowRight size={16} className="group-hover:translate-x-[4px] transition-transform duration-micro" />
                      </Link>
                    </div>
                    
                    {/* COLUMN 2: Sub-navigation grid */}
                    <div className="w-[72%] grid grid-cols-3 gap-x-5 gap-y-1 content-start">
                      {category.columns?.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-2">
                          {col.heading && (
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                              {col.heading}
                            </h4>
                          )}
                          {col.items.map((item, idx) => (
                            <Link 
                              key={idx} 
                              to={item.path} 
                              className="group/item flex gap-3 p-3 rounded-xl hover:bg-blue-50/50 border border-transparent hover:border-blue-100/50 transition-all duration-micro min-h-12 relative overflow-hidden"
                              onClick={() => { setHoverIntent(null); setActiveMenu(null); }}
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] group-hover/item:text-[#2563EB] group-hover/item:border-blue-100 group-hover/item:bg-white transition-colors duration-micro shrink-0 overflow-hidden">
                                {item.image ? (
                                  <img src={item.image} alt={item.title} className="w-[70%] h-[70%] object-contain" />
                                ) : (
                                  (() => {
                                    const IconComponent = iconMap[item.icon] || Cloud;
                                    return <IconComponent size={16} />;
                                  })()
                                )}
                              </div>
                              <div className="flex-1 min-w-0 pr-4">
                                <h4 className="font-semibold text-sm text-[#0F172A] mb-0.5 group-hover/item:text-[#2563EB] transition-colors duration-micro truncate">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-[#64748B] leading-snug truncate">
                                  {item.description}
                                </p>
                              </div>
                              
                              {/* Hover Arrow */}
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#2563EB]">
                                <ArrowRight size={14} />
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Desktop Full-Screen Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div 
            className="fixed inset-0 z-[998] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ 
              backgroundColor: "rgba(15,23,42,0.35)"
            }}
            onClick={() => { setHoverIntent(null); setActiveMenu(null); }}
          />
        )}
      </AnimatePresence>



      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 z-[1998] bg-slate-950/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              className="fixed inset-y-0 right-0 z-[1999] w-full max-w-[400px] bg-white shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
                <img src="/logo.png" alt="Dimension Consulting Logo" fetchpriority="high" className="h-8 object-contain" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-4 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-2 px-6 flex flex-col gap-1">
                {/* AI Solutions Mobile Accordion */}
                <div className="border-b border-[#E2E8F0] py-2">
                  <button 
                    className={`flex items-center justify-between w-full py-4 text-left font-heading text-lg font-bold focus:outline-none transition-colors ${activeAccordion === 'ai-solutions' ? 'text-[#D9872A]' : 'text-[#0F172A]'}`}
                    onClick={() => toggleAccordion('ai-solutions')}
                    aria-expanded={activeAccordion === 'ai-solutions'}
                  >
                    AI Solutions
                    <ChevronDown 
                      size={18} 
                      className={`text-[#94A3B8] transition-transform duration-300 ${activeAccordion === 'ai-solutions' ? 'rotate-180 text-[#D9872A]' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === 'ai-solutions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="flex flex-col gap-2 pb-6 pt-2">
                          {aiSolutionsData.flatMap(c => c.items).map((item, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link 
                                to={item.path} 
                                className="flex items-center gap-3 text-base font-medium text-[#64748B] hover:text-[#D9872A] transition-colors py-3 px-4 min-h-[44px] rounded-lg hover:bg-orange-50"
                              >
                                {(() => {
                                  const IconComponent = iconMap[item.icon] || Cloud;
                                  return <IconComponent size={16} />;
                                })()}
                                {item.title}
                              </Link>
                            </motion.li>
                          ))}
                          <motion.li
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: aiSolutionsData.flatMap(c => c.items).length * 0.05 }}
                            className="mt-4 px-3"
                          >
                            <Link 
                              to="/contact" 
                              className="inline-flex items-center justify-center w-full gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#D9872A] to-[#BF6206] px-4 py-3 rounded-full transition-colors shadow-sm"
                            >
                              Talk to an AI Expert
                              <ArrowRight size={14} />
                            </Link>
                          </motion.li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navData.map((category) => {
                  const isActive = activeAccordion === category.slug;
                  return (
                    <div key={category.slug} className="border-b border-[#E2E8F0] last:border-0 py-2">
                      <button 
                        className={`flex items-center justify-between w-full py-4 text-left font-heading text-lg font-bold focus:outline-none transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#0F172A]'} min-h-[56px]`}
                        onClick={() => toggleAccordion(category.slug)}
                        aria-expanded={isActive}
                      >
                        {category.name}
                        <ChevronDown 
                          size={18} 
                          className={`text-[#94A3B8] transition-transform duration-300 ${isActive ? 'rotate-180 text-[#2563EB]' : ''}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="flex flex-col gap-2 pb-6 pt-2">
                              {category.columns?.flatMap(c => c.items).map((item, idx) => (
                                <motion.li 
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <Link 
                                    to={item.path} 
                                    className="flex items-center gap-3 text-base font-medium text-[#64748B] hover:text-[#2563EB] transition-colors py-3 px-4 min-h-[44px] rounded-lg hover:bg-blue-50"
                                  >
                                    {item.image ? (
                                      <img src={item.image} alt={item.title} className="w-5 h-5 object-contain" />
                                    ) : (
                                      (() => {
                                        const IconComponent = iconMap[item.icon] || Cloud;
                                        return <IconComponent size={16} />;
                                      })()
                                    )}
                                    {item.title}
                                  </Link>
                                </motion.li>
                              ))}
                              <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (category.columns?.flatMap(c => c.items).length || 0) * 0.05 }}
                                className="mt-4 px-3"
                              >
                                <Link 
                                  to={`/${category.slug}`} 
                                  className="inline-flex items-center justify-center w-full gap-2 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] px-4 py-3 rounded-full transition-colors shadow-sm"
                                >
                                  {category.featuredCTA}
                                  <ArrowRight size={14} />
                                </Link>
                              </motion.li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
              <div className="p-8 border-t border-[#E2E8F0] bg-slate-50 mt-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 text-sm font-medium text-[#64748B]">
                    <a href="#" className="hover:text-[#2563EB] transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-[#2563EB] transition-colors">Twitter</a>
                  </div>
                  <span className="text-sm font-medium text-[#64748B]">&copy; {new Date().getFullYear()} Dimension Consulting</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(CardNav);
