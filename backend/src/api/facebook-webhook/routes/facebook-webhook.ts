export default {
  routes: [
    {
      method: "GET",
      path: "/facebook-webhook",
      handler: "facebook-webhook.verify",
      config: { auth: false },
    },
    {
      method: "POST",
      path: "/facebook-webhook",
      handler: "facebook-webhook.receive",
      config: { auth: false },
    },
  ],
};
