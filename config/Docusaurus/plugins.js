module.exports = [
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
            name: "Nodo Ambiental",
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
];
