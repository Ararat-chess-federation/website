import Contact from "./components/contact";
import styles from "./contacts.module.scss";
import { Header } from "./components/Header";
import { SecondaryContent } from "./components/SecondaryContent";
import { contactsData } from "./assets/constants";

export function ContactsPage() {
  return (
    <main className={styles.contacts_page}>
      <Header />
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
      <SecondaryContent />
    </main>
  );
}
