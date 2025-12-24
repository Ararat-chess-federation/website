export default {
  async beforeCreate(event) {
    const { publishDate, url } = event.params.data;
    event.params.data.publishDate = publishDate ? publishDate : new Date();
    event.params.data.url = appendDateToString(url ?? "");
  },
  async beforeUpdate(event) {
    const { url } = event.params.data;
    event.params.data.url = appendDateToString(url ?? "");
  }
};

function appendDateToString(url: string) {
  const datePattern = /-\d{2}-\d{2}$/;

  if (datePattern.test(url)) {
    return url;
  }

  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear()).slice(-2);

  return `${url}-${month}-${year}`;
}
