import { metadata } from "../constants/metadata";
import { siteTitle } from "../constants/titles";
import { TLang } from "../models/interfaces/getData";
import { TPages } from "../models/interfaces/params";

export default function generatePageMetadata({ type, locale }: { type: TPages, locale: TLang }) {
    return {
        title: `${metadata[type][locale].title} | ${siteTitle[locale]}`,
        description: metadata[type][locale].description,
        metadataBase: new URL(`${process.env.PROTOCOL}://${process.env.HOST_NAME}/${locale}`),
    }
}