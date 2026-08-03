import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Layers, LineChart, Globe, TrendingUp, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: Cloud, title: "Cloud-Native ERP", desc: "Born in the cloud. Seamless updates, zero hardware footprint, and continuous innovation." },
  { icon: Layers, title: "Unified Business Management", desc: "Break down silos with a single data source connecting financials, CRM, and ecommerce." },
  { icon: LineChart, title: "Real-Time Visibility", desc: "Instant insights with customizable role-based dashboards and powerful analytics." },
  { icon: Globe, title: "Anywhere Access", desc: "Securely run your business from any device, anywhere in the world, 24/7." },
  { icon: TrendingUp, title: "Enterprise Scalability", desc: "Easily add new subsidiaries, currencies, and languages as your global footprint expands." },
  { icon: Shield, title: "Intelligent Financial Management", desc: "Automate financial close, ensure compliance, and streamline revenue recognition." }
];

const WhyChooseNetSuite = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.benefit-header > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Grid cards stagger animation
      gsap.fromTo('.benefit-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.benefit-grid',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 relative bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="benefit-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Why Businesses Choose Oracle NetSuite
          </h2>
          <p className="text-lg text-slate-600">
            A unified cloud architecture that scales with your growth, providing deep visibility and control across your entire organization.
          </p>
        </div>

        <div className="benefit-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="benefit-card group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0e4d9e] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0e4d9e] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#000000] mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNetSuite;
