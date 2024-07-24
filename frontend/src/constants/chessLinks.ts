import lichess from "../../public/lichess.webp";
import chessFed from "../../public/chessFed.webp";
import academy from "../../public/academy.webp";
import facebook from "../../public/facebook.svg";
import fide from "../../public/fide.webp";
import chessArbiter from "../../public/chessArbiter.webp";
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
    img: facebook,
    alt: "Facebook",
    url: "https://www.facebook.com/araratchessfed/",
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
    img: fide,
    alt: "FIDE",
    url: "https://www.fide.com/",
  },
  {
    img: chessArbiter,
    alt: "Chess Arbiter",
    url: "https://chessarbiter.info/hy/laws/intro",
  },
];
