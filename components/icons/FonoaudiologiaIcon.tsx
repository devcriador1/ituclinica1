
import React from 'react';

export const FonoaudiologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-teal2" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#5EEAD4" />
                <stop offset="100%" stopColor="#0F766E" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-teal2)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(20, 16)">
            <path d="M8 4C14 4 18 10 18 16C18 22 14 28 8 28C6 28 4 27 4 26" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
            <path d="M8 10C11 10 13 12 13 16C13 20 11 22 8 22" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
        </g>
    </svg>
);
