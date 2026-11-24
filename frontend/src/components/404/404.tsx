"use client";

import { useTranslations } from "next-intl";
import NavigationLink from "../NavigationLink";
import StatusPage, { statusStyles as s } from "../statusPage/StatusPage";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <StatusPage
      code="404"
      piece="♞"
      title={t("title")}
      intro={t("intro")}
      tips={[t("options.0"), t("options.1"), t("options.2")]}
      actions={
        <NavigationLink href="/" className={`${s.button} ${s.primary}`}>
          {t("options.3")}
        </NavigationLink>
      }
    />
  );
}
