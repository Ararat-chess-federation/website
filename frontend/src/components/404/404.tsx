"use client";

import Link from "next/link";
import "./404.css";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound")
  return (
    <div className="error_container">
      <h1>{t("title")}</h1>
      <p>{t("intro")}</p>
      <ul>
        <li>{t("options.0")}</li>
        <li>{t("options.1")}</li>
        <li>{t("options.2")}</li>
      </ul>
      <Link href="/">
        <span>{t("options.0")}</span>
      </Link>
    </div>
  );
}
