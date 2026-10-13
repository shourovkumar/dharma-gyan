export const siteConfig = {
  name: "Dharma Gyan",

  description:
    "A multilingual knowledge library for Hindu scriptures, philosophy, deities, and traditions.",

  defaultLocale: "bn",

  locales: [
    {
      code: "bn",
      label: "বাংলা",
      htmlLang: "bn-BD",
      name: "Bengali",
    },
    {
      code: "en",
      label: "EN",
      htmlLang: "en",
      name: "English",
    },
    {
      code: "hi",
      label: "हिन्दी",
      htmlLang: "hi",
      name: "Hindi",
    },
  ],
} as const;

export type Locale = (typeof siteConfig.locales)[number]["code"];

export const isValidLocale = (value: string): value is Locale => {
  return siteConfig.locales.some((locale) => locale.code === value);
};
