
import React from 'react';
import { faqData } from '../constants';
import FaqItem from './FaqItem';
import useOnScreen from '../hooks/useOnScreen';

const FaqSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <section id="faq">
            <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        PERGUNTAS FREQUENTES
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
                        Tire suas dúvidas mais comuns sobre nossos serviços.
                    </p>
                </div>
                <div className="mt-12 space-y-4">
                    {faqData.map((faq, index) => (
                         <div key={index} style={{ transitionDelay: `${index * 100}ms` }} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <FaqItem question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
