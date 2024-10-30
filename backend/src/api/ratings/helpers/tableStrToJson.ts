const headerRegex = /<th.*?>(.*?)<\/th>/gs;
const rowRegex = /<tr>.*?<\/tr>/gs;
const tableDataRegex = /<td.*?>(.*?)<\/td>/gs;
const hrefRegex = /href=["'](.*?)["']/;
const htmlTagRegex = /<[^>]+>/g;
const htmlTagMatcher = /<[^>]*>/g;

export default function tableToJson(tableString: string) {
  const headersMatch = tableString.match(headerRegex);
  const headers = headersMatch
    ? headersMatch
        .map((header) => header.replace(htmlTagRegex, "").trim())
        .slice(1)
    : [];

  const rows = tableString.match(rowRegex);
  const dataArr = [headers];

  if (!rows) {
    return dataArr;
  }

  for (const row of rows) {
    const cells = row.match(tableDataRegex);
    if (!cells) {
      continue;
    }

    const arr = cells.slice(1).map((el) => {
      if (el.includes("href")) {
        return el.match(hrefRegex)?.[1] || null;
      }

      return el.replace(htmlTagMatcher, "").trim();
    });

    dataArr.push(arr);
  }

  return dataArr;
}
