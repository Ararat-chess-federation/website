import path from 'path';
import fsp from 'fs/promises';
import os from 'os';
import crypto from 'crypto';
import { parseStringPromise } from "xml2js";

const API = "api::article.article";
const BASE_URL = "https://ararat.chessnews.am";
const RSS_URL =
  "https://fetchrss.com/rss/66f17165789ae466320d993266f17183abe507c1920a28b6.xml";

export interface IImportedPost {
  title: string;
  text: string;
  imageUrl?: string;
  fbPost: string;
  date: Date;
}

export type TImportResult = "created" | "duplicate";

export async function getLatestArticle() {
  const latestArticle = await strapi.documents(API).findFirst({
    sort: { publishDate: "desc" },
    fields: ["publishDate"],
  });

  return latestArticle;
}

export async function getDataFromRSS() {
  const response = await fetch(RSS_URL);
  const xmlText = await response.text();

  const result = await parseStringPromise(xmlText);
  return result.rss.channel[0].item.reverse();
}

export async function getBufferFromUrl(imageUrl: string) {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status}`);
  }

  return {
    buffer: Buffer.from(await response.arrayBuffer()),
    ext: response.headers.get('content-type') || 'image/jpeg',
  };
}

export async function saveTempFile({ buffer, ext }: { buffer: Buffer, ext: string }) {
  const tmpPath = path.join(
    os.tmpdir(),
    `strapi-upload-${crypto.randomUUID()}.${ext.split('/')[1]}`
  );
  const uint8 = new Uint8Array(buffer);

  await fsp.writeFile(tmpPath, uint8);
  return tmpPath;
}

export function getImgFileName(imageUrl: string) {
  const fileName = new URL(imageUrl).pathname.split("/").pop();

  return fileName || "uploadedImage.jpg";
}

export async function uploadImageFromUrl(tmpPath: string, ext: string, name: string) {
  const uploadService = strapi.plugins.upload.services.upload;

  try {
    const [file] = await uploadService.upload({
      data: {},
      files: {
        filepath: tmpPath,
        mimetype: ext,
        originalFilename: name
      },
    });

    return file;
  } finally {
    await fsp.unlink(tmpPath).catch(() => { });
  }
}

export function getPostData(post): IImportedPost | null {
  const description: string = post.description[0];

  if (description.includes(BASE_URL)) {
    return null;
  }

  const text = replaceHtmlToMarkdown(removeImagesFromHtml(description));

  if (!text) {
    return null;
  }

  return {
    title: decodeHtmlEntities(description.split("<br")[0]).trim(),
    text,
    imageUrl: post["media:content"] && post["media:content"][0].$.url,
    fbPost: post.link[0],
    date: new Date(post.pubDate[0]),
  };
}

export function getPostDataFromGraph(post: {
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
}): IImportedPost | null {
  const message = post.message?.trim();

  if (!message || message.includes(BASE_URL)) {
    return null;
  }

  return {
    title: message.split("\n")[0].trim(),
    text: message.replace(/\r?\n/g, "  \n"),
    imageUrl: post.full_picture,
    fbPost: post.permalink_url,
    date: new Date(post.created_time),
  };
}

export async function importArticle(post: IImportedPost): Promise<TImportResult> {
  const publishDate = post.date.toISOString().slice(0, 10);

  if (await findImportedArticle(post, publishDate)) {
    return "duplicate";
  }

  let mainImage = null;

  if (post.imageUrl) {
    const { buffer, ext } = await getBufferFromUrl(post.imageUrl);
    const tmpPath = await saveTempFile({ buffer, ext });
    const uploadedImage = await uploadImageFromUrl(tmpPath, ext, getImgFileName(post.imageUrl));

    mainImage = uploadedImage?.id || null;
  }

  await saveArticle({
    title: post.title,
    url: await getUniqueUrl(getUrlByTitle(post.title) || `news-${publishDate}`),
    mainImage,
    fbPost: post.fbPost,
    articleText: [{ __component: "text.paragraph", paragraph: post.text }],
    publishDate,
  });

  return "created";
}

async function findImportedArticle(post: IImportedPost, publishDate: string) {
  return strapi.documents(API).findFirst({
    fields: ["id"],
    filters: {
      $or: [
        { fbPost: post.fbPost },
        { title: post.title, publishDate },
      ],
    },
  });
}

async function getUniqueUrl(baseUrl: string) {
  let url = baseUrl;

  for (let i = 2; await strapi.documents(API).findFirst({ fields: ["id"], filters: { url } }); i++) {
    url = `${baseUrl}-${i}`;
  }

  return url;
}

function getUrlByTitle(title: string) {
  const lowerTitle = title.toLowerCase();
  const categories = {
    "4-րդ": "finished-4th-category-tournament",
    "3-րդ": "finished-3rd-category-tournament",
    "2-րդ": "finished-2nd-category-tournament",
  };
  const places = {
    "արտաշատ": "in-artashat",
    "մասիս": "in-masis",
    "վեդի": "in-vedi",
    "արարատ": "in-ararat",
  };

  const category = Object.entries(categories).find(([key]) => lowerTitle.includes(key))?.[1];

  if (!category) {
    return "";
  }

  const place = Object.entries(places).find(([key]) => lowerTitle.includes(key))?.[1];

  return place ? `${category}-${place}` : category;
}

export async function saveArticle(data) {
  await strapi.documents(API).create({
    data,
  });
}

function replaceHtmlToMarkdown(html: string) {
  return html.replace(/<br\s*\/?>/g, "  \n").trim();
}

function removeImagesFromHtml(html: string) {
  const imgStartIdx = html.indexOf("<img");

  return imgStartIdx === -1 ? html : html.slice(0, imgStartIdx);
}

function decodeHtmlEntities(text: string) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}
