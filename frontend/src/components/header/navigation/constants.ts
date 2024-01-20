interface INavigation {
  link: string;
  title: string;
  className?: string;
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
  {
    link: "/calendar",
    title: "Օրացուցային պլան",
  },
];
