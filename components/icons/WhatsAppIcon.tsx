
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const WhatsAppIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="wa-grad" x1="32" y1="2" x2="32" y2="62" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ADE80" />
                <stop offset="1" stopColor="#22C55E" />
            </linearGradient>
            <filter id="wa-shadow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.1 0 0 0 0 0.5 0 0 0 0 0.2 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <radialGradient id="wa-shine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(45) scale(25)">
                <stop stopColor="white" stopOpacity="0.4"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
            </radialGradient>
        </defs>
        <g filter="url(#wa-shadow)">
            <circle cx="32" cy="32" r="28" fill="url(#wa-grad)" />
            <circle cx="32" cy="32" r="28" fill="url(#wa-shine)" />
            <path d="M32 13C21.507 13 13 21.507 13 32C13 35.4 13.9 38.6 15.5 41.4L14 49L21.8 47.3C24.5 48.9 27.9 50 32 50C42.493 50 51 41.493 51 31C51 20.507 42.493 13 32 13ZM41.8 38.3C41.4 39.4 39.8 40.4 38.7 40.6C37.9 40.7 37 40.8 33.6 39.4C29.3 37.6 26.5 33.3 26.3 33C26.1 32.8 24.6 30.8 24.6 28.7C24.6 26.6 25.6 25.6 26 25.2C26.3 24.8 27 24.7 27.4 24.7C27.7 24.7 28 24.8 28.2 25.3C28.5 25.9 29.2 27.6 29.3 27.8C29.4 28 29.5 28.3 29.3 28.5C29.2 28.8 29 29 28.8 29.3C28.6 29.5 28.4 29.7 28.7 30.2C29 30.7 30 32.4 31.6 33.8C33.5 35.5 35.1 36 35.6 36.2C36.1 36.4 36.7 36.4 37 36C37.4 35.6 37.9 34.9 38.3 34.3C38.7 33.8 39.1 33.8 39.5 34C40 34.2 42.3 35.3 42.8 35.6C43.3 35.8 43.6 35.9 43.7 36.2C43.8 36.4 43.8 37.5 41.8 38.3Z" fill="white"/>
        </g>
    </svg>
);
