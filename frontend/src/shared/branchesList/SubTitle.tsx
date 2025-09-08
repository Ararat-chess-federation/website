"use client";

import { useTranslations } from "next-intl";
import React from "react";
import "./BranchesList.css";

export const SubTitle = () => {
  const t = useTranslations();
  return <p className="trainer_branches_list_title">{t("branches")}:</p>;
};
