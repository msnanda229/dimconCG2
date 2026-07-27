import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: "erp",
      title: "POWERING AI-FIRST ENTERPRISES",
      highlight: "AI Advisory & Strategy",
      desc: "Turn AI ambition into a practical roadmap. We help organizations identify high-impact use cases, assess AI readiness, define implementation strategies, and accelerate adoption with measurable business outcomes.",
      image: "/aiadvStr.png",
      PrimaryCTA: "Explore Services",
      SecondaryCTA: "Book an AI Assessment",
    },

    {
      id: "netsuite",
      title: "POWERING AI-FIRST ENTERPRISES",
      highlight: "Enterprise AI Solutions",
      desc: "Embed AI across your business with intelligent automation, predictive insights, AI agents, and enterprise-grade solutions that improve productivity, decision-making, and operational efficiency.",
      image: "/dimension_ai.png",
      PrimaryCTA: "Explore Services",
      SecondaryCTA: "Talk to an AI Expert",
    },

    {
      id: "oracle",
      title: "MODERNIZING ENTERPRISE OPERATIONS",
      highlight: "AI-Driven ERP Transformation",
      desc: "Transform finance, supply chain, HR, and operations with Oracle, NetSuite, Salesforce, Workday, and AI-powered ERP solutions designed for faster adoption and long-term business value.",
      image: "/dimension_ERP.png",
      PrimaryCTA: "Explore Services",
      SecondaryCTA: "Schedule a Consultation",
    },

    {
      id: "salesforce",
      title: "BUILDING THE DIGITAL ENTERPRISE",
      highlight: "Digital Transformation",
      desc: "Modernize legacy systems, streamline business processes, and build connected digital experiences through cloud technologies, enterprise applications, automation, and intelligent integration.",
      image: "/dimconDigi.png",
      PrimaryCTA: "Explore Services",
      SecondaryCTA: "Book a Strategy Call",
    },

    {
      id: "workday",
      title: "INNOVATION BEYOND CONSULTING",
      highlight: "AI Products & Enterprise Accelerators",
      desc: "Accelerate transformation with our proprietary solutions. From AI-powered lead management and cloud migration acceleration to modern HR management, our products help businesses innovate faster.",
      image: "/dimension_pro.png",
      PrimaryCTA: "Explore Services",
      SecondaryCTA: "Book a Product Demo",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 15000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className="relative w-full min-h-[100svh] overflow-hidden bg-white">


        {/* Content Container */}

        <div className="relative z-10 max-w-[1500px] mx-auto w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-16 pt-28 sm:pt-32 lg:pt-0 min-h-[100svh] flex items-center">

          <div className="relative w-full flex flex-col lg:flex-row items-center justify-center min-h-[600px] lg:min-h-[720px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-14 transition-all duration-slider ease-slider ${index === activeIndex ? 'opacity-100 z-10 translate-y-0 pointer-events-auto' : 'opacity-0 z-0 translate-y-8 pointer-events-none'
                  }`}
              >

                {/* Left Column (Illustration on Desktop, Top on Mobile) */}
                <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start order-1 mb-8 lg:mb-0">
                  <div className="relative w-full aspect-[4/3] max-h-[35vh] lg:max-h-none lg:aspect-auto h-full flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      decoding="async"
                      className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px] xl:max-w-[850px] h-full lg:h-auto object-contain drop-shadow-2xl will-change-transform"
                    />
                  </div>
                </div>

                {/* Right Column (Content on Desktop, Bottom on Mobile) */}
                <div className="w-full lg:w-[50%] max-w-[650px] order-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-0 lg:mt-0">
                  <h1 className="flex flex-col m-0 p-0 w-full">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-semibold tracking-[0.18em] text-[#64748B] uppercase mb-2 lg:mb-3">
                      {slide.title}
                    </span>
                    <span
                      className="font-semibold text-[#0F172A]"
                      style={{
                        fontSize: "clamp(2rem, 5vw, 4.75rem)",
                        fontWeight: 600,
                        lineHeight: 1.05,
                        letterSpacing: "-0.045em",
                        textWrap: "balance"
                      }}
                    >
                      {slide.highlight}
                    </span>
                  </h1>

                  <p
                    className="mt-4 lg:mt-6 max-w-[560px] text-sm sm:text-base lg:text-xl leading-relaxed text-[#475569]"
                  >
                    {slide.desc}
                  </p>

                  <div
                    className="mt-6 lg:mt-10 flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto px-4 sm:px-0"
                  >
                    <button className="group relative flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-[#FF9D4D] text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(23,116,195,0.3)] active:translate-y-0 w-full sm:w-auto">
                      <span className="relative z-10">{slide.PrimaryCTA}</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                    <button className="group relative flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-transparent text-[#000000] border border-[#000000] font-semibold rounded-full transition-all duration-300 hover:bg-[#FF9D4D] hover:text-white hover:border-[#FF9D4D] w-full sm:w-auto">
                      {slide.SecondaryCTA}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#1774C3] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

      </section>
    </>
  );
};

export default Hero;
