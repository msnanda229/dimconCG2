import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Headset, Users, Cloud, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Customer 360 View',
    description: 'Gain a single, shared view of every customer across all departments to deliver personalized experiences.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Sales Automation',
    description: 'Automate repetitive tasks, track pipelines, and close deals faster with intelligent sales tools.',
  },
  {
    icon: <Headset className="w-6 h-6" />,
    title: 'Service Excellence',
    description: 'Provide faster, more intuitive customer support across every channel with AI-powered insights.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Marketing Personalization',
    description: 'Deliver the right message at the right time with data-driven, automated marketing campaigns.',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Scalable Cloud Platform',
    description: 'A highly secure, flexible, and scalable architecture that grows seamlessly with your business.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI-Powered Analytics',
    description: 'Leverage Salesforce Einstein to predict outcomes, recommend next steps, and automate workflows.',
  },
];

const WhyChooseSalesforce = () => {
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
            Why Businesses Choose Salesforce
          </h2>
          <div className="w-20 h-1 bg-[#00a1e0] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group p-8 rounded-2xl bg-white border border-border hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00a1e0] flex items-center justify-center mb-6 group-hover:bg-[#00a1e0] group-hover:text-white transition-colors duration-300">
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

export default WhyChooseSalesforce;
