import Image from "next/image";
import defaultExample from "../../../public/defaultExample.webp";
import MoreButton from "../moreButton/MoreButton";
import "./ShortInfo.css";

export default function ShortInfo({
  title,
  data,
  link,
}: {
  title: string;
  data: number;
  link: string;
}) {
  return (
    <div className="short_info_container">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="short_info">
        <Image src={defaultExample} alt="Chess board" />
        <span className="short_info_text">
          Արարատի մարզի բոլոր համայնքներում ընհանուր առմամբ գործում է {data}{" "}
          մասնաճյուղ, որտեղ շախմատի պարապմունքների են հաճախում ավելի քան 1000
          երեխա
        </span>
      </div>
      <MoreButton link={link} />
    </div>
  );
}
