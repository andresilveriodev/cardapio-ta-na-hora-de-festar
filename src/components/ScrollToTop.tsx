import React, { useEffect, useState } from 'react';
import { ArrowUpCircle } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#dcb02d] p-3 rounded-full shadow-lg hover:bg-[#c49d28] transition-all duration-300 z-50"
        >
          <ArrowUpCircle className="w-8 h-8 text-white" />
        </button>
      )}
    </>
  );
};