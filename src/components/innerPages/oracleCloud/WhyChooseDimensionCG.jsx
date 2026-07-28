import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Target, Globe2, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Certified Oracle Expertise',
    description: 'Our team comprises highly certified Oracle professionals with deep domain knowledge across all major modules.',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Proven Delivery Methodology',
    description: 'We utilize a proprietary, risk-mitigated framework that ensures on-time, on-budget implementations.',
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: 'Industry Experience',
    description: 'Tailored solutions designed specifically for the unique regulatory and operational needs of your industry.',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: 'Post Go-Live Optimization',
    description: 'Continuous support, training, and quarterly update management to maximize your long-term ROI.',
  }
];

const WhyChooseDimensionCG = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.split-left > *',
        { x: -50, opacity: 0 },
        {
          x: 0,
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

      gsap.fromTo('.split-right-card',
        { x: 50, opacity: 0 },
        {
          x: 0,
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
    <section ref={containerRef} className="py-24 bg-[#111827] text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-[#F15A24] rounded-full blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12 split-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-[#F15A24]">DimensionCG</span> for Oracle Cloud?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Oracle Cloud is powerful. Maximizing its value requires the right strategy, implementation approach and long-term expertise. We partner with you beyond the go-live date to ensure true digital transformation.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#111827] bg-slate-700 flex items-center justify-center text-xs">
                    User
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">Trusted by Fortune 500s</p>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="split-right-card bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
                  style={{ marginTop: idx % 2 === 1 ? '2rem' : '0' }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#F15A24]/10 text-[#F15A24] flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseDimensionCG;
