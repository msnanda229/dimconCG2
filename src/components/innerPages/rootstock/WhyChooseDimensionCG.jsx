import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseDimensionCG = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.choose-text > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.choose-card',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const reasons = [
    { icon: <Award className="text-[#4f46e5] w-6 h-6" />, title: "Manufacturing ERP Expertise", desc: "Deep domain knowledge in manufacturing workflows, supply chain, and shop floor operations." },
    { icon: <Zap className="text-[#4f46e5] w-6 h-6" />, title: "Salesforce Ecosystem", desc: "Proven track record in integrating Rootstock natively with Salesforce CRM for a unified platform." },
    { icon: <CheckCircle2 className="text-[#4f46e5] w-6 h-6" />, title: "Certified Consultants", desc: "Our team holds advanced certifications in Rootstock and Salesforce platform development." },
    { icon: <ShieldCheck className="text-[#4f46e5] w-6 h-6" />, title: "End-to-End Delivery", desc: "Comprehensive support from initial blueprinting to post-go-live optimization and managed services." },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden border-t border-slate-100">

      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#f8fafc] -skew-x-12 transform origin-top-right z-0 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Text Content */}
          <div className="choose-text w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#4f46e5]" />
              <span className="uppercase tracking-[0.2em] text-[#4f46e5] text-sm font-bold">Your Trusted Partner</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Why Choose DimensionCG for Rootstock?
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Implementing a cloud-native manufacturing ERP requires a partner who understands both the technology and the shop floor. DimensionCG combines deep manufacturing expertise with Salesforce ecosystem mastery to ensure your Rootstock implementation drives tangible business outcomes.
            </p>

            {/* Partner Badges */}
            <div className="mt-8 bg-white rounded-3xl p-5 shadow-xl shadow-[0_30px_80px_rgba(14,77,158,0.08)] border border-blue-100 w-fit">
              <img src="/ai_logos/RTS_Logo_Colored.svg" alt="Oracle NetSuite Partner" className="w-full max-w-xs object-contain" />

              <div className="flex items-center mt-6">
                <div className="flex -space-x-3">
                  <img src="/avatars/1.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=1'} />
                  <img src="/avatars/2.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=2'} />
                  <img src="/avatars/3.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=3'} />
                  <img src="/avatars/4.jpg" alt="User 4" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=4'} />
                </div>
                <div className="ml-5">
                  <p className="font-semibold text-[#000000] text-sm md:text-base">
                    Trusted by <br className="sm:hidden" /><span className="text-[#0e4d9e]">Fortune 500s</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="choose-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseDimensionCG;
