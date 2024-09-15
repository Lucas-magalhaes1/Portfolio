"use client";

import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        className="fixed bottom-4 right-2 bg-white text-black rounded-full p-3 shadow-lg border border-black hover:bg-gray-100 transition-colors"
        onClick={handleClick}
        aria-label="Scroll to top"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-black"
        >
          <path d="M19 13l-7-7-7 7"></path>
        </svg>
      </button>
    )
  );
};

export default ScrollToTopButton;
