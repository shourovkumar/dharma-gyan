import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import SiteSearch from "@/components/site-search";
import {
  isValidLocale,
  siteConfig,
} from "@/lib/site-config";

type SearchPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search Hindu scriptures, deities, festivals, and Panchang resources on Dharma Gyan.",
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return siteConfig.locales.map((language) => ({
    locale: language.code,
  }));
}

function SearchFallback() {
  return (
    <main
      role="status"
      aria-live="polite"
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "32px 20px",
        background: "#080c14",
        color: "#f8fafc",
      }}
    >
      Search page loading...
    </main>
  );
}

async function SearchContent({ params }: SearchPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <SiteSearch locale={locale} />;
}

export default function SearchPage({ params }: SearchPageProps) {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchContent params={params} />
    </Suspense>
  );
}
