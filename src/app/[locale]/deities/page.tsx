import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import DeityNavigation from "@/components/deity-navigation";
import { deities } from "@/data/deities";
import { isValidLocale, siteConfig, type Locale } from "@/lib/site-config";
import CurrentYear from '../../../components/current-year';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const pageText: Record<
  Locale,
  {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    intro: string;
    count: string;
    readMore: string;
    home: string;
    noteTitle: string;
    note: string;
    footer: string;
  }
> = {
  bn: {
    title: "দেব-দেবী",
    description: "হিন্দুধর্মের গুরুত্বপূর্ণ দেব-দেবী ও তাঁদের ঐতিহ্য সম্পর্কে জানুন।",
    eyebrow: "দেব-দেবীর পরিচয়",
    heading: "দিব্য ঐতিহ্যের জগৎ",
    intro:
      "বিভিন্ন দেব-দেবীর পরিচয়, প্রতীক, পরিবার-সম্পর্ক এবং তাঁদের সঙ্গে যুক্ত কাহিনি জানুন।",
    count: "টি প্রাথমিক profile",
    readMore: "বিস্তারিত পরিচয় দেখুন",
    home: "হোম",
    noteTitle: "ঐতিহ্য সম্পর্কে",
    note:
      "এখানে সাধারণ পরিচিতি দেওয়া হয়েছে। বিভিন্ন পুরাণ, দর্শন, সম্প্রদায় ও আঞ্চলিক ঐতিহ্যে কাহিনি এবং ব্যাখ্যা ভিন্ন হতে পারে।",
    footer: "জ্ঞান ও ঐতিহ্য অন্বেষণের জন্য তৈরি।",
  },
  en: {
    title: "Deities",
    description: "Discover important Hindu deities and their traditions.",
    eyebrow: "Meet the divine",
    heading: "Explore sacred traditions",
    intro:
      "Learn about deities, their symbols, family relationships, and stories associated with different traditions.",
    count: "starter profiles",
    readMore: "Explore profile",
    home: "Home",
    noteTitle: "About traditions",
    note:
      "These are introductory profiles. Stories and interpretations may vary among Puranas, philosophies, communities, and regional traditions.",
    footer: "Created to explore knowledge and tradition.",
  },
  hi: {
    title: "देवी-देवता",
    description: "प्रमुख हिंदू देवी-देवताओं और उनसे जुड़ी परंपराओं को जानें।",
    eyebrow: "देवी-देवताओं का परिचय",
    heading: "दिव्य परंपराओं की दुनिया",
    intro:
      "विभिन्न देवी-देवताओं, उनके प्रतीकों, पारिवारिक संबंधों और उनसे जुड़ी कथाओं को जानें।",
    count: "प्रारंभिक प्रोफ़ाइल",
    readMore: "विस्तृत परिचय देखें",
    home: "होम",
    noteTitle: "परंपराओं के बारे में",
    note:
      "यहाँ प्रारंभिक परिचय दिया गया है। विभिन्न पुराणों, दर्शनों, समुदायों और क्षेत्रीय परंपराओं में कथाएँ तथा व्याख्याएँ अलग हो सकती हैं।",
    footer: "ज्ञान और परंपराओं की खोज के लिए बनाया गया।",
  },
};

export function generateStaticParams() {
  return siteConfig.locales.map((language) => ({
    locale: language.code,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const text = pageText[locale];

  return {
    title: text.title,
    description: text.description,
    alternates: {
      languages: {
        "bn-BD": "/bn/deities",
        en: "/en/deities",
        "hi-IN": "/hi/deities",
      },
    },
  };
}

export default async function DeitiesPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const text = pageText[locale];

  return (
    <>
      <DeityNavigation locale={locale} currentPath="/deities" />

      <main className="dg-page">
        <div className="dg-container">
          <nav className="dg-breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{text.home}</Link>
            <span aria-hidden="true">/</span>
            <span>{text.title}</span>
          </nav>

          <section className="dg-listing-hero">
            <div className="dg-eyebrow">
              <span aria-hidden="true">✦</span>
              {text.eyebrow}
            </div>

            <h1>{text.heading}</h1>
            <p>{text.intro}</p>

            <div className="dg-count">
              <span aria-hidden="true">◈</span>
              {deities.length} {text.count}
            </div>
          </section>

          <section aria-labelledby="deity-list-heading">
            <div className="dg-section-heading">
              <div>
                <h2 id="deity-list-heading">{text.title}</h2>
                <p>{text.description}</p>
              </div>
            </div>

            <div className="dg-deity-grid">
              {deities.map(deity => {
                const item = deity.content[locale];

                return (
                  <Link
                    className="dg-deity-card"
                    href={`/${locale}/deities/${deity.slug}`}
                    key={deity.slug}
                  >
                    <div className="dg-deity-card-top">
                      <span className="dg-deity-icon">{deity.icon}</span>
                      <span className="dg-card-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>

                    <span className="dg-deity-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>

                    <div className="dg-card-footer">
                      <span>{text.readMore}</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          <aside className="sg-editorial-note">
            <strong>{text.noteTitle}: </strong>
            {text.note}
          </aside>
        </div>
      </main>

      <footer className="dg-footer">
        <div className="dg-container dg-footer-inner">
          <span>
            © <CurrentYear /> Dharma Gyan
          </span>{' '}
          <span>{text.footer}</span>
        </div>
      </footer>
    </>
  );
}
