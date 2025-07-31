import React from "react";
import Link from "next/link";
import styles from "./linkItem.module.scss";

interface IProps {
  link: string;
  title: string;
}
export const LinkItem = ({ link, title }: IProps) => {
  return (
    <Link href={link} className={styles.link}>
      {title}
    </Link>
  );
};
