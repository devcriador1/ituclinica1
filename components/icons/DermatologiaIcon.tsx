
import React from 'react';

export const DermatologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="derma-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#F9A8D4" />
                <stop offset="100%" stopColor="#BE185D" />
            </radialGradient>
            <filter id="derma-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#derma-grad)" filter="url(#derma-shadow)" />
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        
        <g transform="translate(35, 30) scale(0.6)">
            <path d="M25 0 C 10 0 0 15 0 25 C 0 40 10 50 25 50 C 40 50 50 40 50 25 C 50 15 40 0 25 0 Z" fill="white" />
            <path d="M25 5 V 20 M 10 25 H 40" stroke="#F9A8D4" strokeWidth="0" />
        </g>
    </svg>
);
