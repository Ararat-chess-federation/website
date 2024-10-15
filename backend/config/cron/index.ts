import {
  getDataFromRSS,
  getLatestArticle,
  getPostData,
  saveArticle,
  uploadImageFromUrl,
} from "./helpers/importArticles";
import checkUpToDate from "./helpers/isUpToDate";

export default {
  importArticlesFromFB: {
    task: async ({ strapi }) => {
      try {
        const [data, latestArticle] = await Promise.all([
          getDataFromRSS(),
          getLatestArticle(strapi),
        ]);

        for (const post of data) {
          const isUpToDate = checkUpToDate(
            new Date(latestArticle.publishDate),
            new Date(post.pubDate[0])
          );
          const isDataSaved = latestArticle && isUpToDate;

          if (isDataSaved) {
            console.log("Data is up to date", {
              latestArticle: latestArticle.publishDate,
              fbArticle: post.pubDate[0],
            });
            continue;
          }

          const postData = getPostData(post);
          if (!postData.articleText) {
            continue;
          }

          const article = { ...postData };

          if (postData.mainImage) {
            const uploadedImage = await uploadImageFromUrl(
              postData.mainImage,
              strapi
            );
            article.mainImage = uploadedImage.id || null;
          }

          await saveArticle(article, strapi);
          console.log("Added new article", {
            title: article.title,
            pubDate: article.publishDate,
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
