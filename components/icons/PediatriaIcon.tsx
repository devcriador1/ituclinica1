
import React from 'react';

export const PediatriaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="ped-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#7DD3FC" />
                <stop offset="100%" stopColor="#0284C7" />
            </radialGradient>
            <filter id="ped-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        {/* Sphere */}
        <circle cx="50" cy="50" r="44" fill="url(#ped-grad)" filter="url(#ped-shadow)" />
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        <path d="M25 80 Q 50 95 75 80" stroke="white" strokeWidth="0" fill="none" opacity="0.3" />
        
        {/* Pacifier Symbol */}
        <g transform="translate(30, 30) scale(0.4)">
           <path d="M50 10 C 30 10 15 30 15 50 C 15 65 25 80 40 85 V 95" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
           <path d="M60 95 V 85 C 75 80 85 65 85 50 C 85 30 70 10 50 10" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
           <circle cx="50" cy="50" r="15" fill="white" />
           <rect x="45" y="85" width="10" height="15" rx="5" fill="white" />
        </g>
    </svg>
);
