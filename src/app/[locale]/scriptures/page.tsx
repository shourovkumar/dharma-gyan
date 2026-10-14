import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ScriptureNavigation from "@/components/scripture-navigation";
import {
  scriptures,
} from "@/data/scriptures";
import {
  isValidLocale,
  type Locale,
} from "@/lib/site-config";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const pageContent: Record<
  Locale,
  {
    title: string;
    description: string;
    heading: string;
    headingDescription: string;
    countSuffix: string;
    readMore: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    noteTitle: string;
    note: string;
    footer: string;
  }
> = {
  bn: {
    title: "শাস্ত্রগ্রন্থ",
    description:
      "বেদ, ভগবদ্গীতা, রামায়ণ ও মহাভারত সম্পর্কে জানুন।",
    heading: "হিন্দু শাস্ত্রের জ্ঞানভাণ্ডার",
    headingDescription:
      "বিভিন্ন গ্রন্থের ভূমিকা, গুরুত্বপূর্ণ বিষয় ও ব্যাখ্যাসংক্রান্ত নোট এক জায়গায় পড়ুন।",
    countSuffix: "টি গ্রন্থের পরিচিতি",
    readMore: "গ্রন্থটি সম্পর্কে জানুন",
    breadcrumbHome: "হোম",
    breadcrumbCurrent: "শাস্ত্রগ্রন্থ",
    noteTitle: "পাঠ ও অনুবাদ সম্পর্কে",
    note:
      "এই Library-তে আপাতত গ্রন্থের পরিচিতি ও বিষয়ভিত্তিক সারাংশ রয়েছে। মূল শ্লোক, পূর্ণ অনুবাদ, অধ্যায় এবং সূত্র পরবর্তী ধাপে যাচাই করে যোগ করা হবে। বিভিন্ন ঐতিহ্যে ব্যাখ্যা ভিন্ন হতে পারে।",
    footer: "শাস্ত্রগ্রন্থের পরিচিতি ও শেখার জন্য তৈরি।",
  },
  en: {
    title: "Scriptures",
    description:
      "Discover the Vedas, Bhagavad Gita, Ramayana, and Mahabharata.",
    heading: "A library of Hindu scriptures",
    headingDescription:
      "Explore introductions, key ideas, and interpretation notes for important texts.",
    countSuffix: "scripture introductions",
    readMore: "Explore this scripture",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Scriptures",
    noteTitle: "About texts and translations",
    note:
      "This library currently contains introductions and topic summaries. Original verses, complete translations, chapters, and references will be reviewed and added in later steps. Interpretations can differ across traditions.",
    footer: "Created to support learning about Hindu scriptures.",
  },
  hi: {
    title: "धर्मग्रंथ",
    description:
      "वेद, भगवद्गीता, रामायण और महाभारत के बारे में जानें।",
    heading: "हिंदू धर्मग्रंथों का ज्ञान भंडार",
    headingDescription:
      "प्रमुख ग्रंथों की भूमिका, महत्वपूर्ण विचार और व्याख्या संबंधी टिप्पणियाँ पढ़ें।",
    countSuffix: "ग्रंथों का परिचय",
    readMore: "इस ग्रंथ के बारे में जानें",
    breadcrumbHome: "होम",
    breadcrumbCurrent: "धर्मग्रंथ",
    noteTitle: "पाठ और अनुवाद के बारे में",
    note:
      "इस Library में अभी ग्रंथों के परिचय और विषयवार सारांश दिए गए हैं। मूल श्लोक, पूर्ण अनुवाद, अध्याय और संदर्भों की जाँच करके उन्हें अगले चरणों में जोड़ा जाएगा। विभिन्न परंपराओं में व्याख्याएँ अलग हो सकती हैं।",
    footer: "हिंदू धर्मग्रंथों के अध्ययन में सहायता के लिए बनाया गया।",
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const copy = pageContent[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      languages: {
        "bn-BD": "/bn/scriptures",
        en: "/en/scriptures",
        "hi-IN": "/hi/scriptures",
      },
    },
  };
}

export default async function ScripturesPage({
  params,
}: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const copy = pageContent[locale];

  return (
    <>
      <ScriptureNavigation
        locale={locale}
        currentPath="/scriptures"
      />

      <main className="sg-page">
        <div className="sg-container">
          <nav className="sg-breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>
              {copy.breadcrumbHome}
            </Link>

            <span aria-hidden="true">/</span>

            <span>{copy.breadcrumbCurrent}</span>
          </nav>

          <section className="sg-page-hero">
            <div className="sg-eyebrow">
              <span aria-hidden="true">✦</span>
              {copy.breadcrumbCurrent}
            </div>

            <h1>{copy.heading}</h1>

            <p>{copy.headingDescription}</p>

            <div className="sg-count">
              <span aria-hidden="true">▤</span>
              {scriptures.length} {copy.countSuffix}
            </div>
          </section>

          <section aria-labelledby="scripture-grid-title">
            <div className="sg-grid-heading">
              <div>
                <h2 id="scripture-grid-title">
                  {copy.title}
                </h2>

                <p>{copy.description}</p>
              </div>
            </div>

            <div className="sg-scripture-grid">
              {scriptures.map((scripture) => {
                const item = scripture.content[locale];

                return (
                  <Link
                    className="sg-scripture-card"
                    href={`/${locale}/scriptures/${scripture.slug}`}
                    key={scripture.slug}
                  >
                    <div className="sg-card-top">
                      <span className="sg-card-icon">
                        {scripture.icon}
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
                      <span>{copy.readMore}</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          <aside className="sg-editorial-note">
            <strong>{copy.noteTitle}: </strong>
            {copy.note}
          </aside>
        </div>
      </main>

      <footer className="sg-footer">
        <div className="sg-container sg-footer-inner">
          <span>
            © {new Date().getFullYear()} Dharma Gyan
          </span>

          <span>{copy.footer}</span>
        </div>
      </footer>
    </>
  );
}
