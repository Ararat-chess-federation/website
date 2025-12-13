import path from 'path';
import fsp from 'fs/promises';
import os from 'os';
import crypto from 'crypto';
import { parseStringPromise } from "xml2js";

const API = "api::article.article";
const BASE_URL = "https://ararat.chessnews.am";
const RSS_URL =
  "https://fetchrss.com/rss/66f17165789ae466320d993266f17183abe507c1920a28b6.xml";


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
    `strapi-upload-${crypto.randomUUID()}.%${ext.split('/')[1]}`
  );
  const uint8 = new Uint8Array(buffer);

  await fsp.writeFile(tmpPath, uint8);
  return tmpPath;
}

export function getImgFileName(imageUrl: string) {
  const fileNameWithQuery = imageUrl.split("/").pop();
  const queryStartIdx = fileNameWithQuery.indexOf("?");

  return fileNameWithQuery.slice(0, queryStartIdx) || "uploadedImage.jpg";
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

export function getPostData(post) {
  if (post.description[0].includes(BASE_URL)) {
    return { articleText: "" };
  }

  const text = removeImagesFromHtml(post.description[0]);
  const markdown = replaceHtmlToMarkdown(text);

  return {
    title: post.title[0],
    url: post.title[0] + Math.random(),
    mainImage: post["media:content"] && post["media:content"][0].$.url,
    fbPost: post.link[0],
    articleText: [{ __component: "text.paragraph", paragraph: markdown }],
    publishDate: new Date(post.pubDate[0]),
    publishedAt: null,
  };
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

  return html.slice(0, imgStartIdx);
}
