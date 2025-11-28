import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const ContactForm: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, phone, message } = formData;
        const text = `Olá! Meu nome é ${name}. \nTelefone: ${phone}. \nMensagem: ${message}`;
        const encodedText = encodeURIComponent(text);
        const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`;
        window.open(url, '_blank');
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <section id="contato" className="py-16 sm:py-24 bg-white/95">
            <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0072b5] tracking-tight">
                            ENTRE EM CONTATO
                        </h2>
                        <p className="mt-4 text-lg sm:text-xl text-gray-600 font-semibold">
                            Preencha o formulário abaixo e fale conosco diretamente pelo WhatsApp.
                        </p>
                    </div>
                </div>
                <div className={`mt-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#005a8f] focus:border-[#005a8f] border-gray-300 rounded-md"
                                placeholder="Nome Completo"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Telefone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#005a8f] focus:border-[#005a8f] border-gray-300 rounded-md"
                                placeholder="Telefone (com DDD)"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#005a8f] focus:border-[#005a8f] border-gray-300 rounded-md"
                                placeholder="Sua mensagem"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0072b5] hover:bg-[#005a8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005a8f] transition-transform hover:scale-105"
                            >
                                <WhatsAppIcon className="w-5 h-5 mr-3" />
                                Enviar por WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;