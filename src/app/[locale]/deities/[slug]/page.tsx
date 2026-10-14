import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import DeityNavigation from "@/components/deity-navigation";
import { deitySlugs, getDeityBySlug } from "@/data/deities";
import {
  isValidLocale,
  siteConfig,
  type Locale,
} from "@/lib/site-config";
import CurrentYear from '../../../../components/current-year';

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const labels: Record<
  Locale,
  {
    home: string;
    listing: string;
    introduction: string;
    symbols: string;
    relationships: string;
    traditions: string;
    stories: string;
    noteTitle: string;
    readerTitle: string;
    readerNote: string;
    back: string;
  }
> = {
  bn: {
    home: "হোম",
    listing: "দেব-দেবী",
    introduction: "পরিচিতি",
    symbols: "প্রতীক ও অর্থ",
    relationships: "পরিবার ও সম্পর্ক",
    traditions: "উপাসনা ও ঐতিহ্য",
    stories: "উল্লেখযোগ্য কাহিনি",
    noteTitle: "ব্যাখ্যার পার্থক্য",
    readerTitle: "পাঠকের জন্য",
    readerNote:
      "এই profile একটি প্রাথমিক পরিচিতি। আরও গভীর অধ্যয়নের জন্য সংশ্লিষ্ট মূল গ্রন্থ, নির্ভরযোগ্য অনুবাদ এবং ভিন্ন ঐতিহ্যের ব্যাখ্যা যাচাই করে পড়ুন।",
    back: "সব দেব-দেবী দেখুন",
  },
  en: {
    home: "Home",
    listing: "Deities",
    introduction: "Introduction",
    symbols: "Symbols and meanings",
    relationships: "Family and relationships",
    traditions: "Worship and traditions",
    stories: "Notable stories",
    noteTitle: "Interpretive differences",
    readerTitle: "Reader's note",
    readerNote:
      "This profile is an introduction. For deeper study, consult relevant primary texts, reliable translations, and interpretations from different traditions.",
    back: "Explore all deities",
  },
  hi: {
    home: "होम",
    listing: "देवी-देवता",
    introduction: "परिचय",
    symbols: "प्रतीक और अर्थ",
    relationships: "परिवार और संबंध",
    traditions: "उपासना और परंपराएँ",
    stories: "प्रमुख कथाएँ",
    noteTitle: "व्याख्याओं में अंतर",
    readerTitle: "पाठकों के लिए",
    readerNote:
      "यह प्रोफ़ाइल एक प्रारंभिक परिचय है। गहन अध्ययन के लिए संबंधित मूल ग्रंथों, विश्वसनीय अनुवादों और विभिन्न परंपराओं की व्याख्याओं को देखें।",
    back: "सभी देवी-देवताओं को देखें",
  },
};

/*
 * Return all locale + deity combinations.
 * This provides non-empty static params for Next.js Cache Components.
 */
export function generateStaticParams() {
  return siteConfig.locales.flatMap((language) =>
    deitySlugs.map((slug) => ({
      locale: language.code,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const deity = getDeityBySlug(slug);

  if (!deity) {
    notFound();
  }

  const item = deity.content[locale];

  return {
    title: item.name,
    description: item.description,
    alternates: {
      languages: {
        "bn-BD": `/bn/deities/${slug}`,
        en: `/en/deities/${slug}`,
        "hi-IN": `/hi/deities/${slug}`,
      },
    },
    openGraph: {
      title: `${item.name} | Dharma Gyan`,
      description: item.description,
      type: "article",
    },
  };
}

export default async function DeityDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const deity = getDeityBySlug(slug);

  if (!deity) {
    notFound();
  }

  const item = deity.content[locale];
  const text = labels[locale];

  return (
    <>
      <DeityNavigation locale={locale} currentPath={`/deities/${deity.slug}`} />

      <main className="dg-page">
        <div className="dg-container">
          <nav className="dg-breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{text.home}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}/deities`}>{text.listing}</Link>
            <span aria-hidden="true">/</span>
            <span>{item.name}</span>
          </nav>

          <article>
            <header className="dg-profile-hero">
              <div className="dg-profile-symbol" aria-hidden="true">
                {deity.icon}
              </div>

              <div className="dg-eyebrow">
                <span aria-hidden="true">✦</span>
                {item.category}
              </div>

              <h1>{item.name}</h1>

              <p className="dg-profile-description">{item.description}</p>
            </header>

            <div className="dg-profile-layout">
              <div>
                <section className="dg-content-panel">
                  <h2>{text.introduction}</h2>
                  <p>{item.introduction}</p>
                </section>

                <section className="dg-content-panel">
                  <h2>{text.symbols}</h2>

                  <ol className="dg-info-list">
                    {item.symbols.map((symbol, index) => (
                      <li key={symbol}>
                        <span className="dg-info-number">{String(index + 1).padStart(2, '0')}</span>
                        <p>{symbol}</p>
                      </li>
                    ))}
                  </ol>

                  <h2 className="dg-subheading">{text.stories}</h2>

                  <ol className="dg-info-list">
                    {item.stories.map((story, index) => (
                      <li key={story}>
                        <span className="dg-info-number">{String(index + 1).padStart(2, '0')}</span>
                        <p>{story}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="dg-content-panel">
                  <h2>{text.traditions}</h2>

                  <ol className="dg-info-list">
                    {item.traditions.map((tradition, index) => (
                      <li key={tradition}>
                        <span className="dg-info-number">{String(index + 1).padStart(2, '0')}</span>
                        <p>{tradition}</p>
                      </li>
                    ))}
                  </ol>

                  <Link className="dg-back-link" href={`/${locale}/deities`}>
                    <span aria-hidden="true">←</span>
                    {text.back}
                  </Link>
                </section>
              </div>

              <aside>
                <section className="dg-sidebar-panel">
                  <h2>{text.relationships}</h2>
                  <p>{item.relationships}</p>
                </section>

                <section className="dg-sidebar-panel dg-note-panel">
                  <h2>{text.noteTitle}</h2>
                  <p>{item.interpretationNote}</p>
                </section>

                <section className="dg-sidebar-panel">
                  <h2>{text.readerTitle}</h2>
                  <p>{text.readerNote}</p>
                </section>
              </aside>
            </div>
          </article>
        </div>
      </main>

      <footer className="dg-footer">
        <div className="dg-container dg-footer-inner">
          <span>
            © <CurrentYear /> Dharma Gyan
          </span>
          <Link href={`/${locale}/deities`}>{text.listing}</Link>
        </div>
      </footer>
    </>
  );
}
