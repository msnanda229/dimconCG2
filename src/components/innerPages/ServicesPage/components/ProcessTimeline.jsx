import React from 'react';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';
import { timelineSteps } from '../data';

const ProcessTimeline = () => {
  return (
    <SectionWrapper className="bg-white py-24 border-b border-slate-100">
      <SectionContent>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
            IMPLEMENTATION JOURNEY
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
            A Proven AI Transformation Process
          </h2>
          <p className="text-lg text-slate-600">
            We mitigate risk and accelerate time-to-value with a structured, agile approach to AI ERP implementation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-0">
          {/* Connection Line Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 rounded-full opacity-30"></div>
          {/* Connection Line Mobile/Tablet */}
          <div className="lg:hidden absolute top-10 bottom-10 left-[44px] w-1 bg-gradient-to-b from-blue-100 via-blue-500 to-blue-100 rounded-full opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="timeline-step relative flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-6 z-10 group">
                {/* Number Badge */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 bg-white border-[4px] border-blue-50 rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(21,101,216,0.1)] group-hover:border-[#1565D8] transition-all duration-300">
                  <span className="font-heading font-black text-xl lg:text-2xl text-slate-400 group-hover:text-[#1565D8] transition-colors">{step.num}</span>
                </div>
                {/* Content */}
                <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm lg:text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default ProcessTimeline;
