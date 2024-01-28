type IUrlTypes = "about" | "articles" | "branches" | "trainers";
interface IDataParams {
  type: IUrlTypes;
  searchUrl?: string;
}

export default async function getData({ type, searchUrl }: IDataParams) {
  try {
    const url = getUrl({ type, searchUrl });
    console.log(url);

    const res = await fetch(`${process.env.BACKEND_URL}/api${url}`);
    return res.json();
  } catch (e) {
    return { e };
  }
}

function getUrl({ type, searchUrl }: IDataParams) {
  return searchUrl
    ? `/${type}?populate=deep&filters[url][$eq]=${searchUrl}`
    : `/${type}?populate=deep`;
}
