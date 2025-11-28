
import React, { useState } from 'react';
import { specialtiesData } from '../constants';
import SpecialtyCard from './SpecialtyCard';
import useOnScreen from '../hooks/useOnScreen';

const INITIAL_VISIBLE_COUNT = 8;

const Specialties: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleSpecialties = isExpanded ? specialtiesData : specialtiesData.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section id="specialties">
      <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          NOSSAS ESPECIALIDADES
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
          Confira as especialidades oferecida em nossa clínica
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-500">
          {visibleSpecialties.map((specialty, index) => (
            <div key={specialty.id} style={{ transitionDelay: `${index * 50}ms` }} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <SpecialtyCard
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
                whatsappLink={specialty.whatsappLink}
              />
            </div>
          ))}
        </div>
        {specialtiesData.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0072b5] hover:bg-[#005a8f] transition-transform hover:scale-105"
            >
              {isExpanded ? 'Ver Menos Especialidades' : 'Ver Mais Especialidades'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specialties;
