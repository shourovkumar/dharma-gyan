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
    library: string;
  }
> = {
  bn: {
    home: "হোম",
    scriptures: "শাস্ত্রগ্রন্থ",
    deities: "দেব-দেবী",
    calendar: "পঞ্জিকা",
    learning: "শেখার পথ",
    library: "শাস্ত্রের সংগ্রহে ফিরুন",
  },
  en: {
    home: "Home",
    scriptures: "Scriptures",
    deities: "Deities",
    calendar: "Panchang",
    learning: "Learning",
    library: "Back to scripture library",
  },
  hi: {
    home: "होम",
    scriptures: "धर्मग्रंथ",
    deities: "देवी-देवता",
    calendar: "पंचांग",
    learning: "सीखने के मार्ग",
    library: "धर्मग्रंथ संग्रह पर लौटें",
  },
};

export default function ScriptureNavigation({
  locale,
  currentPath,
}: Props) {
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
          <Link href={`/${locale}`}>{t.home}</Link>

          <Link
            href={`/${locale}/scriptures`}
            aria-current={
              currentPath === "/scriptures" ? "page" : undefined
            }
          >
            {t.scriptures}
          </Link>

          <Link href={`/${locale}#deities`}>
            {t.deities}
          </Link>

          <Link href={`/${locale}#calendar`}>
            {t.calendar}
          </Link>

          <Link href={`/${locale}#learning`}>
            {t.learning}
          </Link>
        </nav>

        <div
          className="sg-language-switch"
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
        </div>
      </div>
    </header>
  );
}
