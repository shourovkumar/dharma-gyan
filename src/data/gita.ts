import chapterData from "./gita-source/data/chapters.json";
import translationData from "./gita-source/data/translation.json";
import verseData from "./gita-source/data/verse.json";

export type GitaTranslationLanguage = "english" | "hindi";

export type GitaChapter = {
  id: number;
  chapter_number: number;
  name: string;
  name_meaning: string;
  name_translation: string;
  name_transliterated: string;
  chapter_summary: string;
  chapter_summary_hindi: string;
  verses_count: number;
  image_name: string;
};

export type GitaVerse = {
  id: number;
  chapter_id: number;
  chapter_number: number;
  externalId: number;
  text: string;
  title: string;
  verse_number: number;
  verse_order: number;
  transliteration: string;
  word_meanings: string;
};

export type GitaTranslation = {
  authorName: string;
  author_id: number;
  description: string;
  id: number;
  lang: string;
  language_id: number;
  verseNumber: number;
  verse_id: number;
};

export type GitaReadableVerse = GitaVerse & {
  translation: string;
  translator: string;
};

const chapters = chapterData as GitaChapter[];
const verses = verseData as GitaVerse[];
const translations = translationData as GitaTranslation[];

const translationLookup = new Map<string, GitaTranslation>();

for (const translation of translations) {
  const key = [
    translation.lang,
    translation.authorName,
    translation.verse_id,
  ].join("|");

  translationLookup.set(key, translation);
}

export function getGitaChapters(): GitaChapter[] {
  return [...chapters].sort(
    (a, b) => a.chapter_number - b.chapter_number,
  );
}

export function getGitaChapter(
  chapterNumber: number,
): GitaChapter | undefined {
  return chapters.find(
    (chapter) => chapter.chapter_number === chapterNumber,
  );
}

export function getGitaTranslators(
  language: GitaTranslationLanguage,
): string[] {
  return [
    ...new Set(
      translations
        .filter((translation) => translation.lang === language)
        .map((translation) => translation.authorName),
    ),
  ];
}

export function getDefaultGitaTranslator(
  language: GitaTranslationLanguage,
): string {
  const availableTranslators = getGitaTranslators(language);

  const preferredTranslator =
    language === "english"
      ? "Swami Adidevananda"
      : "Swami Ramsukhdas";

  return availableTranslators.includes(preferredTranslator)
    ? preferredTranslator
    : (availableTranslators[0] ?? "");
}

export function getGitaChapterVerses(
  chapterNumber: number,
  language: GitaTranslationLanguage,
  translator: string,
): GitaReadableVerse[] {
  return verses
    .filter((verse) => verse.chapter_number === chapterNumber)
    .sort((a, b) => a.verse_number - b.verse_number)
    .map((verse) => {
      const key = [
        language,
        translator,
        verse.id,
      ].join("|");

      const translation = translationLookup.get(key);

      return {
        ...verse,
        translation: translation?.description.trim() ?? "",
        translator,
      };
    });
}
