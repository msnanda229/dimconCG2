import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import { industries as allIndustries } from '../../data/industries';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

import healthcareImg from '../../assets/industries/healthcare_premium.png';
import manufacturingImg from '../../assets/industries/manufacturing_premium.png';
import financeImg from '../../assets/industries/finance_premium.png';
import retailImg from '../../assets/industries/retail_premium.png';

const premiumImages = {
  healthcare: healthcareImg,
  manufacturing: manufacturingImg,
  finance: financeImg,
  retail: retailImg,
};

gsap.registerPlugin(ScrollTrigger);

/* ─── Expanded Card Content (rendered inside the active panel) ─── */
const ExpandedContent = React.memo(({ industry, triggerCountUp }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const els = contentRef.current.querySelectorAll('.exp-anim');
    gsap.fromTo(els,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power3.out", delay: 0.15 }
    );
    // trigger metric count-ups after content fades in
    setTimeout(() => triggerCountUp(contentRef.current), 300);
  }, [industry.slug]);

  return (
    <div ref={contentRef} className="relative z-20 flex flex-col justify-end h-full p-8 md:p-10 lg:p-12">
      {/* Badge */}
      <span className="exp-anim inline-block w-fit px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold text-xs tracking-[0.15em] uppercase mb-5">
        {industry.name} Experience
      </span>

      {/* Headline */}
      <h3 className="exp-anim font-heading font-black text-2xl md:text-3xl lg:text-4xl text-white leading-[1.1] tracking-tight mb-4 max-w-[600px]">
        {industry.headline}
      </h3>

      {/* Description */}
      <p className="exp-anim text-sm md:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-[540px]">
        {industry.desc}
      </p>

      {/* Tech Stack */}
      <div className="exp-anim flex flex-wrap gap-2 mb-8">
        {industry.techStack.map((tech, i) => (
          <span key={i} className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-white">
            {tech}
          </span>
        ))}
      </div>

      {/* KPI Metrics */}
      <div className="exp-anim flex flex-wrap gap-6 mb-8">
        {industry.outcomes.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl md:text-4xl font-heading font-black text-blue-400 flex items-baseline leading-none">
              <span className="metric-val" data-value={stat.val}>0</span>
              <span className="text-lg ml-0.5">{stat.suffix}</span>
            </span>
            <span className="text-xs text-slate-400 font-semibold tracking-wide mt-1.5">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="exp-anim">
        <Link
          to={`/industries/${industry.slug}`}
          className="inline-flex items-center gap-2 px-6 h-11 bg-[#e28b2b] hover:bg-[#bf6206] text-white rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(226,139,43,0.28)] group/btn"
        >
          <span>Explore {industry.name}</span>
          <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
});
ExpandedContent.displayName = 'ExpandedContent';


