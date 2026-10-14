'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import CurrentYear from '@/components/current-year';
import { deities as deityCatalog } from '@/data/deities';
import { scriptures as scriptureCatalog } from '@/data/scriptures';
import { siteConfig } from '@/lib/site-config';
import { translations, type Locale } from '@/messages/translations';

type HomePageProps = {
  locale: Locale;
};

const festivalLabels: Record<Locale, string> = {
  bn: 'উৎসব',
  en: 'Festivals',
  hi: 'त्योहार',
};

const searchLabels: Record<Locale, string> = {
  bn: 'সার্চ',
  en: 'Search',
  hi: 'खोजें',
};

const calendarDescriptions: Record<Locale, string> = {
  bn: 'পঞ্জিকা দেখুন, বিভিন্ন হিন্দু উৎসব সম্পর্কে জানুন এবং ধর্মীয় ঐতিহ্য অন্বেষণ করুন।',
  en: 'Explore the Panchang, discover Hindu festivals, and learn about religious traditions.',
  hi: 'पंचांग देखें, हिंदू त्योहारों के बारे में जानें और धार्मिक परंपराओं को समझें।',
};

const calendarNotes: Record<Locale, string> = {
  bn: 'নির্দিষ্ট বছরের উৎসবের তারিখ প্রকাশের আগে নির্ভরযোগ্য পঞ্জিকা দিয়ে যাচাই করা প্রয়োজন।',
  en: 'Specific festival dates should be verified against a reliable Panchang for the relevant year and location.',
  hi: 'किसी विशेष वर्ष की त्योहार तिथि प्रकाशित करने से पहले संबंधित स्थान के विश्वसनीय पंचांग से पुष्टि करें।',
};

