import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    qus: "Is Oracle NetSuite suitable for growing businesses?",
    ans: "Yes. While NetSuite powers large enterprises, it is fundamentally designed to scale. Mid-market and fast-growing businesses often adopt NetSuite early to establish a robust foundation that won't require replacing as they expand globally."
  },
  {
    id: 2,
    qus: "Which industries use Oracle NetSuite?",
    ans: "NetSuite is highly versatile with industry-specific editions. We frequently implement it for Manufacturing, Wholesale Distribution, Software/Tech, Healthcare, Retail, and Services organizations."
  },
  {
    id: 3,
    qus: "How long does implementation take?",
    ans: "Implementation timelines vary based on scope, integrations, and data migration needs. A standard implementation can take 3-4 months, while complex enterprise rollouts may take 6-9 months. We use SuiteSuccess methodology to accelerate time-to-value."
  },
  {
    id: 4,
    qus: "Can NetSuite integrate with existing systems?",
    ans: "Absolutely. NetSuite offers robust APIs (SuiteTalk) that allow seamless integration with systems like Salesforce, Shopify, HRIS platforms, banks, and EDI providers."
  },
  {
    id: 5,
    qus: "Do you provide post-implementation support?",
    ans: "Yes. Go-live is just the beginning. We offer dedicated Managed Services, continuous optimization, custom reporting, and user training to ensure you maximize your ROI long after implementation."
  }
];

export default function Faq() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#0e4d9e] uppercase tracking-[0.3em] text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Find answers to common questions about our NetSuite services,
            implementation approach, and ongoing support.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const open = active === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setActive(open ? null : item.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-5 flex-1">

                    {/* Logo Bullet */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                      <img
                        src="/dimconLogoIcon.png"
                        alt="DimensionCG"
                        className="w-7 h-7 object-contain"
                      />
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block h-8 w-px bg-slate-200"></div>

                    {/* Question */}
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 pr-4">
                      {item.qus}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-all duration-300 ${
                      open
                        ? "rotate-180 text-[#0e4d9e]"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-[92px] sm:pl-[104px] pr-8 pb-6 text-slate-600 leading-7">
                      {item.ans}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-[#0e4d9e] font-semibold hover:underline"
            >
              Contact our experts →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
