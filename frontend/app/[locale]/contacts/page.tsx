import { ContactsPage } from "../../../src/widgets/ConstactsPage";
import { IPageProps } from "../../../src/models/interfaces/params";
import generatePageMetadata from "../../../src/helpers/generatePageMetadata";

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "contacts", locale })
}


export default async function Contacts() {
  return <ContactsPage />;
}
