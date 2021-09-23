import * as Types from "./util_types";
declare module "@workshop/util" {
    export class Assets {
        i18n_Assets: (original: string) => string;
        path: Types.PathStrings;
    }
    export class Handy {
        getLocale: () => string;
    }
}
