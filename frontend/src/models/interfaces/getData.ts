import { IAboutData } from "./about";
import { IArticle } from "./article";
import { IBranch } from "./branch";
import { ICalendarData } from "./calendar";
import { IRatings } from "./ratings";
import { ITournamentData } from "./tournament";
import { ITrainer } from "./trainer";
import { IUsefulData } from "./useful";

export type INestedObject = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | INestedObject
    | INestedObject[]
    | string[];
};

export interface IDataParams<T extends IUrlTypes> {
  type: T;
  populate?: INestedObject | string[];
  filters?: INestedObject;
  params?: INestedObject;
  fields?: string[];
  sort?: string | string[];
  offset?: number;
  limit?: number;
}

export type TypeMapping = {
  articles: IArticle[];
  about: IAboutData;
  branches: IBranch[];
  trainers: ITrainer[];
  calendar: ICalendarData;
  ratings: IRatings;
  useful: IUsefulData;
  tournament: ITournamentData[];
};

export type IUrlTypes = keyof TypeMapping;
