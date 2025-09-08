import { getLengths, getNumbers, getPages } from "./pagination.helpers";
import "./Pagination.css";
import { IPagesNumber, IPagination } from "./models";
import NavigationLink from "../NavigationLink";

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
          <NavigationLink href={`${basePath}?page=${currentPage - 1}` as '/'}>
            <span className="prev">{"<"}</span>
          </NavigationLink>
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
          <NavigationLink href={`${basePath}?page=${currentPage + 1}` as '/'}>
            <span className="next">{">"}</span>
          </NavigationLink>
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
  const numbers = getNumbers(number, length);

  return (
    <>
      {numbers.map((page, index) => {
        const active = page === currentPage ? "page" : "";

        return (
          <NavigationLink key={index} href={`${basePath}?page=${page}` as '/'}>
            <span className="pageNumber" data-active={active}>
              {page}
            </span>
          </NavigationLink>
        );
      })}
    </>
  );
}
