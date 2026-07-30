import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';

const CTASection = () => {
  return (
    <SectionWrapper className="bg-white py-24 pb-32">
      <SectionContent>
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1565D8] via-[#0F4CC9] to-[#0A3690]"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-20 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                YOUR NEXT MOVE
              </div>
              <h2 className="text-3xl lg:text-5xl font-heading font-black text-white leading-tight mb-6 tracking-tight">
                Turn Your ERP Into Your Smartest Business Asset
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-0">
                AI isn't replacing your ERP—it's making it more intelligent. Unlock automation, predictive insights, and smarter decision-making with enterprise AI solutions tailored to your business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#1565D8] font-bold hover:bg-slate-50 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:-translate-y-1 group text-center"
              >
                Schedule an AI Strategy Session <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default CTASection;
