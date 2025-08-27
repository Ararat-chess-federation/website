interface INavigation {
  link: string;
  title: string;
}
export const FULLNAVIGATION: INavigation[] = [
  {
    link: "/articles",
    title: "Նորություններ",
  },
  {
    link: "/trainers",
    title: "Մարզիչներ",
  },
  // {
  //   link: "/calendar",
  //   title: "Օրացուցային պլան",
  // },
  {
    link: "/branches",
    title: "Մասնաճյուղեր",
  },
  {
    link: "/ratings",
    title: "Վարկանիշներ",
  },
  { link: "/useful", title: "Օգտակար հղումներ" },
  {
    link: "/about",
    title: "Մեր մասին",
  },
  {
    link: "/contacts",
    title: "Կոնտակտներ",
  },
];

export const FOOTER_MENU: INavigation[] = [
  {
    link: "/about",
    title: "Մեր մասին",
  },
  {
    link: "/ratings",
    title: "Վարկանիշներ",
  },
  { link: "/useful", title: "Օգտակար հղումներ" },
];
