
import React from 'react';

export const OrtopediaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg" {...props}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-1/2 h-1/2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
    </div>
);
