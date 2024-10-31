"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getData from "../../src/helpers/getData";
import { IRatings } from "../../src/models/interfaces/ratings";
import "./Rating.css";

type IGrid = "national" | "qualification-rules";

export default function Ratings() {
  const params = useSearchParams();
  const [grid, setGrid] = useState(params.get("grid") || "national");
  const [page, setPage] = useState(params.get("page") || 1);
  const [ratings, setRatings] = useState<string[][]>([[]]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    const getRatings = async () => {
      const { data, rows }: IRatings = await getData({
        type: "ratings",
        populate: "",
        params: `grid=${grid}&page=${page}`,
      });

      setRatings(data);
      setTotalRows(rows);
    };

    getRatings();
  }, [grid, page]);

  const checkGrid = (grid: IGrid) => {
    setGrid(grid);
    setPage(1);
  };

  return (
    <div className="rating_container">
      <h1>Արարատի մարզի շախմատի ֆեդերացիայի վարկանիշային աղյուսակ</h1>
      <p>*Տվյալները վերցվում են ՀՇՎ կայքից</p>
      <div className="rating_grid_container">
        <span className="rating_grid" onClick={() => checkGrid("national")}>
          <Link href={"/ratings?grid=national&page=1"}> Ազգային</Link>
        </span>
        <span
          className="rating_grid"
          onClick={() => checkGrid("qualification-rules")}
        >
          <Link href={"/ratings?grid=qualification-rules&page=1"}>Կարգեր</Link>
        </span>
      </div>
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
          <span className="rating_grid" onClick={() => setPage(el)} key={el}>
            <Link
              href={`/ratings?grid=${
                params.get("grid") || "national"
              }&page=${el}`}
            >
              {el}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}

function getPagesArr(totalRows: number) {
  return new Array(Math.ceil(totalRows / 50)).fill(0).map((_, idx) => idx + 1);
}
