
import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const Testimonials: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        handleNext();
      }, 7000); // Change testimonial every 7 seconds when visible
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isVisible]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section>
      <div ref={ref} className={`bg-blue-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12 text-center text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
         <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                O QUE NOSSOS PACIENTES DIZEM
            </h2>
        </div>
        <div className="mt-10 relative">
          <div className="overflow-hidden relative h-48 flex items-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <blockquote className="text-xl italic font-light">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <cite className="mt-4 block font-bold not-italic">{testimonial.author}</cite>
              </div>
            ))}
          </div>
          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors" aria-label="Depoimento anterior">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors" aria-label="Próximo depoimento">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
