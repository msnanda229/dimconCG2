import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Cpu, Cloud, Database, Server } from 'lucide-react';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';

const HeroSection = () => {
  return (
    <SectionWrapper className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white relative overflow-hidden">
      <SectionContent>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="hero-anim inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-6">
              AI-POWERED ERP
            </div>

            <h1 className="hero-anim text-4xl lg:text-6xl font-heading font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Transform Your ERP Into an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565D8] to-[#0F4CC9]">Intelligent Business Platform</span>
            </h1>

            <p className="hero-anim text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Empower your enterprise with AI-driven ERP solutions that automate operations, deliver predictive insights, and enable faster, smarter business decisions. We help organizations integrate artificial intelligence into their ERP ecosystem to improve productivity, efficiency, and long-term business performance.
            </p>

            <div className="hero-anim flex flex-wrap items-center gap-4">


              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
                Schedule an AI Strategy Session
              </Link>
            </div>
          </div>

          {/* Right Graphic */}
          <div className="w-full lg:w-1/2 hero-graphic relative h-[500px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[80px]"></div>

            <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center">
              <div className="relative w-full aspect-square border-[8px] border-slate-50/50 rounded-full flex items-center justify-center bg-white shadow-[0_20px_60px_-15px_rgba(21,101,216,0.15)]">
                <div className="absolute inset-4 border border-dashed border-blue-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-12 border border-blue-100 rounded-full"></div>

                {/* Core Hub */}
                <div className="w-32 h-32 bg-gradient-to-br from-[#1565D8] to-[#0F4CC9] rounded-2xl shadow-[0_10px_30px_rgba(21,101,216,0.4)] flex items-center justify-center z-10 transform rotate-45">
                  <Cpu className="text-white transform -rotate-45" size={48} />
                </div>

                {/* Orbiting Elements */}
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                  <Layers className="text-[#1565D8]" size={20} /> <span className="font-bold text-slate-800 text-sm">ERP</span>
                </motion.div>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                  <Database className="text-[#0F4CC9]" size={20} /> <span className="font-bold text-slate-800 text-sm">Analytics</span>
                </motion.div>
                <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-10">
                  <Cloud className="text-[#1565D8]" size={20} /> <span className="font-bold text-slate-800 text-sm">Cloud</span>
                </motion.div>
                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-10">
                  <Server className="text-[#0F4CC9]" size={20} /> <span className="font-bold text-slate-800 text-sm">Automation</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default HeroSection;
