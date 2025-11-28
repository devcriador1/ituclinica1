
import React from 'react';

export const GinecologiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg" {...props}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-1/2 h-1/2 text-white">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
    </div>
);
