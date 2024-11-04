const regex = /<span class="total-rows">.*?(\d+).*?<\/span>/;

export default function getTotalRows(htmlString: string) {
  const totalRowsMatch = htmlString.match(regex);

  return totalRowsMatch ? parseInt(totalRowsMatch[1], 10) : null;
}
