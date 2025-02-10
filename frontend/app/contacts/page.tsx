import Link from "next/link";
import gmailIcon from "../../public/gmail.svg";
import facebookIcon from "../../public/facebook.svg";
import phoneIcon from "../../public/phone.svg";
import "./Contacts.css";
import { siteTitle } from "../../src/constants/titles";
import Contact from "../../src/components/contact/Contact";

export const metadata = {
  title: `Կոնտակտներ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի կոնտակտային տվյալներ",
};

export default async function Contacts() {
  return (
    <>
      <h1>Կոնտակտային տվյալներ</h1>
      <Contact
        img={gmailIcon}
        alt="gmail"
        link="mailto:araratchessfed@gmail.com"
        text="araratchessfed@gmail.com"
      />
      <Contact
        img={facebookIcon}
        alt="facebook"
        link="https://www.facebook.com/araratchessfed"
        text="facebook.com/araratchessfed"
      />
      <Contact
        img={phoneIcon}
        alt="phone"
        link="tel:+37493881339"
        text="093881339"
        additionalText="Մարզի պատասխանատու"
      />
      <Contact
        img={phoneIcon}
        alt="phone"
        link="tel:+37477898910"
        text="077898910"
        additionalText="Մրցաշարային հարցերի դեպքում"
      />
      <Contact
        img={phoneIcon}
        alt="phone"
        link="tel:+37498339020"
        text="098339020"
        additionalText="Կայքի հետ կապված հարցերի դեպքում"
      />
      <p>
        Ընդունելության կամ որևէ մասնաճյուղի հետ կապված հարցերի դեպքում կարող եք
        զանգահարել տվյալ մասնաճյուղի մարզչին
      </p>
      <p>
        <span className="contact_trainers_link">
          <Link href="/trainers">Մարզիչների ցանկ</Link>
        </span>
      </p>
    </>
  );
}
