interface INavigation {
  link: string;
  title: string;
}

export const NAVIGATION: INavigation[] = [
  {
    link: "/articles",
    title: "Նորություններ",
  },
  {
    link: "/trainers",
    title: "Մարզիչներ",
  },
  {
    link: "/statistic",
    title: "Վիճակագրություն",
  },
  {
    link: "/branches",
    title: "Մասնաճյուղեր",
  },
  {
    link: "/calendar",
    title: "Օրացուցային պլան",
  },
];

export const LEFT_MENU: INavigation[] = [
  {
    link: "/ratings",
    title: "Վարկանիշներ",
  },
  {
    link: "/category-players-list",
    title: "Կարգեր",
  },
  {
    link: "/about-us",
    title: "Մեր մասին",
  },
  {
    link: "/contacts",
    title: "Կոնտակտներ",
  },
];
