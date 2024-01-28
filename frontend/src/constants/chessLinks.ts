import lichess from "../../public/lichess.webp";
import chessFed from "../../public/chessFed.webp";
import academy from "../../public/academy.webp";
import facebook from "../../public/facebook.svg";
import { StaticImageData } from "next/image";

interface ILinks {
  img: StaticImageData;
  alt: string;
  url: string;
}

export const LINKS: ILinks[] = [
  {
    img: lichess,
    alt: "Lichess",
    url: "https://lichess.org/team/wDWVDihn",
  },
  {
    img: chessFed,
    alt: "Chess federation",
    url: "https://www.chessfed.am/",
  },
  {
    img: academy,
    alt: "Chess academy",
    url: "https://www.chessacademy.am/",
  },
  {
    img: facebook,
    alt: "Facebook",
    url: "https://www.facebook.com/araratchessfed/",
  },
];
