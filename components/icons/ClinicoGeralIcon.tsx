
import React from 'react';

export const ClinicoGeralIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="clinic-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#5EEAD4" />
                <stop offset="100%" stopColor="#0F766E" />
            </radialGradient>
            <filter id="clinic-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#clinic-grad)" filter="url(#clinic-shadow)" />
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        <g transform="translate(25, 25) scale(0.5)">
            <path d="M40 0 H 60 V 40 H 100 V 60 H 60 V 100 H 40 V 60 H 0 V 40 H 40 V 0 Z" fill="white" />
        </g>
    </svg>
);
