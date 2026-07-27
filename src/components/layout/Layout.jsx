import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CardNav from './CardNav';
import Footer from './Footer';

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lazy load chatbot — don't block initial render
const ChatBot = lazy(() => import('../../chatbot/ChatBot'));

const Layout = () => {
  const { pathname } = useLocation();
  const lenisRafRef = useRef(null);
  const progressBarRef = useRef(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    // Store the raf callback so we can properly remove it
    lenisRafRef.current = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(lenisRafRef.current);
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (lenisRafRef.current) {
        gsap.ticker.remove(lenisRafRef.current);
      }
      lenis.destroy();
    };
  }, []);

  const mainRef = useRef(null);

  // Scroll to top on route change & animate page transition
  useEffect(() => {
    window.scrollTo(0, 0);
    if (mainRef.current) {
      let mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(mainRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
        );
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.fromTo(mainRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        );
      });
    }
  }, [pathname]);

  // Scroll Progress Bar
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${self.progress})`;
        }
      }
    });

    return () => st.kill();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body">
      {/* Global Scroll Progress Bar */}
      <div ref={progressBarRef} className="scroll-progress fixed top-0 left-0 h-1 bg-primary z-[100] origin-left w-full" style={{ transform: 'scaleX(0)' }} />

      <CardNav />

      <main ref={mainRef} className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </div>
  );
};

export default Layout;
