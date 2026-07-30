import React from 'react';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';
import { outcomes } from '../data';

const BusinessOutcomes = () => {
  return (
    <SectionWrapper className="bg-white py-24 border-b border-slate-100">
      <SectionContent>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
            BUSINESS VALUE
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
            Delivering Measurable Enterprise Outcomes
          </h2>
          <p className="text-lg text-slate-600">
            We focus on tangible business metrics, ensuring your AI investment drives real-world efficiency, growth, and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#1565D8] to-[#0F4CC9] text-white flex items-center justify-center shadow-[0_10px_20px_rgba(21,101,216,0.3)] group-hover:scale-110 transition-transform duration-300">
                {outcome.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{outcome.title}</h3>
                <p className="text-slate-600 leading-relaxed">{outcome.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default BusinessOutcomes;
