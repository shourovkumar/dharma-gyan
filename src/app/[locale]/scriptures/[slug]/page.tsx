import CurrentYear from "@/components/current-year";
import ScriptureNavigation from "@/components/scripture-navigation";
import {
  getScriptureBySlug,
  scriptureSlugs,
} from "@/data/scriptures";
import {
  isValidLocale,
  siteConfig,
  type Locale,
} from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const detailLabels: Record<
  Locale,
  {
    home: string;
    library: string;
    introduction: string;
    keyIdeas: string;
    editorialTitle: string;
    readerTitle: string;
    readerNote: string;
    libraryButton: string;
    readerButton: string;
  }
> = {
  bn: {
    home: "হোম",
    library: "শাস্ত্রগ্রন্থ",
    introduction: "ভূমিকা",
    keyIdeas: "গুরুত্বপূর্ণ বিষয়",
    editorialTitle: "ব্যাখ্যা সম্পর্কে",
    readerTitle: "পাঠকের জন্য",
    readerNote:
      "এই পাতায় গ্রন্থের পরিচিতি ও বিষয়ভিত্তিক সারাংশ দেওয়া হয়েছে। মূল পাঠ পড়তে নিচের পাঠক বাটন ব্যবহার করুন, যেখানে উপলব্ধ মূল পাঠ ও অনুবাদ দেখা যাবে।",
    libraryButton: "শাস্ত্রের সংগ্রহে ফিরুন",
    readerButton: "সম্পূর্ণ পাঠ পড়ুন",
  },

  en: {
    home: "Home",
    library: "Scriptures",
    introduction: "Introduction",
    keyIdeas: "Key ideas",
    editorialTitle: "About interpretation",
    readerTitle: "For readers",
    readerNote:
      "This page provides an introduction and topic summary. Use the reading button below to access the original text and available translations.",
    libraryButton: "Return to scripture library",
    readerButton: "Read the full text",
  },

  hi: {
    home: "होम",
    library: "धर्मग्रंथ",
    introduction: "परिचय",
    keyIdeas: "मुख्य विचार",
    editorialTitle: "व्याख्या के बारे में",
    readerTitle: "पाठकों के लिए",
    readerNote:
      "इस पृष्ठ पर ग्रंथ का परिचय और विषयवार सारांश दिया गया है। मूल पाठ और उपलब्ध अनुवाद पढ़ने के लिए नीचे दिया गया पाठ बटन चुनें।",
    libraryButton: "धर्मग्रंथ संग्रह पर लौटें",
    readerButton: "पूरा पाठ पढ़ें",
  },
};

export function generateStaticParams() {
  return siteConfig.locales.flatMap((language) =>
    scriptureSlugs.map((slug) => ({
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

  const scripture = getScriptureBySlug(slug);

  if (!scripture) {
    notFound();
  }

  const item = scripture.content[locale];

  return {
    title: item.title,
    description: item.description,

    alternates: {
      languages: {
        "bn-BD": `/bn/scriptures/${slug}`,
        en: `/en/scriptures/${slug}`,
        "hi-IN": `/hi/scriptures/${slug}`,
      },
    },

    openGraph: {
      title: `${item.title} | Dharma Gyan`,
      description: item.description,
      type: "article",
    },
  };
}

export default async function ScriptureDetailPage({
  params,
}: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const scripture = getScriptureBySlug(slug);

  if (!scripture) {
    notFound();
  }

  const item = scripture.content[locale];
  const copy = detailLabels[locale];

  const isBhagavadGita = scripture.slug === "bhagavad-gita";

  return (
    <>
      <ScriptureNavigation
        locale={locale}
        currentPath={`/scriptures/${scripture.slug}`}
      />

      <main className="sg-page">
        <div className="sg-container">
          <nav className="sg-breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{copy.home}</Link>

            <span aria-hidden="true">/</span>

            <Link href={`/${locale}/scriptures`}>
              {copy.library}
            </Link>

            <span aria-hidden="true">/</span>

            <span>{item.title}</span>
          </nav>

          <article>
            <header className="sg-detail-hero">
              <div className="sg-detail-icon" aria-hidden="true">
                {scripture.icon}
              </div>

              <div className="sg-eyebrow">
                <span aria-hidden="true">✦</span>
                {item.category}
              </div>

              <h1>{item.title}</h1>

              <p className="sg-detail-description">
                {item.description}
              </p>

              {isBhagavadGita && (
                <Link
                  className="sg-library-link sg-reader-launch"
                  href={`/${locale}/scriptures/bhagavad-gita/chapter/1`}
                >
                  <span aria-hidden="true">📖</span>
                  {copy.readerButton}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </header>

            <div className="sg-detail-layout">
              <section className="sg-content-panel">
                <h2>{copy.introduction}</h2>

                <p>{item.introduction}</p>

                {isBhagavadGita && (
                  <Link
                    className="sg-library-link sg-reader-launch"
                    href={`/${locale}/scriptures/bhagavad-gita/chapter/1`}
                  >
                    <span aria-hidden="true">📖</span>
                    {copy.readerButton}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}

                <h2 style={{ marginTop: "30px" }}>
                  {copy.keyIdeas}
                </h2>

                <ol className="sg-key-ideas">
                  {item.keyIdeas.map((idea, index) => (
                    <li key={idea}>
                      <span className="sg-idea-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{idea}</p>
                    </li>
                  ))}
                </ol>

                <Link
                  className="sg-library-link"
                  href={`/${locale}/scriptures`}
                >
                  <span aria-hidden="true">←</span>
                  {copy.libraryButton}
                </Link>
              </section>

              <aside>
                <section className="sg-sidebar-panel">
                  <h2>{copy.editorialTitle}</h2>
                  <p>{item.editorialNote}</p>
                </section>

                <section className="sg-sidebar-panel sg-reader-notice">
                  <h2>{copy.readerTitle}</h2>
                  <p>
                    {isBhagavadGita
                      ? copy.readerNote
                      : item.description}
                  </p>

                  {isBhagavadGita && (
                    <Link
                      className="sg-library-link sg-reader-launch"
                      href={`/${locale}/scriptures/bhagavad-gita/chapter/1`}
                    >
                      {copy.readerButton}
                      <span aria-hidden="true"> →</span>
                    </Link>
                  )}
                </section>
              </aside>
            </div>
          </article>
        </div>
      </main>

      <footer className="sg-footer">
        <div className="sg-container sg-footer-inner">
          <span>
            © <CurrentYear /> Dharma Gyan
          </span>

          <Link href={`/${locale}/scriptures`}>
            {copy.library}
          </Link>
        </div>
      </footer>
    </>
  );
}
