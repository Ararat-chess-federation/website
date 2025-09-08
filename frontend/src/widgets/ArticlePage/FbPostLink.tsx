"use client";

import React from "react";
import LinkButton from "../../shared/linkButton";
import { useTranslations } from "next-intl";

export const FbPostLink = ({ fbPost }: { fbPost: string }) => {
  const t = useTranslations();
  return <LinkButton link={fbPost} title={t("photoList")} target="_blank" />;
};
