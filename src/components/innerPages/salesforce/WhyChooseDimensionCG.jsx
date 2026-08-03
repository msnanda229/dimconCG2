import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Target, Globe2, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Award className="w-6 h-6 icon-inner" />,
    title: 'Certified Professionals',
    description: 'Our consultants hold advanced Salesforce certifications across all major clouds and architecture domains.',
  },
  {
    icon: <Target className="w-6 h-6 icon-inner" />,
    title: 'Industry Expertise',
    description: 'We understand the unique regulatory, operational, and customer challenges of your specific industry.',
  },
  {
    icon: <Globe2 className="w-6 h-6 icon-inner" />,
    title: 'End-to-End Delivery',
    description: 'From initial discovery and architecture design to deployment and change management.',
  },
  {
    icon: <Wrench className="w-6 h-6 icon-inner" />,
    title: 'Tailored Solutions',
    description: 'We don\'t just configure software; we optimize your business processes for the modern era.',
  }
];

const WhyChooseDimensionCG = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      tl.fromTo('.split-left > *',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
      
      // Expand blue line
      tl.fromTo('.blue-line',
        { width: 0, opacity: 0 },
        { width: 56, opacity: 1, duration: 0.6, ease: 'power3.out' },
        "-=0.6"
      );

      // Card lift and stagger
      tl.fromTo('.split-right-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
        "-=0.6"
      );

      // Icon rotate
      tl.fromTo('.split-right-card .icon-container',
        { rotate: -45, scale: 0.5, opacity: 0 },
        { rotate: 0, scale: 1, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)' },
        "-=0.8"
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-20 bg-gradient-to-br from-[#FFFDFB] via-[#F8FAFC] to-white">
      {/* Background Glows */}
      <div className="absolute left-0 top-20 w-[500px] h-[500px] rounded-full bg-[#00a1e0]/8 blur-[180px]" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-blue-100 blur-[220px] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,161,224,0.06),transparent_55%)]" />

      {/* Decorative Patterns */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="199.5" stroke="url(#paint0_linear)" strokeDasharray="4 4"/>
          <path d="M400 400L200 200L0 400H400Z" fill="url(#paint1_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00a1e0"/>
              <stop offset="1" stopColor="#00a1e0" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="200" y1="200" x2="200" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00a1e0" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#00a1e0" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12 split-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#00a1e0]" />
              <span className="uppercase tracking-[0.28em] text-[#00a1e0] text-sm font-semibold">
                Proven Excellence
              </span>
            </div>

            <h2 className="text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900">
              Why Choose
              <br />
              <span className="text-[#00a1e0]">DimensionCG</span>{" "}
              for
              <br />
              Salesforce?
            </h2>
            
            <div className="blue-line mt-5 w-14 h-[3px] bg-[#00a1e0] rounded-full" />

            <p className="mt-5 text-lg leading-7 text-slate-600 max-w-xl">
              We bring together certified Salesforce professionals, deep industry expertise, and a proven end-to-end delivery model to construct tailored business solutions that guarantee long-term ROI.
            </p>
            
            <div className="mt-8 bg-white rounded-3xl p-5 shadow-xl shadow-[0_30px_80px_rgba(0,161,224,0.08)] border border-blue-100 w-fit">
              <img src="/partners/salesforce.png" alt="Salesforce Partner" className="w-full max-w-xs object-contain" />
              
              <div className="flex items-center mt-6">
                <div className="flex -space-x-3">
                  <img src="/avatars/1.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=1'} />
                  <img src="/avatars/2.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=2'} />
                  <img src="/avatars/3.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=3'} />
                  <img src="/avatars/4.jpg" alt="User 4" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100" onError={(e) => e.target.src = 'https://i.pravatar.cc/100?img=4'} />
                </div>
                <div className="ml-5">
                  <p className="font-semibold text-slate-800 text-sm md:text-base">
                    Trusted by <br className="sm:hidden" /><span className="text-[#00a1e0]">Fortune 500s</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="w-full lg:w-7/12 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="split-right-card group relative rounded-3xl bg-white p-8 border border-blue-100 shadow-lg hover:shadow-[0_30px_70px_rgba(0,161,224,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  style={{ marginTop: (idx === 1 || idx === 3) ? '24px' : '0' }}
                >
                  <div className="icon-container w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-lg flex items-center justify-center text-[#00a1e0] mb-6 relative z-10">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900 relative z-10">{feature.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                  
                  {/* Hover Glow inside card */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00a1e0]/5 rounded-full blur-[30px] group-hover:bg-[#00a1e0]/10 transition-colors duration-500 pointer-events-none" />
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
