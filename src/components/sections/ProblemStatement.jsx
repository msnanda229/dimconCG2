import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Clipboard, UsersRound, Database, Cloud, DollarSign, Calendar, ChartNoAxesCombined, XCircle } from 'lucide-react';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: 'No Clear Strategy', desc: 'Project goals are unclear, and there is no defined implementation roadmap.', icon: Target },
  { id: 2, title: 'Wrong Implementation Partner', desc: 'Choosing an inexperienced implementation partner leads to poor planning and execution.', icon: Users },
  { id: 3, title: 'Delays & Budget Overruns', desc: 'Missed milestones and increasing costs begin to impact the project.', icon: Calendar },
  { id: 4, title: 'Low User Adoption', desc: 'Employees struggle to adopt the new ERP system, reducing business value and ROI.', icon: UsersRound },
  { id: 5, title: 'ERP Project Failure', desc: 'The project fails to deliver the expected business outcomes, resulting in wasted time, budget, and lost opportunities.', icon: XCircle, isFailure: true }
];

const PathOverlay = ({ containerRef, cardRefs, activeStep, inView }) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPaths = [];
      
      for (let i = 0; i < steps.length - 1; i++) {
        const cardA = cardRefs.current[i]?.current;
        const cardB = cardRefs.current[i + 1]?.current;
        
        if (cardA && cardB) {
          const rectA = cardA.getBoundingClientRect();
          const rectB = cardB.getBoundingClientRect();
          
          const x1 = rectA.left + rectA.width / 2 - containerRect.left;
          const y1 = rectA.top + rectA.height / 2 - containerRect.top;
          const x2 = rectB.left + rectB.width / 2 - containerRect.left;
          const y2 = rectB.top + rectB.height / 2 - containerRect.top;

          const dx = x2 - x1;
          const dy = y2 - y1;
          
          let endX = x2;
          let endY = y2;
          
          const isHorizontal = Math.abs(dx) > Math.abs(dy);
          if (isHorizontal) {
             const edgeOffset = rectB.width / 2 + 12;
             endX = x2 - Math.sign(dx) * edgeOffset;
          } else {
             const edgeOffset = rectB.height / 2 + 12;
             endY = y2 - Math.sign(dy) * edgeOffset;
          }
          
          newPaths.push({ id: i, x1, y1, endX, endY });
        }
      }
      setPaths(newPaths);
    };

    updatePaths();
    window.addEventListener('resize', updatePaths);
    const t1 = setTimeout(updatePaths, 150);
    const t2 = setTimeout(updatePaths, 600);
    return () => {
      window.removeEventListener('resize', updatePaths);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [cardRefs]);

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        <marker id="arrowhead-gray" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#CBD5E1" />
        </marker>
        <marker id="arrowhead-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#2563EB" />
        </marker>
      </defs>
      {paths.map((p, idx) => {
        const isActive = activeStep > idx;
        const color = isActive ? "#2563EB" : "#CBD5E1";
        const marker = isActive ? "url(#arrowhead-blue)" : "url(#arrowhead-gray)";
        
        return (
          <motion.path
            key={p.id}
            d={`M ${p.x1} ${p.y1} L ${p.endX} ${p.endY}`}
            strokeWidth="3"
            fill="none"
            markerEnd={marker}
            initial={{ pathLength: 0, stroke: "#CBD5E1" }}
            animate={inView ? { pathLength: 1, stroke: color } : { pathLength: 0, stroke: "#CBD5E1" }}
            transition={{ 
              pathLength: { duration: 0.4, delay: 0.15 * (idx + 1), ease: "easeInOut" },
              stroke: { duration: 0.3 }
            }}
          />
        );
      })}
    </svg>
  );
};

