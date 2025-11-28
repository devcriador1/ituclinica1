
import React from 'react';

export const CardiologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="heart-3d-grad" cx="40%" cy="30%" r="90%">
                <stop offset="0%" stopColor="#FF7171" />
                <stop offset="60%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#7F1D1D" />
            </radialGradient>
            <filter id="heart-3d-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.4" />
            </filter>
        </defs>
        <g filter="url(#heart-3d-shadow)">
            <path d="M50 88 C 20 65 5 50 5 32 C 5 18 18 8 32 8 C 40 8 47 12 50 18 C 53 12 60 8 68 8 C 82 8 95 18 95 32 C 95 50 80 65 50 88 Z" fill="url(#heart-3d-grad)" />
        </g>
        {/* Shine */}
        <path d="M20 25 Q 30 15 45 20" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" fill="none" />
        <ellipse cx="25" cy="25" rx="10" ry="5" fill="white" opacity="0.3" transform="rotate(-30 25 25)"/>
        
        {/* EKG */}
        <path d="M25 50 H 35 L 42 35 L 52 65 L 60 50 H 75" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
    </svg>
);
