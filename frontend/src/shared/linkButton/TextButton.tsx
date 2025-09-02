import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./moreButton.module.scss";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  title?: string;
}
export default function TextButton({ link, title, ...props }: IProps) {
  const t = useTranslations();
  return (
    <Link href={link} {...props}>
      <button className={styles.text_btn}>
        <span className={styles.text_btn__text}>{title || t("more")}</span>
      </button>
    </Link>
  );
}
