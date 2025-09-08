import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = hasLocale(routing.locales, requestLocale)
    ? requestLocale
    : routing.defaultLocale;

  const messagesModule = await import(`../messages/${locale}.json`);
  const messages = messagesModule?.default ?? {};

  return {
    locale,
    messages,
  };
});
