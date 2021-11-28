import * as Types from "./util_types";
declare module "@src/util" {
    export interface Assets {
        i18n_Assets: (original: string) => string;
        path: Types.PathStrings;
    }
    export interface Handy {
        getLocale: () => string;
        // currentTheme: "dark" | "light";
        /*contextualize: (
            darkElement: unknown,
            lightElement: unknown,
            inverse?: boolean
        ) => typeof darkElement | typeof lightElement; */
    }
}
