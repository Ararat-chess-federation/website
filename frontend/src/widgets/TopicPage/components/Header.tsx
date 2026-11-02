"use client";

import { useTranslations } from "next-intl";
import { LinedTitle } from "../../../shared/linedTitle";
import { TSection } from "../../../constants/topics";

export const Header = ({ section }: { section: TSection }) => {
  const t = useTranslations();
  return <LinedTitle title={t(section)} />;
};
