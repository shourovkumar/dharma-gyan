import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import HomePage from '@/components/home-page';
import type { Locale } from '@/lib/site-config';
import { isValidLocale, siteConfig } from '@/lib/site-config';

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const localeMetadata: Record<
  Locale,
  {
    title: string;
    description: string;
    openGraphLocale: string;
  }
> = {
  bn: {
    title: 'ধর্মজ্ঞান | হিন্দুধর্ম ও শাস্ত্রের জ্ঞানভাণ্ডার',
    description: 'হিন্দুধর্মের শাস্ত্র, গীতা, রামায়ণ, মহাভারত, দেব-দেবী ও ঐতিহ্য সম্পর্কে জানুন।',
    openGraphLocale: 'bn_BD',
  },
  en: {
    title: 'Dharma Gyan | Hindu Knowledge Library',
    description: 'Explore Hindu scriptures, philosophy, deities, festivals, and traditions.',
    openGraphLocale: 'en_US',
  },
  hi: {
    title: 'धर्म ज्ञान | हिंदू ज्ञान और धर्मग्रंथ',
    description: 'हिंदू धर्मग्रंथों, गीता, रामायण, महाभारत, देवी-देवताओं और परंपराओं को जानें।',
    openGraphLocale: 'hi_IN',
  },
};

export function generateStaticParams() {
  return siteConfig.locales.map(language => ({
    locale: language.code,
  }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const pageMeta = localeMetadata[locale];

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    alternates: {
      languages: {
        'bn-BD': '/bn',
        en: '/en',
        'hi-IN': '/hi',
      },
    },
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.name,
      type: 'website',
      locale: pageMeta.openGraphLocale,
    },
  };
}

function LocalePageFallback() {
  return (
    <main
      role="status"
      aria-live="polite"
      style={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
        padding: '32px 20px',
        background: '#080c14',
        color: '#f8fafc',
        textAlign: 'center',
      }}
    >
      <div>
        <div
          aria-hidden="true"
          style={{
            fontSize: '42px',
            marginBottom: '16px',
          }}
        >
          🪔
        </div>

        <p style={{ fontSize: '16px', margin: 0 }}>Dharma Gyan লোড হচ্ছে...</p>
      </div>
    </main>
  );
}

async function LocaleHome({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}

export default function LocalePage({ params }: LocalePageProps) {
  return (
    <Suspense fallback={<LocalePageFallback />}>
      <LocaleHome params={params} />
    </Suspense>
  );
}
