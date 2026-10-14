'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const lastScrollY = useRef(0);
  const visibilityRef = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const previousY = lastScrollY.current;

      let nextVisibility = visibilityRef.current;

      if (currentY <= 120) {
        nextVisibility = false;
      } else if (currentY < previousY) {
        // Scrolling upward: reveal the button.
        nextVisibility = true;
      } else if (currentY > previousY) {
        // Scrolling downward: hide the button.
        nextVisibility = false;
      }

      if (nextVisibility !== visibilityRef.current) {
        visibilityRef.current = nextVisibility;
        setIsVisible(nextVisibility);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      title="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
