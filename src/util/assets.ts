import * as Handy from "./handy";
import * as Types from "./util_types";
export const i18n_Assets = (original: string): string => {
    const tokenized = original.split(".");
    const lang = Handy.getLocale();
    if (lang) {
        const fileExtension = tokenized.splice(tokenized.length - 1, 1, lang);
        return tokenized.concat(fileExtension).join(".");
    }
    return original;
};

export const path: Types.PathStrings = {
    vector: {
        logo: {
            edu: {
                square_large: i18n_Assets(
                    "/static/img/logos/logo_square_edu_large.svg"
                ),
            },
        },
        image: {},
    },
    icon: {
        CC: {
            by: "/static/img/icons/CC/by.svg",
            cc: "/static/img/icons/CC/cc.svg",
            "nc-eu": "/static/img/icons/CC/nc-eu.svg",
            "nc-jp": "/static/img/icons/CC/nc-jp.svg",
            nc: "/static/img/icons/CC/nc.svg",
            nd: "/static/img/icons/CC/nd.svg",
            pd: "/static/img/icons/CC/pd.svg",
            remix: "/static/img/icons/CC/remix.svg",
            sa: "/static/img/icons/CC/sa.svg",
            sampling: "/static/img/icons/CC/sampling.svg",
            "sampling-plus": "/static/img/icons/CC/sampling.plus.svg",
            share: "/static/img/icons/CC/share.svg",
            zero: "/static/img/icons/CC/zero.svg",
        },
    },
};
