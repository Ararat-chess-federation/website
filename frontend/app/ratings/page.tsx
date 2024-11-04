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

type IGrid = "national" | "qualification-rules";

export default function Ratings() {
  const params = useSearchParams();
  const [grid, setGrid] = useState(params.get("grid") || "national");
  const [page, setPage] = useState(params.get("page") || 1);
  const [ratings, setRatings] = useState<string[][]>([[]]);
  const [totalRows, setTotalRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

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

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));

    replace(`${pathname}?${params.toString()}`);
    setPage(page);
  };

  const changeGrid = (grid: IGrid) => {
    const params = new URLSearchParams(searchParams);
    params.set("grid", grid);
    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);

    setGrid(grid);
    setPage(1);
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
        <span className="rating_grid" onClick={() => changeGrid("national")}>
          Ազգային
        </span>
        <span
          className="rating_grid"
          onClick={() => changeGrid("qualification-rules")}
        >
          Կարգեր
        </span>
      </div>
      {isLoading && <Loading />}
      <table>
        <thead>
          <tr>
            {ratings[0].map((el: string) => (
              <th key={el}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ratings.slice(1).map((el: string[], idx: number) => (
            <tr key={idx}>
              {el.map((nextEl, idx) => (
                <td key={idx}>
                  {nextEl.includes("/am/profile") ? (
                    <a href={`https://chessfed.am${nextEl}`} target="_blank">
                      Պրոֆիլ ՀՇՖ կայքում
                    </a>
                  ) : (
                    nextEl
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="rating_grid_container">
        {getPagesArr(totalRows).map((el) => (
          <span className="rating_grid" onClick={() => changePage(el)} key={el}>
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}

function getPagesArr(totalRows: number) {
  return new Array(Math.ceil(totalRows / 50)).fill(0).map((_, idx) => idx + 1);
}
