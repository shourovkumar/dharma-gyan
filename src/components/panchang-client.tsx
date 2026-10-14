"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import type { Locale } from "@/lib/site-config";

type PanchangPart = {
  name?: string;
  paksha?: string;
  number?: number;
  pada?: number;
  lord?: string;
};

type PanchangData = {
  tithi?: PanchangPart;
  nakshatra?: PanchangPart;
  yoga?: PanchangPart;
  karana?: PanchangPart;
  weekday?: PanchangPart;
  weekday_basis?: string;
};

type PanchangResponse = {
  date?: string;
  data?: PanchangData;
  error?: string;
  message?: string;
};

type QueryResult = {
  date?: string;
  data?: PanchangData;
  error?: string;
};

type Copy = {
  eyebrow: string;
  title: string;
  description: string;
  location: string;
  autoNote: string;
  dateLabel: string;
  timeLabel: string;
  calculate: string;
  loading: string;
  results: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  weekday: string;
  empty: string;
  apiMissing: string;
  apiRejected: string;
  unavailable: string;
  invalid: string;
  sourceNote: string;
  terminologyNote: string;
  dateRequired: string;
  timeRequired: string;
  today: string;
};

const copy: Record<Locale, Copy> = {
  bn: {
    eyebrow: "সময় ও ঐতিহ্য",
    title: "আজকের পঞ্জিকা",
    description:
      "ঢাকা, বাংলাদেশের জন্য দৈনিক পঞ্জিকা-সংক্রান্ত তথ্য দেখুন।",
    location: "অবস্থান: ঢাকা, বাংলাদেশ",
    autoNote:
      "আজকের তারিখ ও দুপুর ১২টার সময় স্বয়ংক্রিয়ভাবে নির্বাচন করা হয়েছে। পঞ্জিকার তথ্য নিজে থেকেই load হবে।",
    dateLabel: "তারিখ",
    timeLabel: "সময়",
    calculate: "অন্য তারিখের পঞ্জিকা দেখুন",
    loading: "পঞ্জিকার তথ্য আনা হচ্ছে...",
    results: "পঞ্জিকার তথ্য",
    tithi: "তিথি",
    nakshatra: "নক্ষত্র",
    yoga: "যোগ",
    karana: "করণ",
    weekday: "বার",
    empty: "তথ্য পাওয়া যায়নি",
    apiMissing:
      "API key যোগ করা হয়নি। Project-এর root folder-এ .env.local file-এ NAVAMSHA_API_KEY সেট করুন, তারপর development server restart করুন।",
    apiRejected:
      "API provider key গ্রহণ করেনি। আপনার key এবং account যাচাই করুন।",
    unavailable:
      "এই মুহূর্তে Panchang service-এ সংযোগ করা যাচ্ছে না। API configuration এবং internet connection যাচাই করুন।",
    invalid: "তারিখ বা সময় সঠিক নয়। আবার চেষ্টা করুন।",
    sourceNote:
      "তথ্যটি নির্বাচিত তারিখ, সময় এবং Dhaka-র অবস্থান অনুযায়ী বাহ্যিক Panchang API থেকে নেওয়া হয়।",
    terminologyNote:
      "তিথি ও অন্যান্য পঞ্জিকা-তথ্য ঐতিহ্যগত গণনাপদ্ধতির অংশ। অঞ্চল ও পঞ্জিকা-প্রথা অনুযায়ী কিছু পার্থক্য থাকতে পারে।",
    dateRequired: "তারিখ নির্বাচন আবশ্যক।",
    timeRequired: "সময় নির্বাচন আবশ্যক।",
    today: "আজ",
  },

  en: {
    eyebrow: "Time & tradition",
    title: "Daily Panchang",
    description:
      "View daily Panchang information for Dhaka, Bangladesh.",
    location: "Location: Dhaka, Bangladesh",
    autoNote:
      "Today's date and 12:00 noon are selected automatically. Panchang information loads by itself.",
    dateLabel: "Date",
    timeLabel: "Time",
    calculate: "Check another date",
    loading: "Loading Panchang...",
    results: "Panchang details",
    tithi: "Tithi",
    nakshatra: "Nakshatra",
    yoga: "Yoga",
    karana: "Karana",
    weekday: "Weekday",
    empty: "Not available",
    apiMissing:
      "The API key is not configured. Set NAVAMSHA_API_KEY in the project's root .env.local file, then restart the development server.",
    apiRejected:
      "The provider rejected the API key. Check your key and account.",
    unavailable:
      "The Panchang service is currently unavailable. Check the API configuration and internet connection.",
    invalid: "The date or time is invalid. Please try again.",
    sourceNote:
      "Data is retrieved from an external Panchang API using the selected date, time, and Dhaka location.",
    terminologyNote:
      "Tithi and other Panchang elements follow traditional calendar calculations. Details may vary among regions and calendar traditions.",
    dateRequired: "Choose a date.",
    timeRequired: "Choose a time.",
    today: "Today",
  },

  hi: {
    eyebrow: "समय और परंपरा",
    title: "आज का पंचांग",
    description:
      "ढाका, बांग्लादेश के लिए दैनिक पंचांग की जानकारी देखें।",
    location: "स्थान: ढाका, बांग्लादेश",
    autoNote:
      "आज की तारीख और दोपहर 12 बजे का समय अपने-आप चुना गया है। पंचांग की जानकारी अपने-आप लोड होगी।",
    dateLabel: "तारीख",
    timeLabel: "समय",
    calculate: "दूसरी तारीख का पंचांग देखें",
    loading: "पंचांग की जानकारी प्राप्त हो रही है...",
    results: "पंचांग की जानकारी",
    tithi: "तिथि",
    nakshatra: "नक्षत्र",
    yoga: "योग",
    karana: "करण",
    weekday: "वार",
    empty: "जानकारी उपलब्ध नहीं",
    apiMissing:
      "API key कॉन्फ़िगर नहीं है। Project के root folder में .env.local file में NAVAMSHA_API_KEY सेट करें और development server दोबारा शुरू करें।",
    apiRejected:
      "API प्रदाता ने key स्वीकार नहीं की। अपनी key और account जाँचें।",
    unavailable:
      "अभी पंचांग सेवा उपलब्ध नहीं है। API configuration और internet connection जाँचें।",
    invalid: "तारीख या समय सही नहीं है। कृपया फिर प्रयास करें।",
    sourceNote:
      "जानकारी चुनी गई तारीख, समय और ढाका के स्थान के आधार पर बाहरी Panchang API से प्राप्त होती है।",
    terminologyNote:
      "तिथि और पंचांग के अन्य तत्व पारंपरिक गणना का हिस्सा हैं। क्षेत्र और पंचांग परंपराओं के अनुसार अंतर हो सकता है।",
    dateRequired: "तारीख चुनना आवश्यक है।",
    timeRequired: "समय चुनना आवश्यक है।",
    today: "आज",
  },
};

