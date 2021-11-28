import { translate } from "@docusaurus/Translate";
//import useThemeContext from "@theme/hooks/useThemeContext";

export const getLocale = (): string => {
    return translate({
        id: "CurrentLocale",
        message: "en",
    });
};

/*

TODO Replace for ThemedImages or something alike

const { isDarkTheme } = useThemeContext();

export const currentTheme = isDarkTheme ? "dark" : "light";

export const contextualize = (
    darkElement: unknown,
    lightElement: unknown,
    inverse?: boolean
): typeof darkElement | typeof lightElement => {
    if (!inverse || typeof inverse === "undefined") {
        return isDarkTheme ? darkElement : lightElement;
    }
    return isDarkTheme ? lightElement : darkElement;
};

*/
