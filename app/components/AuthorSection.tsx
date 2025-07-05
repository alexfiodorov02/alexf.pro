'use client';

import Image from 'next/image';
import SocialLinks from './SocialLinks';
import type { FC } from 'react';

interface SocialLink {
  type: 'linkedin' | 'github' | 'resume';
  url?: string;
  href?: string;
  download?: string;
}

const authorData = {
  name: 'Alexander Fiodorov-Miller',
  website: 'https://alexf.pro/',
  socialLinks: [
    { type: 'linkedin', url: 'https://linkedin.com/in/alexfiodorov02' },
    { type: 'github', url: 'https://github.com/alexfiodorov02' },
    { type: 'resume', href: '/assets/resume.pdf', download: 'full_stack_dev_resume.pdf' },
  ] as SocialLink[],
};

const AuthorSection: FC = () => {
  return (
    <header className="author" aria-label="Author profile and links">
      <a
        className="author__logo"
        href={authorData.website}
        aria-label={`Visit ${authorData.name}'s personal website`}
      >
        <Image
          src="/assets/Alex2.webp"
          alt={`${authorData.name} — Full-stack software engineer`}
          width={200}
          height={200}
          priority
        />
      </a>
      <div className="author__site-text">
        <h1 className="author__site-title">{authorData.name}</h1>
        <SocialLinks links={authorData.socialLinks} />
      </div>
    </header>
  );
};

export default AuthorSection;
