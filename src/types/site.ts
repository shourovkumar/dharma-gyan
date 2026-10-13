import type { Locale } from "@/lib/site-config";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Scripture {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  icon?: string;
}

export interface Deity {
  id: string;
  name: string;
  description: string;
  traditions: string[];
  href: string;
  image?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  href: string;
}

export interface LocalizedContent {
  locale: Locale;
  title: string;
  description: string;
}
