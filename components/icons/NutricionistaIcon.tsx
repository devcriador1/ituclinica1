
import React from 'react';

export const NutricionistaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="nutri-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#86EFAC" />
                <stop offset="100%" stopColor="#15803D" />
            </radialGradient>
            <filter id="nutri-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#nutri-grad)" filter="url(#nutri-shadow)" />
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        
        <g transform="translate(30, 30) scale(0.8)">
            <path d="M25 5 Q 35 0 45 5" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M25 10 C 10 10 5 20 5 30 C 5 45 25 55 25 55 C 25 55 45 45 45 30 C 45 20 40 10 25 10 Z" fill="white" />
        </g>
    </svg>
);
