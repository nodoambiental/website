import { PluginConfig } from "@docusaurus/types";

declare module "@src/config" {
    export class Docusaurus {
        public static readonly footer: Record<string, unknown>;
        public static readonly navbar: Record<string, unknown>;
        public static readonly plugins: PluginConfig[];
    }
}
