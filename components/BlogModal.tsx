
import React from 'react';

interface BlogPost {
    title: string;
    excerpt: string;
    imageUrl: string;
    fullText: string;
}

interface BlogModalProps {
    post: BlogPost | null;
    onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
    if (!post) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up"
                onClick={(e) => e.stopPropagation()} 
            >
                <header className="relative">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                    <button 
                        onClick={onClose}
                        className="absolute top-2 right-2 bg-white/70 rounded-full p-1 text-gray-800 hover:bg-white transition-colors"
                        aria-label="Fechar modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>
                <div className="p-6 overflow-y-auto">
                    <h2 id="blog-modal-title" className="text-2xl font-bold text-[#0072b5] mb-4">{post.title}</h2>
                    <div className="text-gray-700 whitespace-pre-wrap space-y-4 prose max-w-none">
                        {post.fullText.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph.split('\n').map((line, lineIndex) => <React.Fragment key={lineIndex}>{line}<br/></React.Fragment>)}</p>
                        ))}
                    </div>
                </div>
                <footer className="p-4 bg-gray-50 border-t text-right flex-shrink-0">
                     <button
                        onClick={onClose}
                        className="px-4 py-2 bg-[#0072b5] text-white rounded-md hover:bg-[#005a8f] transition-colors"
                    >
                        Fechar
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default BlogModal;
