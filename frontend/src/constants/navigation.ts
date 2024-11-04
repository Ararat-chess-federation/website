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
    link: "/branches",
    title: "Մասնաճյուղեր",
  },
  // {
  //   link: "/statistic",
  //   title: "Վիճակագրություն",
  // },
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
  { link: "/useful", title: "Օգտակար հղումներ" },
  {
    link: "/about",
    title: "Մեր մասին",
  },
  {
    link: "/contacts",
    title: "Կոնտակտներ",
  },
  // {
  //   link: "/team",
  //   title: "Կայքի թիմը",
  // },
];
