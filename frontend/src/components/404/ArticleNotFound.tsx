"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import "./404.css";

export default function NotFound() {
  const t = useTranslations("ArticleNotFound")
  return (
    <div className="error_container">
      <h1>{t("title")}</h1>
      <p>{t("intro")}</p>
      <ul>
        <li>{t("options.0")}</li>
        <li>{t("options.1")}</li>
      </ul>
      <Link href="/">
        <span>{t("options.2")}</span>
      </Link>
    </div>
  );
}
