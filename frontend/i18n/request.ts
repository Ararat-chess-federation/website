// import { getRequestConfig } from "next-intl/server";
// import { hasLocale } from "next-intl";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ locale }) => {
//   const requested = await locale;
//   const localeName = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;

//   const messages = await import(`../locales/${localeName}.json`);

//   return {
//     locale: localeName,
//     messages: messages.default,
//   };
// });

// import { hasLocale } from "next-intl";
// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Typically corresponds to the `[locale]` segment
//   const requested = await requestLocale;
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;

//   return {
//     locale,
//     messages: (await import(`../src/messages/${locale}.json`)).default,
//   };
// });

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale, locale }) => {
  // requestLocale can be a Promise in Next 15; await it
  const reqLocale = await requestLocale;
  const requested = reqLocale ?? locale ?? routing.defaultLocale;

  if (!routing.locales.includes(requested)) {
    // optional: return default or 404
    // notFound();
    return {
      locale: routing.defaultLocale,
      requestLocale: routing.defaultLocale,
    };
  }

  return {
    locale: requested,
    requestLocale: requested,
  };
});
