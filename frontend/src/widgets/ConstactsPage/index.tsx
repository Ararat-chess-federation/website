import { siteTitle } from "../../constants/titles";
import Contact from "./components/contact";
import styles from "./contacts.module.scss";
import { contactsData } from "./assets/constants";
import LinkButton from "../../shared/linkButton";
import { Header } from "./components/Header";
import { SecondaryContent } from "./components/SecondaryContent";

export const metadata = {
  title: `Կոնտակտներ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի կոնտակտային տվյալներ",
};

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
