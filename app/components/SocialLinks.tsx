'use client';

import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import ResumeIcon from './icons/ResumeIcon';

interface SocialLink {
  type: 'linkedin' | 'github' | 'resume';
  url?: string;
  href?: string;
  download?: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links = [] }) => {
  const iconMap = {
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    resume: ResumeIcon
  };

  // If links is undefined or empty, return null or an empty div
  if (!links || links.length === 0) {
    return null; // or return <div className="author__elsewhere"></div>;
  }

  return (
    <div className="author__elsewhere">
      {links.map((link) => {
        const { type, url, href, download } = link;
        const IconComponent = iconMap[type];
        const linkUrl = url || href;  // Use whichever one exists
        
        // Skip rendering if no URL is provided
        if (!linkUrl) return null;
        
        return (
          <a 
            key={type} 
            href={linkUrl}
            tabIndex={0}
            {...(download && { download })}  // Only add download attribute if it exists
            aria-label={`Visit ${type} profile`}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
