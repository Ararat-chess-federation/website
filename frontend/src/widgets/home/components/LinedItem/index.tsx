import React from "react";
import styles from "./linedItem.module.scss";
import mapImage from "../assets/map.svg";
import figures from "../assets/chess_figures.svg";
import Image from "next/image";
import MoreButton from "../../../../shared/linkButton";
import { FULLNAVIGATION } from "../../../../constants/navigation";
import { LinedTitle } from "../../../../shared/linedTitle";

const datas = [
  {
    title: "Մասնաճյուղեր",
    desc: `Արտասահմանի մասնաճյուղերում գործում է 8 մասնաճյուղ, որտեղ շահառու
            ծառայություններից են օգտվում ավելի քան 600 երեխա:`,
    img: mapImage,
    link: FULLNAVIGATION[2].link,
  },
  {
    title: "Մարզիչներ",
    desc: `Արտասահմանի մասնաճյուղերում գործում է 8 մասնաճյուղ, որտեղ շահառու
            ծառայություններից են օգտվում ավելի քան 600 երեխա:`,
    img: figures,
    link: FULLNAVIGATION[1].link,
  },
];

type VersionIndex = 0 | 1;
export const LinedItem = ({ versionIndex }: { versionIndex: VersionIndex }) => {
  const data = datas[versionIndex];
  return (
    <div className={styles.branchCard}>
      <LinedTitle title={data.title} />
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={data.img} alt="Map with branches" />
        </div>
        <div className={styles.text}>
          <p>{data.desc}</p>
        </div>
      </div>
      <div className={styles.btn_box}>
        <MoreButton link={data.link} variant="text" />
      </div>
    </div>
  );
};
