import React from 'react';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';
import { aiCapabilities } from '../data';

const CapabilitiesGrid = () => {
  return (
    <SectionWrapper id="capabilities" className="py-24 bg-white border-b border-slate-100">
      <SectionContent>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
            AI CAPABILITIES
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
            Enterprise AI That Creates Real Business Value
          </h2>
          <p className="text-lg text-slate-600">
            We move beyond the hype to deliver practical, powerful AI capabilities embedded directly into your core business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aiCapabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-[0_20px_40px_-15px_rgba(21,101,216,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500 origin-top-right"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center mb-6 text-[#1565D8] group-hover:bg-[#1565D8] group-hover:text-white transition-colors duration-300">
                {cap.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h3>
              <p className="text-slate-600 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default CapabilitiesGrid;
