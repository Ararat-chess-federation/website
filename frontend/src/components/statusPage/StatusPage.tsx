import { ReactNode } from "react";
import styles from "./statusPage.module.scss";

interface IProps {
  code?: string;
  piece: string;
  fallen?: boolean;
  title: string;
  intro: string;
  tips?: string[];
  actions?: ReactNode;
}

const BOARD = Array.from({ length: 16 }, (_, i) => (Math.floor(i / 4) + i) % 2);

export default function StatusPage({ code, piece, fallen, title, intro, tips, actions }: IProps) {
  return (
    <section className={styles.status}>
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.board}>
          {BOARD.map((dark, i) => (
            <span key={i} className={dark ? styles.dark : styles.light} />
          ))}
        </div>
        <span className={`${styles.piece} ${fallen ? styles.fallen : ""}`}>{piece}</span>
        {code && <span className={styles.code}>{code}</span>}
      </div>

      <div className={styles.body}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.intro}>{intro}</p>

        {!!tips?.length && (
          <ul className={styles.tips}>
            {tips.map((tip) => (
              <li key={tip} className={styles.tip}>
                {tip}
              </li>
            ))}
          </ul>
        )}

        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </section>
  );
}

export const statusStyles = styles;
