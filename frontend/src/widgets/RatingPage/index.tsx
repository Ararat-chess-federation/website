"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import getData from "../../helpers/getData";
import { IRatings } from "../../models/interfaces/ratings";
import Loading from "../../components/loading/Loading";
import RatingTable from "./components/ratingTable";
import PaginationClient from "../../components/pagination/PaginationClient";
import { IMeta } from "../../models/interfaces/meta";
import { LinedTitle } from "../../shared/linedTitle";
import styles from "./Rating.module.scss";
import Grid, { IGrid } from "./components/grid/Grid";

export function RatingPage() {
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
    <div className={styles.rating_container}>
      <LinedTitle title="Վարկանիշներ" />
      <h1 className={styles.title}>
        Արարատի մարզի շախմատի ֆեդերացիայի վարկանիշային աղյուսակ
      </h1>
      <p>
        *Տվյալները վերցվում են ՀՇՎ կայքից:
        <Link
          href="https://chessfed.am/am/players-ratings"
          target="_blank"
          className={styles.rating_link}
        >
          ՀՇՖ վարկանիշային աղյուսակ
        </Link>
      </p>
      <div className={styles.rating_grid_container}>
        <Grid
          type="national"
          onClick={changeQuery}
          grid={grid}
          isActive={grid === "national"}
        />
        <Grid
          type="qualification-rules"
          onClick={changeQuery}
          grid={grid}
          isActive={grid === "qualification-rules"}
        />
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
