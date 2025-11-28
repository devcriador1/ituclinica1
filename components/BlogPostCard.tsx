
import React from 'react';

interface BlogPostCardProps {
    title: string;
    excerpt: string;
    imageUrl: string;
    onReadMore: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, excerpt, imageUrl, onReadMore }) => {
    return (
        <div className="bg-slate-800/80 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img className="h-48 w-full object-cover" src={imageUrl} alt={title} loading="lazy" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{excerpt}</p>
                <button onClick={onReadMore} className="mt-4 text-cyan-400 font-semibold hover:underline self-start text-left">
                    Leia Mais &rarr;
                </button>
            </div>
        </div>
    );
};

export default BlogPostCard;
