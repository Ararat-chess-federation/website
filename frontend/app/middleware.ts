// import createMiddleware from "next-intl/middleware";
// import { routing } from "../i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   // '/((?!api|trpc|_next|_vercel|.*\\..*).*)'

//   matcher: ["/", "/(hy|en|ru)/:path*"],

//   //   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// };

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "../i18n/routing";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // if path starts with a locale prefix like /en or /ru, extract it
  const [, maybeLocale] = pathname.split("/");

  const locale = routing.locales.includes(maybeLocale)
    ? maybeLocale
    : routing.defaultLocale;

  // Create a response and set the header so next-intl server APIs will see it
  const res = NextResponse.next();

  // X-NEXT-INTL-LOCALE is read by next-intl server helpers
  res.headers.set("x-next-intl-locale", locale);

  // If you want to force a locale prefix for all routes:
  // if (!routing.locales.includes(maybeLocale)) {
  //   url.pathname = `/${locale}${pathname}`;
  //   return NextResponse.redirect(url);
  // }

  return res;
}

// Configure which paths the middleware should run on.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
