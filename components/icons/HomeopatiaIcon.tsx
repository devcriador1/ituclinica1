
import React from 'react';

export const HomeopatiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="sphere-lime" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#BEF264" />
                <stop offset="100%" stopColor="#4D7C0F" />
            </radialGradient>
            <filter id="sphere-shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#sphere-lime)" filter="url(#sphere-shadow)" />
        <ellipse cx="22" cy="20" rx="10" ry="6" fill="white" fillOpacity="0.25" transform="rotate(-45 22 20)" />
        <g transform="translate(18, 16)">
            <path d="M14 0C14 0 0 14 0 20C0 28 6 34 14 34C22 34 28 28 28 20C28 14 14 0 14 0Z" fill="white" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"/>
            <path d="M14 6V28" stroke="#4D7C0F" strokeWidth="2" strokeLinecap="round"/>
        </g>
    </svg>
);
