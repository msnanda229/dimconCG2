import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './workday.css'; // Custom styles and animations

// Layout components
import CardNav from '../../layout/CardNav';
import Footer from '../../layout/Footer';

// Existing sections to reuse
import IndustriesSection from '../../sections/IndustriesSection';

// Custom Workday sections
import HeroBanner from './HeroBanner';
import WorkdaySolutions from './WorkdaySolutions';
import WhyChooseWorkday from './WhyChooseWorkday';
import WhyChooseDimensionCG from './WhyChooseDimensionCG';
import OurServices from './OurServices';
import CustomerSuccessStories from './CustomerSuccessStories';
import Faq from './Faq';

const WorkdayPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="workday-page bg-background text-[#000000] font-body w-full overflow-x-hidden">
      <CardNav />

      <main>
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. Why Organizations Choose Workday */}
        <WhyChooseWorkday />

        {/* 3. Workday Solutions */}
        <WorkdaySolutions />

        {/* 4. Our Workday Services */}
        <OurServices />

        {/* 5. Why Choose DimensionCG */}
        <WhyChooseDimensionCG />

        {/* 6. Industry Expertise (Reused) */}
        <div className="bg-white">
          <IndustriesSection />
        </div>

        {/* 7. Customer Success Stories */}
        <CustomerSuccessStories />

        {/* 8. FAQ Section */}
        <Faq />

        {/* 9. Final CTA */}
        <section className="py-24 relative overflow-hidden bg-[#005cb9]">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[50%] -left-[10%] w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[100px]"
            />
          </div>

          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[48px] relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
            >
              Empower Your People. Strengthen Your Business.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-12"
            >
              Whether you're implementing Workday for the first time or enhancing your existing environment, our experts can help you maximize the value of your investment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-white text-[#005cb9] font-bold rounded-full hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto">
                Schedule a Workday Consultation
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border border-blue-400/50 text-white font-bold rounded-full hover:bg-blue-800/50 hover:border-blue-300 transition-all duration-300 w-full sm:w-auto">
                Talk to an Expert
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkdayPage;
