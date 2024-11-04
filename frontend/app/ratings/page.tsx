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

type IGrid = "national" | "qualification-rules";

export default function Ratings() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [grid, setGrid] = useState<IGrid>(
    (searchParams.get("grid") as IGrid) || "national"
  );
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [ratings, setRatings] = useState<string[][]>([[]]);
  const [totalRows, setTotalRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getRatings = async () => {
      const { data, rows }: IRatings = await getData({
        type: "ratings",
        populate: "",
        params: `grid=${grid}&page=${page}`,
      });

      setRatings(data);
      setTotalRows(rows);
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

  const getPagesArr = (totalRows: number) => {
    const pagesArr = new Array(Math.ceil(totalRows / 50)).fill(0);
    return pagesArr.map((_, idx) => idx + 1);
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
        <span className="rating_grid" onClick={() => changeQuery("national")}>
          Ազգային
        </span>
        <span
          className="rating_grid"
          onClick={() => changeQuery("qualification-rules")}
        >
          Կարգեր
        </span>
      </div>
      {isLoading && <Loading />}
      <RatingTable ratings={ratings} />
      <div className="rating_grid_container">
        {getPagesArr(totalRows).map((el) => (
          <span
            className="rating_grid"
            onClick={() => changeQuery(grid, el)}
            key={el}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}
