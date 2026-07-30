import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';
import { aiServices } from '../data';

const ServicesGrid = () => {
  return (
    <SectionWrapper className="py-24 bg-[#F8FAFC]">
      <SectionContent>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100/50 text-[#1565D8] text-xs font-bold uppercase tracking-wider mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">
            End-to-End AI ERP Consulting Services
          </h2>
          <p className="text-lg text-slate-600">
            From initial strategy to full-scale deployment and continuous optimization, we guide your enterprise through every phase of AI transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aiServices.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(21,101,216,0.15)] transition-all duration-300 hover:-translate-y-1 border border-slate-200 flex flex-col h-full cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-50 text-[#1565D8] rounded-xl flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-[#1565D8] group-hover:text-white transition-colors duration-300">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-[#1565D8] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <Link to="/contact" className="absolute inset-0 z-20"><span className="sr-only">{service.title}</span></Link>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default ServicesGrid;
