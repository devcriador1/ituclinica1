
import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WHATSAPP_APPOINTMENT_URL } from '../constants';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Especialidades', href: '#specialties' },
  { name: 'Exames', href: '#exams' },
  { name: 'Medicina do Trabalho', href: '#medicina-trabalho' },
  { name: 'Corpo Clínico', href: '#team' },
  { name: 'Perguntas Frequentes', href: '#faq' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar - Informações Rápidas */}
      <div className="hidden md:block bg-[#005a8f] text-white text-[13px] font-medium py-2.5 transition-all">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-gray-200 transition-colors cursor-default">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Rua Zoraide Arviere Bonini, 19 - Itu/SP</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-gray-200 transition-colors cursor-default">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Seg - Sex: 7h às 18h (Não fechamos para almoço) | Sáb: 7h às 12h</span>
            </span>
          </div>
          <div className="flex items-center">
             <a href={`tel:+5511914578992`} className="flex items-center gap-1.5 font-bold hover:text-cyan-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>(11) 91457-8992</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100 transition-all">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-24 sm:h-20">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center group">
                <img 
                    src="https://i.postimg.cc/FFgPQFyL/Design-sem-nome-2-removebg-preview.png" 
                    alt="Saúde Cidade Nova" 
                    className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105 duration-300" 
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex xl:items-center xl:space-x-1">
              <nav className="flex space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="px-3 py-2 rounded-md text-sm font-bold text-gray-600 hover:text-[#0072b5] hover:bg-blue-50 transition-all duration-300 tracking-wide"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="border-l border-gray-300 h-8 mx-4"></div>
              <a
                href={WHATSAPP_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-[#0072b5] hover:bg-[#005a8f] shadow-md hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center xl:hidden">
              <a
                 href={WHATSAPP_APPOINTMENT_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mr-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0072b5] text-white hover:bg-[#005a8f] shadow-md transition-transform active:scale-95"
                 aria-label="Chat WhatsApp"
              >
                 <WhatsAppIcon className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0072b5] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0072b5] transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Abrir menu principal</span>
                {isMenuOpen ? (
                   <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                   </svg>
                ) : (
                   <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
            className={`xl:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out shadow-inner ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`} 
            id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-[#0072b5] transition-colors border-b border-gray-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
             <div className="pt-4 mt-2 border-t border-gray-100 bg-gray-50 -mx-4 px-8 pb-6">
               <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Contato Rápido</p>
               <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4 text-[#0072b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Seg - Sex: 7h às 18h (Não fechamos para almoço)</span>
               </div>
               <div className="flex items-center space-x-3 text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4 text-[#0072b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <a href="tel:+5511914578992" className="font-bold hover:underline">(11) 91457-8992</a>
               </div>
               <a
                href={WHATSAPP_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center items-center px-4 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-[#0072b5] hover:bg-[#005a8f] transition-all shadow-md active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2 inline" />
                Agendar Consulta
              </a>
             </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
