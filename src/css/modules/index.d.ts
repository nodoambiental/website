type CSSModule = {
    readonly [key: string]: string;
};

declare module "*!css-module" {
    const content: CSSModule;
    export default content;
}

declare module "@src/styles" {
    export interface Module {
        readonly home: CSSModule;
        readonly index: CSSModule;
    }
}
