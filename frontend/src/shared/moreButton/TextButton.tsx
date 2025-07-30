import Link from "next/link";
import styles from "./moreButton.module.scss";

export default function TextButton({ link }: { link: string }) {
  return (
    <button className={styles.text_btn}>
      <span className={styles.text_btn__text}>
        <Link href={link}>Ավելին</Link>
      </span>
    </button>
  );
}
