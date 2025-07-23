import Link from "next/link";
import styles from "./moreButton.module.scss";

export default function MoreButton({ link }: { link: string }) {
  return (
    <button className={styles.btn}>
      <span className={styles.btn_text}>
        <Link href={link}>Ավելին</Link>
      </span>
    </button>
  );
}
