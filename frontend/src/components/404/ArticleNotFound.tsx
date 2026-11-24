"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import NavigationLink from "../NavigationLink";
import StatusPage, { statusStyles as s } from "../statusPage/StatusPage";

export default function ArticleNotFound() {
  const t = useTranslations("ArticleNotFound");
  const locale = useLocale();
  const { articleUrl } = useParams<{ articleUrl: string }>();
  const showArmenian = locale !== "hy" && !!articleUrl;

  return (
    <StatusPage
      piece="♝"
      title={t("title")}
      intro={t("intro")}
      actions={
        <>
          {showArmenian && (
            <NavigationLink
              href={`/articles/${articleUrl}` as "/"}
              locale="hy"
              className={`${s.button} ${s.primary}`}
            >
              {t("options.0")}
            </NavigationLink>
          )}
          <NavigationLink
            href={"/articles" as "/"}
            className={`${s.button} ${showArmenian ? s.secondary : s.primary}`}
          >
            {t("options.1")}
          </NavigationLink>
          <NavigationLink href="/" className={`${s.button} ${s.secondary}`}>
            {t("options.2")}
          </NavigationLink>
        </>
      }
    />
  );
}
