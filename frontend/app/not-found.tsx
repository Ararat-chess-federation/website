import Link from "next/link";
import generatePageMetadata from "../src/helpers/generatePageMetadata";
import { IPageProps } from "../src/models/interfaces/params";
import { messagesMap } from "../i18n/messages";
import "../src/components/404/404.css";

const DEFAULT_LOCALE = "hy" as const;

export async function generateMetadata(props: IPageProps) {
  const params = await props.params;
  const locale = params?.locale ?? DEFAULT_LOCALE;

  return generatePageMetadata({ type: "notFound", locale });
}
// TODO: Check component, we have NotFound component
export default function NotFoundPage() {
  const messages = messagesMap[DEFAULT_LOCALE].NotFound;

  return (
    <div className="error_container">
      <h1>{messages.title}</h1>
      <p>{messages.intro}</p>
      <ul>
        <li>{messages.options[0]}</li>
        <li>{messages.options[1]}</li>
        <li>{messages.options[2]}</li>
      </ul>
      <Link href="/">
        <span>{messages.options[0]}</span>
      </Link>
    </div>
  );
}
