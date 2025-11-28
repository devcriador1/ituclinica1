
import React from 'react';

export const PsicologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="psi-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="100%" stopColor="#5B21B6" />
            </radialGradient>
            <filter id="psi-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#psi-grad)" filter="url(#psi-shadow)" />
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        
        <g transform="translate(25, 25) scale(0.5)">
             <path d="M50 0 V 80 M 10 20 Q 10 40 50 40 Q 90 40 90 20" stroke="white" strokeWidth="10" strokeLinecap="round" fill="none" />
        </g>
    </svg>
);
