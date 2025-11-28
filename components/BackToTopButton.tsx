import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-24 right-4 z-50 sm:bottom-4 sm:right-24">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-[#0072b5] text-white rounded-full p-3 shadow-lg hover:bg-[#005a8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0072b5] transition-all duration-300 ease-in-out transform hover:scale-110"
                    aria-label="Voltar ao topo"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
