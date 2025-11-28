
import React from 'react';

export const NeurologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <defs>
            <radialGradient id="sphere-rose2" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#FDA4AF" />
                <stop offset="100%" stopColor="#BE123C" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-rose2)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 18)">
            <path d="M8 8C8 4 12 2 16 2C20 2 24 4 24 8C24 6 28 6 30 8C32 10 32 14 30 16C32 18 30 22 28 24C30 28 24 30 20 30H12C8 30 2 28 4 24C2 22 0 18 2 16C0 14 0 10 2 8C4 6 8 6 8 8Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        </g>
    </svg>
);
