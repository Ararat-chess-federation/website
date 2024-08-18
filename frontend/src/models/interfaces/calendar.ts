import { IArticleText } from "./article";

export interface ICalendarData {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    calendar: string;
  };
}
