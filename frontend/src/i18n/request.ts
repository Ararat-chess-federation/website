import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Typically corresponds to the `[locale]` segment
//   const requested = await requestLocale;
//   console.log(routing.locales, requested);
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;

//   return {
//     locale,
//     messages: (await import(`../../public/locales/${locale}.json`)).default,
//   };
// });

export default getRequestConfig(
  async ({ locale = "hy" }: { locale?: string }) => {
    return {
      locale,
      messages: (await import(`../../public/locales/${locale}.json`)).default,
    };
  }
);
