import type { MetadataRoute } from "next";

import { deitySlugs } from "@/data/deities";
import { festivalSlugs } from "@/data/festivals";
import { scriptureSlugs } from "@/data/scriptures";
import { siteConfig } from "@/lib/site-config";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    const language = locale.code;
    const languageUrl = `${SITE_URL}/${language}`;

    entries.push({
      url: languageUrl,
      changeFrequency: "weekly",
      priority: 1,
    });

    const listingPages = [
      "scriptures",
      "deities",
      "festivals",
      "panchang",
    ];

    for (const page of listingPages) {
      entries.push({
        url: `${languageUrl}/${page}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const slug of scriptureSlugs) {
      entries.push({
        url: `${languageUrl}/scriptures/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of deitySlugs) {
      entries.push({
        url: `${languageUrl}/deities/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of festivalSlugs) {
      entries.push({
        url: `${languageUrl}/festivals/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
