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

const CCIconPath = {
    by: "/img/icons/CC/by.svg",
    cc: "/img/icons/CC/cc.svg",
    "nc-eu": "/img/icons/CC/nc-eu.svg",
    "nc-jp": "/img/icons/CC/nc-jp.svg",
    nc: "/img/icons/CC/nc.svg",
    nd: "/img/icons/CC/nd.svg",
    pd: "/img/icons/CC/pd.svg",
    remix: "/img/icons/CC/remix.svg",
    sa: "/img/icons/CC/sa.svg",
    sampling: "/img/icons/CC/sampling.svg",
    "sampling-plus": "/img/icons/CC/sampling.plus.svg",
    share: "/img/icons/CC/share.svg",
    zero: "/img/icons/CC/zero.svg",
};

export const path: Types.PathStrings = {
    vector: {
        logo: {
            edu: {
                square_large: i18n_Assets(
                    "/img/logos/logo_square_edu_large.svg"
                ),
            },
        },
        image: {},
    },
    icon: {
        CC: CCIconPath,
    },
};
