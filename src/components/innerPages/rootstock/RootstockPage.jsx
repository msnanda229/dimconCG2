import React, { useEffect } from 'react';

import HeroBanner from './HeroBanner';
import WhyChooseRootstock from './WhyChooseRootstock';
import RootstockSolutions from './RootstockSolutions';
import OurServices from './OurServices';
import WhyChooseDimensionCG from './WhyChooseDimensionCG';
import CustomerSuccessStories from './CustomerSuccessStories';
import Faq from './Faq';
import './rootstock.css';
import CtaSection from '../../sections/CtaSection';
const RootstockPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <main className="flex-grow">
        <HeroBanner />
        <WhyChooseRootstock />
        <RootstockSolutions />
        <OurServices />
        <WhyChooseDimensionCG />
        <CustomerSuccessStories />
        <Faq />
        <CtaSection />
      </main>
    </div>
  );
};

export default RootstockPage;
