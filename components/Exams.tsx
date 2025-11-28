
import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { WHATSAPP_APPOINTMENT_URL } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

// --- HELPER FOR GLOSSY EFFECT ---
const GlossyDefs = ({ id, colorLight, colorDark }: { id: string, colorLight: string, colorDark: string }) => (
    <defs>
        <radialGradient id={`${id}-grad`} cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor={colorLight} />
            <stop offset="100%" stopColor={colorDark} />
        </radialGradient>
        <filter id={`${id}-shadow`}>
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
        </filter>
        <filter id={`${id}-inner-shadow`}>
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceAlpha" in2="blur" operator="out" result="inset" />
            <feFlood floodColor="black" floodOpacity="0.4" result="color" />
            <feComposite in="color" in2="inset" operator="in" result="shadow" />
            <feComposite in="shadow" in2="SourceGraphic" operator="over" />
        </filter>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
    </defs>
);

const GlossySphere = ({ id, children }: { id: string, children?: React.ReactNode }) => (
    <>
        {/* Main Sphere Body */}
        <circle cx="50" cy="50" r="44" fill={`url(#${id}-grad)`} filter={`url(#${id}-shadow)`} />
        
        {/* Bottom Rim Light (Reflection) */}
        <path d="M25 80 Q 50 95 75 80" stroke="white" strokeWidth="0" fill="none" opacity="0.3" />
        <ellipse cx="50" cy="88" rx="25" ry="6" fill="#000000" opacity="0.15" filter="blur(4px)" />

        {/* Top Specular Highlight (The "Gloss") */}
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        <circle cx="25" cy="25" r="4" fill="white" opacity="0.6" />

        {/* The Icon Symbol Floating Inside */}
        <g filter={`url(#${id}-inner-shadow)`}>
            {children}
        </g>
    </>
);


// --- ICON COMPONENTS ---

const LabIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="lab" colorLight="#A78BFA" colorDark="#6D28D9" />
        <GlossySphere id="lab">
            <path d="M50 25 L38 65 H62 L50 25 Z" fill="white" />
            <path d="M46 25 V20 H54 V25" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <circle cx="56" cy="55" r="3" fill="#DDD6FE" />
            <circle cx="45" cy="60" r="2" fill="#DDD6FE" />
        </GlossySphere>
    </svg>
);

const EcgIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="ecg" colorLight="#F87171" colorDark="#B91C1C" />
        <GlossySphere id="ecg">
             <path d="M20 50 H32 L40 30 L55 70 L65 50 H80" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </GlossySphere>
    </svg>
);

const UltrasoundIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="ultra" colorLight="#38BDF8" colorDark="#0369A1" />
        <GlossySphere id="ultra">
             <path d="M30 60 Q 50 35 70 60" stroke="white" strokeWidth="4" fill="none" opacity="0.6" />
             <path d="M38 68 Q 50 55 62 68" stroke="white" strokeWidth="4" fill="none" opacity="0.8" />
             <path d="M44 76 Q 50 70 56 76" stroke="white" strokeWidth="4" fill="none" />
             <circle cx="50" cy="50" r="4" fill="white" />
        </GlossySphere>
    </svg>
);

const GynecologicalIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="gyn" colorLight="#F472B6" colorDark="#BE185D" />
        <GlossySphere id="gyn">
             <circle cx="50" cy="40" r="14" stroke="white" strokeWidth="5" fill="none" />
             <line x1="50" y1="54" x2="50" y2="75" stroke="white" strokeWidth="5" strokeLinecap="round" />
             <line x1="40" y1="65" x2="60" y2="65" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </GlossySphere>
    </svg>
);

const ToxicologicalIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="tox" colorLight="#FACC15" colorDark="#A16207" />
        <GlossySphere id="tox">
             <path d="M35 30 L65 30 L60 70 C60 75 55 78 50 78 C45 78 40 75 40 70 Z" fill="none" stroke="white" strokeWidth="4" />
             <path d="M40 70 L60 70" stroke="white" strokeWidth="4" strokeLinecap="round" />
             <path d="M45 45 L55 55 M55 45 L45 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </GlossySphere>
    </svg>
);

const ImagingIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="img" colorLight="#93C5FD" colorDark="#1E40AF" />
        <GlossySphere id="img">
            <rect x="30" y="30" width="40" height="40" rx="5" fill="none" stroke="white" strokeWidth="4" />
            <circle cx="50" cy="50" r="12" fill="white" opacity="0.9" />
            <path d="M30 45 L40 30 M70 45 L60 30" stroke="white" strokeWidth="3" opacity="0.5"/>
        </GlossySphere>
    </svg>
);

const NeuroExamIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="neuro" colorLight="#D8B4FE" colorDark="#6B21A8" />
        <GlossySphere id="neuro">
            <path d="M35 50 C35 35 40 30 50 30 C60 30 65 35 65 50 C65 65 50 75 50 75 C50 75 35 65 35 50" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 30 V50 M35 50 H65" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="40" r="4" fill="white" />
        </GlossySphere>
    </svg>
);

const SpirometryIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="spiro" colorLight="#67E8F9" colorDark="#0E7490" />
        <GlossySphere id="spiro">
            <path d="M40 30 Q 30 40 30 55 C 30 70 45 75 50 75 C 55 75 70 70 70 55 Q 70 40 60 30" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M50 75 V 50" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M40 55 L50 45 L60 55" stroke="white" strokeWidth="3" fill="none" />
        </GlossySphere>
    </svg>
);

const NuclearIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-110 duration-300">
        <GlossyDefs id="nuc" colorLight="#BEF264" colorDark="#4D7C0F" />
        <GlossySphere id="nuc">
             <circle cx="50" cy="50" r="6" fill="white" />
             <path d="M50 40 V25 M50 60 V75 M35 50 H20 M65 50 H80" stroke="white" strokeWidth="4" strokeLinecap="round" />
             <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5 5" />
        </GlossySphere>
    </svg>
);

const examsList = [
    {
        title: 'Exames de Imagem',
        description: 'Ressonância Magnética, Tomografia Computadorizada, Mamografia, Densitometria Óssea e Raio-X.',
        icon: <ImagingIcon />,
    },
    {
        title: 'Ultrassonografias',
        description: 'Abdome total, pélvica, mama, tireoide, obstétrica, morfológica e diversas outras.',
        icon: <UltrasoundIcon />,
    },
    {
        title: 'Cardiologia e Neurofisiologia',
        description: 'Eletrocardiograma (ECG), Eletroencefalograma (EEG), Eletroneuromiografia.',
        icon: <NeuroExamIcon />,
    },
    {
        title: 'Exames Laboratoriais',
        description: 'Hemogramas, colesterol, tireoide, hormônios, urina, fezes e check-ups completos.',
        icon: <LabIcon />,
    },
    {
        title: 'Saúde Respiratória',
        description: 'Espirometria (Prova de Função Pulmonar) para avaliação da capacidade respiratória.',
        icon: <SpirometryIcon />,
    },
    {
        title: 'Medicina Nuclear',
        description: 'Exames especializados de medicina nuclear para diagnósticos precisos.',
        icon: <NuclearIcon />,
    },
    {
        title: 'Exames Ginecológicos',
        description: 'Papanicolau, Colposcopia e exames de rotina para saúde da mulher.',
        icon: <GynecologicalIcon />,
    },
    {
        title: 'Exame Toxicológico',
        description: 'Para CNH (renovação/mudança), concursos públicos e admissional (CLT).',
        icon: <ToxicologicalIcon />,
    },
];

const Exams: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="exams">
      <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          NOSSOS EXAMES
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
          Tecnologia avançada para um diagnóstico preciso e completo.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {examsList.map((exam, index) => (
             <div key={index} style={{ transitionDelay: `${index * 50}ms` }} className={`bg-gradient-to-br from-gray-100 to-blue-200 p-6 rounded-2xl shadow-lg text-left flex flex-col items-center transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
               <div className="flex-shrink-0 mb-4 drop-shadow-xl">
                 {exam.icon}
               </div>
               <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{exam.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{exam.description}</p>
               </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
            <a
              href={WHATSAPP_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0072b5] hover:bg-[#005a8f] transition-transform hover:scale-105 shadow-lg"
            >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Agende Seus Exames
            </a>
        </div>
      </div>
    </section>
  );
};

export default Exams;
