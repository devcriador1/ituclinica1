
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";

type Message = {
  role: 'user' | 'model';
  text: string;
};

const AiChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const aiAvatarUrl = 'https://i.postimg.cc/L85c48tr/mulher-jovem-cabelo-preto-atendente-virtual.jpg';

    useEffect(() => {
        if (process.env.API_KEY) {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatRef.current = ai.chats.create({
              model: 'gemini-2.5-flash',
              config: {
                systemInstruction: "Você é uma assistente virtual da Clínica Médica Saúde Cidade Nova. Sua função é fornecer informações sobre nossas especialidades, exames, horários de funcionamento e endereço. Para agendamentos, sempre instrua o usuário a usar o botão de WhatsApp ou o formulário de contato do site. Seja amigável, profissional e prestativa. O horário de funcionamento é de segunda a sexta das 7h às 18h (sem fechar para almoço) e sábado das 7h às 12h. NÃO forneça conselhos médicos sob nenhuma circunstância. Responda em português brasileiro.",
              },
            });
        }
         setMessages([{ role: 'model', text: 'Olá! Sou a assistente virtual da Saúde Cidade Nova. Como posso ajudar você a encontrar informações sobre nossos serviços?' }]);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading || !chatRef.current) return;

        const userMessage: Message = { role: 'user', text: userInput };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = userInput;
        setUserInput('');
        setIsLoading(true);

        try {
            const result = await chatRef.current.sendMessage({ message: currentInput });
            const modelResponse: Message = { role: 'model', text: result.text };
            setMessages(prev => [...prev, modelResponse]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: Message = { role: 'model', text: 'Desculpe, estou com um problema no momento. Tente novamente mais tarde.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!process.env.API_KEY) {
        return null; // Don't render the chat if API key is not available
    }

    return (
        <>
            <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-20 h-20 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0072b5] overflow-hidden"
                    aria-label="Abrir chat de atendimento virtual"
                >
                    <img src={aiAvatarUrl} alt="Atendente Virtual" className="w-full h-full object-cover" loading="lazy" />
                </button>
            </div>

            <div className={`fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm h-[70%] max-h-[500px] bg-white rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <header className="bg-[#0072b5] text-white p-3 rounded-t-lg flex justify-between items-center flex-shrink-0 shadow-md">
                    <div className="flex items-center space-x-3">
                        <img src={aiAvatarUrl} alt="Atendente Virtual" className="w-10 h-10 rounded-full object-cover border-2 border-white" loading="lazy" />
                        <h3 className="font-bold text-lg">Atendente Virtual</h3>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/20 transition-colors" aria-label="Fechar chat">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </button>
                </header>
                <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                             <div key={index} className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'model' && (
                                    <img src={aiAvatarUrl} alt="Atendente" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                                )}
                                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-[#0072b5] text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-end gap-2.5 justify-start">
                                <img src={aiAvatarUrl} alt="Atendente" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                                <div className="p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                                   <div className="flex items-center space-x-2">
                                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                   </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </main>
                <footer className="p-3 border-t bg-white flex-shrink-0">
                    <form onSubmit={handleSendMessage} className="flex items-center">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Digite sua dúvida..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0072b5]"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading} className="ml-3 p-2 bg-[#0072b5] text-white rounded-full hover:bg-[#005a8f] disabled:bg-gray-400" aria-label="Enviar mensagem">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                        </button>
                    </form>
                </footer>
            </div>
        </>
    );
};

export default AiChat;
