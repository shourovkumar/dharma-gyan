"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { searchIndex, type SearchCategory } from "@/data/search-index";
import type { Locale } from "@/lib/site-config";

type SiteSearchProps = {
  locale: Locale;
};

type FilterCategory = "all" | SearchCategory;

const translations: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    placeholder: string;
    all: string;
    scriptures: string;
    deities: string;
    festivals: string;
    panchang: string;
    results: string;
    open: string;
    emptyTitle: string;
    emptyDescription: string;
    categories: Record<SearchCategory, string>;
  }
> = {
  bn: {
    eyebrow: "জ্ঞান অন্বেষণ",
    title: "কী জানতে চাও?",
    description:
      "শাস্ত্র, দেবদেবী, উৎসব ও পঞ্চাঙ্গ সম্পর্কিত বিষয় খুঁজে দেখো।",
    placeholder: "যেমন: গীতা, কৃষ্ণ, দুর্গাপূজা, তিথি...",
    all: "সব",
    scriptures: "শাস্ত্র",
    deities: "দেবদেবী",
    festivals: "উৎসব",
    panchang: "পঞ্চাঙ্গ",
    results: "টি ফলাফল পাওয়া গেছে",
    open: "বিস্তারিত দেখুন",
    emptyTitle: "কোনো ফলাফল পাওয়া যায়নি",
    emptyDescription:
      "অন্য কোনো শব্দ দিয়ে খুঁজে দেখো অথবা অন্য বিভাগ নির্বাচন করো।",
    categories: {
      scripture: "শাস্ত্র",
      deity: "দেবদেবী",
      festival: "উৎসব",
      panchang: "পঞ্চাঙ্গ",
    },
  },
  en: {
    eyebrow: "EXPLORE KNOWLEDGE",
    title: "What would you like to discover?",
    description:
      "Search Hindu scriptures, deities, festivals, and Panchang resources.",
    placeholder: "Try Gita, Krishna, Diwali, tithi...",
    all: "All",
    scriptures: "Scriptures",
    deities: "Deities",
    festivals: "Festivals",
    panchang: "Panchang",
    results: "results found",
    open: "Explore details",
    emptyTitle: "No results found",
    emptyDescription:
      "Try another search term or choose a different category.",
    categories: {
      scripture: "Scripture",
      deity: "Deity",
      festival: "Festival",
      panchang: "Panchang",
    },
  },
  hi: {
    eyebrow: "ज्ञान की खोज",
    title: "आप क्या जानना चाहेंगे?",
    description:
      "हिंदू धर्मग्रंथों, देवी-देवताओं, त्योहारों और पंचांग में खोजें।",
    placeholder: "जैसे: गीता, कृष्ण, दीपावली, तिथि...",
    all: "सभी",
    scriptures: "धर्मग्रंथ",
    deities: "देवी-देवता",
    festivals: "त्योहार",
    panchang: "पंचांग",
    results: "परिणाम मिले",
    open: "विस्तार से देखें",
    emptyTitle: "कोई परिणाम नहीं मिला",
    emptyDescription:
      "दूसरा शब्द खोजें या कोई अन्य श्रेणी चुनें।",
    categories: {
      scripture: "धर्मग्रंथ",
      deity: "देवी-देवता",
      festival: "त्योहार",
      panchang: "पंचांग",
    },
  },
};

export default function SiteSearch({ locale }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("all");

  const text = translations[locale];

  const filters: {
    value: FilterCategory;
    label: string;
  }[] = [
    { value: "all", label: text.all },
    { value: "scripture", label: text.scriptures },
    { value: "deity", label: text.deities },
    { value: "festival", label: text.festivals },
    { value: "panchang", label: text.panchang },
  ];

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return searchIndex.filter((entry) => {
      const categoryMatches =
        activeCategory === "all" ||
        entry.category === activeCategory;

      if (!categoryMatches) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        ...Object.values(entry.title),
        ...Object.values(entry.description),
        ...Object.values(entry.keywords).flat(),
      ]
        .join(" ")
        .toLocaleLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query, activeCategory]);

  return (
    <main
      style={{
        minHeight: "75vh",
        padding: "56px 20px 80px",
        background:
          "radial-gradient(ellipse at top, #1f2937 0%, #0b1120 48%, #080c14 100%)",
        color: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <header style={{ maxWidth: "780px", marginBottom: "36px" }}>
          <p
            style={{
              color: "#fbbf24",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "3px",
              margin: "0 0 14px",
            }}
          >
            {text.eyebrow}
          </p>

          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 54px)",
              lineHeight: 1.2,
              letterSpacing: "-1.5px",
              margin: "0 0 16px",
            }}
          >
            {text.title}
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {text.description}
          </p>
        </header>

        <section aria-label="Search resources">
          <label
            htmlFor="dharma-search"
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            {text.title}
          </label>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              maxWidth: "800px",
              padding: "8px 16px",
              border: "1px solid #475569",
              borderRadius: "16px",
              background: "#111827",
              boxSizing: "border-box",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "22px" }}>
              🔎
            </span>

            <input
              id="dharma-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={text.placeholder}
              autoComplete="off"
              style={{
                width: "100%",
                minWidth: 0,
                padding: "12px 0",
                border: 0,
                outline: "none",
                background: "transparent",
                color: "#f8fafc",
                fontSize: "16px",
              }}
            />
          </div>
        </section>

        <nav
          aria-label="Filter search categories"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "24px 0",
          }}
        >
          {filters.map((filter) => {
            const isActive = activeCategory === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveCategory(filter.value)}
                aria-pressed={isActive}
                style={{
                  border: isActive
                    ? "1px solid #fbbf24"
                    : "1px solid #475569",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  cursor: "pointer",
                  background: isActive ? "#fbbf24" : "#111827",
                  color: isActive ? "#111827" : "#e2e8f0",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </nav>

        <div
          aria-live="polite"
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            marginBottom: "18px",
          }}
        >
          {results.length} {text.results}
        </div>

        {results.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
              gap: "18px",
            }}
          >
            {results.map((entry) => (
              <Link
                key={entry.id}
                href={`/${locale}${entry.path}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: 0,
                  minHeight: "190px",
                  padding: "22px",
                  boxSizing: "border-box",
                  border: "1px solid #293548",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(145deg, #151e2e, #0f1724)",
                  color: "#f8fafc",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "16px",
                    padding: "6px 10px",
                    border: "1px solid #594a23",
                    borderRadius: "999px",
                    background: "#2a2418",
                    color: "#fcd34d",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  {text.categories[entry.category]}
                </span>

                <h2
                  style={{
                    fontSize: "21px",
                    lineHeight: 1.4,
                    margin: "0 0 10px",
                  }}
                >
                  {entry.title[locale]}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    margin: "0 0 22px",
                  }}
                >
                  {entry.description[locale]}
                </p>

                <span
                  style={{
                    marginTop: "auto",
                    color: "#fbbf24",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {text.open} →
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: "40px 20px",
              textAlign: "center",
              border: "1px solid #293548",
              borderRadius: "18px",
              background: "#111827",
            }}
          >
            <div
              aria-hidden="true"
              style={{ fontSize: "40px", marginBottom: "14px" }}
            >
              🔎
            </div>

            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              {text.emptyTitle}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
                lineHeight: 1.8,
              }}
            >
              {text.emptyDescription}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
