"use client";

import { useTranslations } from "next-intl";
import styles from "./Grid.module.scss";

export type IGrid = "national" | "qualification-rules";

interface IGridProps {
  onClick: (grid: IGrid) => void;
  type: IGrid;
  grid: IGrid;
  isActive: boolean;
}

export default function Grid({ onClick, type, grid, isActive }: IGridProps) {

  const t = useTranslations("Grid")
  const texts = {
    national: "national",
    "qualification-rules": "qualification-rules",
  };

  const active = grid === type ? "grid" : "";

  return (
    <div
      data-active={active}
      className={`${styles.rating_grid} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(type)}
    >
      <span>{t(texts[type])}</span>
    </div>
  );
}
