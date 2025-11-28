
import React from 'react';

export const NutricionistaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-lime-400 to-lime-600 shadow-lg" {...props}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-1/2 h-1/2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
    </div>
);
