"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import getData from "../../src/helpers/getData";
import { IRatings } from "../../src/models/interfaces/ratings";
import newTabIcon from "../../public/newTab.svg";
import "./Rating.css";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Loading from "../loading";
import RatingTable from "../../src/components/ratingTable/RatingTable";
import PaginationClient from "../../src/components/pagination/PaginationClient";
import { IMeta } from "../../src/models/interfaces/meta";

type IGrid = "national" | "qualification-rules";

export default function Ratings() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [grid, setGrid] = useState<IGrid>(
    (searchParams.get("grid") as IGrid) || "national"
  );
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [ratings, setRatings] = useState<string[][]>([[]]);
  const [totalRows, setTotalRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getRatings = async () => {
      const { data, meta }: { data: IRatings; meta: IMeta } = await getData({
        type: "ratings",
        params: { grid, page },
      });
console.log({data, meta});

      setRatings(data);
      setTotalRows(meta.pagination.total);
      setIsLoading(false);
    };

    getRatings();
  }, [grid, page]);

  const changeQuery = (pageGrid: IGrid, page: number = 1) => {
    const params = new URLSearchParams(searchParams);
    params.set("grid", pageGrid);
    params.set("page", String(page));

    replace(`${pathname}?${params.toString()}`);

    setGrid(pageGrid);
    setPage(page);
  };

  return (
    <div className="rating_container">
      <h1>Արարատի մարզի շախմատի ֆեդերացիայի վարկանիշային աղյուսակ</h1>
      <p>
        *Տվյալները վերցվում են ՀՇՎ կայքից:
        <a href="https://chessfed.am/am/players-ratings" target="_blank">
          ՀՇՖ վարկանիշային աղյուսակ
          <Image src={newTabIcon} alt="new tab icon" />
        </a>
      </p>
      <div className="rating_grid_container">
        <Grid type="national" onClick={changeQuery} grid={grid} />
        <Grid type="qualification-rules" onClick={changeQuery} grid={grid} />
      </div>
      {isLoading && <Loading />}
      <RatingTable ratings={ratings} />
      <PaginationClient
        onClick={(pageNumber: number) => changeQuery(grid, pageNumber)}
        currentPage={page as number}
        pageSize={50}
        totalCount={totalRows}
      />
    </div>
  );
}

interface IGridProps {
  onClick: (grid: IGrid) => void;
  type: IGrid;
  grid: IGrid;
}

function Grid({ onClick, type, grid }: IGridProps) {
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
