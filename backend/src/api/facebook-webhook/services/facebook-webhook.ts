import crypto from "crypto";
import {
  getPostDataFromGraph,
  importArticle,
} from "../../../../config/cron/helpers/importArticles";

interface IGraphPost {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
  is_published?: boolean;
}

interface IFeedChange {
  field: string;
  value?: {
    item?: string;
    verb?: string;
    post_id?: string;
    published?: number;
  };
}

interface IWebhookPayload {
  object?: string;
  entry?: { id: string; changes?: IFeedChange[] }[];
}

const POST_FIELDS = "id,message,created_time,full_picture,permalink_url,is_published";
const inProgress = new Set<string>();

async function getGraphPost(postId: string): Promise<IGraphPost> {
  const version = process.env.FB_GRAPH_VERSION || "v26.0";
  const res = await fetch(
    `https://graph.facebook.com/${version}/${postId}?fields=${POST_FIELDS}`,
    { headers: { Authorization: `Bearer ${process.env.FB_PAGE_ACCESS_TOKEN}` } }
  );
  const data = (await res.json().catch(() => ({}))) as IGraphPost & {
    error?: { message?: string };
  };

  if (!res.ok || data.error) {
    throw new Error(data.error?.message ?? `Facebook API error: ${res.status}`);
  }

  return data;
}

function getPostIds(payload: IWebhookPayload) {
  const pageId = process.env.FB_PAGE_ID;
  const postIds = new Set<string>();

  if (payload?.object !== "page") {
    return postIds;
  }

  for (const entry of payload.entry ?? []) {
    if (pageId && entry.id !== pageId) {
      continue;
    }

    for (const { field, value } of entry.changes ?? []) {
      const isNewOrEdited = value?.verb === "add" || value?.verb === "edited";

      if (field === "feed" && isNewOrEdited && value.post_id && value.published !== 0) {
        postIds.add(value.post_id);
      }
    }
  }

  return postIds;
}

async function importPost(postId: string) {
  if (inProgress.has(postId)) {
    return;
  }

  inProgress.add(postId);

  try {
    const post = await getGraphPost(postId);

    if (post.is_published === false) {
      return;
    }

    const postData = getPostDataFromGraph(post);

    if (!postData) {
      return;
    }

    const result = await importArticle(postData);

    if (result === "created") {
      console.log("Added new post from Facebook webhook", {
        title: postData.title,
        pubDate: postData.date,
      });
    }
  } finally {
    inProgress.delete(postId);
  }
}

export default () => ({
  isValidSignature(rawBody: string | undefined, signature: string | undefined) {
    const appSecret = process.env.FB_APP_SECRET;

    if (!appSecret || !rawBody || !signature?.startsWith("sha256=")) {
      return false;
    }

    const expected = Buffer.from(
      crypto.createHmac("sha256", appSecret).update(rawBody).digest("hex")
    );
    const received = Buffer.from(signature.slice("sha256=".length));

    return expected.length === received.length && crypto.timingSafeEqual(expected, received);
  },

  async handlePayload(payload: IWebhookPayload) {
    for (const postId of getPostIds(payload)) {
      try {
        await importPost(postId);
      } catch (error) {
        console.error("Failed to import Facebook post:", postId, error);
      }
    }
  },
});
