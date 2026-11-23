import {
  getDataFromRSS,
  getLatestArticle,
  getPostData,
  importArticle,
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

          if (latestArticle && isUpToDate) {
            continue;
          }

          try {
            const postData = getPostData(post);

            if (!postData) {
              continue;
            }

            const result = await importArticle(postData);

            if (result === "created") {
              console.log("Added new postData", {
                title: postData.title,
                pubDate: postData.date,
              });
            }
          } catch (error) {
            console.error("Failed to import RSS post:", post.link?.[0], error);
          }
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
