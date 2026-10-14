import Link from "next/link";

import {
  siteConfig,
  type Locale,
} from "@/lib/site-config";

type Props = {
  locale: Locale;
};

const labels: Record<
  Locale,
  {
    home: string;
    scriptures: string;
    deities: string;
    panchang: string;
    search: string;
  }
> = {
  bn: {
    home: "হোম",
    scriptures: "শাস্ত্রগ্রন্থ",
    deities: "দেব-দেবী",
    panchang: "পঞ্জিকা",
    search: "সার্চ",
  },
  en: {
    home: "Home",
    scriptures: "Scriptures",
    deities: "Deities",
    panchang: "Panchang",
    search: "Search",
  },
  hi: {
    home: "होम",
    scriptures: "धर्मग्रंथ",
    deities: "देवी-देवता",
    panchang: "पंचांग",
    search: "खोजें",
  },
};

export default function PanchangNavigation({ locale }: Props) {
  const t = labels[locale];

  return (
    <header className="sg-header">
      <div className="sg-header-inner">
        <Link className="sg-brand" href={`/${locale}`}>
          <span className="sg-brand-mark">ॐ</span>

          <span className="sg-brand-copy">
            <strong>Dharma Gyan</strong>
            <small>Knowledge • Tradition • Discovery</small>
          </span>
        </Link>

        <nav className="sg-nav" aria-label="Main navigation">
          <Link href={`/${locale}`}>
            {t.home}
          </Link>

          <Link href={`/${locale}/scriptures`}>
            {t.scriptures}
          </Link>

          <Link href={`/${locale}/deities`}>
            {t.deities}
          </Link>

          <Link
            href={`/${locale}/panchang`}
            aria-current="page"
          >
            {t.panchang}
          </Link>

          <Link href={`/${locale}/search`}>
            {t.search}
          </Link>
        </nav>

        <nav
          className="sg-language-switch"
          aria-label="Choose website language"
        >
          {siteConfig.locales.map((language) => (
            <Link
              key={language.code}
              href={`/${language.code}/panchang`}
              className={
                locale === language.code ? "is-active" : ""
              }
              aria-current={
                locale === language.code ? "page" : undefined
              }
              lang={language.htmlLang}
            >
              {language.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
