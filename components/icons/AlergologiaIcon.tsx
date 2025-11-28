
import React from 'react';

export const AlergologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-cyan" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#67E8F9" />
                <stop offset="100%" stopColor="#0E7490" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-cyan)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.3" transform="rotate(-45 22 20)" />
        {/* Flower/Pollen Icon */}
        <path d="M32 14C32 14 35 22 35 26C39 26 47 29 47 29C47 29 39 32 35 32C35 36 32 44 32 44C32 44 29 36 29 32C25 32 17 29 17 29C17 29 25 26 29 26C29 22 32 14 32 14Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        <circle cx="32" cy="29" r="3" fill="#E0F2FE"/>
    </svg>
);
