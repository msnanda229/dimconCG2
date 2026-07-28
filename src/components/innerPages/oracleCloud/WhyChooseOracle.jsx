import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Cpu, Zap, ShieldCheck, Eye, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Unified Enterprise Platform',
    description: 'Break down data silos with a single data model across finance, HR, supply chain, and customer experience.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI Powered Automation',
    description: 'Leverage embedded machine learning to automate routine tasks, predict outcomes, and recommend next best actions.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Continuous Innovation',
    description: 'Stay ahead with quarterly updates that bring new features, security enhancements, and industry best practices automatically.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Enterprise Grade Security',
    description: 'Protect your sensitive data with always-on encryption, autonomous security, and strict regulatory compliance controls.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Real Time Visibility',
    description: 'Gain instant access to cross-departmental analytics and dashboards for faster, data-driven decision making.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Built to Scale',
    description: 'A cloud-native architecture designed to handle peak workloads and grow seamlessly with your global enterprise.',
  },
];

const WhyChooseOracle = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.benefit-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
            Why Enterprises Choose Oracle Cloud
          </h2>
          <div className="w-20 h-1 bg-[#F15A24] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group p-8 rounded-2xl bg-white border border-border hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F15A24] flex items-center justify-center mb-6 group-hover:bg-[#F15A24] group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-[#000000] mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOracle;
