import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";

import PanchangClient from "@/components/panchang-client";
import PanchangNavigation from "@/components/panchang-navigation";

import {
  isValidLocale,
  type Locale,
} from "@/lib/site-config";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const metadataText: Record<
  Locale,
  {
    title: string;
    description: string;
    loading: string;
  }
> = {
  bn: {
    title: "পঞ্জিকা",
    description:
      "ঢাকা, বাংলাদেশের জন্য প্রতিদিনের Panchang তথ্য দেখুন।",
    loading: "আজকের পঞ্জিকার তথ্য প্রস্তুত হচ্ছে...",
  },
  en: {
    title: "Panchang",
    description:
      "View daily Panchang details for Dhaka, Bangladesh.",
    loading: "Preparing today's Panchang...",
  },
  hi: {
    title: "पंचांग",
    description:
      "ढाका, बांग्लादेश के लिए दैनिक पंचांग देखें।",
    loading: "आज का पंचांग तैयार हो रहा है...",
  },
};

function getDhakaDate(): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  function getPart(
    type: "year" | "month" | "day",
  ): string {
    const part = parts.find((item) => item.type === type);

    if (!part) {
      throw new Error(`Could not determine date ${type}.`);
    }

    return part.value;
  }

  return `${getPart("year")}-${getPart("month")}-${getPart("day")}`;
}

async function LivePanchang({
  locale,
}: {
  locale: Locale;
}) {
  // Render the date at request time, not during the build.
  await connection();

  const today = getDhakaDate();

  return (
    <PanchangClient
      locale={locale}
      initialDate={today}
      initialTime="12:00"
    />
  );
}

function PanchangLoading({
  locale,
}: {
  locale: Locale;
}) {
  return (
    <div className="pc-container">
      <p className="pc-status" role="status">
        {metadataText[locale].loading}
      </p>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const copy = metadataText[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      languages: {
        "bn-BD": "/bn/panchang",
        en: "/en/panchang",
        "hi-IN": "/hi/panchang",
      },
    },
  };
}

export default async function PanchangPage({
  params,
}: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <PanchangNavigation locale={locale} />

      <main className="pc-page">
        <Suspense fallback={<PanchangLoading locale={locale} />}>
          <LivePanchang locale={locale} />
        </Suspense>
      </main>

      <footer className="sg-footer">
        <div className="sg-container sg-footer-inner">
          <span>
            © {new Date().getFullYear()} Dharma Gyan
          </span>

          <span>
            {locale === "bn"
              ? "পঞ্জিকার তথ্য ও ঐতিহ্য"
              : locale === "hi"
                ? "पंचांग की जानकारी और परंपरा"
                : "Panchang information and traditions"}
          </span>
        </div>
      </footer>
    </>
  );
}
