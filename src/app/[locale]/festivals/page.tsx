import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FestivalNavigation from "@/components/festival-navigation";
import { festivals } from "@/data/festivals";
import {
  isValidLocale,
  siteConfig,
  type Locale,
} from "@/lib/site-config";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const copy: Record<
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
    headingList: string;
    footer: string;
  }
> = {
  bn: {
    title: "হিন্দু উৎসব",
    description:
      "হিন্দুধর্মের বিভিন্ন উৎসব, প্রচলিত তিথি, অঞ্চল ও সাংস্কৃতিক ঐতিহ্য সম্পর্কে জানুন।",
    eyebrow: "উৎসব ও ঐতিহ্য",
    heading: "উৎসবের বৈচিত্র্যময় জগৎ",
    intro:
      "বিভিন্ন উৎসবের তাৎপর্য, প্রচলিত সময়, আঞ্চলিক রীতি ও পূজার ঐতিহ্য সম্পর্কে জানুন।",
    count: "টি উৎসবের পরিচিতি",
    readMore: "উৎসব সম্পর্কে জানুন",
    home: "হোম",
    noteTitle: "তারিখ সম্পর্কে গুরুত্বপূর্ণ তথ্য",
    note:
      "এখানে প্রচলিত তিথি ও সাধারণ ঐতিহ্য দেওয়া হয়েছে, নির্দিষ্ট ইংরেজি তারিখ নয়। কোনো বছরের নির্ভুল উৎসবের তারিখ প্রকাশের আগে স্থানভিত্তিক পঞ্জিকা বা নির্ভরযোগ্য উৎস দিয়ে যাচাই করতে হবে।",
    headingList: "উৎসবের তালিকা",
    footer: "বিভিন্ন হিন্দু ঐতিহ্য জানার জন্য তৈরি।",
  },
  en: {
    title: "Hindu festivals",
    description:
      "Explore Hindu festivals, traditional lunar dates, regions, and cultural traditions.",
    eyebrow: "Festivals & traditions",
    heading: "Explore a diverse world of festivals",
    intro:
      "Learn about the meaning, traditional timing, regional customs, and observances associated with different festivals.",
    count: "festival introductions",
    readMore: "Explore festival",
    home: "Home",
    noteTitle: "Important information about dates",
    note:
      "This directory describes traditional timing, not exact Gregorian dates. Before publishing a festival date for a particular year, verify it against a reliable calendar or Panchang for the relevant location.",
    headingList: "Festival directory",
    footer: "Created to explore diverse Hindu traditions.",
  },
  hi: {
    title: "हिंदू त्योहार",
    description:
      "हिंदू त्योहारों, पारंपरिक तिथियों, क्षेत्रों और सांस्कृतिक परंपराओं को जानें।",
    eyebrow: "उत्सव और परंपराएँ",
    heading: "त्योहारों की विविध दुनिया",
    intro:
      "विभिन्न त्योहारों के महत्व, पारंपरिक समय, क्षेत्रीय रीति-रिवाजों और पूजा परंपराओं को जानें।",
    count: "त्योहारों का परिचय",
    readMore: "त्योहार के बारे में जानें",
    home: "होम",
    noteTitle: "तिथियों के बारे में महत्वपूर्ण जानकारी",
    note:
      "यहाँ पारंपरिक तिथियों और सामान्य परंपराओं का परिचय दिया गया है, निश्चित अंग्रेज़ी तारीखें नहीं। किसी वर्ष की त्योहार तिथि प्रकाशित करने से पहले संबंधित स्थान के विश्वसनीय पंचांग से उसकी पुष्टि करें।",
    headingList: "त्योहारों की सूची",
    footer: "विभिन्न हिंदू परंपराओं की जानकारी के लिए बनाया गया।",
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

  const text = copy[locale];

  return {
    title: text.title,
    description: text.description,
    alternates: {
      languages: {
        "bn-BD": "/bn/festivals",
        en: "/en/festivals",
        "hi-IN": "/hi/festivals",
      },
    },
  };
}

export default async function FestivalsPage({
  params,
}: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const text = copy[locale];

  return (
    <>
      <FestivalNavigation
        locale={locale}
        currentPath="/festivals"
      />

      <main className="sg-page">
        <div className="sg-container">
          <nav className="sg-breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{text.home}</Link>
            <span aria-hidden="true">/</span>
            <span>{text.title}</span>
          </nav>

          <section className="sg-page-hero">
            <div className="sg-eyebrow">
              <span aria-hidden="true">✦</span>
              {text.eyebrow}
            </div>

            <h1>{text.heading}</h1>
            <p>{text.intro}</p>

            <div className="sg-count">
              {festivals.length} {text.count}
            </div>
          </section>

          <section aria-labelledby="festival-list-heading">
            <div className="sg-grid-heading">
              <div>
                <h2 id="festival-list-heading">
                  {text.headingList}
                </h2>
                <p>{text.description}</p>
              </div>
            </div>

            <div className="sg-scripture-grid">
              {festivals.map((festival) => {
                const item = festival.content[locale];

                return (
                  <Link
                    className="sg-scripture-card"
                    href={`/${locale}/festivals/${festival.slug}`}
                    key={festival.slug}
                  >
                    <div className="sg-card-top">
                      <span className="sg-card-icon">
                        {festival.icon}
                      </span>

                      <span
                        className="sg-card-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>

                    <span className="sg-card-category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="sg-card-footer">
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

      <footer className="sg-footer">
        <div className="sg-container sg-footer-inner">
          <span>Dharma Gyan</span>
          <span>{text.footer}</span>
        </div>
      </footer>
    </>
  );
}
