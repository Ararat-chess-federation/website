interface INavigation {
  link: string;
  title: string;
}

export const FULLNAVIGATION: INavigation[] = [
  {
    link: "/articles",
    title: "articles",
  },
  {
    link: "/trainers",
    title: "trainers",
  },
  // {
  //   link: "/calendar",
  //   title: "calendar",
  // },
  {
    link: "/branches",
    title: "branches",
  },
  {
    link: "/ratings",
    title: "ratings",
  },
  { link: "/useful", title: "useful" },
  {
    link: "/about",
    title: "about",
  },
  {
    link: "/contacts",
    title: "contacts",
  },
];

export const FOOTER_MENU: INavigation[] = [
  {
    link: "/about",
    title: "about",
  },
  {
    link: "/ratings",
    title: "ratings",
  },
  { link: "/useful", title: "useful" },
];
