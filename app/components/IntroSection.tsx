'use client';

const IntroSection: React.FC = () => {
  const introText = [
    "Hi there!",
    "Hi, I'm Alex. I build full-stack software where beautiful design meets thoughtful engineering. I started developing software at age four (yes, really), and that early obsession turned into a lifelong pursuit of creating tools that people actually enjoy using.",
    "At 17, I co-founded a CS education startup that reached over a million students across Latin America. It taught me how to move fast, build inclusive tech, and ship meaningful software with real-world impact.",
    "Now, I'm focused on crafting digital experiences that are elegant, accessible, and useful—tools that make life simpler and more human.",
    "Here's some of what I've built:"
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
