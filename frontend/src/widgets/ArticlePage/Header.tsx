"use client";

import { useTranslations } from 'next-intl';
import React from 'react'
import { LinedTitle } from '../../shared/linedTitle';

export const Header = () => {
    const t = useTranslations();
  return (
    <LinedTitle title={t("articles")} />
  )
}
