
import React from 'react';

export const DentistaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="tooth-3d-grad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <filter id="tooth-3d-shadow">
                 <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3" />
            </filter>
        </defs>
        <g filter="url(#tooth-3d-shadow)">
            <path d="M75 25 C 70 25 65 28 60 32 C 55 28 50 25 45 25 C 35 25 25 35 25 45 V 60 C 25 70 30 75 32 85 C 34 95 38 95 38 95 C 38 95 42 90 45 80 C 48 70 50 65 50 65 C 50 65 52 70 55 80 C 58 90 62 95 62 95 C 62 95 66 95 68 85 C 70 75 75 70 75 60 V 45 C 75 35 75 25 75 25 Z" fill="url(#tooth-3d-grad)" />
        </g>
        <ellipse cx="60" cy="35" rx="10" ry="6" fill="white" opacity="0.8" transform="rotate(-20 60 35)"/>
        <path d="M40 40 Q 50 45 60 40" stroke="#94A3B8" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
);
