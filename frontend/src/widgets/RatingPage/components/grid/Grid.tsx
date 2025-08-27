import styles from "./Grid.module.scss";

export type IGrid = "national" | "qualification-rules";

interface IGridProps {
  onClick: (grid: IGrid) => void;
  type: IGrid;
  grid: IGrid;
  isActive: boolean;
}

export default function Grid({ onClick, type, grid, isActive }: IGridProps) {
  const texts = {
    national: "Ազգային",
    "qualification-rules": "Կարգեր",
  };

  const active = grid === type ? "grid" : "";

  return (
    <div
      data-active={active}
      className={`${styles.rating_grid} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(type)}
    >
      <span>{texts[type]}</span>
    </div>
  );
}
