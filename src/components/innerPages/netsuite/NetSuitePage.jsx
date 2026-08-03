import React, { useEffect } from 'react';
import './netsuite.css'; // Custom styles and animations

// Layout components
import CardNav from '../../layout/CardNav';
import Footer from '../../layout/Footer';

// Existing sections to reuse
import IndustriesSection from '../../sections/IndustriesSection';
import CtaSection from '../../sections/CtaSection';

// Custom NetSuite sections
import HeroBanner from './HeroBanner';
import NetSuiteSolutions from './NetSuiteSolutions';
import WhyChooseNetSuite from './WhyChooseNetSuite';
import WhyChooseDimensionCG from './WhyChooseDimensionCG';
import OurServices from './OurServices';
import CustomerSuccessStories from './CustomerSuccessStories';
import Faq from './Faq';

const NetSuitePage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="netsuite-page bg-background text-[#000000] font-body w-full overflow-x-hidden">
      <CardNav />

      <main>
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. NetSuite Solutions */}
        <NetSuiteSolutions />

        {/* 3. Why Businesses Choose NetSuite */}
        <WhyChooseNetSuite />

        {/* 4. Why Choose DimensionCG */}
        <WhyChooseDimensionCG />

        {/* 5. Delivery Approach / Our Services */}
        <OurServices />

        {/* 6. Industry Expertise (Reused) */}
        <div className="bg-white">
          <IndustriesSection />
        </div>

        {/* 7. Customer Success Stories */}
        <CustomerSuccessStories />

        {/* 8. FAQ Section */}
        <Faq />

        {/* 9. CTA (Reused) */}
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};

export default NetSuitePage;
