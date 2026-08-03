import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Eye, RefreshCw, Layers, Link as LinkIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Built on Salesforce",
    description: "Leverage the power, security, and scalability of the world's #1 cloud platform. Native integration with Salesforce CRM."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Real-Time Visibility",
    description: "Gain complete, real-time visibility across your entire manufacturing operation, from sales order to production to delivery."
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "End-to-End Supply Chain",
    description: "Manage complex supply chains with ease. Optimize inventory, automate procurement, and streamline fulfillment."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Flexible & Scalable",
    description: "A cloud ERP that grows with you. Easily adapt to new business models, acquisitions, and market changes."
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    title: "Connected Operations",
    description: "Break down silos by connecting your front office (CRM) and back office (ERP) on a single data model."
  }
];

const WhyChooseRootstock = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.benefit-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      // Cards Animation
      gsap.fromTo('.benefit-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.benefits-grid', start: 'top 85%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="benefit-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Why Choose Rootstock?
          </h2>
          <p className="text-lg text-slate-600">
            Discover why modern manufacturers choose Rootstock over traditional legacy ERP solutions to drive efficiency, agility, and growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className={`benefit-card bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${idx === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-50 text-[#4f46e5] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#4f46e5] group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4f46e5] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseRootstock;
