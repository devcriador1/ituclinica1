
import React from 'react';

export const GinecologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="gyn-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#E879F9" />
                <stop offset="100%" stopColor="#86198F" />
            </radialGradient>
            <filter id="gyn-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#gyn-grad)" filter="url(#gyn-shadow)" />
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        
        <g transform="translate(30, 20) scale(0.8)">
            <circle cx="25" cy="20" r="15" stroke="white" strokeWidth="6" fill="none" />
            <line x1="25" y1="35" x2="25" y2="65" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <line x1="10" y1="50" x2="40" y2="50" stroke="white" strokeWidth="6" strokeLinecap="round" />
        </g>
    </svg>
);
