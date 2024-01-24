export default async function getData(url: string) {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}${url}`);
    return res.json();
  } catch (e) {
    return { e };
  }
}
