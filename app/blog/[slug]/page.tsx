import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Define Props type for Next.js 15+
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs();
    return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getBlogPostBySlug(resolvedParams.slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="App blog-post-page">
            <main id="main" className="blog-post-main">
                <article className="blog-post-article">
                    <h1 className="blog-post-title">{post.title ? post.title : "Alexander Fiodorov-Miller"}</h1>
                    <p className="blog-post-date">{post.date}</p>
                    <div className="prose prose-lg prose-neutral dark:prose-invert prose-p:mb-8">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </main>
        </div>
    );
}