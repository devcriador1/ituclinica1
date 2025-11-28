
import React from 'react';

export const OftalmologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="eye-grad-ball" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E2E8F0" />
            </radialGradient>
            <radialGradient id="iris-grad-real" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0369A1" />
            </radialGradient>
            <filter id="eye-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#eye-grad-ball)" filter="url(#eye-shadow)" />
        <circle cx="50" cy="50" r="22" fill="url(#iris-grad-real)" />
        <circle cx="50" cy="50" r="12" fill="#1E293B" />
        <circle cx="56" cy="44" r="5" fill="white" opacity="0.9" />
        
        <path d="M10 50 Q 50 10 90 50" stroke="#94A3B8" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
);
