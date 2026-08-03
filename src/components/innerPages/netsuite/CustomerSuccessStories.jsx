import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building2, TrendingUp, Clock, TrendingDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CustomerSuccessStories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );

      gsap.fromTo('.kpi-card',
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.kpis-container',
            start: 'top 80%',
          }
        }
      );

      // Number counter animation
      gsap.utils.toArray('.counter-val').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isPercentage = counter.getAttribute('data-suffix') === '%';
        const suffix = counter.getAttribute('data-suffix') || '';

        gsap.to({ val: 0 }, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
          },
          onUpdate: function () {
            counter.innerText = (isPercentage ? Math.round(this.targets()[0].val) : this.targets()[0].val.toFixed(1)) + suffix;
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Real Results. Real Transformations.
            </h2>
            <p className="text-lg text-[#000000]">
              Discover how leading organizations leverage DimensionCG and Oracle NetSuite to achieve remarkable business outcomes.
            </p>
          </div>
          <button className="px-6 py-3 bg-white border border-border rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shrink-0 group">
            View All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm flex flex-col lg:flex-row">

          {/* Left - Visual / Context */}
          <div className="w-full lg:w-1/2 bg-slate-900 relative p-12 flex flex-col justify-between overflow-hidden min-h-[400px]">
            {/* Background Image/Pattern */}
            <img src="/images/manufacturing_scm.png" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Global Manufacturer" />
            <div className="absolute inset-0 opacity-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                Global Manufacturing Enterprise
              </div>

              <h3 className="text-3xl font-bold text-white leading-tight mb-4">
                Operational transformation with NetSuite ERP & WMS
              </h3>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
              <p className="text-slate-300 text-sm mb-2">NetSuite Solutions Implemented:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-200 text-xs">Financials</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-200 text-xs">Inventory & WMS</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-200 text-xs">Analytics</span>
              </div>
            </div>
          </div>

          {/* Right - Content & KPIs */}
          <div className="w-full lg:w-1/2 p-10 lg:p-14 story-content">

            <div className="mb-10">
              <h4 className="text-sm font-bold text-[#0e4d9e] uppercase tracking-wider mb-3">The Challenge</h4>
              <p className="text-slate-600 leading-relaxed">
                The client struggled with disparate legacy systems causing data silos, manual reporting errors, and a severe lack of inventory visibility which led to frequent stockouts and high carrying costs.
              </p>
            </div>

            <div className="mb-12">
              <h4 className="text-sm font-bold text-[#0e4d9e] uppercase tracking-wider mb-3">The Solution</h4>
              <p className="text-slate-600 leading-relaxed">
                DimensionCG implemented a unified NetSuite ERP architecture, integrating advanced financial modules with NetSuite WMS. We established real-time automated reporting and streamlined their complex supply chain processes.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#000000] mb-4">Business Outcomes</h4>
              <div className="kpis-container grid grid-cols-1 sm:grid-cols-3 gap-6">

                <div className="kpi-card p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-bold text-[#000000] mb-1">
                    <span className="counter-val" data-target="40" data-suffix="%">0%</span>
                  </div>
                  <p className="text-xs text-slate-500">Faster financial close</p>
                </div>

                <div className="kpi-card p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0e4d9e] flex items-center justify-center mb-3">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-bold text-[#000000] mb-1">
                    <span className="counter-val" data-target="60" data-suffix="%">0%</span>
                  </div>
                  <p className="text-xs text-slate-500">Improved reporting efficiency</p>
                </div>

                <div className="kpi-card p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-bold text-[#000000] mb-1">
                    <span className="counter-val" data-target="35" data-suffix="%">0%</span>
                  </div>
                  <p className="text-xs text-slate-500">Operational cost reduction</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessStories;
