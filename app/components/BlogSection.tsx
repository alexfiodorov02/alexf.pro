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
      title: "Building Accessible Web Applications",
      url: "/blog/building-accessible-web-applications",
      date: "June 15, 2023",
      excerpt: "Practical strategies for creating inclusive digital experiences."
    },
    {
      id: 2,
      title: "From CS Education to Full-Stack Development",
      url: "/blog/cs-education-to-full-stack",
      date: "April 22, 2023",
      excerpt: "My journey from teaching code to building production applications."
    },
    {
      id: 3,
      title: "Designing User-Centered Developer Tools",
      url: "/blog/user-centered-developer-tools",
      date: "March 8, 2023",
      excerpt: "How focusing on UX improves developer productivity."
    },
    { 
      id: 4,
      title: "The Great Error Message",
      url: "/blog/building-accessible-web-applications",
      date: "July 31, 2025",
      excerpt: "Practical strategies for creating inclusive digital experiences."
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