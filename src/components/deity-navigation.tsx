import { siteConfig, type Locale } from "@/lib/site-config";
import Link from "next/link";

type Props = {
  locale: Locale;
  currentPath: string;
};

const labels: Record<
  Locale,
  {
    home: string;
    scriptures: string;
    deities: string;
    calendar: string;
    learning: string;
    search: string;
  }
> = {
  bn: {
    home: "হোম",
    scriptures: "শাস্ত্রগ্রন্থ",
    deities: "দেব-দেবী",
    calendar: "পঞ্জিকা",
    learning: "শেখার পথ",
    search: "সার্চ",
  },
  en: {
    home: "Home",
    scriptures: "Scriptures",
    deities: "Deities",
    calendar: "Panchang",
    learning: "Learning",
    search: "Search",
  },
  hi: {
    home: "होम",
    scriptures: "धर्मग्रंथ",
    deities: "देवी-देवता",
    calendar: "पंचांग",
    learning: "सीखने के मार्ग",
    search: "खोजें",
  },
};

export default function DeityNavigation({
  locale,
  currentPath,
}: Props) {
  const t = labels[locale];

  return (
    <header className="dg-header">
      <div className="dg-header-inner">
        <Link className="dg-brand" href={`/${locale}`}>
          <span className="dg-brand-mark">ॐ</span>

          <span className="dg-brand-copy">
            <strong>Dharma Gyan</strong>
            <small>Knowledge • Tradition • Discovery</small>
          </span>
        </Link>

        <nav className="dg-nav" aria-label="Main navigation">
          <Link href={`/${locale}`}>
            {t.home}
          </Link>

          <Link href={`/${locale}/scriptures`}>
            {t.scriptures}
          </Link>

          <Link
            href={`/${locale}/deities`}
            aria-current={
              currentPath.startsWith("/deities")
                ? "page"
                : undefined
            }
          >
            {t.deities}
          </Link>

          <Link href={`/${locale}#calendar`}>
            {t.calendar}
          </Link>

          <Link href={`/${locale}#learning`}>
            {t.learning}
          </Link>

          <Link
            href={`/${locale}/search`}
            aria-current={
              currentPath.startsWith("/search")
                ? "page"
                : undefined
            }
          >
            {t.search}
          </Link>
        </nav>

        <nav
          className="dg-language-switch"
          aria-label="Choose website language"
        >
          {siteConfig.locales.map((language) => (
            <Link
              key={language.code}
              href={`/${language.code}${currentPath}`}
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
