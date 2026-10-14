import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FestivalNavigation from "@/components/festival-navigation";
import {
  festivalSlugs,
  getFestivalBySlug,
} from "@/data/festivals";
import {
  isValidLocale,
  siteConfig,
  type Locale,
} from "@/lib/site-config";

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
    list: string;
    timing: string;
    regions: string;
    significance: string;
    traditions: string;
    important: string;
    dateNote: string;
    back: string;
  }
> = {
  bn: {
    home: "হোম",
    list: "উৎসব",
    timing: "প্রচলিত সময় ও তিথি",
    regions: "অঞ্চল ও প্রচলন",
    significance: "ধর্মীয় ও সাংস্কৃতিক তাৎপর্য",
    traditions: "প্রচলিত রীতি ও আচার",
    important: "তারিখ যাচাই সম্পর্কে",
    dateNote:
      "এই পরিচিতিতে নির্দিষ্ট ইংরেজি তারিখ দেওয়া হয়নি। বছর ও স্থান অনুযায়ী নির্ভুল তারিখ প্রকাশ করতে হলে নির্ভরযোগ্য পঞ্জিকা থেকে যাচাই করতে হবে।",
    back: "সব উৎসব দেখুন",
  },
  en: {
    home: "Home",
    list: "Festivals",
    timing: "Traditional timing",
    regions: "Regions and observance",
    significance: "Religious and cultural significance",
    traditions: "Traditions and observances",
    important: "Date verification",
    dateNote:
      "This introduction does not provide an exact Gregorian date. A specific year's date should be verified against a reliable Panchang for the relevant location.",
    back: "Explore all festivals",
  },
  hi: {
    home: "होम",
    list: "त्योहार",
    timing: "पारंपरिक समय और तिथि",
    regions: "क्षेत्र और प्रचलन",
    significance: "धार्मिक और सांस्कृतिक महत्व",
    traditions: "परंपराएँ और अनुष्ठान",
    important: "तिथि की पुष्टि",
    dateNote:
      "इस परिचय में निश्चित अंग्रेज़ी तारीख नहीं दी गई है। किसी विशेष वर्ष की तारीख प्रकाशित करने से पहले संबंधित स्थान के विश्वसनीय पंचांग से उसकी पुष्टि करें।",
    back: "सभी त्योहार देखें",
  },
};

export function generateStaticParams() {
  return siteConfig.locales.flatMap((language) =>
    festivalSlugs.map((slug) => ({
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

  const festival = getFestivalBySlug(slug);

  if (!festival) {
    notFound();
  }

  const item = festival.content[locale];

  return {
    title: item.title,
    description: item.description,
    alternates: {
      languages: {
        "bn-BD": `/bn/festivals/${slug}`,
        en: `/en/festivals/${slug}`,
        "hi-IN": `/hi/festivals/${slug}`,
      },
    },
  };
}

export default async function FestivalDetailPage({
  params,
}: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const festival = getFestivalBySlug(slug);

  if (!festival) {
    notFound();
  }

  const item = festival.content[locale];
  const text = labels[locale];

  return (
    <>
      <FestivalNavigation
        locale={locale}
        currentPath={`/festivals/${festival.slug}`}
      />

      <main className="sg-page">
        <div className="sg-container">
          <nav className="sg-breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{text.home}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}/festivals`}>
              {text.list}
            </Link>
            <span aria-hidden="true">/</span>
            <span>{item.title}</span>
          </nav>

          <article>
            <header className="sg-detail-hero">
              <div className="sg-detail-icon" aria-hidden="true">
                {festival.icon}
              </div>

              <div className="sg-eyebrow">
                <span aria-hidden="true">✦</span>
                {item.category}
              </div>

              <h1>{item.title}</h1>

              <p className="sg-detail-description">
                {item.description}
              </p>
            </header>

            <div className="sg-detail-layout">
              <div>
                <section className="sg-content-panel">
                  <h2>{text.significance}</h2>
                  <p>{item.significance}</p>

                  <h2 style={{ marginTop: "30px" }}>
                    {text.traditions}
                  </h2>

                  <ol className="sg-key-ideas">
                    {item.traditions.map((tradition, index) => (
                      <li key={tradition}>
                        <span className="sg-idea-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p>{tradition}</p>
                      </li>
                    ))}
                  </ol>

                  <Link
                    className="sg-library-link"
                    href={`/${locale}/festivals`}
                  >
                    <span aria-hidden="true">←</span>
                    {text.back}
                  </Link>
                </section>
              </div>

              <aside>
                <section className="sg-sidebar-panel">
                  <h2>{text.timing}</h2>
                  <p>{item.timing}</p>
                </section>

                <section className="sg-sidebar-panel">
                  <h2>{text.regions}</h2>
                  <p>{item.regions}</p>
                </section>

                <section className="sg-sidebar-panel sg-reader-notice">
                  <h2>{text.important}</h2>
                  <p>{text.dateNote}</p>
                </section>
              </aside>
            </div>
          </article>
        </div>
      </main>

      <footer className="sg-footer">
        <div className="sg-container sg-footer-inner">
          <span>Dharma Gyan</span>

          <Link href={`/${locale}/festivals`}>
            {text.list}
          </Link>
        </div>
      </footer>
    </>
  );
}
