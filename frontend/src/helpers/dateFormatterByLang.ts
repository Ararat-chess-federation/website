import { TLang } from "../models/interfaces/getData";

const langs = {
  hy: "hy-AM",
  ru: "ru-ru",
  en: "en-en"
}

export const dateFormatterByLang = (data: string, lang: TLang = "hy") => {
  const date = new Date(data);

  const formatted = date.toLocaleDateString(langs[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatted;
};
