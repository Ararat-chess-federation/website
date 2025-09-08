"use client";

import React, { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./linedItem.module.scss";
import mapImage from "../assets/map.svg";
import figures from "../assets/chess_figures.svg";
import MoreButton from "../../../../shared/linkButton";
import { FULLNAVIGATION } from "../../../../constants/navigation";
import { LinedTitle } from "../../../../shared/linedTitle";

type VersionIndex = 0 | 1;
export const LinedItem = ({ versionIndex }: { versionIndex: VersionIndex }) => {
  const t =  useTranslations();
  const info = [
    {
      title: t(FULLNAVIGATION[2].title),
      desc: t("LinedItems.0"),
      img: mapImage,
      link: FULLNAVIGATION[2].link,
    },
    {
      title: t(FULLNAVIGATION[1].title),
      desc: t("LinedItems.1"),
      img: figures,
      link: FULLNAVIGATION[1].link,
    },
  ];
  const data = info[versionIndex];
  return (
    <div className={styles.branchCard}>
      <LinedTitle title={data.title} />
      <div>
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
    </div>
  );
};
