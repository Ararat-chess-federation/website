import { parseStringPromise } from "xml2js";

const API = "api::article.article";
const BASE_URL = "https://ararat.chessnews.am";
const RSS_URL =
  "https://fetchrss.com/rss/66f17165789ae466320d993266f17183abe507c1920a28b6.xml";

export async function getLatestArticle(strapi) {
  const latestArticle = await strapi.entityService.findMany(API, {
    sort: { publishDate: "desc" },
    limit: 1,
    fields: ["publishDate"],
  });

  return latestArticle[0];
}

export async function getDataFromRSS() {
  const response = await fetch(RSS_URL);
  const xmlText = await response.text();

  const result = await parseStringPromise(xmlText);
  return result.rss.channel[0].item.reverse();
}

export async function uploadImageFromUrl(imageUrl: string, strapi) {
  const STRAPI_URL = strapi.config.server.url || "http://localhost:1337";

  try {
    const myImage = await fetch(imageUrl);
    const myBlob = await myImage.blob();

    const fileName = getImgFileName(imageUrl);

    const formData = new FormData();
    formData.append("files", myBlob, fileName);

    const imageUploaded = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "POST",
      body: formData,
    });

    if (!imageUploaded.ok) {
      throw new Error(`Upload failed with status ${imageUploaded.status}`);
    }

    const res = await imageUploaded.json();
    return res[0];
  } catch (error) {
    console.error("Error:", error);
  }

  function getImgFileName(imageUrl: string): string {
    const fileNameWithQuery = imageUrl.split("/").pop();
    const queryStartIdx = fileNameWithQuery.indexOf("?");

    return fileNameWithQuery.slice(0, queryStartIdx) || "uploadedImage.jpg";
  }
}

export function getPostData(post) {
  if (post.description[0].includes(BASE_URL)) {
    return { articleText: "" };
  }

  const markdown = replaceHtmlToMarkdown(post.description[0]);
  return {
    title: post.title[0],
    url: post.title[0] + Math.random(),
    mainImage: post["media:content"] && post["media:content"][0].$.url,
    fbPost: post.link[0],
    articleText: [{ __component: "text.paragraph", paragraph: markdown }],
    publishDate: new Date(post.pubDate[0]),
  };
}

export async function saveArticle(data, strapi) {
  await strapi.entityService.create(API, {
    data,
  });
}

function replaceHtmlToMarkdown(html: string) {
  return html.replace(/<br\s*\/?>/g, "  \n").trim();
}
