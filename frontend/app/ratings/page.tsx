"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getData from "../../src/helpers/getData";
import { IRatings } from "../../src/models/interfaces/ratings";

export default function Ratings() {
  const params = useSearchParams();

  const [grid, setGrid] = useState<"national" | "qualification-rules">(
    "national"
  );
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

  return (
    <div>
      <div>
        <span onClick={() => setGrid("national")}>Ազգային</span>
        <span onClick={() => setGrid("qualification-rules")}>Կարգեր</span>
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
                <td key={idx}>{nextEl}</td>
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
