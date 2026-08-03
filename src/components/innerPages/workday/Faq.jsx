import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    qus: "What Workday solutions does DimensionCG support?",
    ans: "We support the full suite of Workday enterprise applications, specializing in Workday Human Capital Management (HCM), Financial Management, Workforce Planning, Talent Management, and Payroll."
  },
  {
    id: 2,
    qus: "Do you provide Workday implementation and integration services?",
    ans: "Yes, we offer end-to-end services. Our certified consultants handle full lifecycle implementations, system optimization, and complex integrations with third-party and legacy applications."
  },
  {
    id: 3,
    qus: "Can Workday integrate with existing enterprise applications?",
    ans: "Absolutely. Workday provides robust integration capabilities. We regularly integrate Workday with Salesforce, Netsuite, active directory, identity management solutions, and specialized operational tools."
  },
  {
    id: 4,
    qus: "Do you offer post-implementation support?",
    ans: "Yes, our Managed Services team provides comprehensive post-go-live support. We handle troubleshooting, bi-annual Workday update testing, continuous configuration improvements, and user training."
  },
  {
    id: 5,
    qus: "How long does a typical Workday implementation take?",
    ans: "Implementation timelines vary based on the size of your organization, the number of modules being deployed, and integration complexity. A typical deployment ranges from 6 to 12 months."
  }
];

export default function Faq() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#005cb9] uppercase tracking-[0.3em] text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Find answers to common questions about our Workday services,
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
                        ? "rotate-180 text-[#005cb9]"
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
              className="text-[#005cb9] font-semibold hover:underline"
            >
              Contact our experts →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
