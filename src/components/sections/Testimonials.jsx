import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { id: 1, quote: "DIMCON didn't just migrate us to the cloud; they rearchitected our entire operational mindset. A true enterprise partner.", author: "Sarah Jenkins", role: "CTO, Global Logistics Corp" },
  { id: 2, quote: "The AI Assessment uncovered millions in potential savings. The subsequent AECCAR implementation paid for itself in 3 months.", author: "Marcus Chen", role: "VP Engineering, FinTech Solutions" },
  { id: 3, quote: "Their zero-trust security deployment was flawless. Our stakeholders finally have peace of mind.", author: "Elena Rodriguez", role: "CISO, HealthCare Plus" },
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hover magnetic effect only, removed infinite CPU-bound float
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(card, { x: x * 0.1, y: y * 0.1, duration: 0.5, ease: "power2.out" });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-gray-50 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#1774C3] font-semibold mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-2xl mx-auto">
            Trusted by the World's Most Demanding Executives.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              ref={el => cardsRef.current[i] = el}
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl relative overflow-hidden group cursor-pointer transition-shadow duration-300"
              style={{ marginTop: i === 1 ? '40px' : '0' }}
            >
              {/* Animated Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#1774C3]/10 rounded-full blur-3xl" />
              </div>

              <div className="text-6xl text-gray-100 font-serif leading-none absolute top-6 left-6">"</div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 pt-4">
                {t.quote}
              </p>

              <div className="mt-auto border-t border-gray-100 pt-6 relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-900 uppercase border border-gray-200">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
