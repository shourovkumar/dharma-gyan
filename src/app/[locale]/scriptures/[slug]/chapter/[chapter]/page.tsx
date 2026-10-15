import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getDefaultGitaTranslator,
  getGitaChapter,
  getGitaChapters,
  getGitaChapterVerses,
  getGitaTranslators,
  type GitaTranslationLanguage,
} from "@/data/gita";

import {
  isValidLocale,
  siteConfig,
  type Locale,
} from "@/lib/site-config";

import "./gita-reader.css";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
    chapter: string;
  }>;
  searchParams: Promise<{
    language?: string | string[];
    translator?: string | string[];
  }>;
};

const readerLabels: Record<
  Locale,
  {
    home: string;
    library: string;
    gita: string;
    chapter: string;
    chapters: string;
    original: string;
    transliteration: string;
    translation: string;
    wordMeanings: string;
    language: string;
    translator: string;
    apply: string;
    previous: string;
    next: string;
    overview: string;
    verse: string;
    noTranslation: string;
    sourceNote: string;
    chapterSummary: string;
    backToBook: string;
    sourceLanguages: string;
    bengaliUnavailable: string;
    bengaliUnavailableNote: string;
    readBengaliChapterOne: string;
  }
> = {
  bn: {
    home: "হোম",
    library: "শাস্ত্রগ্রন্থ",
    gita: "শ্রীমদ্ভগবদ্গীতা",
    chapter: "অধ্যায়",
    chapters: "১৮টি অধ্যায়",
    original: "মূল সংস্কৃত শ্লোক",
    transliteration: "উচ্চারণ",
    translation: "অনুবাদ",
    wordMeanings: "শব্দার্থ",
    language: "অনুবাদের ভাষা",
    translator: "অনুবাদক",
    apply: "প্রয়োগ করুন",
    previous: "আগের অধ্যায়",
    next: "পরের অধ্যায়",
    overview: "অধ্যায়ের তালিকা",
    verse: "শ্লোক",
    noTranslation: "এই শ্লোকের অনুবাদ পাওয়া যায়নি।",
    sourceNote:
      "বাংলা ভাবানুবাদ আপাতত প্রথম অধ্যায়ে রয়েছে। অন্য অধ্যায়গুলোর বাংলা অনুবাদ প্রস্তুত করা হচ্ছে।",
    chapterSummary: "অধ্যায়ের সারাংশ",
    backToBook: "গীতার পরিচিতিতে ফিরুন",
    sourceLanguages:
      "বাংলা: প্রথম অধ্যায় · English ও Hindi: উপলব্ধ সব অধ্যায়",
    bengaliUnavailable: "এই অধ্যায়ের বাংলা অনুবাদ এখনো প্রস্তুত হয়নি।",
    bengaliUnavailableNote:
      "বর্তমানে প্রথম অধ্যায়ের ৪৭টি শ্লোকের বাংলা ভাবানুবাদ যোগ করা হয়েছে। অন্য অধ্যায় পড়তে আপাতত English বা Hindi নির্বাচন করুন।",
    readBengaliChapterOne: "প্রথম অধ্যায়ের বাংলা পাঠ পড়ুন",
  },

  en: {
    home: "Home",
    library: "Scriptures",
    gita: "Bhagavad Gita",
    chapter: "Chapter",
    chapters: "18 chapters",
    original: "Original Sanskrit verse",
    transliteration: "Transliteration",
    translation: "Translation",
    wordMeanings: "Word meanings",
    language: "Translation language",
    translator: "Translator",
    apply: "Apply",
    previous: "Previous chapter",
    next: "Next chapter",
    overview: "All chapters",
    verse: "Verse",
    noTranslation: "Translation is unavailable for this verse.",
    sourceNote:
      "Bengali translations are currently available for chapter 1. Other chapters are being prepared.",
    chapterSummary: "Chapter summary",
    backToBook: "Back to the Gita introduction",
    sourceLanguages:
      "Bengali: Chapter 1 · English and Hindi: available chapters",
    bengaliUnavailable: "Bengali translation is not available for this chapter yet.",
    bengaliUnavailableNote:
      "Bengali translations have currently been added for the 47 verses in chapter 1. Select English or Hindi to read other chapters.",
    readBengaliChapterOne: "Read chapter 1 in Bengali",
  },

  hi: {
    home: "होम",
    library: "धर्मग्रंथ",
    gita: "श्रीमद्भगवद्गीता",
    chapter: "अध्याय",
    chapters: "18 अध्याय",
    original: "मूल संस्कृत श्लोक",
    transliteration: "उच्चारण",
    translation: "अनुवाद",
    wordMeanings: "शब्दार्थ",
    language: "अनुवाद की भाषा",
    translator: "अनुवादक",
    apply: "लागू करें",
    previous: "पिछला अध्याय",
    next: "अगला अध्याय",
    overview: "सभी अध्याय",
    verse: "श्लोक",
    noTranslation: "इस श्लोक का अनुवाद उपलब्ध नहीं है।",
    sourceNote:
      "बंगाली अनुवाद अभी पहले अध्याय के लिए उपलब्ध है। अन्य अध्यायों का अनुवाद तैयार किया जा रहा है।",
    chapterSummary: "अध्याय का सारांश",
    backToBook: "गीता के परिचय पर लौटें",
    sourceLanguages:
      "বাংলা: अध्याय 1 · English और Hindi: उपलब्ध अध्याय",
    bengaliUnavailable: "इस अध्याय का बंगाली अनुवाद अभी तैयार नहीं है।",
    bengaliUnavailableNote:
      "फिलहाल पहले अध्याय के 47 श्लोकों का बंगाली भावानुवाद जोड़ा गया है। दूसरे अध्याय पढ़ने के लिए English या Hindi चुनें।",
    readBengaliChapterOne: "पहला अध्याय बंगाली में पढ़ें",
  },
};

