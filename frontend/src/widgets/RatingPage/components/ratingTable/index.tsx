import Image from "next/image";
import styles from "./table.module.scss";

export default function RatingTable({ ratings }: { ratings: string[][] }) {
  return (
    <table className={styles.rating_table}>
      <thead>
        <tr>
          {ratings[0].map((el: string) => (
            <th key={el}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ratings.slice(1).map((el: string[], idx: number) => (
          <tr key={idx}>
            {el.map((nextEl, idx) => (
              <td key={idx}>
                {nextEl.includes("/am/profile") ? (
                  <a href={`https://chessfed.am${nextEl}`} target="_blank">
                    <Image src="/external.svg" alt="Profile" width={20} height={20} />
                  </a>
                ) : (
                  nextEl
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
