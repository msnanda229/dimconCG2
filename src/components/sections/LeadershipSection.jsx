import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const leadershipTeam = [
  {
    name: "Naga Nandigum",
    role: "President & CEO",
    image: "/hero.jpg",
    bio: "Experienced ERP Cloud Advisor, Strategist, and Digital Transformation Specialist. A proven entrepreneur and multi-investor who has guided enterprises through complex Oracle and NetSuite transformations for over decades."
  },
  {
    name: "Tom Deshan",
    role: "CTO - Chief Technology Officer",
    image: "/hero2.jpg",
    bio: "Engineering leader with deep expertise in ERP platform architecture and scalable cloud systems."
  },
  {
    name: "Brent Lavit",
    role: "CSRO - Chief Sales & Revenue Officer",
    image: "/hero3.jpg",
    bio: "Revenue focused leader who has built and scaled ERP sales practices across enterprise and mid-market segments. Brings a data-driven approach to pipeline management, deal strategy, and revenue acceleration."
  },
  {
    name: "Vamsikrishna Solleti",
    role: "CIO — Chief Information Officer",
    image: "/hero4.jpg",
    bio: "Information systems leader overseeing the integration of AI, cloud infrastructure, and ERP data strategy. Ensures the platform's data architecture supports enterprise-scale security, compliance, and performance."
  }
];

const LeadershipSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      const elements = [
        '.section-header-anim',
        ...gsap.utils.toArray('.leader-card')
      ];

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(elements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true
            }
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.fromTo(elements,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="leadership-section" className="bg-[#FFFFFF] overflow-hidden" ref={sectionRef}>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

      <SectionContent>

        <div className="section-header-anim flex flex-col items-center text-center max-w-[800px] mx-auto mb-10 lg:mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 md:mb-4 block">Our Team</span>
          <h2 className="font-heading font-black text-[clamp(32px,5vw,56px)] text-slate-900 leading-[1.1] tracking-[-0.02em] mb-4">
            Executive Leadership
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed font-light">
            Guided by decades of enterprise consulting experience, our leadership team is dedicated to your transformation success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {leadershipTeam.map((leader, idx) => (
            <div key={idx} className="leader-card group relative">

              {/* Image Container */}
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-slate-50 mb-5 md:mb-6 relative border border-[#E8EDF5]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-25 transition-opacity duration-500"></div>

                {/* LinkedIn Button Overlay */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-100 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-1">{leader.name}</h3>
                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 md:mb-4">{leader.role}</div>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  {leader.bio}
                </p>
                <a
  href={leader.linkedIn}
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary font-semibold transition-colors duration-300 hover:text-blue-600 hover:underline cursor-pointer"
>
  Read More
</a>
              </div>

            </div>
          ))}
        </div>

      </SectionContent>
    </SectionWrapper>
  );
};

export default LeadershipSection;
