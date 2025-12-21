import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*..*).*)"],
};
// need to change from everywhere inside the files `` await getTranslations() `` to const t = useTranslations();