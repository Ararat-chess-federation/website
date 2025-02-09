import { IArticle } from "./article";

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
  //   projects: IProject[];
  //   blogs: IBlog[];
  //   contributors: IContributor[];
  //   menus: IMenu[];
  //   "static-pages": IStaticPage[];
  //   "site-config": ISiteConfig;
};

export type IUrlTypes = keyof TypeMapping;
