import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper, SectionContent } from '../../../layout/SectionContainer';
import { faqs } from '../data';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <SectionWrapper className="bg-white py-16 lg:py-20 border-b border-slate-100">
      <SectionContent>
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="text-[#F15A24] uppercase tracking-[0.3em] text-sm font-semibold">
              FAQ
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
              Answers Before You Begin Your AI Journey
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Clear, transparent answers about implementation timelines, capabilities, and the real-world impact of AI-powered ERP.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            {faqs.map((item) => {
              const open = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : item.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-5 flex-1">
                      {/* Logo Bullet */}
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <img
                          src="/dimconLogoIcon.png"
                          alt="DimensionCG"
                          className="w-7 h-7 object-contain"
                        />
                      </div>

                      {/* Divider */}
                      <div className="hidden sm:block h-8 w-px bg-slate-200"></div>

                      {/* Question */}
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 pr-4">
                        {item.question}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <ChevronDown
                      className={`w-6 h-6 shrink-0 transition-all duration-300 ${
                        open ? "rotate-180 text-[#F15A24]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-[92px] sm:pl-[104px] pr-8 pb-6 text-slate-600 leading-7">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-500">
              Still have questions?{" "}
              <Link to="/contact" className="text-[#F15A24] font-semibold hover:underline">
                Contact our AI experts →
              </Link>
            </p>
          </div>
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default FAQ;
