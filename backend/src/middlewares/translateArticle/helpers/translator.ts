import axios from "axios"

export async function translateText(text: string, locale: "ru" | "en") {
    const fullText = [];
    const textSplits = text.split("\n");

    for await (const textSplit of textSplits) {
        if (textSplit.trim() === "") {
            fullText.push(textSplit);
            continue
        }
        const url = `https://api.mymemory.translated.net/get?q=${textSplit}&langpair=hy|${locale}`
        const translation = await axios.get(url);
        fullText.push(translation.data.responseData.translatedText)
    }

    return fullText.join("\n");
}