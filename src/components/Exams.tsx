import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { WHATSAPP_APPOINTMENT_URL } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

// --- MODERN ICON WRAPPER ---
// Styles: Squircle shape, soft gradient, centered white icon.
const ModernIconWrapper = ({ children, gradientFrom, gradientTo }: { children?: React.ReactNode, gradientFrom: string, gradientTo: string }) => (
    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
        <div className="text-white w-10 h-10 sm:w-12 sm:h-12">
            {children}
        </div>
    </div>
);

// --- ICON COMPONENTS (SVG PATHS) ---

const LabIcon = () => (
    <ModernIconWrapper gradientFrom="from-purple-400" gradientTo="to-purple-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    </ModernIconWrapper>
);

const EcgIcon = () => (
    <ModernIconWrapper gradientFrom="from-red-400" gradientTo="to-red-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h5.25L9 15l2.25-10.5 2.25 12.75L15.75 12h6" />
        </svg>
    </ModernIconWrapper>
);

const UltrasoundIcon = () => (
    <ModernIconWrapper gradientFrom="from-sky-400" gradientTo="to-sky-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    </ModernIconWrapper>
);

const GynecologicalIcon = () => (
    <ModernIconWrapper gradientFrom="from-pink-400" gradientTo="to-pink-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
    </ModernIconWrapper>
);

const ToxicologicalIcon = () => (
    <ModernIconWrapper gradientFrom="from-yellow-400" gradientTo="to-yellow-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
    </ModernIconWrapper>
);

const ImagingIcon = () => (
    <ModernIconWrapper gradientFrom="from-blue-400" gradientTo="to-blue-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
    </ModernIconWrapper>
);

const NeuroExamIcon = () => (
    <ModernIconWrapper gradientFrom="from-violet-400" gradientTo="to-violet-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
    </ModernIconWrapper>
);

const SpirometryIcon = () => (
    <ModernIconWrapper gradientFrom="from-cyan-400" gradientTo="to-cyan-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
    </ModernIconWrapper>
);

const NuclearIcon = () => (
    <ModernIconWrapper gradientFrom="from-lime-400" gradientTo="to-lime-600">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </ModernIconWrapper>
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
        icon: <EcgIcon />,
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
             <div key={index} style={{ transitionDelay: `${index * 50}ms` }} className={`bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-center transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
               <div className="flex-shrink-0 mb-4">
                 {exam.icon}
               </div>
               <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{exam.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exam.description}</p>
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