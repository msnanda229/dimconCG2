import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Shield, Link2, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Experienced Workday Consultants',
    description: 'Our certified professionals bring deep domain expertise in HR and finance to every engagement.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Tailored Implementation Approach',
    description: 'We align our deployment methodology with your unique business structure to ensure high adoption.',
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: 'Integration Expertise',
    description: 'Seamlessly connect Workday with legacy systems, custom apps, and third-party solutions.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'End-to-End Project Delivery',
    description: 'From initial roadmap planning to post-go-live managed services, we support your entire lifecycle.',
  }
];

const WhyChooseDimensionCG = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side content animation
      gsap.fromTo('.left-content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );

      // Right side cards stagger animation
      gsap.fromTo('.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.right-content',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-white border-t border-slate-200">
      {/* Background Glows */}
      <div className="absolute left-0 top-20 w-[500px] h-[500px] rounded-full bg-[#005cb9]/5 blur-[180px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-blue-100 blur-[220px] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,92,185,0.03),transparent_55%)] pointer-events-none" />

      {/* Decorative SVG Pattern */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="199.5" stroke="#005cb9" strokeDasharray="4 4" />
          <path d="M400 400L200 200L0 400H400Z" fill="#005cb9" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="left-content w-full lg:w-5/12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#005cb9]" />
              <span className="uppercase tracking-[0.28em] text-[#005cb9] text-sm font-semibold">
                Workday Partner Excellence
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight text-[#000000]">
              Why Choose<br />
              <span className="text-[#005cb9]">DimensionCG</span><br />
              for Workday?
            </h2>

            <div className="mt-5 w-14 h-[3px] bg-[#005cb9] rounded-full" />

            <p className="mt-5 text-lg leading-7 text-slate-600 max-w-xl">
              Maximizing the ROI of Workday requires more than just technical deployment—it demands strategic alignment and deep domain expertise. We ensure your implementation drives true organizational change.
            </p>

            <div className="mt-8 bg-white rounded-3xl p-5 shadow-xl shadow-[0_30px_80px_rgba(0,92,185,0.08)] border border-blue-100 w-fit">
             

              <div className="flex items-center mt-6">
                <div className="flex -space-x-3">
                  <img src="/avatars/1.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=1'} />
                  <img src="/avatars/2.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=2'} />
                  <img src="/avatars/3.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=3'} />
                  <img src="/avatars/4.jpg" alt="User 4" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=4'} />
                </div>
                <div className="ml-5">
                  <p className="font-semibold text-[#000000] text-sm md:text-base">
                    Trusted by <br className="sm:hidden" /><span className="text-[#005cb9]">Global Leaders</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="right-content w-full lg:w-7/12 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card group relative rounded-3xl bg-white p-8 border border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,92,185,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  style={{ marginTop: (idx === 1 || idx === 3) ? '24px' : '0' }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-sm flex items-center justify-center text-[#005cb9] mb-6 relative z-10 transition-transform duration-500 group-hover:rotate-0 -rotate-12">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#000000] relative z-10">{feature.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  {/* Hover Glow inside card */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#005cb9]/5 rounded-full blur-[30px] group-hover:bg-[#005cb9]/10 transition-colors duration-500 pointer-events-none" />
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
