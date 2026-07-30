import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      });

      // Stagger sections
      tl.fromTo('.footer-animate',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-white text-slate-900 pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-10 overflow-hidden relative border-t border-slate-100" ref={footerRef}>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* SECTION 1: Large CTA */}


        {/* SECTION 2 & 3 wrapper */}
        <div className="footer-animate w-full h-px bg-slate-200 mb-6 md:mb-8 lg:mb-10"></div>

        <div className="footer-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-10 mb-10 lg:mb-14">

          {/* SECTION 5: Contact Information */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start gap-8 lg:gap-10">
          <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start gap-8 lg:gap-10">
  <img
    src="/logo.png"
    alt="Dimension Consulting"
    className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain select-none"
    loading="lazy"
    draggable={false}
  />
</div>

            <div className="flex flex-col gap-2 text-sm md:text-base">
              <p className="font-bold text-slate-900">Office</p>
              <p className="text-slate-500 leading-relaxed max-w-[280px]">
                2025 Lincoln Highway, Suite # 140, Edison NJ 08817.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm md:text-base font-medium">
              <a href="mailto:admin@dimcon.com" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 py-2">
                admin@dimcon.com
              </a>
              <a href="tel:+914012345678" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 py-2">
                703-636-0933
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 py-2">
                LinkedIn
              </a>
            </div>
          </div>

          {/* SECTION 3: Elegant Navigation Columns */}
          <div className="md:col-span-2 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-6">

            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-slate-900 font-bold tracking-wide text-sm md:text-base">Services</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base text-slate-500 font-medium">
                <li><Link to="/services/consulting" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Cloud Strategy</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/services/implementation" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Implementation</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/services/managed-services" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Managed Services</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/services/ai-transformation" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>AI Transformation</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-slate-900 font-bold tracking-wide text-sm md:text-base">Cloud Applications</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base text-slate-500 font-medium">
                <li><Link to="/platforms/oracle" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Oracle Cloud</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/platforms/netsuite" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Oracle NetSuite</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/platforms/salesforce" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Salesforce</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/platforms/workday" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Workday</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-slate-900 font-bold tracking-wide text-sm md:text-base">Industries</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base text-slate-500 font-medium">
                <li><Link to="/industries/healthcare" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Healthcare</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/manufacturing" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Manufacturing</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/finance" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Finance</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/retail" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Retail</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/e-commerce" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>E-Commerce</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/it" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>IT</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/government&npo" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Government & NPO</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/e-commerce" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Energy</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/it" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Hi-Tech</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/e-commerce" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Hospitality</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/it" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Supply Chain</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/e-commerce" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Construction</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/industries/it" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Wholesale & Distribution</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-slate-900 font-bold tracking-wide text-sm md:text-base">Company</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base text-slate-500 font-medium">
                <li><Link to="/company/about" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>About Dimension Consulting</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/company/careers" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Careers</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/insights" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Insights & News</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 transition-colors inline-flex items-center min-h-[44px] lg:min-h-0 relative group py-2 lg:py-0"><span>Contact Us</span><span className="absolute bottom-1 lg:-bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span></Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* SECTION 4: Enterprise Partner Badges */}
        <div className="footer-animate flex flex-col xl:flex-row items-center justify-between border-t border-slate-200 pt-8 pb-10 md:pb-12 gap-8 md:gap-10">
          <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase shrink-0 text-center xl:text-left">
            Trusted Platform Alliances
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-16">
            <img src="/partners/oracle.png" alt="Oracle" className="h-5 md:h-6 object-contain" />
            <img src="/partners/netsuite.png" alt="NetSuite" className="h-5 md:h-6 object-contain" />
            <img src="/partners/salesforce.png" alt="Salesforce" className="h-6 md:h-8 object-contain" />
            <img src="/ai_logos/RTS_Logo_Colored.svg" alt="Workday" className="h-5 md:h-6 object-contain" />
            <img src="/partners/celigo.png" alt="Celigo" className="h-5 md:h-6 object-contain" />
            <img src="/partners/opkey.png" alt="Opkey" className="h-5 md:h-6 object-contain" />
          </div>
        </div>


        {/* SECTION 2: Massive Brand Statement */}
   

        {/* SECTION 6: Legal Bar */}
        <div className="footer-animate flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-6 md:pt-8 gap-6 text-xs md:text-sm text-slate-500 font-medium">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Dimension Consulting. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-8 gap-y-4">
            <a href="#" className="hover:text-blue-600 transition-colors py-2 md:py-0">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors py-2 md:py-0">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors py-2 md:py-0">Accessibility</a>
            <a href="#" className="hover:text-blue-600 transition-colors py-2 md:py-0">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
