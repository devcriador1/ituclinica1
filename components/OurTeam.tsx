
import React from 'react';
import { doctorsData, WHATSAPP_APPOINTMENT_URL } from '../constants';
import DoctorCard from './DoctorCard';
import useOnScreen from '../hooks/useOnScreen';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const OurTeam: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="team">
      <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            NOSSA EQUIPE MÉDICA
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
            Conheça os especialistas dedicados à sua saúde.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsData && doctorsData.map((doctor, index) => (
            <div key={index} style={{ transitionDelay: `${index * 100}ms` }} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <DoctorCard
                name={doctor.name}
                specialty={doctor.specialty}
                crm={doctor.crm}
                imageUrl={doctor.imageUrl}
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
            <a
              href={WHATSAPP_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0072b5] hover:bg-[#005a8f] transition-transform hover:scale-105"
            >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Agendar Consulta
            </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
