import React, { useEffect } from 'react';
import './salesforce.css'; // Custom styles and animations

// Layout components
import CardNav from '../../layout/CardNav';
import Footer from '../../layout/Footer';

// Existing sections to reuse
import IndustriesSection from '../../sections/IndustriesSection';
import CtaSection from '../../sections/CtaSection';

// Custom Salesforce sections
import HeroBanner from './HeroBanner';
import SalesforceSolutions from './SalesforceSolutions';
import WhyChooseSalesforce from './WhyChooseSalesforce';
import WhyChooseDimensionCG from './WhyChooseDimensionCG';
import OurServices from './OurServices';
import CustomerSuccessStories from './CustomerSuccessStories';
import Faq from './Faq';

const SalesforcePage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="salesforce-page bg-background text-[#000000] font-body w-full overflow-x-hidden">
      {/* 
        Note: CardNav is included here as requested in the prompt layout. 
        If this page is routed via App.jsx inside <Layout />, CardNav may be duplicated. 
      */}
      <CardNav />

      <main>
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. Salesforce Solutions */}
        <SalesforceSolutions />

        {/* 3. Why Businesses Choose Salesforce */}
        <WhyChooseSalesforce />

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

      {/* 10. Footer (Reused) */}
      <Footer />
    </div>
  );
};

export default SalesforcePage;
