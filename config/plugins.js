module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-v4-provider-email-postmark",
      providerOptions: {
        apiKey: env("POSTMARK_API_KEY"),
      },
      settings: {
        defaultFrom: env("POSTMARK_FROM"),
        defaultReplyTo: env("POSTMARK_REPLY_TO")
      },
    },
  },
});
