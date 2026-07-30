import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';
import { platforms } from '../data';

const PlatformCards = () => {
  return (
    <SectionWrapper className="bg-[#F8FAFC] py-24">
      <SectionContent>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100/50 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
            SUPPORTED PLATFORMS
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
            AI Across Your Enterprise Technology Stack
          </h2>
          <p className="text-lg text-slate-600">
            We hold deep expertise across the world's leading enterprise platforms, seamlessly integrating their native AI capabilities or extending them with custom cognitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-[0_20px_40px_-15px_rgba(21,101,216,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative cursor-pointer"
            >
              <div className="h-12 flex items-center justify-start mb-6">
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} Logo`} 
                  className="h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{platform.name}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {platform.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-[#1565D8] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                  Explore Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <Link to={platform.link} className="absolute inset-0 z-20"><span className="sr-only">Explore {platform.name}</span></Link>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default PlatformCards;
