"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import NavigationLink from "../NavigationLink";
import StatusPage, { statusStyles as s } from "../statusPage/StatusPage";

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: IProps) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code="500"
      piece="♚"
      fallen
      title={t("title")}
      intro={t("description")}
      tips={[t("steps.0"), t("steps.1"), t("steps.2")]}
      actions={
        <>
          <button type="button" onClick={reset} className={`${s.button} ${s.primary}`}>
            {t("retry")}
          </button>
          <NavigationLink href={"/contacts" as "/"} className={`${s.button} ${s.secondary}`}>
            {t("link")}
          </NavigationLink>
        </>
      }
    />
  );
}
