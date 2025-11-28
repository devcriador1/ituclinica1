
import React from 'react';

export const MedicinaTrabalhoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-orange" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#FDBA74" />
                <stop offset="100%" stopColor="#C2410C" />
            </radialGradient>
             <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-orange)" filter="url(#sphere-shadow)" />
         <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 20)">
            <path d="M16 0C7.163 0 0 7.163 0 16V20H32V16C32 7.163 24.837 0 16 0Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
            <rect x="2" y="20" width="28" height="4" rx="1" fill="white" />
        </g>
    </svg>
);
