import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import styles from "./useful.module.scss";
import FigureImage from "./assets/images/figures.png";
import Image from "next/image";
import { Header } from "./components/Header";

export function UsefulPage({ links }: { links: string }) {
  return (
    <main className={styles.useful_page}>
      <Header />
      <div className={styles.details_container}>
        <div className={styles.useful_container}>
          <ModifiedMarkdown>{links}</ModifiedMarkdown>
        </div>
        <div className={styles.image_container}>
          <Image src={FigureImage} alt="FigureImage" />
        </div>
      </div>
    </main>
  );
}
