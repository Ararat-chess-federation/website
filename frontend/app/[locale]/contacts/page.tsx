import { siteTitle } from "../../../src/constants/titles";
import { ContactsPage } from "../../../src/widgets/ConstactsPage";

export const metadata = {
  title: `Կոնտակտներ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի կոնտակտային տվյալներ",
};

export default async function Contacts() {
  return <ContactsPage />;
}
