import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Settings, Users, Link as LinkIcon, Edit3, LifeBuoy, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: <Users className="w-6 h-6" />,
    title: 'Rootstock Consulting',
    desc: 'Align your manufacturing processes with Rootstock capabilities through expert assessment and strategic roadmapping.',
    link: '/services'
  },
  {
    id: 2,
    icon: <Settings className="w-6 h-6" />,
    title: 'Rootstock Implementation',
    desc: 'End-to-end deployment tailored to your manufacturing environment, ensuring smooth data migration and system configuration.',
    link: '/services'
  },
  {
    id: 3,
    icon: <LinkIcon className="w-6 h-6" />,
    title: 'Rootstock Integration',
    desc: 'Seamlessly connect Rootstock with Salesforce CRM, external PLM systems, and other critical enterprise applications.',
    link: '/services'
  },
  {
    id: 4,
    icon: <Edit3 className="w-6 h-6" />,
    title: 'Rootstock Customization',
    desc: 'Tailor workflows, reports, and dashboards to meet your unique shop floor and operational requirements.',
    link: '/services'
  },
  {
    id: 5,
    icon: <LifeBuoy className="w-6 h-6" />,
    title: 'Rootstock Support',
    desc: 'Ongoing technical support, system health checks, and user training to maximize adoption and ROI.',
    link: '/services'
  },
  {
    id: 6,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Managed Services',
    desc: 'Proactive monitoring, maintenance, and continuous optimization of your Rootstock environment.',
    link: '/services'
  }
];

const OurServices = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.services-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      // Timeline nodes Animation
      gsap.fromTo('.service-node',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.services-timeline', start: 'top 75%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-100">
      
      {/* Background decoration */}
      <div className="absolute left-[-10%] top-20 w-96 h-96 rounded-full bg-[#4f46e5]/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="services-header mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#4f46e5]" />
            <span className="uppercase tracking-[0.2em] text-[#4f46e5] text-sm font-bold">How We Help</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight max-w-2xl">
            Our Rootstock Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            DimensionCG supports manufacturers throughout their entire Rootstock journey—from initial consulting to full implementation and ongoing managed services.
          </p>
        </div>

        {/* Services Timeline / Grid */}
        <div className="services-timeline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div key={service.id} className="service-node group relative">
              {/* Connector line for desktop */}
              {idx < services.length - 1 && idx % 3 !== 2 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-0.5 bg-indigo-100 z-0">
                  <div className="h-full bg-[#4f46e5] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              )}
              
              <Link to={service.link} className="block relative z-10 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-[#4f46e5] flex items-center justify-center mb-6 group-hover:bg-[#4f46e5] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[#4f46e5] font-semibold text-sm group-hover:text-[#4338ca] mt-auto">
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
