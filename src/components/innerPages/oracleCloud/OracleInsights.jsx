import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    category: 'Cloud Migration',
    title: '5 Steps to a Risk-Free Oracle Cloud Migration Strategy',
    excerpt: 'Learn the proven methodology for moving legacy on-premise workloads to Oracle Cloud without business disruption.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'Finance Transformation',
    title: 'Maximizing ROI with Oracle ERP Cloud Analytics',
    excerpt: 'Discover how modern finance teams are leveraging built-in AI and analytics to drive predictive forecasting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'Supply Chain',
    title: 'Building Resilience with Oracle SCM in 2024',
    excerpt: 'Key strategies for adapting your supply chain to global disruptions using Oracle\'s latest SCM innovations.',
    image: '/images/scm_resilience.png',
  },
  {
    category: 'Webinar',
    title: 'Masterclass: Optimizing Oracle HCM for Remote Workforces',
    excerpt: 'Watch our latest on-demand session on configuring Oracle HCM to support global, hybrid employee experiences.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
  }
];

const OracleInsights = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.insight-card',
        { y: 50, opacity: 0 },
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
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Latest Oracle Insights
          </h2>
          <p className="text-lg text-[#000000] max-w-2xl mx-auto">
            Thought leadership, best practices, and actionable advice from our Oracle certified experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, idx) => (
            <div key={idx} className="insight-card group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">

              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[#F15A24] mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{article.category}</span>
                </div>

                <h3 className="text-lg font-bold text-[#000000] mb-3 group-hover:text-[#F15A24] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center text-sm font-semibold text-[#000000] group-hover:text-[#F15A24] transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OracleInsights;
