import { parseStringPromise } from "xml2js";
const STRAPI_URL = "http://localhost:1337";
const API = "api::article.article";

export default {
  importArticlesFromFB: {
    task: async ({ strapi }) => {
      const URL =
        "https://fetchrss.com/rss/66f17165789ae466320d993266f17183abe507c1920a28b6.xml";
      try {
        const response = await fetch(URL);
        const xmlText = await response.text();

        const result = await parseStringPromise(xmlText);
        const data = result.rss.channel[0].item.reverse();

        const latestEntries = await strapi.entityService.findMany(API, {
          sort: { publishDate: "desc" },
          limit: 1,
        });

        if (
          latestEntries.length &&
          new Date(latestEntries[0].publishDate) > new Date(data[0].pubDate[0])
        ) {
          console.log("no need");
          return;
        }

        for (const post of data) {
          const { title, url, mainImage, articleText, fbPost } =
            getPostData(post);

          if (!articleText) {
            continue;
          }

          const res = await uploadImageFromUrl(mainImage);
          const { id: imageId } = res[0];
          const data = {
            title: title,
            articleText: articleText,
            fbPost: fbPost,
            url: url,
            publishDate: new Date(post.pubDate[0]),
            mainImage: imageId || null,
          };

          await strapi.entityService.create(API, {
            data: data,
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    options: {
      rule: process.env.GET_FB_DATA_TIMER,
    },
  },
};

async function uploadImageFromUrl(imageUrl) {
  try {
    const myImage = await fetch(imageUrl);
    const myBlob = await myImage.blob();

    const fileNameWithQuery = imageUrl.split("/").pop();
    const queryStartIdx = fileNameWithQuery.indexOf("?");
    const fileName = fileNameWithQuery.slice(0, queryStartIdx);

    const formData = new FormData();
    formData.append("files", myBlob, fileName || "uploadedImage.jpg");

    const imageUploaded = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "POST",
      body: formData,
    });

    if (!imageUploaded.ok) {
      throw new Error(`Upload failed with status ${imageUploaded.status}`);
    }

    return await imageUploaded.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

function getPostData(post) {
  if (post.description[0].includes("https://ararat.chessnews.am")) {
    return { articleText: "" };
  }

  const feedGeneratedTextStartIdx =
    post.description[0].indexOf("(Feed generated");
  const markdown = replaceHtmlToMarkdown(
    post.description[0].slice(0, feedGeneratedTextStartIdx)
  );
  const title = post.title[0];
  const url = title;
  const mainImage = post["media:content"][0].$.url;
  const fbPost = post.link[0];
  const articleText = [{ __component: "text.paragraph", paragraph: markdown }];

  return { title, url, mainImage, fbPost, articleText };
}

function replaceHtmlToMarkdown(html: string) {
  return html.replace(/<br\s*\/?>/g, "  \n").trim();
}
