import Image from "next/image";
import { use } from "react";
import defaultExample from "../../../public/defaultExample.webp";
import getData from "../../helpers/getData";
import MoreButton from "../moreButton/MoreButton";
import "./ShortInfo.css";

export default function ShortInfo({ type }: { type: "trainers" | "branches" }) {
  const res = getData({
    type: type,
    params: "pagination[limit]=2",
  });

  const { meta } = use(res);
  const { title, text } = getInfo(type, meta.pagination.total);

  return (
    <div className="short_info_container">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="short_info">
        <Image src={defaultExample} alt="Chess board" />
        <span className="short_info_text">{text}</span>
      </div>
      <MoreButton link={`/${type}`} />
    </div>
  );
}

function getInfo(type: "trainers" | "branches", count: number) {
  const data = {
    trainers: {
      title: "Մարզիչներ",
      text: `Արարատի մարզի շախմատի ֆեդերացիայի մարզադպրոցներում ընհանուր առմամբ աշխատում է ${count} մարզիչ, ովքեր իրենց փորձն ու գիտելիքներն են փոխանցում ապագա սերնդին։`,
    },
    branches: {
      title: "Մասնաճյուղեր",
      text: ` Արարատի մարզի բոլոր համայնքներում ընհանուր առմամբ գործում է ${count} մասնաճյուղ, որտեղ շախմատի պարապմունքների են հաճախում ավելի քան 1000 երեխա`,
    },
  };

  return data[type];
}
