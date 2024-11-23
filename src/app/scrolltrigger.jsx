"use client"
import { useEffect } from 'react';

const ScrollTrigger = () => {
  useEffect(() => {
    const initScrollTrigger = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Initialize Locomotive Scroll
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: false,
        inertia: 10,
      });

      // GSAP ScrollTrigger integration
      scroll.on('scroll', ScrollTrigger.update);

      ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.addEventListener('refresh', () => scroll.update());
      ScrollTrigger.refresh();
    };

    initScrollTrigger();
  }, []);

  return null;
};

export default ScrollTrigger;