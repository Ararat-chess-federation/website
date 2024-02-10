import Link from "next/link";
import { getLengths, getPages } from "./pagination.helpers";
import "./Pagination.css";

interface IPagination {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  basePath: "/articles";
}

export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
  basePath,
}: IPagination) {
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
    <div className="pagination">
      {currentPage > 1 && (
        <Link href={`${basePath}?page=${currentPage - 1}`}>
          <span className="prev">Հետ</span>
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
          <span className="next">Առաջ</span>
        </Link>
      )}
    </div>
  );
}

interface IPagesNumber {
  number: number;
  basePath: string;
  currentPage: number;
  length: number;
}

function PagesNumbers({ number, basePath, currentPage, length }: IPagesNumber) {
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
