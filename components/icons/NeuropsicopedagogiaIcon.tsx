
import React from 'react';

export const NeuropsicopedagogiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-indigo2" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="100%" stopColor="#4338CA" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-indigo2)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 16)">
            <path d="M0 0H16V8C16 10 18 12 20 12C22 12 24 10 24 8V0H32V16H24C22 16 20 18 20 20C20 22 22 24 24 24H32V32H16V24C16 22 14 20 12 20C10 20 8 22 8 24V32H0V16H8C10 16 12 14 12 12C12 10 10 8 8 8V0H0Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        </g>
    </svg>
);
