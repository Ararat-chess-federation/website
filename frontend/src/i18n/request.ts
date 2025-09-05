import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const requested = await locale;
  const localeName = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await import(`../../locales/${localeName}.json`);

  return {
    locale: localeName,
    messages: messages.default,
  };
});
