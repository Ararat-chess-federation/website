import { TPages } from "../models/interfaces/params";
import { TTopicTypes } from "../models/interfaces/getData";

export type TSection = Extract<TPages, "learn" | "entertainment" | "history">;

export type TTopicDisplay = "accordion" | "box";

export interface ITopic {
  slug: string;
  type: TTopicTypes;
  display?: TTopicDisplay;
  sort?: string[];
  withImage?: boolean;
}

const ADMIN_SORT = ["sortOrder:asc", "createdAt:asc"];

export const SECTIONS: Record<TSection, ITopic[]> = {
  learn: [
    { slug: "debuts", type: "debuts" },
    { slug: "middlegames", type: "middlegames" },
    { slug: "endgames", type: "endgames" },
    { slug: "advices", type: "advices" },
  ],
  entertainment: [
    { slug: "films", type: "films", withImage: true },
    { slug: "quotes", type: "quotes", display: "box" },
    { slug: "humor", type: "humors", display: "box" },
    { slug: "facts", type: "interestings", display: "box" },
  ],
  history: [
    {
      slug: "world-champions",
      type: "world-champions",
      sort: ADMIN_SORT,
      withImage: true,
    },
    {
      slug: "armenian-champions",
      type: "armenian-champions",
      sort: ADMIN_SORT,
      withImage: true,
    },
    {
      slug: "fide-presidents",
      type: "fide-presidents",
      sort: ADMIN_SORT,
      withImage: true,
    },
  ],
};

export const findTopic = (section: TSection, slug: string) =>
  SECTIONS[section].find((topic) => topic.slug === slug);
