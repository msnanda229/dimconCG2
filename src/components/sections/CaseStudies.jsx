import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import caseStudiesData from '../../data/case-studies.json';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      const elements = [
        '.section-header-anim',
        ...gsap.utils.toArray('.case-study-item')
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
    <SectionWrapper id="case-studies" className="bg-[#FFFFFF] overflow-hidden" ref={sectionRef}>

      <SectionContent>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-16 gap-6 md:gap-8">
          <div className="max-w-3xl section-header-anim">
            <span className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 block">Proven Impact</span>
            <h2 className="font-heading font-extrabold text-[clamp(32px,5vw,48px)] text-slate-900 leading-[1.1] tracking-[-0.04em] mb-4">
              Case Studies
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
              See how we have transformed the world's leading organizations, turning complex technology implementations into measurable business ROI.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20">
          {(() => {
            const study = caseStudiesData[0];
            if (!study) return null;
            return (
              <div className="case-study-item flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">

                {/* Left Side: Imagery & ROI */}
                <div className="w-full lg:w-[45%] relative">
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src={study.image}
                        alt={study.client}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 hover:opacity-100 transition-all duration-700"
                      />
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-90 pointer-events-none"></div>

                    {/* Embedded ROI Metric */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex items-end justify-between">
                      <div>
                        <div className="text-[10px] md:text-xs text-white/70 font-semibold tracking-wider uppercase mb-1">{study.industry}</div>
                        <div className="text-lg md:text-xl text-white font-bold">{study.client}</div>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <div className="flex items-center gap-1 md:gap-2 text-gold font-heading font-black text-3xl md:text-5xl leading-none mb-1">
                          <TrendingUp size={24} className="mb-1 md:mb-2 md:w-7 md:h-7" />
                          {study.roiMetric}
                        </div>
                        <div className="text-[10px] md:text-xs text-white/60 max-w-[120px] md:max-w-[150px] leading-tight font-medium">
                          {study.roiLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Editorial Content */}
                <div className="w-full lg:w-[55%] flex flex-col pt-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-12">

                    {/* Challenge */}
                    <div className="relative">
                      <div className="text-slate-400 text-5xl md:text-6xl font-heading font-black absolute -top-6 md:-top-8 -left-2 md:-left-4 opacity-50 pointer-events-none">1</div>
                      <div className="relative z-10">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2 md:mb-3">Challenge</h4>
                        <p className="text-base text-slate-700 leading-relaxed md:leading-relaxed">{study.challenge}</p>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="relative">
                      <div className="text-slate-400 text-5xl md:text-6xl font-heading font-black absolute -top-6 md:-top-8 -left-2 md:-left-4 opacity-50 pointer-events-none">2</div>
                      <div className="relative z-10">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2 md:mb-3">Solution</h4>
                        <p className="text-base text-slate-700 leading-relaxed md:leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="relative">
                      <div className="text-slate-400 text-5xl md:text-6xl font-heading font-black absolute -top-6 md:-top-8 -left-2 md:-left-4 opacity-50 pointer-events-none">3</div>
                      <div className="relative z-10">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2 md:mb-3">Outcome</h4>
                        <p className="text-base text-slate-700 leading-relaxed md:leading-relaxed">{study.outcome}</p>
                      </div>
                    </div>

                    {/* Business Impact */}
                    <div className="relative">
                      <div className="text-slate-400 text-5xl md:text-6xl font-heading font-black absolute -top-6 md:-top-8 -left-2 md:-left-4 opacity-50 pointer-events-none">4</div>
                      <div className="relative z-10">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2 md:mb-3">Business Impact</h4>
                        <p className="text-base text-slate-900 font-medium leading-relaxed md:leading-relaxed">{study.businessImpact}</p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            );
          })()}
        </div>

        {/* View All Case Studies Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            to="/resources/case-studies"
            className="group inline-flex items-center gap-2 text-[#2563EB] font-bold text-sm md:text-base hover:text-blue-700 bg-white border border-[#E8EDF5] px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all duration-200 animate-fade"
          >
            View All Case Studies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </SectionContent>
    </SectionWrapper>
  );
};

export default CaseStudies;
