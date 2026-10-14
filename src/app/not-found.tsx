import { siteConfig } from '@/lib/site-config';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Dharma Gyan',
  description: 'The requested page could not be found on Dharma Gyan.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        background: 'radial-gradient(ellipse at top, #31230f 0%, #111827 42%, #080c14 100%)',
        color: '#f8fafc',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <section style={{ width: '100%', maxWidth: '620px' }}>
        <div
          aria-hidden="true"
          style={{
            fontSize: '56px',
            marginBottom: '16px',
          }}
        >
          🪔
        </div>

        <p
          style={{
            color: '#fbbf24',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '4px',
            marginBottom: '12px',
          }}
        >
          DHARMA GYAN
        </p>

        <h1
          style={{
            fontSize: 'clamp(76px, 18vw, 132px)',
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: '-5px',
            margin: '0 0 20px',
            background: 'linear-gradient(135deg, #fde68a, #f59e0b)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: 'clamp(23px, 5vw, 34px)',
            fontWeight: 700,
            marginBottom: '14px',
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: '16px',
            lineHeight: 1.8,
            margin: '0 auto 28px',
            maxWidth: '480px',
          }}
        >
          The page you are looking for may have been moved, removed, or may never have existed.
          Return home and continue exploring Hindu scriptures, deities, and traditions.
        </p>

        <Link
          href={`/${siteConfig.defaultLocale}`}
          style={{
            display: 'inline-block',
            padding: '13px 24px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            color: '#111827',
            fontSize: '15px',
            fontWeight: 800,
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(245, 158, 11, 0.18)',
          }}
        >
          ← Back to Home
        </Link>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '30px',
          }}
        >
          {siteConfig.locales.map(locale => (
            <Link
              key={locale.code}
              href={`/${locale.code}`}
              style={{
                color: '#e2e8f0',
                border: '1px solid #475569',
                borderRadius: '999px',
                padding: '9px 16px',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              {locale.label}
            </Link>
          ))}
        </div>

        <p
          style={{
            color: '#64748b',
            fontSize: '12px',
            marginTop: '44px',
          }}
        >
          Discover knowledge. Explore Dharma.
        </p>
      </section>
    </main>
  );
}
