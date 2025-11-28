
import React from 'react';

export const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <defs>
            <radialGradient id="chat-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#1D4ED8" />
            </radialGradient>
             <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <path d="M32 8C18.7 8 8 17.6 8 29.5C8 36.4 11.4 42.5 16.8 46.2L14 56L25.1 51.1C27.3 51.7 29.6 52 32 52C45.3 52 56 42.4 56 30.5C56 18.6 45.3 8 32 8Z" fill="url(#chat-grad)" filter="url(#sphere-shadow)"/>
        <circle cx="20" cy="30" r="3" fill="white"/>
        <circle cx="32" cy="30" r="3" fill="white"/>
        <circle cx="44" cy="30" r="3" fill="white"/>
    </svg>
);
