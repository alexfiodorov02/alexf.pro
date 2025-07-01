import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alexander Fiodorov-Miller',
  description: 'Personal portfolio website',
  keywords: 'full stack developer, software engineer, web development, React, TypeScript',
  robots: 'index, follow',
  charSet: 'utf-8',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexf.pro',
    siteName: 'Alexander Fiodorov-Miller',
    title: 'Alexander Fiodorov-Miller',
    description: 'Software engineer portfolio website',
    images: [{
      url: '/assets/Alex2.jpg',
      width: 1200,
      height: 630,
      alt: 'Alexander Fiodorov-Miller',
      type: 'image/jpeg',
    }],
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
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
