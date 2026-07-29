import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    qus: "What Oracle Cloud services does DimensionCG offer?",
    ans: "DimensionCG provides end-to-end Oracle Cloud consulting, including implementation, cloud migration, system integration, optimization, managed services, upgrades, and ongoing support across Oracle ERP, SCM, HCM, EPM, CX, and OCI."
  },
  {
    id: 2,
    qus: "Can DimensionCG migrate our existing ERP system to Oracle Cloud?",
    ans: "Yes. We help organizations migrate from legacy ERP platforms or on-premise Oracle systems to Oracle Cloud with a structured, low-risk approach that minimizes disruption and ensures business continuity."
  },
  {
    id: 3,
    qus: "How long does an Oracle Cloud implementation take?",
    ans: "Project timelines depend on the complexity of your business, the number of Oracle modules, integrations, and data migration requirements. After an initial assessment, we provide a detailed implementation roadmap with realistic milestones."
  },
  {
    id: 4,
    qus: "Do you provide post-implementation support?",
    ans: "Absolutely. Our engagement continues after go-live with application support, performance optimization, quarterly Oracle updates, user training, and continuous improvements."
  },
  {
    id: 5,
    qus: "Why choose DimensionCG as your Oracle Cloud implementation partner?",
    ans: "Our certified Oracle consultants combine deep product expertise with proven delivery methodologies and industry best practices to deliver secure, scalable Oracle Cloud solutions."
  }
];

export default function Faq() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#F15A24] uppercase tracking-[0.3em] text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Find answers to common questions about our Oracle Cloud services,
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
                    <div className="w-12 h-12 rounded-full   flex items-center justify-center shrink-0">
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
                        ? "rotate-180 text-[#F15A24]"
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
              className="text-[#F15A24] font-semibold hover:underline"
            >
              Contact our experts →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
