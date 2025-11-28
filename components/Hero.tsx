
import React, { useState, useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const images = [
  "https://i.postimg.cc/1zYvNxND/uma-equipe-medica-iniformizada-com-a-logo-saude-(1).jpg",
  "https://i.postimg.cc/1XJYKkBP/Blue-Crayola-Minimalis-Dental-Care-Banner-(1).png",
  "https://i.postimg.cc/6pL41BRt/Medical-(Banner-(Landscape)).png",
  // Removed image 4 as requested
  "https://i.postimg.cc/9F4fsZRb/Banner-Paisagem-Promocao-Habilitacao-Autoescola-Moderno-Laranja-E-Preto.png"
];

const Hero: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only start the interval if the component is visible to save resources
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="home" ref={ref} className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[550px] overflow-hidden animate-fade-in bg-gray-100 group">
      {isVisible && images.map((img, index) => (
        <img
          key={index}
          className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          src={img}
          alt={`Banner Clínica Saúde Cidade Nova ${index + 1}`}
          loading="lazy"
        />
      ))}
       
       <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

       {/* Navigation Dots */}
       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${index === currentIndex ? 'bg-[#0072b5] scale-125' : 'bg-white/60 hover:bg-white'}`}
            aria-label={`Ir para banner ${index + 1}`}
          />
        ))}
       </div>

       {/* Navigation Arrows (visible on hover) */}
       <button 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100"
       >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
       </button>
       <button 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100"
       >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
       </button>
    </section>
  );
};

export default Hero;
