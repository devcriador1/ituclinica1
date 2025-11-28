
import React from 'react';

export const GeriatriaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-sky" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#7DD3FC" />
                <stop offset="100%" stopColor="#0369A1" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-sky)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 16)">
             <path d="M16 0C11.582 0 8 3.582 8 8C8 12.418 11.582 16 16 16C20.418 16 24 12.418 24 8C24 3.582 20.418 0 16 0Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
             <path d="M0 32C0 24 6 20 16 20C26 20 32 24 32 32" stroke="white" strokeWidth="3" fill="none"/>
        </g>
    </svg>
);
