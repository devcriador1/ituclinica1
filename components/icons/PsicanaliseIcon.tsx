
import React from 'react';

export const PsicanaliseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-purple2" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#E9D5FF" />
                <stop offset="100%" stopColor="#7E22CE" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-purple2)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 16)">
             <path d="M0 24H32M4 24C4 16 8 12 16 12C24 12 28 16 28 24" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        </g>
    </svg>
);
