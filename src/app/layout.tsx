import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './deities.css';
import './globals.css';
import './hero-art.css';
import './language-switch.css';
import './panchang.css';
import './scriptures.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Dharma Gyan | Hindu Knowledge Library',
    template: '%s | Dharma Gyan',
  },

  description:
    'Explore Hindu scriptures, philosophy, deities, festivals, and traditions in a multilingual knowledge library.',

  keywords: [
    'Hinduism',
    'Hindu scriptures',
    'Bhagavad Gita',
    'Ramayana',
    'Mahabharata',
    'Vedas',
    'Hindu deities',
    'Hindu festivals',
    'Panchang',
    'Sanatana Dharma',
  ],

  applicationName: 'Dharma Gyan',

  openGraph: {
    title: 'Dharma Gyan | Hindu Knowledge Library',
    description: 'Discover Hindu scriptures, philosophy, deities, festivals, and traditions.',
    siteName: 'Dharma Gyan',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
