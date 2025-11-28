
import React from 'react';

export const OtorrinolaringologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <defs>
            <radialGradient id="sphere-slate" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-slate)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 16)">
            <path d="M16 4C10 4 6 10 6 16C6 22 10 28 16 28C22 28 26 22 26 16C26 10 22 4 16 4ZM16 10C18 10 19 12 19 14L16 22L13 14C13 12 14 10 16 10Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        </g>
    </svg>
);
