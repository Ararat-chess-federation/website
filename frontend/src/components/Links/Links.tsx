import Image from "next/image";
import { LINKS } from "../../constants/chessLinks";
import "./Links.css";

export default function Links() {
  return (
    <aside className="links_container">
      {LINKS.map((el) => (
        <ul key={el.url}>
          <li className="chess_useful_links_li">
            <a href={el.url} target="_blank">
              <Image
                width={50}
                height={50}
                alt={el.alt}
                src={el.img}
                className="link_img"
              />
            </a>
          </li>
        </ul>
      ))}
    </aside>
  );
}
