
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../constants';

interface DoctorCardProps {
  name: string;
  specialty: string;
  crm: string;
  imageUrl: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, crm, imageUrl }) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(`Olá, gostaria de agendar uma consulta com ${name} (${specialty}).`)}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="p-6 text-center flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-[#0072b5] font-medium mb-2">{specialty}</p>
        <p className="text-sm text-gray-500 mb-4">{crm}</p>
        <div className="mt-auto">
           <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-lg text-white bg-[#0072b5] hover:bg-[#005a8f] transition-all shadow-md hover:shadow-lg active:scale-95 w-full"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Agendar
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
