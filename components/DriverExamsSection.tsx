
import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { WHATSAPP_APPOINTMENT_URL } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const DriverExamsSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="cnh-exams">
      <div ref={ref} className={`bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-md border-y border-cyan-500/30 shadow-2xl p-8 sm:p-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 font-bold text-sm mb-6">
              EXAMES LABORATORIAIS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              EXAME <br/>
              <span className="text-yellow-400">TOXICOLÓGICO</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Realizamos a coleta do Exame Toxicológico de larga janela de detecção. Obrigatório para <strong>Renovação e Mudança de Categoria da CNH</strong> (C, D e E), <strong>Concursos Públicos</strong> e admissional/demissional para <strong>Empresas (CLT)</strong>.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Análise Completa e Segura</h3>
                  <p className="mt-1 text-gray-400">
                    Atendemos a todas as exigências do DETRAN e CAGED. Resultado rápido e sigiloso.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <a
                href={WHATSAPP_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Agendar Toxicológico
              </a>
            </div>
          </div>

          <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10"></div>
                <img 
                  src="https://i.postimg.cc/9F4fsZRb/Banner-Paisagem-Promocao-Habilitacao-Autoescola-Moderno-Laranja-E-Preto.png" 
                  alt="Exame Toxicológico CNH" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                   <div className="bg-slate-800/90 backdrop-blur p-4 rounded-xl border border-slate-600">
                      <p className="text-white font-semibold flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        Válido em todo território nacional
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Laboratório credenciado para CNH e Concursos.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DriverExamsSection;
