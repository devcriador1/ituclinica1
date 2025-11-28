
import React from 'react';

export const CirurgiaPlasticaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <defs>
            <radialGradient id="sphere-pink2" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#FBCFE8" />
                <stop offset="100%" stopColor="#DB2777" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-pink2)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 16)">
            <path d="M16 0C12 0 8 6 8 16C8 26 12 32 16 32C20 32 24 26 24 16C24 6 20 0 16 0Z" fill="none" stroke="white" strokeWidth="2" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
            <path d="M4 16H28" stroke="white" strokeWidth="2" strokeDasharray="4 2"/>
        </g>
    </svg>
);
