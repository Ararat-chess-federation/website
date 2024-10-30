"use client";

import { useEffect, useState } from "react";
import getData from "../../src/helpers/getData";
import { IRatings } from "../../src/models/interfaces/ratings";

type IGrid = "national" | "qualification-rules";

export default function Ratings() {
  const [grid, setGrid] = useState<IGrid>("national");
  const [page, setPage] = useState(1);
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

  return (
    <div>
      <div>
        <span
          onClick={() => {
            setGrid("national");
            setPage(1);
          }}
        >
          Ազգային
        </span>
        <span
          onClick={() => {
            setGrid("qualification-rules");
            setPage(1);
          }}
        >
          Կարգեր
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
                      Պռոֆիլ
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
      <div>
        {new Array(Math.ceil(totalRows / 50))
          .fill(0)
          .map((el, idx) => idx + 1)
          .map((el) => (
            <span
              style={{ margin: "40px" }}
              onClick={() => setPage(el)}
              key={el}
            >
              {el}
            </span>
          ))}
      </div>
    </div>
  );
}
