import "./Grid.css";

export type IGrid = "national" | "qualification-rules";

interface IGridProps {
  onClick: (grid: IGrid) => void;
  type: IGrid;
  grid: IGrid;
}

export default function Grid({ onClick, type, grid }: IGridProps) {
  const texts = {
    national: "Ազգային",
    "qualification-rules": "Կարգեր",
  };

  const active = grid === type ? "grid" : "";

  return (
    <span
      data-active={active}
      className="rating_grid"
      onClick={() => onClick(type)}
    >
      {texts[type]}
    </span>
  );
}
