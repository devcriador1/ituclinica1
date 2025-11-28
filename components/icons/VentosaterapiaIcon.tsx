
import React from 'react';

export const VentosaterapiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-red2" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#FCA5A5" />
                <stop offset="100%" stopColor="#B91C1C" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-red2)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(18, 14)">
             <path d="M14 0C10 0 8 4 8 8V20C8 24 4 26 4 28H24C24 26 20 24 20 20V8C20 4 18 0 14 0Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
        </g>
    </svg>
);
