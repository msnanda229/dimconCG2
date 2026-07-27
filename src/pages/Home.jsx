import React, { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';

const LogoMarquee = lazy(() => import('../components/sections/LogoMarquee'));
const WhyEnterprisesChooseDimcon = lazy(() => import('../components/sections/WhyEnterprisesChooseDimcon'));
const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const AeccarSection = lazy(() => import('../components/sections/AeccarSection'));
const PartnerEcosystem = lazy(() => import('../components/sections/PartnerEcosystem'));
const CaseStudies = lazy(() => import('../components/sections/CaseStudies'));
const IndustriesSection = lazy(() => import('../components/sections/IndustriesSection'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const AwardsSection = lazy(() => import('../components/sections/AwardsSection'));
const InsightsSection = lazy(() => import('../components/sections/InsightsSection'));
const CtaSection = lazy(() => import('../components/sections/CtaSection'));
const GlobalOrganization = lazy(() => import('../components/sections/GlobalOrganization'));
const AssessmentCta = lazy(() => import('../components/assessment/AssessmentCta'));

const SectionFallback = () => <div className="w-full min-h-[50vh] bg-[#F8FAFC]" />;
const Home = () => {
  return (
    <>
      {/* 01. HERO (Synchronous) */}
      <div id="hero" className="relative">
        <Hero />
      </div>

      <Suspense fallback={<SectionFallback />}>
        {/* 04. WHY ENTERPRISES CHOOSE DIMCON */}
        <div id="why-dimcon" className="relative z-10">
          <WhyEnterprisesChooseDimcon />
        </div>

        {/* 05. ENTERPRISE SERVICES */}
        <div id="services" className="relative z-10">
          <ServicesSection />
        </div>

        {/* 02. LOGO MARQUEE */}
        <div className="relative z-10">
          <LogoMarquee />
        </div>

        <div className="relative z-10">
          <GlobalOrganization />
        </div>

        {/* 06. PARTNER ECOSYSTEM */}
        <div id="partner-ecosystem" className="relative z-10">
          <PartnerEcosystem />
        </div>

        {/* 08. INDUSTRY EXPERTISE */}
        <div id="industries" className="relative z-10">
          <IndustriesSection />
        </div>

        <div className='relative z-10'>
          <AssessmentCta />
        </div>

        {/* 07. AECCAR */}
        <div id="aeccar" className="relative z-10">
          <AeccarSection />
        </div>

        {/* 11. AWARDS */}
        <div id="awards" className="relative z-10">
          <AwardsSection />
        </div>

        {/* 09. CASE STUDIES */}
        <div id="case-studies" className="relative z-10">
          <CaseStudies />
        </div>

        {/* 10. TESTIMONIALS */}
        <div id="testimonials" className="relative z-10">
          <Testimonials />
        </div>

        {/* 13. INSIGHTS */}
        <div id="insights" className="relative z-10">
          <InsightsSection />
        </div>

        {/* 14. DISCOVERY CTA */}
        <div id="contact" className="relative z-10">
          <CtaSection />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
