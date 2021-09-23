import { translate } from "@docusaurus/Translate";

export const getLocale = (): string => {
    return translate({
        id: "CurrentLocale",
        message: "en",
    });
};
