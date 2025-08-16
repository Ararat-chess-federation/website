import Link from "next/link";
import { siteTitle } from "../../constants/titles";
import Contact from "./components/contact";
import styles from "./contacts.module.scss";
import { contactsData } from "./assets/constants";
import { LinedTitle } from "../../shared/linedTitle";
import LinkButton from "../../shared/linkButton";

export const metadata = {
  title: `Կոնտակտներ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի կոնտակտային տվյալներ",
};

export function ContactsPage() {
  return (
    <main className={styles.contacts_page}>
      <LinedTitle title="Վարկանիշներ" />

      <h1 className={styles.title}>Կոնտակտային տվյալներ</h1>
      <div className={styles.contacts}>
        {contactsData.map((el) => (
          <Contact
            key={el.link}
            img={el.img}
            alt={el.alt}
            link={el.link}
            text={el.text}
            additionalText={el.additionalText}
          />
        ))}
      </div>
      <p>
        Ընդունելության կամ որևէ մասնաճյուղի հետ կապված հարցերի դեպքում կարող եք
        զանգահարել տվյալ մասնաճյուղի մարզչին
      </p>
      <div>
        <LinkButton link="/trainers" title="Մարզիչների ցանկ" className={styles.trainers_button}/>
      </div>
    </main>
  );
}
