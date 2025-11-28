
import React from 'react';
import { WazeIcon } from './icons/WazeIcon';
import { GoogleMapsIcon } from './icons/GoogleMapsIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { WHATSAPP_APPOINTMENT_URL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <img 
                    src="https://i.postimg.cc/FFgPQFyL/Design-sem-nome-2-removebg-preview.png" 
                    alt="Saúde Cidade Nova" 
                    className="h-20 w-auto object-contain" 
                 />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Compromisso com o seu bem-estar. Oferecemos atendimento humanizado, diversas especialidades médicas e exames de qualidade em um só lugar.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
               <a 
                href={WHATSAPP_APPOINTMENT_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/20"
               >
                 <WhatsAppIcon className="w-5 h-5" />
                 <span>WhatsApp</span>
               </a>
               <a 
                href="https://www.instagram.com/clinicasaudeciidadenova?igsh=MXcxbjF0aW9ycWdiOQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white bg-[#E1306C] hover:bg-[#C1205C] px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-pink-900/20"
               >
                 <InstagramIcon className="w-5 h-5" />
                 <span>Instagram</span>
               </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-[#0072b5] pl-3">Acesso Rápido</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-[#0072b5] hover:pl-1 transition-all block">Início</a></li>
              <li><a href="#specialties" className="hover:text-[#0072b5] hover:pl-1 transition-all block">Especialidades</a></li>
              <li><a href="#exams" className="hover:text-[#0072b5] hover:pl-1 transition-all block">Exames</a></li>
              <li><a href="#medicina-trabalho" className="hover:text-[#0072b5] hover:pl-1 transition-all block">Medicina do Trabalho</a></li>
              <li><a href="#team" className="hover:text-[#0072b5] hover:pl-1 transition-all block">Corpo Clínico</a></li>
              <li><a href="#faq" className="hover:text-[#0072b5] hover:pl-1 transition-all block">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contatos */}
          <div>
             <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-[#0072b5] pl-3">Fale Conosco</h3>
             <ul className="space-y-4 text-sm">
               <li className="flex items-start gap-3">
                 <svg className="w-5 h-5 text-[#0072b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 <div>
                   <p className="font-medium text-white">Telefones</p>
                   <a href="tel:+5511914578992" className="hover:text-white transition-colors block">(11) 91457-8992</a>
                   <a href="tel:+5511949801417" className="hover:text-white transition-colors block">(11) 94980-1417</a>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <svg className="w-5 h-5 text-[#0072b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 <div>
                   <p className="font-medium text-white">E-mail</p>
                   <a href="mailto:clinicavovacidadeitu@gmail.com" className="hover:text-white transition-colors break-all">clinicavovacidadeitu@gmail.com</a>
                 </div>
               </li>
             </ul>
          </div>

          {/* Coluna 4: Localização */}
          <div>
             <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-[#0072b5] pl-3">Onde Estamos</h3>
             <div className="text-sm space-y-4">
               <p className="leading-relaxed">
                 Rua Zoraide Arviere Bonini, 19<br />
                 Vila Martins - Itu/SP<br />
                 CEP: 13308-254
               </p>
               
               <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Horário de Atendimento</p>
                  <p className="text-white">Seg - Sex: 07h às 18h</p>
                  <p className="text-[#0072b5] text-xs font-medium mt-1">⚠ Não fechamos para almoço</p>
                  <p className="text-white mt-1">Sáb: 07h às 12h</p>
               </div>

               <div className="flex gap-3 pt-2">
                  <a href="https://waze.com/ul?q=Rua%20Zoraide%20Arviere%20Bonini,%2019%20-%20Vila%20Martins,%20Itu%20-%20SP" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded border border-slate-700 transition-colors group" title="Abrir no Waze">
                    <WazeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Waze</span>
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=Rua+Zoraide+Arviere+Bonini,+19+-+Vila+Martins+-+Itu/SP" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded border border-slate-700 transition-colors group" title="Abrir no Google Maps">
                    <GoogleMapsIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Maps</span>
                  </a>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Barra Inferior */}
      <div className="bg-black/20 py-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Saúde Cidade Nova Clínica Médica. Todos os direitos reservados.</p>
          <div className="flex gap-6 cursor-default">
             <span className="hover:text-gray-400 transition-colors">Responsável Técnico</span>
             <span className="hover:text-gray-400 transition-colors">Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
