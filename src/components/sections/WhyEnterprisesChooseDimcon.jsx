import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 19, suffix: '+', label: "Years of Enterprise Excellence" },
  { value: 100, suffix: '+', label: "Enterprise Customers Worldwide" },
  { value: 30, suffix: '%', label: "Lower Implementation Costs" },
  { value: 95, suffix: '%', label: "Successful Project Delivery" }
];

const WhyEnterprisesChooseDimcon = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      });

      // Animate header
      tl.fromTo('.anim-header', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      tl.addLabel("statsStart", "-=0.2");

      // Animate stats bar items
      tl.fromTo('.stat-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "statsStart"
      );

      // Animate dividers
      tl.fromTo('.stat-divider',
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "statsStart"
      );

      // Count up animation
      const numberEls = sectionRef.current.querySelectorAll('.stat-number-val');
      numberEls.forEach((el, index) => {
        const targetVal = statsData[index].value;
        const target = { val: 0 };
        tl.to(target, {
          val: targetVal,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            el.innerText = Math.floor(target.val);
          }
        }, `statsStart+=${index * 0.1}`);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="why-enterprises-choose-dimcon" ref={sectionRef} className="bg-[#FFFFFF] overflow-hidden font-sans">
      
      <SectionContent className="flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 flex flex-col items-center">
          <h2 className="anim-header font-heading font-extrabold text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-[-0.04em] mb-4 md:mb-6 text-[#0F172A] px-2 md:px-0">
            Enterprise Transformation, Delivered at Scale.
          </h2>
          <p className="anim-header text-base md:text-lg text-[#475569] max-w-[700px] leading-relaxed font-light px-2 md:px-0">
           For over two decades, we've helped enterprises modernize operations with AI, cloud, enterprise applications, and digital solutions. Our experience, global partnerships, and customer-first approach enable organizations to innovate with confidence.
          </p>
        </div>

        {/* Premium Horizontal Stats Bar */}
        <div className="w-full grid grid-cols-1 min-[480px]:grid-cols-2 lg:flex lg:flex-row lg:justify-between items-center gap-12 md:gap-x-12 md:gap-y-16 lg:gap-0">
          
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-item flex flex-col items-center text-center w-full lg:w-auto shrink-0">
                <div className="flex items-baseline font-heading font-black tracking-tighter text-[#2563EB] leading-none mb-3">
                  <span className="stat-number-val text-5xl md:text-6xl">0</span>
                  <span className="text-3xl md:text-4xl ml-1">{stat.suffix}</span>
                </div>
                <h3 className="text-sm md:text-base font-medium text-[#334155] whitespace-pre-line leading-tight max-w-[180px]">
                  {stat.label}
                </h3>
              </div>
              
              {/* Divider (Hidden on Mobile/Tablet, Visible on Desktop) */}
              {index < statsData.length - 1 && (
                <div className="stat-divider hidden lg:block w-px h-16 xl:h-20 bg-[#E2E8F0] shrink-0 mx-6 xl:mx-12"></div>
              )}
            </React.Fragment>
          ))}

        </div>

      </SectionContent>
    </SectionWrapper>
  );
};

export default WhyEnterprisesChooseDimcon;