/* ─── Main Section ─── */
const IndustriesSection = ({ featuredOnly = true }) => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  // Determine which industries to show based on featuredOnly flag
  const displayIndustries = featuredOnly ? allIndustries.slice(0, 4) : allIndustries;


  // Count-up helper
  const triggerCountUp = useCallback((container) => {
    if (!container) return;
    const els = container.querySelectorAll('.metric-val');
    els.forEach(el => {
      const targetVal = parseFloat(el.getAttribute('data-value'));
      const isDecimal = targetVal % 1 !== 0;
      const obj = { val: 0 };
      gsap.fromTo(obj,
        { val: 0 },
        {
          val: targetVal,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            el.innerText = obj.val.toFixed(isDecimal ? 1 : 0);
          }
        }
      );
    });
  }, []);

  // Entrance animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.ind-section-header',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
        }
      );
      gsap.fromTo('.ind-carousel-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Handle switching active card
  const handleSwitch = useCallback((newIndex) => {
    if (newIndex === activeIndex || isAnimating.current) return;
    isAnimating.current = true;

    // Fade out current expanded content
    const currentCard = cardRefs.current[activeIndex];
    const expandedContent = currentCard?.querySelector('.expanded-inner');
    if (expandedContent) {
      gsap.to(expandedContent, { opacity: 0, duration: 0.2, ease: "power2.in" });
    }

    // After a tiny delay, switch state and let React re-render
    setTimeout(() => {
      setActiveIndex(newIndex);
      isAnimating.current = false;
    }, 250);
  }, [activeIndex]);

  // For mobile: show as a swipeable list with tap
  const [mobileActive, setMobileActive] = useState(0);
  const handleMobileTap = useCallback((idx) => {
    setMobileActive(prev => prev === idx ? -1 : idx);
  }, []);

  return (
    <SectionWrapper
      id="industries-section"
      className="bg-[#FFFFFF] overflow-hidden"
      spacing="py-12 md:py-14 lg:py-16"
      ref={sectionRef}
    >
      <SectionContent>

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-[800px] mb-6 md:mb-8 lg:mb-10">
          <span className="ind-section-header inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-3">
            Sectors &amp; Domains
          </span>
          <h2 className="ind-section-header font-heading font-extrabold text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-[-0.04em] text-slate-900 mb-3">
            Industry Expertise
          </h2>
          <p className="ind-section-header text-base md:text-lg lg:text-xl leading-relaxed text-slate-600 font-light">
            Purpose-built solutions tailored to the unique operational, data compliance, and technological demands of your specific industry.
          </p>
        </div>

        {/* ─── Desktop Horizontal Expanding Carousel (OR Grid for dedicated page) ─── */}
        <div
          ref={carouselRef}
          className={`hidden lg:flex gap-3 w-full items-stretch ${!featuredOnly ? 'flex-wrap' : ''}`}
          style={{ minHeight: '520px' }}
        >
          {displayIndustries.map((ind, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={ind.slug}
                ref={el => cardRefs.current[idx] = el}
                className="ind-carousel-card relative rounded-3xl overflow-hidden cursor-pointer transition-[flex] duration-reveal ease-industry border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{
                  flex: isActive ? (featuredOnly ? '1 1 0%' : '1 1 50%') : '0 0 100px',
                  minWidth: isActive ? '0' : '100px',
                  minHeight: '520px',
                  marginBottom: !featuredOnly ? '1rem' : '0'
                }}
                onMouseEnter={() => handleSwitch(idx)}
                tabIndex={0}
                role="tab"
                aria-selected={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSwitch(idx);
                  }
                }}
              >
                {/* Background Image (always rendered) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={premiumImages[ind.slug] || ind.image}
                    alt={ind.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isActive ? 'scale-100' : 'scale-110'}`}
                  />
                  {/* Dark overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20' : 'bg-slate-900/70'}`} />
                </div>

                {/* Collapsed State: Vertical label */}
                {!isActive && (
                  <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 px-2">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white">
                      {ind.icon}
                    </div>
                    <span
                      className="text-sm font-bold text-white/90 tracking-wider uppercase whitespace-nowrap"
                      style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
                    >
                      {ind.name}
                    </span>
                  </div>
                )}

                {/* Expanded State: Full content */}
                {isActive && (
                  <div className="expanded-inner absolute inset-0 z-10">
                    <ExpandedContent industry={ind} triggerCountUp={triggerCountUp} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── Tablet: Horizontal scrollable cards (OR grid for dedicated page) ─── */}
        <div className={`hidden md:flex lg:hidden gap-4 pb-4 ${featuredOnly ? 'overflow-x-auto scrollbar-none snap-x' : 'flex-wrap'}`}>
          {displayIndustries.map((ind, idx) => {
            const isActive = mobileActive === idx;
            return (
              <div
                key={ind.slug}
                onClick={() => handleMobileTap(idx)}
                className={`shrink-0 rounded-3xl overflow-hidden relative border border-slate-200/60 cursor-pointer transition-all duration-500 ${featuredOnly ? 'snap-start min-w-[220px] sm:min-w-[260px]' : 'w-[calc(50%-8px)]'}`}
                style={{ minWidth: featuredOnly ? (isActive ? '320px' : '240px') : undefined, height: '460px' }}
              >
                <div className="absolute inset-0 z-0">
                  <img src={premiumImages[ind.slug] || ind.image} alt={ind.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 ${isActive ? 'bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20' : 'bg-slate-900/70'}`} />
                </div>

                {!isActive && (
                  <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 px-2">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-white">{ind.icon}</div>
                    <span className="text-xs font-bold text-white/80 tracking-wider uppercase whitespace-nowrap" style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
                      {ind.name}
                    </span>
                  </div>
                )}

                {isActive && (
                  <ExpandedContent industry={ind} triggerCountUp={triggerCountUp} />
                )}
              </div>
            );
          })}
        </div>

        {/* ─── Mobile: Accordion cards ─── */}
        <div className="flex md:hidden flex-col gap-3">
          {displayIndustries.map((ind, idx) => {
            const isActive = mobileActive === idx;
            return (
              <div
                key={ind.slug}
                onClick={() => handleMobileTap(idx)}
                className="rounded-2xl overflow-hidden relative border border-slate-200/60 cursor-pointer transition-all duration-500"
                style={{ height: isActive ? '540px' : '72px' }}
              >
                {/* Background */}
                <div className="absolute inset-0 z-0">
                  <img src={premiumImages[ind.slug] || ind.image} alt={ind.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 ${isActive ? 'bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30' : 'bg-slate-900/75'}`} />
                </div>

                {/* Collapsed row */}
                {!isActive && (
                  <div className="relative z-10 flex items-center gap-4 h-full px-6">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                      {ind.icon}
                    </div>
                    <span className="text-[15px] font-bold text-white">{ind.name}</span>
                    <ArrowRight size={16} className="text-white/50 ml-auto" />
                  </div>
                )}

                {/* Expanded */}
                {isActive && (
                  <div className="absolute inset-0 z-10">
                    <ExpandedContent industry={ind} triggerCountUp={triggerCountUp} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── View All Button (Only when featured) ─── */}
        {featuredOnly && (
          <div className="mt-8 md:mt-10 flex justify-center w-full">
            <button
              onClick={() => navigate('/industries')}
              className="w-full md:w-auto px-8 h-[52px] rounded-full border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 font-semibold text-[15px] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              View All Industries
            </button>
          </div>
        )}

      </SectionContent>
    </SectionWrapper>
  );
};

export default IndustriesSection;