async function requestPanchang(
  date: string,
  time: string,
): Promise<QueryResult> {
  const [hour, minute] = time.split(":").map(Number);

  if (
    !date ||
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return { error: "INVALID_TIME" };
  }

  const params = new URLSearchParams({
    date,
    hour: String(hour),
    minute: String(minute),
  });

  const response = await fetch(`/api/panchang?${params}`, {
    method: "GET",
    cache: "no-store",
  });

  const result =
    (await response.json()) as PanchangResponse;

  if (!response.ok || !result.data) {
    return {
      error: result.error ?? "PANCHANG_UNAVAILABLE",
    };
  }

  return {
    date: result.date ?? date,
    data: result.data,
  };
}

function getErrorMessage(
  error: string | undefined,
  locale: Locale,
): string {
  const t = copy[locale];

  switch (error) {
    case "API_KEY_MISSING":
      return t.apiMissing;

    case "API_KEY_REJECTED":
      return t.apiRejected;

    case "INVALID_DATE":
    case "INVALID_TIME":
      return t.invalid;

    default:
      return t.unavailable;
  }
}

function displayPart(
  part: PanchangPart | undefined,
  emptyLabel: string,
): string {
  if (!part?.name) {
    return emptyLabel;
  }

  if (part.paksha) {
    return `${part.paksha} · ${part.name}`;
  }

  return part.name;
}

