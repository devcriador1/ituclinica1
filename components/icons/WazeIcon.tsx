
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const WazeIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="waze-grad" x1="32" y1="2" x2="32" y2="62" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="1" stopColor="#0EA5E9" />
            </linearGradient>
            <filter id="waze-shadow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse">
                 <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
            </filter>
             <radialGradient id="waze-shine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(45) scale(25)">
                <stop stopColor="white" stopOpacity="0.5"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
            </radialGradient>
        </defs>
        <g filter="url(#waze-shadow)">
             <circle cx="32" cy="32" r="28" fill="url(#waze-grad)" />
             <circle cx="32" cy="32" r="28" fill="url(#waze-shine)" />
            <path d="M32 15C22.6 15 15 22.6 15 32C15 41.4 22.6 49 32 49C41.4 49 49 41.4 49 32C49 22.6 41.4 15 32 15ZM31.7 20.7C32.7 20.7 33.6 21.5 33.6 22.6C33.6 23.6 32.8 24.5 31.7 24.5C30.7 24.5 29.8 23.7 29.8 22.6C29.8 21.6 30.6 20.7 31.7 20.7ZM37.7 41.4C36.5 39.3 34.7 37.7 32.5 37C31.5 36.7 30.5 36.6 29.5 36.6C25.8 36.6 22.5 38.8 21 42.1C20.6 42.9 20.9 43.9 21.5 44.5L22.9 45.5C23.6 46 24.6 45.9 25.1 45.3C26 44.3 27.3 43.6 28.7 43.6C30.6 43.6 32.1 44.6 32.8 46.1C33.4 47.5 33.2 49.2 31.5 48.3C30.2 47.7 28.8 47.5 28.1 48C27.3 48.7 27.2 49.7 26.7 50.5C28.1 52.4 30.3 53.6 32.7 53.6C34.6 53.6 36.4 52.8 38 51.4C40 49.5 40.7 46.9 39.8 44.4C39.4 43.2 38.6 42.2 37.7 41.4Z" fill="white"/>
        </g>
    </svg>
);
