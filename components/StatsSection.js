import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      const rect = statsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-white text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-6xl font-bold text-yellow-500">500+</h2>
          <p className="text-xl font-medium text-gray-800 mt-2">Happy Clients</p>
        </div>
        <div className={`transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-6xl font-bold text-yellow-500">300M+</h2>
          <p className="text-xl font-medium text-gray-800 mt-2">In Sales</p>
        </div>
        <div className={`transition-opacity duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-6xl font-bold text-yellow-500">100%</h2>
          <p className="text-xl font-medium text-gray-800 mt-2">Satisfaction Guaranteed</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;