const StepCard = ({ step, index, activeStep, setActiveStep, cardRef, inView, isHoveringRef }) => {
  const isFailure = step.isFailure;
  const isHighlighted = activeStep === index;
  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => {
        if (isHoveringRef) isHoveringRef.current = true;
        setActiveStep(index);
      }}
      onMouseLeave={() => {
        if (isHoveringRef) isHoveringRef.current = false;
      }}
      initial={isFailure ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 0, scale: 0.85, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: isFailure ? 0.6 : 0.45, 
        delay: 0.12 * index, 
        type: isFailure ? "spring" : "tween",
        bounce: isFailure ? 0.4 : 0,
        ease: !isFailure ? "easeOut" : undefined
      }}
      className={`relative z-10 flex flex-col items-center justify-start p-5 h-full rounded-[20px] w-full max-w-full md:max-w-[240px] lg:max-w-[220px] mx-auto text-center cursor-pointer transition-all duration-200 ease-out ${
        isFailure 
          ? (isHighlighted 
              ? "bg-red-50/90 border border-red-200 shadow-[0_10px_30px_-5px_rgba(239,68,68,0.4)] -translate-y-1 scale-[1.03]" 
              : "bg-red-50/90 border border-red-100 shadow-sm")
          : (isHighlighted 
              ? "bg-white border-2 border-[#2563EB] shadow-[0_10px_30px_-5px_rgba(37,99,235,0.2)] -translate-y-1 scale-[1.02]" 
              : "bg-white border border-slate-200 shadow-sm")
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-200 ease-out shrink-0 ${
        isFailure 
          ? (isHighlighted ? "bg-red-600 text-white" : "bg-red-100 text-red-600")
          : (isHighlighted ? "bg-[#2563EB] text-white" : "bg-slate-50 text-[#2563EB]")
      }`}>
        <motion.div animate={isHighlighted ? { rotate: [0, -10, 10, 0] } : {}} transition={{ duration: 0.4 }}>
          <Icon size={22} strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <div className={`text-[10px] font-bold uppercase tracking-[0.1em] mb-3 px-2.5 py-0.5 rounded-full transition-colors duration-200 ease-out shrink-0 ${
        isFailure
          ? (isHighlighted ? "bg-red-600 text-white" : "bg-red-200/50 text-red-700")
          : (isHighlighted ? "bg-[#2563EB] text-white" : "bg-slate-100 text-slate-500")
      }`}>
        Step {step.id}
      </div>
      
      <h3 className={`font-bold text-sm leading-tight mb-2 transition-colors duration-200 ease-out ${
        isFailure 
          ? "text-red-900"
          : (isHighlighted ? "text-slate-900" : "text-slate-700")
      }`}>
        {step.title}
      </h3>

      <p className={`text-xs leading-relaxed transition-colors duration-200 ease-out ${
        isFailure 
          ? (isHighlighted ? "text-red-800" : "text-red-700/80")
          : (isHighlighted ? "text-slate-600" : "text-slate-500")
      }`}>
        {step.desc}
      </p>
    </motion.div>
  );
};

const ProblemStatement = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(-1);
  const isHoveringRef = useRef(false);
  
  const cardRefs = useRef([]);
  if (cardRefs.current.length !== steps.length) {
    cardRefs.current = Array(steps.length).fill().map((_, i) => cardRefs.current[i] || React.createRef());
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 30%",
        onUpdate: (self) => {
          if (isHoveringRef.current) return; // Prioritize hover
          const progress = self.progress;
          if (progress === 0) {
            setActiveStep(-1);
          } else {
            const step = Math.min(Math.floor(progress * steps.length), steps.length - 1);
            setActiveStep(step);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} className="bg-[#FFFFFF] overflow-hidden text-[#0F172A] font-sans">
      
      {/* Soft Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[1200px] md:h-[1200px] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.02)_0%,_transparent_60%)] rounded-full pointer-events-none"></div>

      <SectionContent className="relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center max-w-[800px]">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#2563EB] bg-blue-50/80 border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-[0.15em] text-xs md:text-sm font-bold mb-4 shadow-sm"
          >
            The Failure Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-[-0.04em] mb-4 text-black"
          >
            Why 60% of ERP Projects Fail Without the Right Partner 
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-[#64748B] leading-relaxed max-w-[800px] font-light"
          >
            An ERP implementation is more than deploying software. It requires the right strategy, experienced guidance, and a clear roadmap. Without the right implementation partner, even the best ERP solution can run into delays, budget overruns, and low user adoption.
          </motion.p>
        </div>

        {/* Interactive Flowchart Container */}
        <div className="relative w-full max-w-[1000px] mx-auto" ref={containerRef}>
          
          <PathOverlay 
            containerRef={containerRef} 
            cardRefs={cardRefs}  
            activeStep={activeStep} 
            inView={isInView} 
          />

          <div className="flex flex-wrap justify-center gap-y-10 md:gap-y-12 lg:gap-y-16 gap-x-4 lg:gap-x-6 relative w-full">
            {steps.map((step, idx) => (
              <div key={step.id} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.5rem)] flex justify-center">
                <StepCard 
                  step={step} 
                  index={idx} 
                  activeStep={activeStep} 
                  setActiveStep={setActiveStep} 
                  cardRef={cardRefs.current[idx]} 
                  inView={isInView} 
                  isHoveringRef={isHoveringRef}
                />
              </div>
            ))}
          </div>

        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default ProblemStatement;