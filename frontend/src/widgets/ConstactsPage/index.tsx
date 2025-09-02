import { useTranslations } from "next-intl";
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
  const t = useTranslations();
  return (
    <main className={styles.contacts_page}>
      <LinedTitle title={t("ratings")} />

      <h1 className={styles.title}>{t("contactsInfo.contactInformation")}</h1>
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
        {t("contactsInfo.trainersDescription")}
      </p>
      <div>
        <LinkButton link="/trainers" title={t("contactsInfo.trainersList")} className={styles.trainers_button}/>
      </div>
    </main>
  );
}
