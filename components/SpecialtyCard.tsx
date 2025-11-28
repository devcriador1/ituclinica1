import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  whatsappLink: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ icon, title, description, whatsappLink }) => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-200 rounded-2xl p-6 flex flex-col items-center text-center min-h-[350px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
      <div className="w-20 h-20 mb-3 text-[#0072b5]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 h-14 flex items-center justify-center">
        {title}
      </h3>
      <p className="text-sm text-gray-700 flex-grow mb-4">
        {description}
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-lg text-white bg-[#0072b5] hover:bg-[#005a8f] transition-all shadow-md hover:shadow-lg active:scale-95 active:shadow-inner"
      >
        <WhatsAppIcon className="w-6 h-6 mr-2" />
        AGENDAR CONSULTA
      </a>
    </div>
  );
};

export default SpecialtyCard;