function getReaderHref(
  locale: string,
  chapter: number,
  language: GitaTranslationLanguage,
  translator: string,
) {
  const query = new URLSearchParams({
    language,
    translator,
  });

  return `/${locale}/scriptures/bhagavad-gita/chapter/${chapter}?${query.toString()}`;
}

function getChapterNumber(value: string) {
  if (!/^\d+$/.test(value)) {
    return null;
  }

  const number = Number(value);

  if (!Number.isInteger(number) || number < 1 || number > 18) {
    return null;
  }

  return number;
}

export function generateStaticParams() {
  return siteConfig.locales.flatMap((language) =>
    Array.from({ length: 18 }, (_, index) => ({
      locale: language.code,
      slug: "bhagavad-gita",
      chapter: String(index + 1),
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug, chapter: chapterParam } = await params;

  if (!isValidLocale(locale) || slug !== "bhagavad-gita") {
    notFound();
  }

  const chapterNumber = getChapterNumber(chapterParam);

  if (!chapterNumber) {
    notFound();
  }

  const chapter = getGitaChapter(chapterNumber);

  if (!chapter) {
    notFound();
  }

  const title =
    locale === "bn"
      ? `গীতা অধ্যায় ${chapterNumber}: ${chapter.name_transliterated}`
      : locale === "hi"
        ? `गीता अध्याय ${chapterNumber}: ${chapter.name_transliterated}`
        : `Bhagavad Gita Chapter ${chapterNumber}: ${chapter.name_transliterated}`;

  const description =
    locale === "hi"
      ? chapter.chapter_summary_hindi
      : chapter.chapter_summary;

  return {
    title: `${title} | Dharma Gyan`,
    description: description.slice(0, 300),
    alternates: {
      languages: {
        "bn-BD": `/bn/scriptures/bhagavad-gita/chapter/${chapterNumber}`,
        en: `/en/scriptures/bhagavad-gita/chapter/${chapterNumber}`,
        "hi-IN": `/hi/scriptures/bhagavad-gita/chapter/${chapterNumber}`,
      },
    },
    openGraph: {
      title: `${title} | Dharma Gyan`,
      description: description.slice(0, 300),
      type: "article",
    },
  };
}

export default async function GitaChapterPage({
  params,
  searchParams,
}: PageProps) {
  const { locale, slug, chapter: chapterParam } = await params;
  const search = await searchParams;

  if (!isValidLocale(locale) || slug !== "bhagavad-gita") {
    notFound();
  }

  const chapterNumber = getChapterNumber(chapterParam);

  if (!chapterNumber) {
    notFound();
  }

  const chapter = getGitaChapter(chapterNumber);

  if (!chapter) {
    notFound();
  }

  const labels = readerLabels[locale];

  const requestedLanguage =
    typeof search.language === "string" ? search.language : "";

  const defaultLanguage: GitaTranslationLanguage =
    locale === "bn"
      ? "bengali"
      : locale === "hi"
        ? "hindi"
        : "english";

  const language: GitaTranslationLanguage =
    requestedLanguage === "bengali" ||
    requestedLanguage === "english" ||
    requestedLanguage === "hindi"
      ? requestedLanguage
      : defaultLanguage;

  const translators = getGitaTranslators(language);

  const requestedTranslator =
    typeof search.translator === "string" ? search.translator : "";

  const defaultTranslator = getDefaultGitaTranslator(language);

  const translator = translators.includes(requestedTranslator)
    ? requestedTranslator
    : defaultTranslator;

  const verses = getGitaChapterVerses(
    chapterNumber,
    language,
    translator,
  );

  const allChapters = getGitaChapters();

  const bengaliChapterSummary =
    "এই অধ্যায়ে কুরুক্ষেত্রের যুদ্ধ শুরুর আগে দুই পক্ষের সেনাবাহিনীর সমাবেশ, দুর্যোধনের বক্তব্য এবং অর্জুনের মানসিক দ্বন্দ্বের পরিচয় পাওয়া যায়। স্বজনদের বিপক্ষে যুদ্ধ করার কথা ভেবে অর্জুন শোক ও দ্বিধায় ভেঙে পড়েন এবং কৃষ্ণের কাছে রথ দুই সেনাবাহিনীর মাঝখানে নিতে বলেন।";

  const chapterSummary =
    language === "bengali"
      ? chapterNumber === 1
        ? bengaliChapterSummary
        : labels.bengaliUnavailableNote
      : language === "hindi"
        ? chapter.chapter_summary_hindi
        : chapter.chapter_summary;

  const hasBengaliChapter = chapterNumber === 1;
  const showBengaliAvailabilityNotice =
    language === "bengali" && !hasBengaliChapter;

  return (
    <main className="gr-page">
      <div className="gr-container">
        <nav className="gr-breadcrumb" aria-label="Breadcrumb">
          <Link href={`/${locale}`}>{labels.home}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/${locale}/scriptures`}>{labels.library}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/${locale}/scriptures/bhagavad-gita`}>
            {labels.gita}
          </Link>
          <span aria-hidden="true">/</span>
          <span>
            {labels.chapter} {chapterNumber}
          </span>
        </nav>

        <header className="gr-hero">
          <div className="gr-hero-symbol" aria-hidden="true">
            ॐ
          </div>

          <p className="gr-eyebrow">DHARMA GYAN · {labels.gita}</p>

          <h1>
            {labels.chapter} {chapterNumber}
          </h1>

          <h2 lang="sa">{chapter.name}</h2>

          <p className="gr-chapter-transliteration">
            {chapter.name_transliterated}
          </p>

          <p className="gr-chapter-meaning">
            {chapter.name_translation}
          </p>

          <div className="gr-hero-meta">
            <span>
              {chapter.verses_count} {labels.verse}
            </span>
            <span aria-hidden="true">•</span>
            <span>{labels.chapters}</span>
          </div>
        </header>

        <section className="gr-settings" aria-label="Reading settings">
          <div className="gr-settings-heading">
            <div>
              <span className="gr-section-kicker">
                PERSONALIZE YOUR READING
              </span>
              <h2>{labels.translation}</h2>
            </div>

            <p>{labels.sourceLanguages}</p>
          </div>

          <div className="gr-language-options">
            <span className="gr-control-label">{labels.language}</span>

            <div className="gr-language-buttons">
              <Link
                href={getReaderHref(
                  locale,
                  chapterNumber,
                  "bengali",
                  getDefaultGitaTranslator("bengali"),
                )}
                className={
                  language === "bengali"
                    ? "gr-language-button is-active"
                    : "gr-language-button"
                }
                aria-current={language === "bengali" ? "page" : undefined}
              >
                বাংলা
              </Link>

              <Link
                href={getReaderHref(
                  locale,
                  chapterNumber,
                  "english",
                  getDefaultGitaTranslator("english"),
                )}
                className={
                  language === "english"
                    ? "gr-language-button is-active"
                    : "gr-language-button"
                }
                aria-current={language === "english" ? "page" : undefined}
              >
                English
              </Link>

              <Link
                href={getReaderHref(
                  locale,
                  chapterNumber,
                  "hindi",
                  getDefaultGitaTranslator("hindi"),
                )}
                className={
                  language === "hindi"
                    ? "gr-language-button is-active"
                    : "gr-language-button"
                }
                aria-current={language === "hindi" ? "page" : undefined}
              >
                हिन्दी
              </Link>
            </div>
          </div>

          <form method="get" className="gr-translator-form">
            <input type="hidden" name="language" value={language} />

            <label htmlFor="gita-translator">
              {labels.translator}
            </label>

            <select
              id="gita-translator"
              name="translator"
              defaultValue={translator}
            >
              {translators.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>

            <button type="submit">{labels.apply}</button>
          </form>

          <p className="gr-settings-note">{labels.sourceNote}</p>
        </section>

        <div className="gr-reader-layout">
          <section className="gr-verses-section">
            <div className="gr-section-heading">
              <div>
                <span className="gr-section-kicker">
                  {labels.gita.toUpperCase()}
                </span>
                <h2>
                  {labels.chapter} {chapterNumber}:{" "}
                  {chapter.name_transliterated}
                </h2>
              </div>

              <span className="gr-count-pill">
                {chapter.verses_count} {labels.verse}
              </span>
            </div>

            <section className="gr-summary">
              <h3>{labels.chapterSummary}</h3>
              <p>{chapterSummary}</p>
            </section>

            {showBengaliAvailabilityNotice ? (
              <section className="gr-summary">
                <h3>{labels.bengaliUnavailable}</h3>
                <p>{labels.bengaliUnavailableNote}</p>

                <div className="gr-language-buttons">
                  <Link
                    className="gr-language-button is-active"
                    href={getReaderHref(
                      locale,
                      1,
                      "bengali",
                      getDefaultGitaTranslator("bengali"),
                    )}
                  >
                    {labels.readBengaliChapterOne}
                  </Link>

                  <Link
                    className="gr-language-button"
                    href={getReaderHref(
                      locale,
                      chapterNumber,
                      "english",
                      getDefaultGitaTranslator("english"),
                    )}
                  >
                    English
                  </Link>

                  <Link
                    className="gr-language-button"
                    href={getReaderHref(
                      locale,
                      chapterNumber,
                      "hindi",
                      getDefaultGitaTranslator("hindi"),
                    )}
                  >
                    हिन्दी
                  </Link>
                </div>
              </section>
            ) : (
              <div className="gr-verse-list">
                {verses.map((verse) => (
                  <article className="gr-verse-card" key={verse.id}>
                    <div className="gr-verse-card-heading">
                      <span className="gr-verse-number">
                        {chapterNumber}.{verse.verse_number}
                      </span>
                      <span className="gr-verse-label">{labels.verse}</span>
                    </div>

                    <section className="gr-original">
                      <h3>{labels.original}</h3>
                      <p className="gr-sanskrit-text" lang="sa">
                        {verse.text.trim()}
                      </p>
                    </section>

                    {verse.transliteration.trim() && (
                      <details className="gr-details">
                        <summary>{labels.transliteration}</summary>
                        <p className="gr-transliteration-text">
                          {verse.transliteration.trim()}
                        </p>
                      </details>
                    )}

                    <section className="gr-translation">
                      <h3>
                        {labels.translation}
                        <span className="gr-translation-author">
                          {translator}
                        </span>
                      </h3>

                      {verse.translation ? (
                        <p lang={language === "bengali" ? "bn" : language}>
                          {verse.translation}
                        </p>
                      ) : (
                        <p className="gr-unavailable">
                          {labels.noTranslation}
                        </p>
                      )}
                    </section>

                    {verse.word_meanings.trim() && (
                      <details className="gr-details gr-word-details">
                        <summary>{labels.wordMeanings}</summary>
                        <p>{verse.word_meanings.trim()}</p>
                      </details>
                    )}
                  </article>
                ))}
              </div>
            )}

            {!showBengaliAvailabilityNotice && (
              <nav
                className="gr-chapter-pagination"
                aria-label="Chapter navigation"
              >
                {chapterNumber > 1 ? (
                  <Link
                    className="gr-pagination-link"
                    href={getReaderHref(
                      locale,
                      chapterNumber - 1,
                      language,
                      translator,
                    )}
                  >
                    <span aria-hidden="true">←</span>
                    <span>{labels.previous}</span>
                    <strong>{chapterNumber - 1}</strong>
                  </Link>
                ) : (
                  <span className="gr-pagination-spacer" />
                )}

                {chapterNumber < 18 ? (
                  <Link
                    className="gr-pagination-link gr-pagination-next"
                    href={getReaderHref(
                      locale,
                      chapterNumber + 1,
                      language,
                      translator,
                    )}
                  >
                    <span>{labels.next}</span>
                    <strong>{chapterNumber + 1}</strong>
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span className="gr-pagination-spacer" />
                )}
              </nav>
            )}
          </section>

          <aside className="gr-sidebar">
            <section className="gr-chapter-panel">
              <div className="gr-sidebar-heading">
                <span className="gr-section-kicker">READING GUIDE</span>
                <h2>{labels.overview}</h2>
                <p>{labels.chapters}</p>
              </div>

              <nav className="gr-chapter-list" aria-label={labels.overview}>
                {allChapters.map((item) => (
                  <Link
                    key={item.chapter_number}
                    href={getReaderHref(
                      locale,
                      item.chapter_number,
                      language,
                      translator,
                    )}
                    className={
                      item.chapter_number === chapterNumber
                        ? "gr-chapter-link is-current"
                        : "gr-chapter-link"
                    }
                    aria-current={
                      item.chapter_number === chapterNumber
                        ? "page"
                        : undefined
                    }
                  >
                    <span className="gr-chapter-index">
                      {String(item.chapter_number).padStart(2, "0")}
                    </span>

                    <span className="gr-chapter-link-text">
                      <strong>{item.name_transliterated}</strong>
                      <small>
                        {item.verses_count} {labels.verse}
                      </small>
                    </span>

                    {item.chapter_number === chapterNumber && (
                      <span className="gr-current-mark" aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </section>

            <section className="gr-sidebar-card">
              <span className="gr-sidebar-om" aria-hidden="true">
                ॐ
              </span>
              <h2>{labels.gita}</h2>
              <p>{labels.sourceNote}</p>

              <Link href={`/${locale}/scriptures/bhagavad-gita`}>
                {labels.backToBook}
                <span aria-hidden="true"> →</span>
              </Link>
            </section>
          </aside>
        </div>

        <footer className="gr-reader-footer">
          <Link href={`/${locale}/scriptures`}>
            <span aria-hidden="true">←</span> {labels.library}
          </Link>
          <span>{labels.gita} · {chapterNumber}/18</span>
        </footer>
      </div>
    </main>
  );
}
