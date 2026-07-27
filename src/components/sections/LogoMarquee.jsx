import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  "/clients_logo/63ecc11c6df724bd62d7c40d_main-street-bank-logo.webp",
  "/clients_logo/63ecc13be15ac7ae27d5bbb2_Anastasia_Beverly_Hills_logo.png",
  "/clients_logo/63ecc15633acd81e8f7b8338_VisibleSCM-Horz-4C.jpg",
  "/clients_logo/63ecc16b3004c321bb03b734_HERZOG_Logo_blau_transparent_RGB.png",
  "/clients_logo/63ecc17f33acd8757a7baaad_danielslogo.jpg",
  "/clients_logo/63ecc19200199780f0597257_Pompeian_Logo.jpg",
  "/clients_logo/63ecc1a025f30c601e53cb08_th_matheson.jpg",
  "/clients_logo/63ecc1b12d57da04ee0cecf6_Mastronardi-Produce-LTD-Logo_SNACK.png",
  "/clients_logo/63ecc1c4d1222fac4ac272bf_vpp-min.png",
  "/clients_logo/63ecc1d50b15d57ca51b9565_Atkins_logo.svg",
  "/clients_logo/63ecc1e4af9239da551472e0_Liberty Tax.png",
  "/clients_logo/63ecc1f46b8bb19da4de698c_AEG Horiz_RGB_REG_tag.jpg",
  "/clients_logo/63ecc20a57dd581c5c443ba3_group-rmc-logo_r6awhm.svg",
  "/clients_logo/63ecc2190b15d533381becb0_HAL Leonard.png",
  "/clients_logo/63ecc227af92396bc5149ff7_Axos_Bank_Logo.svg",
  "/clients_logo/63ecc232af9239792d14ac2e_Circus Trix.png",
];

const LogoMarquee = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !particleRef.current || !marqueeRef.current) return;

    const ctx = gsap.context(() => {
      // Particle reveal on scroll
      gsap.fromTo(particleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y-[1px] border-slate-200 bg-white py-12"
    >
      {/* Heading */}
      <div className="relative z-10 mx-auto mb-10 max-w-7xl px-6 text-center">
        <h3 className="text-lg font-medium tracking-wide text-[#64748B] md:text-xl">
          Trusted by Global Industry Leaders
        </h3>
      </div>

      {/* Marquee */}
      <div
        className="relative z-10 flex w-full overflow-hidden whitespace-nowrap"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div
          ref={marqueeRef}
          className="flex items-center px-8 animate-marquee will-change-transform"
        >
          {[...partners, ...partners].map((logoSrc, index) => (
            <div
              key={index}
              className="mr-8 flex h-14 w-28 shrink-0 items-center justify-center md:mr-10 md:h-16 md:w-36"
            >
              <img
                src={logoSrc}
                alt="Client Logo"
                loading="lazy"
                decoding="async"
                className="max-h-8 max-w-[90px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 md:max-h-10 md:max-w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
