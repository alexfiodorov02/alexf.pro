'use client';

interface BlogPost {
  id: number;
  title: string;
  url: string;
  date: string;
  excerpt: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Don't Hijack My Directions",
      url: "/blog/don't-hijack-my-directions",
      date: "August 17, 2025",
      excerpt: "The other day, I was getting transit directions in Apple Maps, and I wanted to switch to satellite view..."
    },
  ];

  return (
    <div className="blog-section">
      <h2>Blog</h2>
      <p>Thoughts on software development, design, and technology.</p>
      <ul className="postlist">
        {blogPosts.map(post => (
          <li key={post.id}>
            <a tabIndex={0} href={post.url}>{post.title}</a>
            <span className="postlist__date">{post.date} — {post.excerpt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSection;