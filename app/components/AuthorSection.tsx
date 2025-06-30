'use client';

import Image from 'next/image';
import SocialLinks from './SocialLinks';

const AuthorSection: React.FC = () => {
  const authorData = {
    name: "Alexander Fiodorov-Miller",
    website: "https://alexf.pro/",
    socialLinks: [
      { type: 'linkedin' as const, url: 'https://linkedin.com/in/alexfiodorov02' },
      { type: 'github' as const, url: 'https://github.com/alexfiodorov02' },
      { type: 'resume' as const, href: '/assets/resume.pdf', download: 'full_stack_dev_resume.pdf' }
    ]
  };

  return (
    <div className="author">
      <a className="author__logo" href={authorData.website}>
        <div>
          <Image 
            src="/assets/Alex2.jpg" 
            alt={authorData.name} 
            height={200}
            width={200}
            priority
          />
        </div>
      </a>
      <div className="author__site-text">
        <a href={authorData.website} className="author__site-title">
          {authorData.name}
        </a>
        <SocialLinks links={authorData.socialLinks} />
      </div>
    </div>
  );
};

export default AuthorSection;
