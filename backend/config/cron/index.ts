import { getDataFromRSS, getLatestArticle, getPostData, saveArticle, uploadImageFromUrl } from "./helpers/importArticles";

export default {
  importArticlesFromFB: {
    task: async ({ strapi }) => {
      try {
        const [data, latestArticle] = await Promise.all([
          getDataFromRSS(),
          getLatestArticle(strapi),
        ]);

        const isDataSaved =
          latestArticle &&
          new Date(latestArticle.publishDate) > new Date(data[0].pubDate[0]);

        if (isDataSaved) {
          console.log("no need");
          return;
        }

        for (const post of data) {
          const postData = getPostData(post);
          if (!postData.articleText) {
            continue;
          }

          const uploadedImage = await uploadImageFromUrl(
            postData.mainImage,
            strapi
          );

          const data = {
            ...postData,
            mainImage: uploadedImage.id || null,
          };

          await saveArticle(data, strapi);
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
