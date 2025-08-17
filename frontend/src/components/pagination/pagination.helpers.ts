export const getPages = (totalPages: number, currentPage: number) => {
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

export const getLengths = (
  totalPages: number,
  startNumber: number,
  endNumber: number
) => {
  return {
    startLength: endNumber - startNumber < 3 ? endNumber - startNumber : 3,
    endLength: totalPages - endNumber < 2 ? totalPages - endNumber + 1 : 2,
  };
};

export const getNumbers = (number: number, length: number) =>
  Array.from({ length }, (_, idx) => number + idx);
