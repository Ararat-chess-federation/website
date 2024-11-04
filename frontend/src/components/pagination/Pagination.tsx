import Link from "next/link";
import { getLengths, getPages } from "./pagination.helpers";
import "./Pagination.css";
import { IPagesNumber, IPagination } from "./models";

interface IPaginationServer extends IPagination {
  basePath: "/articles";
}

export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
  basePath,
}: IPaginationServer) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const { startNumber, endNumber, isHasDots } = getPages(
    totalPages,
    currentPage
  );

  const { startLength, endLength } = getLengths(
    totalPages,
    startNumber,
    endNumber
  );

  return (
    <>
      <div className="pagination">
        {currentPage > 1 && (
          <Link href={`${basePath}?page=${currentPage - 1}`}>
            <span className="prev">{"<"}</span>
          </Link>
        )}

        <PagesNumbers
          basePath={basePath}
          currentPage={currentPage}
          length={startLength}
          number={startNumber}
        />

        {isHasDots && "..."}

        <PagesNumbers
          basePath={basePath}
          currentPage={currentPage}
          length={endLength}
          number={endNumber}
        />

        {currentPage < totalPages && (
          <Link href={`${basePath}?page=${currentPage + 1}`}>
            <span className="next">{">"}</span>
          </Link>
        )}
      </div>
    </>
  );
}

interface IPagesNumberServer extends IPagesNumber {
  basePath: string;
}

function PagesNumbers({
  number,
  basePath,
  currentPage,
  length,
}: IPagesNumberServer) {
  const numbers = Array.from(
    {
      length,
    },
    (_, idx) => number + idx
  );

  return (
    <>
      {numbers.map((page, index) => {
        const active = page === currentPage ? "page" : "";

        return (
          <Link key={index} href={`${basePath}?page=${page}`}>
            <span className="pageNumber" data-active={active}>
              {page}
            </span>
          </Link>
        );
      })}
    </>
  );
}
