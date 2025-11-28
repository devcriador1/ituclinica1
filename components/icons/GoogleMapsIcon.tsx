
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GoogleMapsIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="maps-grad" x1="32" y1="2" x2="32" y2="62" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F87171" />
                <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
            <filter id="maps-shadow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse">
                 <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
            </filter>
             <radialGradient id="maps-shine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(45) scale(25)">
                <stop stopColor="white" stopOpacity="0.5"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
            </radialGradient>
        </defs>
        <g filter="url(#maps-shadow)">
             <path d="M32 4C20.9 4 12 12.9 12 24C12 39 32 60 32 60C32 60 52 39 52 24C52 12.9 43.1 4 32 4ZM32 32C27.6 32 24 28.4 24 24C24 19.6 27.6 16 32 16C36.4 16 40 19.6 40 24C40 28.4 36.4 32 32 32Z" fill="url(#maps-grad)"/>
             <path d="M32 4C20.9 4 12 12.9 12 24C12 28.5 13.5 32.8 16 36.5L32 4V4ZM32 32C27.6 32 24 28.4 24 24C24 19.6 27.6 16 32 16C36.4 16 40 19.6 40 24C40 28.4 36.4 32 32 32Z" fill="url(#maps-shine)"/>
             <circle cx="32" cy="24" r="6" fill="#7F1D1D" fillOpacity="0.5"/>
        </g>
    </svg>
);
