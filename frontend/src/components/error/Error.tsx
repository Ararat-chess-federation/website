import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import "./Error.css";

export default function Error({ error }: { error: Error }) {
  const t = useTranslations("error");
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error_container">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <ul>
        <li>{t("steps.0")}</li>
        <li>{t("steps.1")}</li>
        <li>{t("steps.2")}</li>
      </ul>
      <Link href="/contacts">
        <span>{t("link")}</span>
      </Link>
    </div>
  );
}
