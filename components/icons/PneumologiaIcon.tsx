
import React from 'react';

export const PneumologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-cyan2" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#67E8F9" />
                <stop offset="100%" stopColor="#0E7490" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-cyan2)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(14, 16)">
            <path d="M18 0V8M18 8L10 12C6 16 4 22 6 28C8 34 16 34 18 28V8ZM18 8L26 12C30 16 32 22 30 28C28 34 20 34 18 28" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        </g>
    </svg>
);
