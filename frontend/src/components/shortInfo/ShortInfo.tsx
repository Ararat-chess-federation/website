import Image from "next/image";
import { use } from "react";
import mainTrainer from "../../../public/mainTrainer.webp";
import getData from "../../helpers/getData";
import MoreButton from "../moreButton/MoreButton";
import mainBranch from "../../../public/mainBranch.webp";
import "./ShortInfo.css";

export default function ShortInfo({ type }: { type: "trainers" | "branches" }) {
  const res = getData({
    type: type,
    fields: ["id"],
  });

  const { meta } = use(res);

  if (!meta) {
    return null;
  }

  const { title, text, img, alt } = getInfo(type, meta.pagination.total);

  return (
    <div className="short_info_container">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="short_info">
        <Image src={img} alt={alt} className="short_info_photo" />
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
      text: `Արարատի մարզի շախմատի ֆեդերացիայի մարզադպրոցներում աշխատում է ${count} մարզիչ, ովքեր իրենց փորձն ու գիտելիքներն են փոխանցում ապագա սերնդին։`,
      img: mainTrainer,
      alt: "Trainer photo",
    },
    branches: {
      title: "Մասնաճյուղեր",
      text: ` Արարատի մարզի համայնքներում գործում է ${count} մասնաճյուղ, որտեղ շախմատի պարապմունքների են հաճախում ավելի քան 600 երեխա։`,
      img: mainBranch,
      alt: "Branch photo",
    },
  };

  return data[type];
}
