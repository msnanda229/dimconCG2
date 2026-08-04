import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, LineChart, Cpu, Cloud, Heart, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: Layers, title: "Unified HR and Finance", desc: "A single system for finance, HR, and planning, ensuring data consistency and breaking down departmental silos." },
  { icon: LineChart, title: "Real-Time Workforce Insights", desc: "Gain instant visibility into global workforce metrics, empowering leaders to make data-driven decisions." },
  { icon: Settings, title: "Simplified Business Processes", desc: "Automate complex workflows and reduce manual administrative tasks, increasing overall organizational efficiency." },
  { icon: Cloud, title: "Cloud-Based Scalability", desc: "A born-in-the-cloud architecture that effortlessly scales with your organization as you grow globally." },
  { icon: Heart, title: "Better Employee Experience", desc: "Intuitive self-service tools that engage employees and managers, accessible from any device." },
  { icon: Cpu, title: "Continuous Innovation", desc: "Benefit from regular, seamless updates that deliver new capabilities without the pain of traditional upgrades." }
];

const WhyChooseWorkday = () => {
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
            Why Organizations Choose Workday
          </h2>
          <p className="text-lg text-slate-600">
            A revolutionary enterprise cloud platform that brings together finance, HR, and planning into a single, seamless system.
          </p>
        </div>

        <div className="benefit-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="benefit-card group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,92,185,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005cb9] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005cb9] group-hover:text-white transition-all duration-300">
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

export default WhyChooseWorkday;
