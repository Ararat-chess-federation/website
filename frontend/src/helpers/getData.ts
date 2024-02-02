type IUrlTypes = "about" | "articles" | "branches" | "trainers";
interface IDataParams {
  type: IUrlTypes;
  searchUrl?: string;
  params?: string;
}

export default async function getData({
  type,
  searchUrl,
  params,
}: IDataParams) {
  try {
    const url = getUrl({ type, searchUrl, params });
    const res = await fetch(`${process.env.BACKEND_URL}/api${url}`);

    return res.json();
  } catch (e) {
    return { e };
  }
}

function getUrl({ type, searchUrl, params }: IDataParams) {
  return searchUrl
    ? `/${type}?populate=deep&filters[url][$eq]=${searchUrl}&${params}`
    : `/${type}?populate=deep&${params}`;
}
