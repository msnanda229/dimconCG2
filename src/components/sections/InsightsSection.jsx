import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogsData from '../../data/blogs.json';
import { SectionWrapper, SectionContent } from '../layout/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const InsightsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo('.insight-animate',
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
        gsap.fromTo('.insight-animate',
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

  const featured = blogsData[0];
  const remaining = blogsData.slice(1);

  return (
    <SectionWrapper className="bg-white" ref={sectionRef}>
      
      <SectionContent>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-16 gap-6 md:gap-8 border-b border-slate-200 pb-6 md:pb-8">
          <div className="max-w-[720px] insight-animate">
            <h2 className="font-heading font-black text-[clamp(32px,5vw,56px)] text-slate-900 leading-[1.1] tracking-[-0.02em] mb-4">
            Insights & Blogs
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed font-light">
              Stay informed with expert perspectives, industry trends, product updates, and practical strategies to help you get more from your enterprise technology investments.
            </p>
          </div>
          <div className="shrink-0 mb-2 insight-animate">
            <Link to="/resources/blog" className="group inline-flex items-center gap-2 text-slate-900 font-bold hover:text-primary transition-colors uppercase tracking-widest text-xs md:text-sm">
              View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Magazine Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Featured Article (Left) */}
          <Link to={`/resources/${featured.slug}`} className="block w-full lg:w-[60%] insight-animate group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl mb-6 md:mb-8">
              <img 
                src={featured.image} 
                alt={featured.title}
                loading="lazy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-slate-900 shadow-sm">
                {featured.category}
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-slate-500 font-medium mb-3 md:mb-4">
              <Clock size={16} /> <span>{featured.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>5 min read</span>
            </div>
            
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
              {featured.title}
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-5 md:mb-6">
              {featured.description}
            </p>
            
            <div className="inline-flex items-center gap-2 font-semibold text-primary group-hover:text-blue-700 transition-colors">
              Read Article <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Secondary Articles Stack (Right) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-10 md:gap-12">
            {remaining.map((article, idx) => (
              <Link key={idx} to={`/resources/${article.slug}`} className="insight-animate group cursor-pointer flex flex-col">
                <div className="relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-2xl mb-5 md:mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-slate-900 shadow-sm">
                    {article.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-500 font-medium mb-2 md:mb-3">
                  <Clock size={14} /> <span>{article.date}</span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h4>
                
                <div className="inline-flex items-center gap-2 font-semibold text-sm md:text-base text-slate-700 group-hover:text-primary transition-colors mt-auto">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </SectionContent>
    </SectionWrapper>
  );
};

export default InsightsSection;