export default function HomePage({ locale }: HomePageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[locale];

  useEffect(() => {
    const language = siteConfig.locales.find(item => item.code === locale);

    document.documentElement.lang = language?.htmlLang ?? locale;
  }, [locale]);

  return (
    <main>
      {/* Announcement */}
      <div className="announcement">
        <span className="announcement-dot" />
        <span>{t.announcement}</span>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href={`/${locale}`} aria-label="Dharma Gyan home">
            <span className="brand-mark">ॐ</span>

            <span className="brand-copy">
              <strong>Dharma Gyan</strong>
              <small>Knowledge • Tradition • Discovery</small>
            </span>
          </Link>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(current => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
            aria-label="Main navigation"
          >
            <a href="#scriptures" onClick={() => setMenuOpen(false)}>
              {t.nav.scriptures}
            </a>

            <a href="#deities" onClick={() => setMenuOpen(false)}>
              {t.nav.deities}
            </a>

            <Link href={`/${locale}/panchang`} onClick={() => setMenuOpen(false)}>
              {t.nav.calendar}
            </Link>

            <Link href={`/${locale}/festivals`} onClick={() => setMenuOpen(false)}>
              {festivalLabels[locale]}
            </Link>

            <Link href={`/${locale}/search`} onClick={() => setMenuOpen(false)}>
              {searchLabels[locale]}
            </Link>

            <a href="#learning" onClick={() => setMenuOpen(false)}>
              {t.nav.learning}
            </a>
          </nav>

          <div className="header-right">
            <nav className="language-switch" aria-label="Choose website language">
              {siteConfig.locales.map(language => (
                <Link
                  key={language.code}
                  href={`/${language.code}`}
                  className={locale === language.code ? 'language-active' : ''}
                  aria-current={locale === language.code ? 'page' : undefined}
                  lang={language.htmlLang}
                  onClick={() => setMenuOpen(false)}
                >
                  {language.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section" id="top">
        <div className="hero-background-glow" />

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-symbol">✦</span>
              {t.heroEyebrow}
            </div>

            <h1>
              {t.heroTitle1}
              <span className="hero-title-accent">{t.heroTitle2}</span>
            </h1>

            <p className="hero-description">{t.heroDescription}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#scriptures">
                {t.exploreButton}
                <span aria-hidden="true">↗</span>
              </a>

              <Link className="button button-secondary" href={`/${locale}/scriptures`}>
                <span className="play-icon" aria-hidden="true">
                  ▶
                </span>
                {t.scripturesButton}
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-line" />
              <span>{t.visualDescription}</span>
            </div>
          </div>

          {/* Decorative mandala */}
          <div className="hero-art" aria-label={t.visualTitle}>
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />

            <div className="mandala">
              <div className="mandala-ring mandala-ring-one" />
              <div className="mandala-ring mandala-ring-two" />
              <div className="mandala-ring mandala-ring-three" />

              <div className="mandala-petal petal-one" />
              <div className="mandala-petal petal-two" />
              <div className="mandala-petal petal-three" />
              <div className="mandala-petal petal-four" />
              <div className="mandala-petal petal-five" />
              <div className="mandala-petal petal-six" />

              <div className="mandala-center">
                <span className="om-symbol">ॐ</span>
              </div>
            </div>

            <div className="art-caption">
              <span className="caption-line" />
              <div>
                <span className="art-caption-label">{t.visualLabel}</span>
                <strong>{t.visualTitle}</strong>
              </div>
            </div>

            <div className="floating-chip chip-top">
              <span className="chip-icon">✧</span>
              <span>{t.chipTop}</span>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-status" />
              <span>{t.chipBottom}</span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="container">
          <div className="stats-strip">
            {t.stats.map(stat => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture library */}
      <section className="section section-library" id="scriptures">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-eyebrow">{t.libraryEyebrow}</div>
              <h2>{t.libraryTitle}</h2>
              <p>{t.libraryDescription}</p>
            </div>

            <Link className="text-link" href={`/${locale}/scriptures`}>
              {t.readMore}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="scripture-grid">
            {t.scriptures.map((item, index) => {
              const scripture = scriptureCatalog[index];

              const href = scripture
                ? `/${locale}/scriptures/${scripture.slug}`
                : `/${locale}/scriptures`;

              return (
                <Link className="scripture-card" href={href} key={scripture?.slug ?? item.title}>
                  <div className="card-topline">
                    <span className={`scripture-icon icon-${index + 1}`}>{item.icon}</span>

                    <span className="card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <span className="card-category">{item.category}</span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="card-footer">
                    <span>{t.readMore}</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deity profiles */}
      <section className="section section-divine" id="deities">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <div>
              <div className="section-eyebrow">{t.divineEyebrow}</div>
              <h2>{t.divineTitle}</h2>
              <p>{t.divineDescription}</p>
            </div>
          </div>

          <div className="deity-grid">
            {t.divineCards.map((deity, index) => {
              const deityRecord = deityCatalog[index];

              const href = deityRecord
                ? `/${locale}/deities/${deityRecord.slug}`
                : `/${locale}/deities`;

              return (
                <Link
                  className={`deity-card deity-${index + 1}`}
                  href={href}
                  key={deityRecord?.slug ?? deity.title}
                  style={{ display: 'block' }}
                >
                  <div className="deity-glow" />

                  <div className="deity-art">
                    <span>{deity.icon}</span>
                  </div>

                  <div className="deity-content">
                    <span className="deity-tag">{deity.tag}</span>
                    <h3>{deity.title}</h3>
                    <p>{deity.description}</p>

                    <span className="deity-link">
                      {t.readMore}
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning paths */}
      <section className="section section-learning" id="learning">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-eyebrow">{t.learningEyebrow}</div>
              <h2>{t.learningTitle}</h2>
              <p>{t.learningDescription}</p>
            </div>
          </div>

          <div className="learning-grid">
            {t.learningCards.map(item => (
              <article className="learning-card" key={item.number}>
                <span className="learning-number">{item.number}</span>

                <div className="learning-icon" aria-hidden="true">
                  {item.number === '01' ? '✧' : item.number === '02' ? '▤' : '◈'}
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span className="learning-bottom-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Panchang and festivals */}
      <section className="section section-calendar" id="calendar">
        <div className="container">
          <div className="calendar-panel">
            <div className="calendar-decoration" aria-hidden="true">
              <span className="calendar-sun" />
              <span className="calendar-orbit calendar-orbit-one" />
              <span className="calendar-orbit calendar-orbit-two" />
              <span className="calendar-om">ॐ</span>
            </div>

            <div className="calendar-content">
              <div className="section-eyebrow">{t.calendarEyebrow}</div>

              <h2>{t.calendarTitle}</h2>
              <p>{calendarDescriptions[locale]}</p>

              <div className="hero-actions">
                <Link className="button button-light" href={`/${locale}/panchang`}>
                  {t.nav.calendar}
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link className="button button-light" href={`/${locale}/festivals`}>
                  {festivalLabels[locale]}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <small>{calendarNotes[locale]}</small>
            </div>
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="section section-quote">
        <div className="container">
          <div className="quote-card">
            <div className="quote-mark" aria-hidden="true">
              “
            </div>

            <div className="section-eyebrow">{t.quoteEyebrow}</div>

            <h2>{t.quoteTitle}</h2>
            <p>{t.quoteDescription}</p>
            <span className="quote-divider" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand-block">
              <Link className="brand footer-brand" href={`/${locale}`}>
                <span className="brand-mark">ॐ</span>

                <span className="brand-copy">
                  <strong>Dharma Gyan</strong>
                  <small>Knowledge • Tradition • Discovery</small>
                </span>
              </Link>

              <p>{t.footerDescription}</p>
            </div>

            <div className="footer-column">
              <h3>{t.footerExplore}</h3>

              <Link href={`/${locale}/scriptures`}>{t.nav.scriptures}</Link>

              <Link href={`/${locale}/deities`}>{t.nav.deities}</Link>

              <Link href={`/${locale}/panchang`}>{t.nav.calendar}</Link>

              <Link href={`/${locale}/festivals`}>{festivalLabels[locale]}</Link>

              <Link href={`/${locale}/search`}>{searchLabels[locale]}</Link>

              <Link href={`/${locale}#learning`}>{t.nav.learning}</Link>
            </div>

            <div className="footer-column footer-about">
              <h3>{t.footerAbout}</h3>
              <p>{t.footerAboutText}</p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © <CurrentYear /> Dharma Gyan. {t.footerCopyright}.
            </span>

            <span>{t.footerDisclaimer}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
