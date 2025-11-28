
import React from 'react';

export const PsicopedagogiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-orange3" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#FDBA74" />
                <stop offset="100%" stopColor="#EA580C" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-orange3)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 16)">
            <path d="M16 0L2 8L16 16L30 8L16 0Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
            <path d="M2 8V24L16 32L30 24V8" stroke="white" strokeWidth="3" fill="none"/>
        </g>
    </svg>
);
