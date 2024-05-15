'use client';
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 bg-slate-300	 text-black rounded-full px-6 py-6 shadow-lg transition-opacity hover:bg-blue-200 duration-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Scroll to top"
    >
      <MdOutlineKeyboardDoubleArrowUp size={33}/>
    </button>
  );
};

export default ScrollToTop;
