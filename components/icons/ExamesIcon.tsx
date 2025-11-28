
import React from 'react';

export const ExamesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <defs>
            <radialGradient id="sphere-indigo" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="100%" stopColor="#4338CA" />
            </radialGradient>
             <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-indigo)" filter="url(#sphere-shadow)" />
         <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(22, 14)">
             <path d="M10 0L4 30H16L10 0Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
             <rect x="4" y="30" width="12" height="8" rx="2" fill="white" />
        </g>
    </svg>
);
