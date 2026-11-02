import { TPages } from "../models/interfaces/params";
import { TTopicTypes } from "../models/interfaces/getData";

export type TSection = Extract<TPages, "learn" | "entertainment" | "history">;

export interface ITopic {
  slug: string;
  type: TTopicTypes;
}

export const SECTIONS: Record<TSection, ITopic[]> = {
  learn: [
    { slug: "debuts", type: "debuts" },
    { slug: "middlegames", type: "middlegames" },
    { slug: "endgames", type: "endgames" },
    { slug: "advices", type: "advices" },
  ],
  entertainment: [
    { slug: "films", type: "films" },
    { slug: "quotes", type: "quotes" },
    { slug: "humor", type: "humors" },
    { slug: "facts", type: "interestings" },
  ],
  history: [
    { slug: "world-champions", type: "world-champions" },
    { slug: "armenian-champions", type: "armenian-champions" },
    { slug: "fide-presidents", type: "fide-presidents" },
  ],
};

export const findTopic = (section: TSection, slug: string) =>
  SECTIONS[section].find((topic) => topic.slug === slug);
