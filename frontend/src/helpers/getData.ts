type IUrlTypes = "about" | "articles" | "branches" | "trainers" | "useful";
interface IDataParams {
  type: IUrlTypes;
  populate?: string;
  searchUrl?: string;
  params?: string;
}

export default async function getData({
  type,
  searchUrl,
  params,
  populate = "deep",
}: IDataParams) {
  try {
    const url = getUrl({ type, searchUrl, params, populate });
    const res = await fetch(`${process.env.BACKEND_URL}/api${url}`, {
      next: { revalidate: 3600 },
    });

    return res.json();
  } catch (e) {
    return { e };
  }
}

function getUrl({ type, searchUrl, params, populate }: IDataParams) {
  return searchUrl
    ? `/${type}?populate=${populate}&filters[url][$eq]=${searchUrl}&${params}`
    : `/${type}?populate=${populate}&${params}`;
}
