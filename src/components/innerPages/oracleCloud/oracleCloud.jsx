import React, { useEffect } from 'react';
import './oracleCloud.css'; // Custom styles and animations

// Layout components
import CardNav from '../../layout/CardNav';
import Footer from '../../layout/Footer';

// Existing sections to reuse
import IndustriesSection from '../../sections/IndustriesSection';
import CtaSection from '../../sections/CtaSection';

// Custom Oracle Cloud sections
import HeroBanner from './HeroBanner';
import OracleCloudSolutions from './OracleCloudSolutions';
import WhyChooseOracle from './WhyChooseOracle';
import WhyChooseDimensionCG from './WhyChooseDimensionCG';
import DeliveryApproach from './DeliveryApproach';
import CustomerSuccessStories from './CustomerSuccessStories';
import OracleInsights from './OracleInsights';

const OracleCloud = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="oracle-cloud-page bg-background text-[#000000] font-body w-full overflow-x-hidden">
      {/* 
        Note: CardNav is included here as requested in the prompt layout. 
        If this page is routed via App.jsx inside <Layout />, CardNav may be duplicated. 
      */}
      <CardNav />

      <main>
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. Oracle Cloud Solutions */}
        <OracleCloudSolutions />

        {/* 3. Why Enterprises Choose Oracle Cloud */}
        <WhyChooseOracle />

        {/* 4. Why Choose DimensionCG */}
        <WhyChooseDimensionCG />

        {/* 5. Delivery Approach */}
        <DeliveryApproach />

        {/* 6. Industry Expertise (Reused) */}
        <div className="bg-white">
          <IndustriesSection />
        </div>

        {/* 7. Customer Success Stories */}
        <CustomerSuccessStories />

        {/* 8. Oracle Insights */}
        <OracleInsights />

        {/* 9. CTA (Reused) */}
        <CtaSection />
      </main>

      {/* 10. Footer (Reused) */}
      <Footer />
    </div>
  );
};

export default OracleCloud;