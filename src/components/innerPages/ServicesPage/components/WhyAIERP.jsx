import React from 'react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';

const WhyAIERP = () => {
  const traditionalFeatures = [
    "Manual Approvals",
    "Static Reports",
    "Reactive Decisions",
    "Data Overload",
    "Time-Consuming Processes"
  ];

  const aiFeatures = [
    "Intelligent Automation",
    "Predictive Analytics",
    "Smart Recommendations",
    "Real-Time Insights",
    "Self-Learning Processes"
  ];

  return (
    <SectionWrapper className="py-24 bg-[#F8FAFC]">
      <SectionContent>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100/50 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
            WHY AI ERP
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
            Why Modern ERP Needs Artificial Intelligence
          </h2>
          <p className="text-lg text-slate-600">
            Traditional ERP systems provide data. AI-powered ERP transforms that data into intelligent recommendations, automated workflows, predictive insights, and faster decision-making that drives business growth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-4 relative">
          
          {/* Traditional ERP Card */}
          <div className="flex-1 w-full bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 shadow-xl relative">
  <h3 className="text-2xl font-bold text-red-700 mb-8 pb-4 border-b border-red-200">
    Traditional ERP
  </h3>

  <div className="space-y-6">
    {traditionalFeatures.map((feature, idx) => (
      <div key={idx} className="flex items-center gap-4 text-red-700">
        <XCircle size={24} className="text-red-500 shrink-0" />
        <span className="text-lg font-medium">{feature}</span>
      </div>
    ))}
  </div>
</div>

          {/* Arrow / VS Graphic */}
          <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border-4 border-white shadow-md z-10 -my-4 md:my-0 md:-mx-4">
            <ArrowRight size={24} className="text-[#1565D8] rotate-90 md:rotate-0" />
          </div>

          {/* AI-Powered ERP Card */}
          <div className="flex-1 w-full bg-gradient-to-br from-[#1565D8] to-[#0F4CC9] rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(21,101,216,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/20 relative z-10">AI-Powered ERP</h3>
            <div className="space-y-6 relative z-10">
              {aiFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white">
                  <CheckCircle2 size={24} className="text-blue-200 shrink-0" />
                  <span className="text-lg font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default WhyAIERP;
