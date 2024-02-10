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

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link href={`${basePath}?page=${currentPage - 1}`}>
          <span className="prev">Previous</span>
        </Link>
      )}

      {Array.from(
        {
          length: endNumber - startNumber < 3 ? endNumber - startNumber : 3,
        },
        (_, idx) => startNumber + idx
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

      {isHasDots && "..."}

      {Array.from(
        {
          length: totalPages - endNumber < 2 ? totalPages - endNumber + 1 : 3,
        },
        (_, idx) => endNumber + idx
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

      {currentPage < totalPages && (
        <Link href={`${basePath}?page=${currentPage + 1}`}>
          <span className="next">Next</span>
        </Link>
      )}
    </div>
  );
}
