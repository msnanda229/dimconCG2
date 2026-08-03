import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    qus: "What Salesforce services does DimensionCG offer?",
    ans: "DimensionCG provides end-to-end Salesforce consulting, including implementation, cloud migration, system integration, optimization, managed services, custom development, and ongoing support across Sales, Service, Marketing, and Experience Clouds."
  },
  {
    id: 2,
    qus: "Can DimensionCG migrate our existing CRM system to Salesforce?",
    ans: "Yes. We help organizations migrate from legacy CRM platforms to Salesforce with a structured, low-risk approach that ensures data integrity and minimizes business disruption."
  },
  {
    id: 3,
    qus: "How long does a Salesforce implementation take?",
    ans: "Project timelines depend on the complexity of your business processes, the number of clouds, integrations, and data migration requirements. We provide a detailed implementation roadmap with realistic milestones after an initial assessment."
  },
  {
    id: 4,
    qus: "Do you provide post-implementation support?",
    ans: "Absolutely. Our engagement continues after go-live with application support, performance optimization, release management, user training, and continuous improvements."
  },
  {
    id: 5,
    qus: "Why choose DimensionCG as your Salesforce implementation partner?",
    ans: "Our certified Salesforce consultants combine deep platform expertise with proven delivery methodologies and industry best practices to deliver secure, scalable, and highly customized solutions."
  }
];

export default function Faq() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#00a1e0] uppercase tracking-[0.3em] text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Find answers to common questions about our Salesforce services,
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
                        ? "rotate-180 text-[#00a1e0]"
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
              className="text-[#00a1e0] font-semibold hover:underline"
            >
              Contact our experts →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
