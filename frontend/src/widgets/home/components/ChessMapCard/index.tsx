import React from "react";
import Image from "next/image";
import styles from "./ChessMapCard.module.scss";
import chessMap from "../images/chess.svg";
import MoreButton from "../../../../shared/moreButton";

export const ChessMapCard = () => {
  return (
    <div className={styles.chess_card}>
      <div className={styles.chess_card__content}>
        <h2 className={styles.chess_card__title}>Տերյանյան պատմություն</h2>
        <p className={styles.chess_card__text}>
          Տիգրան Տերյանյանի աշակերտի ճեմարանի դասընկերը հետ քննական ծրագիր
          ներկայացնելուց հետո բաժանվեց ժպիտով՝ ասելով իրենց երեխաներից մեկի
          ժամանակի խնդրանք։ Շնորհակալություն էր ասում պարոն Տիգրանին նաև
          Արդարադատ մարմնում։
        </p>
        <MoreButton link={`/about`} />
      </div>
      <div className={styles.chess_card_image}>
        <Image src={chessMap} alt="Chess Map" />
      </div>
    </div>
  );
};
