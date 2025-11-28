
import React from 'react';

export const OrtopediaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="orto-grad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#1E3A8A" />
            </radialGradient>
            <filter id="orto-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#orto-grad)" filter="url(#orto-shadow)" />
        <ellipse cx="35" cy="30" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-25 35 30)" />
        
        <g transform="translate(28, 28) scale(0.9) rotate(45 25 25)">
             <path d="M15 5 C 5 5 0 15 5 20 L 15 30 L 30 15 L 20 5 C 18 2 15 5 15 5 Z M 35 35 L 25 25 L 15 35 L 25 45 L 35 35 Z M 45 45 L 35 35 L 45 25 C 50 30 45 45 45 45 Z" fill="white" />
             <rect x="18" y="18" width="14" height="14" rx="2" fill="white" />
        </g>
    </svg>
);
