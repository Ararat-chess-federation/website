import React from "react";
import styles from "./LinedTitle.module.scss";

export const LinedTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.title_container}>
      <h2>{title}</h2>
      <div className={styles.free_line} />
    </div>
  );
};
