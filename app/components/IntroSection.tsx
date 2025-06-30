'use client';

const IntroSection: React.FC = () => {
  const introText = [
    "Hi there!",
    "My name is Alex. I build full-stack tools and think a lot about how design meets engineering. I started developing software when I was four (yes, really), and that early obsession never left. At 17, I co-founded a CS education startup that reached 1M+ students and taught me a lot about inclusive tech, fast-paced teamwork, and how to ship things that actually matter.",
    "Now, I'm excited to keep creating things that make people's lives a little easier—and make a difference.",
    "Here are some of the projects I've worked on:"
  ];

  return (
    <main>
      <div className="intro-section">
        {introText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
};

export default IntroSection;
