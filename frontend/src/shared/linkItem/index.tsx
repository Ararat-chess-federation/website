import React from "react";
import styles from "./linkItem.module.scss";
import NavigationLink from "../../components/NavigationLink";

interface IProps {
  link: string;
  title: string;
}
export const LinkItem = ({ link, title }: IProps) => {
  return (
    <NavigationLink href={link as '/'} className={styles.link}>
      {title}
    </NavigationLink>
  );
};
