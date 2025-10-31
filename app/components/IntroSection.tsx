'use client';
import React from 'react';

const IntroSection: React.FC = () => {
  const introText: React.ReactNode[] = [
    <p key="p1">Hi, I'm Alex. I build full-stack software where beautiful design meets thoughtful engineering. I started wireframing software at age four (yes, really), and that early obsession turned into a lifelong pursuit of creating tools people actually enjoy using.</p>,
    <p key="p2">At 17, I co-founded a CS education startup that reached over a million students across Latin America. It taught me how to move fast, build inclusive tech, and ship meaningful software with real-world impact.</p>,
    <p key="p3">Today, I'm engineering GPS-integrated, 360° video platforms at <a href="https://opticsystems.io" target="_blank" rel="noopener noreferrer" aria-label="Optic Systems (opens in a new tab)" title="Opens Optic Systems website in a new tab">Optic Systems</a>, helping property managers and municipalities visualize and manage sites remotely. I’m focused on crafting digital experiences that are elegant, accessible, and genuinely useful.</p>,
  ];

  return (
    <main aria-label="Introduction">
      <div className="intro-section">
        {introText}
      </div>
    </main>
  );
};

export default IntroSection;
