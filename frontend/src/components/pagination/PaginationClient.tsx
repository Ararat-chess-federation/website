import { getLengths, getPages } from "./pagination.helpers";
import "./Pagination.css";
import { IPagesNumber, IPagination } from "./models";

interface IPaginationClient extends IPagination {
  currentPage: number;
  totalCount: number;
  onClick: (pageNumber: number) => void;
  pageSize: number;
}

export default function PaginationClient({
  currentPage,
  totalCount,
  pageSize,
  onClick,
}: IPaginationClient) {
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
          <span className="prev" onClick={() => onClick(currentPage - 1)}>
            {"<"}
          </span>
        )}

        <PagesNumbers
          currentPage={currentPage}
          length={startLength}
          number={startNumber}
          onClick={onClick}
        />

        {isHasDots && "..."}

        <PagesNumbers
          currentPage={currentPage}
          length={endLength}
          number={endNumber}
          onClick={onClick}
        />

        {currentPage < totalPages && (
          <span className="next" onClick={() => onClick(currentPage + 1)}>
            {">"}
          </span>
        )}
      </div>
    </>
  );
}

interface IPagesNumberClient extends IPagesNumber {
  onClick: (pageNumber: number) => void;
}

function PagesNumbers({
  number,
  currentPage,
  length,
  onClick,
}: IPagesNumberClient) {
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
          <span
            key={index}
            onClick={() => onClick(page)}
            className="pageNumber"
            data-active={active}
          >
            {page}
          </span>
        );
      })}
    </>
  );
}
