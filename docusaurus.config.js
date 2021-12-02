// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const AllConfig = require("./config");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Fundación Nodo Ambiental",
    tagline: "Personería Jurídica 2/2020 D.P.J.",
    url: "https://nodoambiental.org",
    baseUrl: "/",
    i18n: { defaultLocale: "es", locales: ["en", "es"] },
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logos/favicon.svg",
    organizationName: "nodoambiental", // Usually your GitHub org/user name.
    projectName: "website", // Usually your repo name.
    deploymentBranch: "prod",
    plugins: AllConfig.Docusaurus.plugins,
    presets: [
        [
            "@docusaurus/preset-classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // ? Please change this to your repo.
                    editUrl:
                        "https://github.com/nodoambiental/website/edit/main/website/",
                },
                blog: {
                    showReadingTime: true,
                    // ? Please change this to your repo.
                    editUrl:
                        "https://github.com/nodoambiental/docusaurus/edit/main/website/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: AllConfig.Docusaurus.navbar,
            footer: AllConfig.Docusaurus.footer,
            hideableSidebar: true,
            colorMode: {
                defaultMode: "light",
                disableSwitch: false,
                respectPrefersColorScheme: true,
                switchConfig: {
                    darkIcon: "🌙",
                    lightIcon: "\u2600",
                    // React inline style object
                    // see https://reactjs.org/docs/dom-elements.html#style
                    darkIconStyle: {
                        marginLeft: "2px",
                    },
                    lightIconStyle: {
                        marginLeft: "1px",
                    },
                },
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
