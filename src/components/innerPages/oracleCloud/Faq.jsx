import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, HelpCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    qus: "What Oracle Cloud services does DimensionCG offer?",
    ans: "DimensionCG provides end-to-end Oracle Cloud consulting, including implementation, cloud migration, system integration, optimization, managed services, upgrades, and ongoing support across Oracle ERP, SCM, HCM, EPM, CX, and OCI."
  },
  {
    qus: "Can DimensionCG migrate our existing ERP system to Oracle Cloud?",
    ans: "Yes. We help organizations migrate from legacy ERP platforms or on-premise Oracle systems to Oracle Cloud with a structured, low-risk approach that minimizes disruption and ensures business continuity."
  },
  {
    qus: "How long does an Oracle Cloud implementation take?",
    ans: "Project timelines depend on the complexity of your business, the number of Oracle modules, integrations, and data migration requirements. After an initial assessment, we provide a detailed implementation roadmap with realistic milestones."
  },
  {
    qus: "Do you provide post-implementation support?",
    ans: "Absolutely. Our engagement continues after go-live with application support, performance optimization, quarterly Oracle updates, user training, and continuous improvements."
  },
  {
    qus: "Why choose DimensionCG as your Oracle Cloud implementation partner?",
    ans: "Our certified Oracle consultants combine deep product expertise with proven delivery methodologies and industry best practices to deliver secure, scalable Oracle Cloud solutions."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.faq-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F15A24 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="faq-header text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-[#F15A24] mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our Oracle Cloud services, implementation approach, and ongoing support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-orange-200 bg-orange-50/30 shadow-sm' : 'border-slate-200 bg-white hover:border-orange-100'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-[#F15A24]' : 'text-slate-900'}`}>
                    {faq.qus}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#F15A24] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-orange-100/50 mt-2">
                    {faq.ans}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
