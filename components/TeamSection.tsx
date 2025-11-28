
import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { WHATSAPP_APPOINTMENT_URL } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const TeamSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="team" className="overflow-hidden">
      <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12`}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              UMA EQUIPE DE EXCELÊNCIA CUIDANDO DE VOCÊ
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
              Conheça o diferencial do nosso corpo clínico.
            </p>
            <p className="mt-6 text-gray-400">
              Nossa equipe é formada por profissionais altamente qualificados e dedicados, comprometidos em oferecer um atendimento humanizado e de excelência. Cada membro do nosso corpo clínico é especialista em sua área, trazendo vasta experiência e conhecimento para garantir o melhor cuidado para você e sua família.
            </p>
            <p className="mt-4 text-gray-400">
              Acreditamos que a relação de confiança entre médico e paciente é a base para um tratamento eficaz. Por isso, investimos constantemente em atualização profissional e em um ambiente acolhedor, onde você se sente seguro e bem cuidado em todas as etapas da sua jornada de saúde.
            </p>
             <a
              href={WHATSAPP_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0072b5] hover:bg-[#005a8f] transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 mr-3" />
              Agende sua Consulta
            </a>
          </div>
          <div className={`mt-10 lg:mt-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
              src="https://i.postimg.cc/bwTkkN09/uma-equipe-de-uma-clinica-medica-uniformizada.jpg" 
              alt="Equipe da Clínica Médica Saúde Cidade Nova"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
