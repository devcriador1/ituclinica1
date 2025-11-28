
import React from 'react';

export const VascularIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <defs>
            <radialGradient id="sphere-red" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#FCA5A5" />
                <stop offset="100%" stopColor="#B91C1C" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-red)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(18, 14)">
            <path d="M14 0V32M4 8C4 8 4 14 14 14C24 14 24 8 24 8M4 24C4 24 4 18 14 18C24 18 24 24 24 24" stroke="white" strokeWidth="4" strokeLinecap="round" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        </g>
    </svg>
);
