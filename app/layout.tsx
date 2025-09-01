import './globals.css';
import './App.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Alexander Fiodorov-Miller',
  description:
    'Portfolio of Alexander Fiodorov-Miller — full-stack software engineer building tools at the intersection of design, accessibility, and real-world impact.',
  keywords:
    'Alexander Fiodorov-Miller, software engineer, full stack web developer, React TypeScript developer, inclusive tech, CS education startup, UX accessibility, web apps portfolio, JavaScript developer, GitHub projects',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://alexf.pro',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexf.pro',
    siteName: 'Alexander Fiodorov-Miller',
    title: 'Alexander Fiodorov-Miller',
    description:
      'Explore the work of Alexander Fiodorov-Miller — a software engineer blending thoughtful design, CS education roots, and full-stack expertise into impactful digital experiences.',
    images: [
      {
        url: '/assets/Alex2.webp',
        width: 500,
        height: 667,
        alt: 'Alexander Fiodorov-Miller',
        type: 'image/webp',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D1B2A" />
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Alexander Fiodorov-Miller',
            url: 'https://alexf.pro',
            image: 'https://alexf.pro/assets/Alex2.webp',
            sameAs: [
              'https://github.com/alexfiodorov02',
              'https://linkedin.com/in/alexfiodorov02',
            ],
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'University of Memphis',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Memphis',
              addressRegion: 'TN',
              addressCountry: 'US',
            },
            jobTitle: 'Full-Stack Software Engineer',
            knowsAbout: ['React', 'TypeScript', 'Accessibility', 'UX Design', 'Full-Stack Development'],
          })}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
