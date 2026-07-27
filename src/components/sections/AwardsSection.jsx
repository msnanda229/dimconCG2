import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ArrowRight, ShieldCheck, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);
const recognitions = [
  {
    id: 1,
    logo: "/ai_logos/oraclePartner.png",
    title: "Oracle Platinum Partner",
    subtitle: "Oracle Partner Tier",
    description:
      "Recognized by Oracle for delivering enterprise ERP, HCM, SCM and Cloud transformation projects for global organizations.",
    footer: "Oracle Partner Tier",
  },

  {
    id: 2,
    logo: "/ai_logos/oracle_net_suite.svg",
    title: "Oracle NetSuite Partner",
    subtitle: "Cloud ERP for SMEs",
    description:
      "Delivering Oracle NetSuite Cloud ERP implementations and support for growing businesses and SMEs.",
    footer: "Cloud ERP",
  },

  {
    id: 3,
    logo: "/ai_logos/salesforce_partner.png",
    title: "Top Rated on Clutch",
    subtitle: "Client Reviews",
    description:
      "Highly rated by enterprise clients for consulting quality, delivery excellence and customer satisfaction.",
    footer: "★★★★★ 5.0 Rating",
  },
];

const AwardsSection = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      const elements = [
        headlineRef.current,
        '.anim-fade',
        '.anim-feature',
        '.anim-card',
        '.anim-trust',
        '.anim-metric'
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

      // Count up logic for Credential Highlights
      const numbers = gsap.utils.toArray('.count-number');
      numbers.forEach((num) => {
        const targetValue = parseFloat(num.getAttribute('data-value'));
        gsap.to(num, {
          innerHTML: targetValue,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "Awards & Recognition";
  const splitText = text.split(" ").map((word, i) => (
    <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
      {word.split("").map((char, j) => (
        <span key={j} className="split-char inline-block origin-bottom">{char}</span>
      ))}
    </span>
  ));

  return (
    <SectionWrapper ref={sectionRef} className="bg-[#FFFFFF] overflow-hidden text-[#0F172A] font-sans" spacing="py-12 md:py-14 lg:py-16">

      {/* Background Layers */}

      {/* Faint blue radial glow behind the heading */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] lg:w-[1000px] lg:h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.04)_0%,_transparent_60%)] rounded-full pointer-events-none"></div>



      {/* Soft paper texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <SectionContent className="grid flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10 flex flex-col items-center">
          <span className="anim-fade inline-block text-[#2563EB] bg-blue-50/80 border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-[0.15em] text-xs md:text-sm font-bold mb-2 md:mb-3">
            Global Recognition
          </span>
          <h2
            ref={headlineRef}
            className="font-heading font-black text-[clamp(32px,5vw,60px)] leading-[1.05] tracking-[-0.03em] mb-3 max-w-[1000px] text-[#0F172A]"
            style={{ perspective: "1200px" }}
          >
            {splitText}
          </h2>
          <p className="anim-fade text-base md:text-lg text-[#64748B] max-w-[700px] leading-relaxed font-light px-2 md:px-0">
            Recognized through strategic partnerships, industry certifications, and trusted client reviews that reinforce our commitment to enterprise excellence.
          </p>
        </div>

        {/* Recognition Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[1100px] mx-auto justify-items-center">
          {recognitions.map((item) => (
            <div key={item.id} className="group relative w-full sm:w-auto">
              <div className="w-full sm:w-72 h-36 md:h-44 rounded-3xl border border-[#E5E7EB] bg-white flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <img src={item.logo} alt={item.title} className="w-[65%] h-[65%] md:w-[70%] md:h-[70%] object-contain" />
              </div>

              {/* Hover Card */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 md:top-auto md:bottom-full md:mb-5 w-[280px] sm:w-[320px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 md:p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h4>
                <div className="text-xs md:text-sm text-blue-600 font-semibold mb-2 md:mb-3">{item.subtitle}</div>
                <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                <div className="mt-4 md:mt-5 text-xs md:text-sm font-semibold text-[#2563EB]">{item.footer}</div>
              </div>
            </div>
          ))}
        </div>

      </SectionContent>
    </SectionWrapper>
  );
};

export default AwardsSection;
