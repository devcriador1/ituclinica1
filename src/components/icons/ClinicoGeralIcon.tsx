
import React from 'react';

export const ClinicoGeralIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg" {...props}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-1/2 h-1/2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    </div>
);
