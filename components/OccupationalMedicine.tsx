
import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { WHATSAPP_OCCUPATIONAL_URL } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const occupationalDocs = [
  { code: 'PCMSO', desc: 'Programa de Controle Médico (NR 07)' },
  { code: 'PGR', desc: 'Gerenciamento de Riscos (NR 01)' },
  { code: 'LTCAT', desc: 'Laudo Técnico Condições Ambientais' },
  { code: 'PPP', desc: 'Perfil Profissiográfico Previdenciário' },
];

const occupationalExams = [
    'Audiometria Ocupacional',
    'Avaliação Psicossocial',
    'Espirometria Ocupacional',
    'Eletrocardiograma (ECG)',
    'Eletroencefalograma (EEG)',
    'Raio-X Ocupacional (OIT)',
    'Acuidade Visual',
    'Exames Laboratoriais',
];

const OccupationalMedicine: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="medicina-trabalho" className="overflow-hidden">
      <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12`}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className={`mt-10 lg:mt-0 order-2 lg:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
              src="https://i.postimg.cc/B62zX87Y/Apresentacao-Medicina-Minimalista-Azul.png" 
              alt="Medicina do Trabalho e Segurança"
              loading="lazy"
            />
          </div>
          <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              MEDICINA DO TRABALHO E SST
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
              Soluções completas em Saúde e Segurança do Trabalho para sua empresa.
            </p>
             <p className="mt-6 text-gray-300 text-sm leading-relaxed font-medium border-l-4 border-cyan-500 pl-4">
              Trabalhamos diretamente com empresas, realizando a gestão completa do processo ocupacional (ASO Admissional, Periódico, Demissional) e todos os exames complementares necessários em um só lugar.
            </p>
            
            <div className="mt-8">
                <h3 className="text-cyan-400 font-bold text-lg mb-4">Programas e Laudos (eSocial)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {occupationalDocs.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-slate-800/50 p-2 rounded border border-slate-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                            <span className="font-bold text-white text-sm mr-2">{doc.code}:</span>
                            <span className="text-gray-400 text-xs">{doc.desc}</span>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-cyan-400 font-bold text-lg mb-4">Exames Complementares</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    {occupationalExams.map((exam, index) => (
                        <li key={index} className="flex items-center">
                             <svg className="w-4 h-4 text-[#0072b5] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {exam}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
               <a
                href={WHATSAPP_OCCUPATIONAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0072b5] hover:bg-[#005a8f] transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Solicitar Orçamento Empresarial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OccupationalMedicine;
