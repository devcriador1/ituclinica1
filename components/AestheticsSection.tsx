
import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { WHATSAPP_APPOINTMENT_URL } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { EsteticaIcon } from './icons/EsteticaIcon';

const AestheticsSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const treatments = [
    {
      title: "Aplicação de Vasinhos (PEIM)",
      description: "Procedimento estético injetável para microvasos (escleroterapia), eliminando os vasinhos indesejados e melhorando a aparência das pernas.",
    },
    {
      title: "Drenagem Linfática",
      description: "Técnica de massagem que estimula o sistema linfático, reduzindo a retenção de líquidos, o inchaço e auxiliando na eliminação de toxinas.",
    },
    {
      title: "Massagem Relaxante e Modeladora",
      description: "Alívio de tensões musculares, redução do estresse e técnicas para modelagem corporal e redução de medidas.",
    }
  ];

  return (
    <section id="estetica">
      <div ref={ref} className={`bg-gradient-to-br from-slate-900 to-rose-950/30 backdrop-blur-md border-y border-rose-500/20 shadow-2xl p-8 sm:p-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 text-rose-400">
                    <EsteticaIcon />
                 </div>
                 <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-300 font-bold text-sm">
                  SAÚDE & BELEZA
                </div>
            </div>
           
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              ESTÉTICA E <br/>
              <span className="text-rose-400">BEM-ESTAR</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Na Clínica Saúde Cidade Nova, cuidamos não apenas da sua saúde clínica, mas também da sua autoestima. Oferecemos procedimentos especializados realizados por profissionais capacitados.
            </p>
            
            <div className="mt-8 space-y-6">
              {treatments.map((item, index) => (
                  <div key={index} className="flex items-start bg-slate-800/40 p-4 rounded-xl border border-rose-500/10 hover:border-rose-500/30 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                       <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
              ))}
            </div>

            <div className="mt-10">
               <a
                href={WHATSAPP_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Agendar Procedimento Estético
              </a>
            </div>
          </div>

          <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-rose-900/50 group h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Tratamentos Estéticos e Massagem" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-center">
                   <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-rose-500/30">
                      <p className="text-rose-200 font-semibold text-lg">
                        Renove sua confiança
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        Ambiente relaxante e profissionais dedicados ao seu cuidado.
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

export default AestheticsSection;