export default function PanchangClient({
  locale,
  initialDate,
  initialTime,
}: {
  locale: Locale;
  initialDate: string;
  initialTime: string;
}) {
  const t = copy[locale];

  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);

  const [data, setData] = useState<PanchangData | null>(null);
  const [resultDate, setResultDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Automatically fetch today's Panchang when the page opens.
  useEffect(() => {
    let cancelled = false;

    async function loadToday() {
      try {
        const result = await requestPanchang(
          initialDate,
          initialTime,
        );

        if (cancelled) {
          return;
        }

        if (result.error || !result.data) {
          setError(getErrorMessage(result.error, locale));
          return;
        }

        setData(result.data);
        setResultDate(result.date ?? initialDate);
      } catch {
        if (!cancelled) {
          setError(t.unavailable);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadToday();

    return () => {
      cancelled = true;
    };
  }, [initialDate, initialTime, locale, t.unavailable]);

  // Allow the user to check another date if needed.
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!date) {
      setError(t.dateRequired);
      return;
    }

    if (!time) {
      setError(t.timeRequired);
      return;
    }

    setLoading(true);
    setError("");
    setData(null);
    setResultDate("");

    try {
      const result = await requestPanchang(date, time);

      if (result.error || !result.data) {
        setError(getErrorMessage(result.error, locale));
        return;
      }

      setData(result.data);
      setResultDate(result.date ?? date);
    } catch {
      setError(t.unavailable);
    } finally {
      setLoading(false);
    }
  }

  const rows = [
    {
      key: "tithi",
      label: t.tithi,
      value: displayPart(data?.tithi, t.empty),
      icon: "☾",
    },
    {
      key: "nakshatra",
      label: t.nakshatra,
      value: displayPart(data?.nakshatra, t.empty),
      icon: "✦",
    },
    {
      key: "yoga",
      label: t.yoga,
      value: displayPart(data?.yoga, t.empty),
      icon: "◈",
    },
    {
      key: "karana",
      label: t.karana,
      value: displayPart(data?.karana, t.empty),
      icon: "◇",
    },
    {
      key: "weekday",
      label: t.weekday,
      value: displayPart(data?.weekday, t.empty),
      icon: "☀",
    },
  ];

  return (
    <div className="pc-container">
      <nav className="sg-breadcrumb" aria-label="Breadcrumb">
        <a href={`/${locale}`}>
          {locale === "bn"
            ? "হোম"
            : locale === "hi"
              ? "होम"
              : "Home"}
        </a>

        <span aria-hidden="true">/</span>
        <span>{t.title}</span>
      </nav>

      <section className="sg-page-hero">
        <div className="sg-eyebrow">
          <span aria-hidden="true">✦</span>
          {t.eyebrow}
        </div>

        <h1>{t.title}</h1>
        <p>{t.description}</p>
        <div className="sg-count">{t.location}</div>
      </section>

      <section
        className="pc-panel"
        aria-labelledby="pc-form-title"
      >
        <div className="pc-panel-heading">
          <span className="pc-panel-symbol" aria-hidden="true">
            ◷
          </span>

          <div>
            <h2 id="pc-form-title">{t.title}</h2>
            <p>{t.autoNote}</p>
          </div>
        </div>

        <form className="pc-form" onSubmit={handleSubmit}>
          <div className="pc-field">
            <label htmlFor="panchang-date">
              {t.dateLabel}
            </label>

            <input
              id="panchang-date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>

          <div className="pc-field">
            <label htmlFor="panchang-time">
              {t.timeLabel}
            </label>

            <input
              id="panchang-time"
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
            />
          </div>

          <button
            className="pc-submit"
            type="submit"
            disabled={loading || !date || !time}
          >
            {loading ? t.loading : t.calculate}
            <span aria-hidden="true"> →</span>
          </button>
        </form>

        {loading && (
          <p className="pc-status" role="status">
            {t.loading}
          </p>
        )}

        {error && (
          <div className="pc-error" role="alert">
            <strong>{t.empty}</strong>
            <p>{error}</p>

            {error === t.apiMissing && (
              <a
                href="https://www.navamsha.in/panchang-api"
                target="_blank"
                rel="noreferrer"
              >
                Get an API key ↗
              </a>
            )}
          </div>
        )}
      </section>

      {data && (
        <section
          className="pc-results-section"
          aria-labelledby="pc-results-title"
        >
          <div className="pc-results-heading">
            <div>
              <div className="sg-eyebrow">{t.location}</div>
              <h2 id="pc-results-title">{t.results}</h2>
            </div>

            <span className="pc-result-date">
              {resultDate}
            </span>
          </div>

          <div className="pc-result-grid">
            {rows.map((row) => (
              <article
                className="pc-result-card"
                key={row.key}
              >
                <span
                  className="pc-result-icon"
                  aria-hidden="true"
                >
                  {row.icon}
                </span>

                <p>{row.label}</p>
                <h3>{row.value}</h3>
              </article>
            ))}
          </div>

          {data.weekday_basis && (
            <p className="pc-small-note">
              {t.weekday}: {data.weekday_basis}
            </p>
          )}
        </section>
      )}

      <aside className="pc-note">
        <strong>
          {locale === "bn"
            ? "গুরুত্বপূর্ণ নোট"
            : locale === "hi"
              ? "महत्वपूर्ण सूचना"
              : "Important note"}
        </strong>

        <p>{t.sourceNote}</p>
        <p>{t.terminologyNote}</p>
      </aside>
    </div>
  );
}
