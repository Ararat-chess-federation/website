import {
  getBufferFromUrl,
  getDataFromRSS,
  getImgFileName,
  getLatestArticle,
  getPostData,
  saveArticle,
  saveTempFile,
  uploadImageFromUrl,
} from "./helpers/importArticles";
import checkUpToDate from "./helpers/isUpToDate";

export default {
  importArticlesFromFB: {
    task: async () => {
      try {
        const [data, latestArticle] = await Promise.all([
          getDataFromRSS(),
          getLatestArticle(),
        ]);

        for (const post of data) {
          const isUpToDate = checkUpToDate(
            new Date(latestArticle?.publishDate),
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

          if (postData.mainImage) {
            const { buffer, ext } = await getBufferFromUrl(postData.mainImage);
            const tmpPath = await saveTempFile({ buffer, ext });
            const imageName = getImgFileName(postData.mainImage);
            const uploadedImage = await uploadImageFromUrl(tmpPath, ext, imageName);

            postData.mainImage = uploadedImage.id || null;
          }

          await saveArticle(postData);
          console.log("Added new postData", {
            title: postData.title,
            pubDate: postData.publishDate,
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
