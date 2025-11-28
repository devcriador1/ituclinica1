
import React from 'react';

export const CirurgiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-gray" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#334155" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-gray)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(16, 16) rotate(45 16 16)">
            <rect x="14" y="2" width="4" height="20" rx="1" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
            <path d="M12 22H20L16 30L12 22Z" fill="white"/>
        </g>
    </svg>
);
