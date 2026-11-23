import type { Core } from "@strapi/strapi";

const SERVICE = "api::facebook-webhook.facebook-webhook";

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async verify(ctx) {
    const params = new URLSearchParams(ctx.querystring);
    const verifyToken = process.env.FB_WEBHOOK_VERIFY_TOKEN;

    if (
      verifyToken &&
      params.get("hub.mode") === "subscribe" &&
      params.get("hub.verify_token") === verifyToken
    ) {
      ctx.type = "text/plain";
      ctx.body = params.get("hub.challenge") ?? "";
      return;
    }

    ctx.status = 403;
  },

  async receive(ctx) {
    const service = strapi.service(SERVICE);
    const rawBody = ctx.request.body?.[Symbol.for("unparsedBody")];

    if (!service.isValidSignature(rawBody, ctx.get("x-hub-signature-256"))) {
      ctx.status = 401;
      return;
    }

    ctx.status = 200;
    ctx.body = "EVENT_RECEIVED";

    service.handlePayload(ctx.request.body).catch((error) => {
      console.error("Facebook webhook failed:", error);
    });
  },
});
