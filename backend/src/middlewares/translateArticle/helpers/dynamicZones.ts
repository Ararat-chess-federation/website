import { ITranslatedDynamicZonesProps } from "../models";
import { translateText } from "./translator";

// TODO: the type is  ITranslatedDynamicZonesProps, fails in production
export async function getTranslatedDynamicZones({ dynamicZones, locale }: any) {
    const translatedDynamicZones = [];

    for (const dynamicZone of dynamicZones) {
        const { __component } = dynamicZone;

        if (__component !== "text.paragraph") {
            translatedDynamicZones.push({
                __component,
                ...dynamicZone,
            });

            continue;
        }
        // TODO: maybe improve, we import another helper here
        const translatedParagraph = await translateText(dynamicZone.paragraph, locale);
        translatedDynamicZones.push({
            __component: "text.paragraph",
            paragraph: translatedParagraph
        });
    }

    return translatedDynamicZones;
}