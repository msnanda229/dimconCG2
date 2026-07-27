import React, { useEffect } from 'react';
import IndustriesSection from '../components/sections/IndustriesSection';

const Industries = () => {
  // Scroll to top when navigating to the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FFFFFF] pt-[92px]">
      <div className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px]">
          <h1 className="font-heading font-extrabold text-[clamp(40px,5vw,56px)] leading-[1.1] tracking-[-0.04em] text-slate-900 mb-4">
            All Industries
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-600 font-light max-w-[800px]">
            Explore our comprehensive industry expertise and discover how we deliver purpose-built solutions for your specific domain.
          </p>
        </div>
      </div>
      <div className="-mt-[72px] lg:-mt-[96px]">
        {/* Negative margin to offset the IndustriesSection's own padding and blend them smoothly */}
        <IndustriesSection featuredOnly={false} />
      </div>
    </main>
  );
};

export default Industries;
