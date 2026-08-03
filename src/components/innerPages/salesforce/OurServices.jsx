import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, Settings, CheckSquare, Rocket, BarChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Discover',
    icon: <Search className="w-5 h-5" />,
    description: 'We analyze your business processes, identify pain points, and define a clear CRM strategy.'
  },
  {
    title: 'Design',
    icon: <PenTool className="w-5 h-5" />,
    description: 'Mapping your unique workflows to Salesforce best practices for a scalable architecture.'
  },
  {
    title: 'Implement',
    icon: <Settings className="w-5 h-5" />,
    description: 'Agile configuration, custom Apex development, and seamless integration with existing systems.'
  },
  {
    title: 'Validate',
    icon: <CheckSquare className="w-5 h-5" />,
    description: 'Rigorous end-to-end testing, user acceptance, and data integrity validation.'
  },
  {
    title: 'Go Live',
    icon: <Rocket className="w-5 h-5" />,
    description: 'A structured deployment plan with dedicated hypercare support for a smooth transition.'
  },
  {
    title: 'Optimize',
    icon: <BarChart className="w-5 h-5" />,
    description: 'Continuous monitoring, user training, and leveraging new Salesforce release features.'
  }
];

const OurServices = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line drawing
      gsap.to('.timeline-line-active', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      // Animate steps appearing
      gsap.fromTo('.timeline-step',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 65%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
            A Structured Approach to Salesforce Success
          </h2>
          <p className="text-lg text-[#000000]">
           Our proven delivery methodology ensures predictable, successful Salesforce implementations tailored to your business needs.
          </p>
        </div>

        <div className="timeline-container relative max-w-6xl mx-auto hidden lg:block pb-12">
          {/* Timeline lines */}
          <div className="timeline-line"></div>
          <div className="timeline-line-active"></div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="timeline-step flex flex-col items-center text-center relative z-10 pt-2">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00a1e0] transition-colors relative z-10">
                  <div className="text-[#00a1e0]">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-bold text-[#000000] mb-2 text-lg">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden max-w-lg mx-auto space-y-8 relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="timeline-step flex gap-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                <div className="text-[#00a1e0]">
                  {step.icon}
                </div>
              </div>
              <div className="pt-2 pb-6 border-b border-slate-100 w-full">
                <h4 className="font-bold text-[#000000] mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
