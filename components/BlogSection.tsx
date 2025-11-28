
import React, { useState } from 'react';
import { blogPosts } from '../constants';
import BlogPostCard from './BlogPostCard';
import useOnScreen from '../hooks/useOnScreen';
import BlogModal from './BlogModal';

interface BlogPost {
    title: string;
    excerpt: string;
    imageUrl: string;
    fullText: string;
}

const BlogSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    return (
        <>
            <section id="blog">
                <div ref={ref} className={`bg-slate-900/75 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl p-8 sm:p-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            DICAS DE SAÚDE
                        </h2>
                        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-semibold">
                            Leia nossos últimos artigos e cuide-se bem.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <div key={index} style={{ transitionDelay: `${index * 100}ms` }} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                <BlogPostCard
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    imageUrl={post.imageUrl}
                                    onReadMore={() => setSelectedPost(post)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        </>
    );
};

export default BlogSection;
