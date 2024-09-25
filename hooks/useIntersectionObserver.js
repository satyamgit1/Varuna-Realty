// hooks/useIntersectionObserver.js
import { useEffect } from 'react';

const useIntersectionObserver = (setIsVisible, targetClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as necessary
    );

    const elements = document.querySelectorAll(targetClass);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [setIsVisible, targetClass]);
};

export default useIntersectionObserver;
