import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle as CheckCircle2 } from 'react-icons/fi';


const AssessmentCta = () => {
  return (
    <section id="assessment-cta" className="bg-white border-y border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual element simulating the output */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center w-full h-full lg:justify-end order-2 lg:order-2 mt-10 lg:mt-0"
          >
            <div className="absolute -inset-10 bg-[#E28B2B]/15 blur-[100px] rounded-full" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[760px]"
            >
              <img
                src="/dimension_ai_solutions.png"
                alt="Enterprise AI Solutions"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain drop-shadow-2xl will-change-transform"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           className="order-1 lg:order-1 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 leading-[1.2] tracking-tight max-w-[520px]">
              AI Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-[540px]">
              Transform ideas into intelligent business outcomes with AI solutions designed for modern enterprises. From strategy and advisory to automation and governance, we help businesses adopt AI with confidence and measurable impact.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                "AI Strategy & Advisory",
                "Enterprise AI Applications",
                "Intelligent Process Automation",
                "Responsible & Secure AI",
                "AI Readiness & Adoption"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#E28B2B] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:bg-gray-800 hover:shadow-xl self-start"
            >
              <span>Start Assessment</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AssessmentCta;
