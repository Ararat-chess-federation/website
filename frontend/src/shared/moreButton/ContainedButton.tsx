import Link from "next/link";
import styles from "./moreButton.module.scss";

export default function ContainedButton({ link }: { link: string }) {
  return (
    <button className={styles.contained_btn}>
      <span className={styles.contained_btn__text}>
        <Link href={link}>Ավելին</Link>
      </span>
    </button>
  );
}
