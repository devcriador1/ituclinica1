
import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WHATSAPP_NUMBER, specialtiesData } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const PreSchedulingForm: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        specialty: '',
        preferredDate: '',
        preferredPeriod: 'Manhã',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, phone, email, specialty, preferredDate, preferredPeriod, message } = formData;
        
        const formattedDate = preferredDate ? new Date(preferredDate + 'T00:00:00').toLocaleDateString('pt-BR') : 'Não especificada';

        const text = `*Solicitação de Pré-Agendamento*\n\n` +
                     `*Nome:* ${name}\n` +
                     `*Telefone:* ${phone}\n` +
                     `*Email:* ${email || 'Não informado'}\n` +
                     `*Especialidade:* ${specialty}\n` +
                     `*Data Preferencial:* ${formattedDate}\n` +
                     `*Período:* ${preferredPeriod}\n\n` +
                     `*Mensagem Adicional:*\n${message || 'Nenhuma'}`;
                     
        const encodedText = encodeURIComponent(text);
        const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`;
        window.open(url, '_blank');
        
        setFormData({
            name: '',
            phone: '',
            email: '',
            specialty: '',
            preferredDate: '',
            preferredPeriod: 'Manhã',
            message: ''
        });
    };

    return (
        <section id="contato">
            <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            PRÉ-AGENDAMENTO ONLINE
                        </h2>
                        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
                            Facilite sua marcação. Preencha os dados e nossa equipe entrará em contato para confirmar.
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
                                className="block w-full shadow-sm py-3 px-4 bg-slate-800/80 border-slate-600 text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500 rounded-md"
                                placeholder="Nome Completo *"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="sr-only">Telefone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full shadow-sm py-3 px-4 bg-slate-800/80 border-slate-600 text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500 rounded-md"
                                    placeholder="Telefone (com DDD) *"
                                />
                            </div>
                             <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full shadow-sm py-3 px-4 bg-slate-800/80 border-slate-600 text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500 rounded-md"
                                    placeholder="Seu melhor e-mail"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="specialty" className="sr-only">Especialidade Desejada</label>
                            <select
                                id="specialty"
                                name="specialty"
                                required
                                value={formData.specialty}
                                onChange={handleChange}
                                className={`block w-full shadow-sm py-3 px-4 bg-slate-800/80 border-slate-600 focus:ring-cyan-500 focus:border-cyan-500 rounded-md ${formData.specialty ? 'text-white' : 'text-gray-400'}`}
                            >
                                <option value="" disabled>Selecione uma especialidade... *</option>
                                {specialtiesData.map(spec => (
                                    <option key={spec.id} value={spec.title}>{spec.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-1">Data Preferencial</label>
                                <input
                                    type="date"
                                    name="preferredDate"
                                    id="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className="block w-full shadow-sm py-3 px-4 bg-slate-800/80 border-slate-600 text-white focus:ring-cyan-500 focus:border-cyan-500 rounded-md"
                                    min={new Date().toISOString().split("T")[0]}
                                />
                            </div>
                             <div>
                                <label htmlFor="preferredPeriod" className="block text-sm font-medium text-gray-300 mb-1">Período de Preferência</label>
                                <select
                                    id="preferredPeriod"
                                    name="preferredPeriod"
                                    value={formData.preferredPeriod}
                                    onChange={handleChange}
                                    className="block w-full shadow-sm py-3 px-4 bg-slate-800/80 border-slate-600 text-white focus:ring-cyan-500 focus:border-cyan-500 rounded-md"
                                >
                                    <option>Manhã</option>
                                    <option>Tarde</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensagem Adicional</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full shadow-sm py-3 px-4 bg-slate-800/80 border-slate-600 text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500 rounded-md"
                                placeholder="Mensagem adicional (opcional)"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0072b5] hover:bg-[#005a8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005a8f] transition-transform hover:scale-105"
                            >
                                <WhatsAppIcon className="w-5 h-5 mr-3" />
                                Enviar Solicitação via WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PreSchedulingForm;
