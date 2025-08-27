import React from "react";
import Image from "next/image";
import styles from "./ChessMapCard.module.scss";
import chessMap from "../assets/chess.svg";
import MoreButton from "../../../../shared/linkButton";

export const ChessMapCard = () => {
  return (
    <div className={styles.chess_card}>
      <div className={styles.chess_card__content}>
        <h2 className={styles.chess_card__title}>Ֆեդերացիայի պատմություն</h2>
        <p className={styles.chess_card__text}>
          1963 թվականին Տիգրան Պետրոսյանի աշխարհի չեմպիոն դառնալուց հետո Հայաստանում շախմատային բուռն աճ տեղի ունեցավ։ Բազմաթիվ ծնողներ սկսեցին իրենց երեխաներին տանել շախմատի խմբակ։ Շախմատը բուռն զարգացում էր ապրում նաև Արարատի մարզում։
        </p>
        <MoreButton link={`/about`} />
      </div>
      <div className={styles.chess_card_image}>
        <Image src={chessMap} alt="Chess Map" />
      </div>
    </div>
  );
};
