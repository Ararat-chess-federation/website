import Link from "next/link";
import "./Pagination.css";

interface IPagination {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
  basePath,
}: IPagination) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const getPages = () => {
    const endNumber = totalPages - 2;
    const startNumber =
      currentPage < endNumber - 2 ? currentPage - 1 : endNumber - 3;
    const isHasDots = totalPages - startNumber > 5;

    return {
      startNumber: startNumber > 1 ? startNumber : 1,
      endNumber: endNumber > 0 ? endNumber : 1,
      isHasDots,
    };
  };

  const { startNumber, endNumber, isHasDots } = getPages();

  const getLengths = () => {
    return {
      startLength: endNumber - startNumber < 3 ? endNumber - startNumber : 3,
      endLength: totalPages - endNumber < 2 ? totalPages - endNumber + 1 : 3,
    };
  };

  const { startLength, endLength } = getLengths();

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link href={`${basePath}?page=${currentPage - 1}`}>
          <span className="prev">Previous</span>
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
          <span className="next">Next</span>
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
  return (
    <>
      {Array.from(
        {
          length,
        },
        (_, idx) => number + idx
      ).map((page, index) => {
        return (
          <Link key={index} href={`${basePath}?page=${page}`}>
            <span
              className="pageNumber"
              data-active={page === currentPage ? "page" : undefined}
            >
              {page}
            </span>
          </Link>
        );
      })}
    </>
  );
}
