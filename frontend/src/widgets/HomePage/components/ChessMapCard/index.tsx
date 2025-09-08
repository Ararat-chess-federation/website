"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ChessMapCard.module.scss";
import chessMap from "../assets/chess.svg";
import MoreButton from "../../../../shared/linkButton";

export const ChessMapCard = () => {
  const t = useTranslations("federation");
  return (
    <div className={styles.chess_card}>
      <div className={styles.chess_card__content}>
        <h2 className={styles.chess_card__title}>{t("federation_history")}</h2>
        <p className={styles.chess_card__text}>{t("info")}</p>
        <MoreButton link={`/about`} />
      </div>
      <div className={styles.chess_card_image}>
        <Image src={chessMap} alt="Chess Map" />
      </div>
    </div>
  );
};
