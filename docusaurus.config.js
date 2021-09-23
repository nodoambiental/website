/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Centro Educativo",
    tagline: "Formación Institucional",
    url: "https://edu.nodoambiental.org",
    baseUrl: "/",
    i18n: { defaultLocale: "es", locales: ["en", "es"] },
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "nodoambiental", // Usually your GitHub org/user name.
    projectName: "workshop", // Usually your repo name.
    plugins: [
        "@docusaurus/plugin-ideal-image",
        [
            "docusaurus-plugin-typedoc",
            {
                tsconfig: "tsconfig.json",
                entryPointStrategy: "expand",
                plugin: [
                    "typedoc-plugin-markdown",
                    "typedoc-plugin-mdn-links",
                    "typedoc-plugin-missing-exports",
                    "typedoc-umlclass",
                ],
                entryPoints: ["./src"],
                name: "NA Edu",
                gitRemote: "origin",
                includeVersion: true,
                excludeExternals: true,
                watch: "process.env.TYPEDOC_WATCH",
                umlClassDiagram: {
                    type: "detailed",
                    location: "local",
                    format: "svg",
                    createPlantUmlFiles: true,
                },
                out: "code",
                sidebar: {
                    categoryLabel: "",
                    position: 0,
                    fullNames: false,
                },
            },
        ],
    ],
    presets: [
        [
            "@docusaurus/preset-classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // ? Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/main/website/",
                },
                blog: {
                    showReadingTime: true,
                    // ? Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/main/website/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            navbar: {
                title: "EH Edu",
                logo: {
                    alt: "Environmental Hub Edu",
                    src: "img/logos/logo_square.svg",
                },
                items: [
                    { type: "localeDropdown", position: "left" },
                    {
                        to: "/docs/intro",
                        position: "left",
                        label: "Start!",
                    },
                    {
                        type: "dropdown",
                        to: "/courses",
                        label: "Courses",
                        items: [
                            {
                                label: "Foundations",
                                to: "/courses/foundation",
                            },
                            {
                                label: "Common",
                                to: "/courses/common",
                            },
                            {
                                label: "Editorial",
                                to: "/courses/editorial",
                            },
                            {
                                label: "Administration",
                                to: "/courses/admin",
                            },
                            {
                                label: "IT",
                                to: "/courses/it",
                            },
                            {
                                label: "PR",
                                to: "/courses/pr",
                            },
                        ],
                        position: "left",
                    },
                    {
                        type: "dropdown",
                        label: "More",
                        items: [
                            {
                                label: "Email Us About This",
                                href: "mailto:edu@environmentalhub.org",
                            },
                            {
                                label: "EH Edu Blog",
                                to: "/blog",
                            },
                            {
                                label: "About EH Edu",
                                to: "/about",
                            },
                            {
                                label: "Environmental Hub Blog",
                                href: "http://blog.environmentalhub.org",
                            },
                            {
                                label: "About Environmental Hub",
                                href: "https://environmentalhub.org/about",
                            },
                        ],
                        position: "left",
                    },
                    {
                        href: "https://github.com/nodoambiental/workshop",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Where to start",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        },
};
