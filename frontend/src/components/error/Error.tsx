"use client";

import { getTranslations } from "next-intl/server";
import { useEffect } from "react";
import "./Error.css";
import NavigationLink from "../NavigationLink";

export default async function Error({ error }: { error: Error }) {
  const t = await getTranslations("error");
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
      <NavigationLink href="/contacts">
        <span>{t("link")}</span>
      </NavigationLink>
    </div>
  );
}
