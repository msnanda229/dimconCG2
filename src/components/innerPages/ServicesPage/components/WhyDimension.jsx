import React from 'react';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';
import { whyDimension } from '../data';
import { CheckCircle2 } from 'lucide-react';

const WhyDimension = () => {
  return (
    <SectionWrapper className="bg-[#F8FAFC] py-24">
      <SectionContent>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100/50 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
            WHY DIMENSION CONSULTING
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
            Enterprise AI Expertise You Can Trust
          </h2>
          <p className="text-lg text-slate-600">
            Choose a partner with the deep technical knowledge and business acumen required to execute complex AI ERP transformations successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {whyDimension.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-[0_10px_30px_rgba(21,101,216,0.08)] transition-all duration-300 flex items-start gap-5"
            >
              <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-[#1565D8]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default WhyDimension;
